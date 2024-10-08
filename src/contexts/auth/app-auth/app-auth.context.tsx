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

    const handleTokenUpdate = (newToken: string) => {
        if (newToken) {
            localStorage.setItem("access_token", newToken);
            // TODO: Ici faire une requête vers le serveur pour valider le token
            // /token-validate

            const decodedToken = jwtDecode<DecodedToken>(newToken);
            console.log(decodedToken);
            setUserId(decodedToken.id);
        } else {
            localStorage.removeItem("access_token");
            setUserId(null);
        }
    };

    useEffect(() => {
        if (!token) {
            setUserId(null);
            return;
        }
        handleTokenUpdate(token);
    }, [token]);

    useEffect(() => {
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === "access_token") {
                const newToken = localStorage.getItem("access_token");
                // TODO: Mais ici aussi j'ai besoin d'une requête vers le serveur pour valider le token (comme dans handleTokenUpdate) ??
                console.log(
                    "Changement détecté dans localStorage (autre onglet):",
                    newToken
                );
                setToken(newToken);
            }
        };

        // Vérifie si un token est déjà présent au montage initial
        const checkInitialToken = () => {
            const localStorageToken = localStorage.getItem("access_token");
            if (localStorageToken) {
                setToken(localStorageToken);
            }
        };

        checkInitialToken();

        // Ajoute l'écouteur pour détecter les changements de localStorage
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

// TODO
// TODO
// TODO
// TODO

// S'en inspirer pour mettre un userId, le rle etc pour les guards

// import { createContext, useContext, useState, FC, useEffect } from "react";
// import { getUserRoleFromToken } from "@/utils/getUserRoleFromToken"; // L'import de la fonction de décodage

// type User = {
//   isAuthenticated: boolean;
//   role: string | null;
// };

// const AuthContext = createContext<User | null>(null);

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [user, setUser] = useState<User>({ isAuthenticated: false, role: null });

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       const role = getUserRoleFromToken(token);
//       setUser({ isAuthenticated: true, role });
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={user}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
