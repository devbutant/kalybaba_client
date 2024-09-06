// AuthContext.tsx
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
    // Ajoute d'autres propriétés si nécessaire
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
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
        <AuthContext.Provider
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
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
