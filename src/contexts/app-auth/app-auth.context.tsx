// AppAuthContext.tsx
import { jwtDecode } from "jwt-decode";
import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

interface AuthContextType {
    isAuthenticated: boolean;
    token: string | null;
    setToken: (token: string | null) => void;
    logout: () => void; // Ajout d'une méthode de déconnexion
    userId: string | null;
    friends: string[];
    setFriends: React.Dispatch<React.SetStateAction<string[]>>;
}

interface TokenPayload {
    id: string; // Ajoute toutes les propriétés dont tu as besoin
    sub: string; // Ajoute toutes les propriétés dont tu as besoin
    // Ajoute d'autres propriétés si nécessaire
}

const AppAuthContext = createContext<AuthContextType | undefined>(undefined);

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

export const useAppAuth = () => {
    const context = useContext(AppAuthContext);
    if (context === undefined) {
        throw new Error("useAppAuth must be used within an AppAuthProvider");
    }
    return context;
};
