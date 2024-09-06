import { jwtDecode } from "jwt-decode";
import React, { createContext, ReactNode, useEffect, useState } from "react";

interface AuthContextType {
    isAuthenticated: boolean;
    token: string | null;
    setToken: (token: string | null) => void;
    logout: () => void;
    userId: string | null;
    friends: string[];
    setFriends: React.Dispatch<React.SetStateAction<string[]>>;
}

interface TokenPayload {
    id: string;
    sub: string;
}

export const AppAuthContext = createContext<AuthContextType | undefined>(
    undefined
);

export const AppAuthProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [token, setToken] = useState<string | null>(
        localStorage.getItem("access_token")
    );
    const [userId, setUserId] = useState<string | null>(null);
    const [friends, setFriends] = useState<string[]>([]);

    useEffect(() => {
        if (token) {
            localStorage.setItem("access_token", token);
            const decodedToken = jwtDecode<TokenPayload>(token);
            setUserId(decodedToken.id);
        } else {
            localStorage.removeItem("access_token");
        }
    }, [token]);

    const isAuthenticated = token !== null;

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
                friends,
                setFriends,
            }}
        >
            {children}
        </AppAuthContext.Provider>
    );
};
