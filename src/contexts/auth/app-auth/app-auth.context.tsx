import { DecodedToken } from "@/types";
import { AppAuthContextType, User } from "@/types/contexts";
import { jwtDecode } from "jwt-decode";
import { createContext, FC, ReactNode, useEffect, useState } from "react";

export const AppAuthContext = createContext<AppAuthContextType | undefined>(
    undefined
);

export const AppAuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(
        localStorage.getItem("access_token")
    );

    const handleTokenUpdate = (token: string | null) => {
        setToken(token);
        if (token) {
            localStorage.setItem("access_token", token);
        } else {
            localStorage.removeItem("access_token");
        }
    };

    useEffect(() => {
        if (!token) {
            setUser(null);
            return;
        }

        const decodedToken = jwtDecode<DecodedToken>(token);

        setUser({
            isAuthenticated: true,
            token,
            userId: decodedToken.id,
            role: decodedToken.role,
        });

        handleTokenUpdate(token);
    }, [token]);

    return (
        <AppAuthContext.Provider
            value={{
                token,
                setToken,
                user,
            }}
        >
            {children}
        </AppAuthContext.Provider>
    );
};
