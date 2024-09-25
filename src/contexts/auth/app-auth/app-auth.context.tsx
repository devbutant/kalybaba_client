import { DecodedToken } from "@/types";
import { AppAuthContextType } from "@/types/contexts";
import { jwtDecode } from "jwt-decode";
import { createContext, FC, ReactNode, useEffect, useState } from "react";

export const AppAuthContext = createContext<AppAuthContextType | undefined>(
    undefined
);

export const AppAuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [token, setToken] = useState<string | null>(
        localStorage.getItem("access_token")
    );
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        if (token) {
            localStorage.setItem("access_token", token);
            const decodedToken = jwtDecode<DecodedToken>(token);
            setUserId(decodedToken.id);
        } else {
            localStorage.removeItem("access_token");
        }
    }, [token]);

    const isAuthenticated = token !== null;

    // Voir si c'est utilisé ça
    const logout = () => {
        setToken(null);
    };

    return (
        <AppAuthContext.Provider
            value={{
                isAuthenticated,
                token,
                setToken,
                logout,
                userId,
            }}
        >
            {children}
        </AppAuthContext.Provider>
    );
};
