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

    useEffect(() => {
        // Fonction pour gérer les changements de localStorage
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === "access_token") {
                const newToken = localStorage.getItem("access_token");
                setToken(newToken);
            }
        };

        // Écoute l'événement de changement de localStorage
        window.addEventListener("storage", handleStorageChange);

        // Nettoyage de l'écouteur lors du démontage
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    const isAuthenticated = token !== null;

    return (
        <AppAuthContext.Provider
            value={{
                isAuthenticated,
                token,
                setToken,
                userId,
            }}
        >
            {children}
        </AppAuthContext.Provider>
    );
};
