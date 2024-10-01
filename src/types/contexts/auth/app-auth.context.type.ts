export interface AppAuthContextType {
    isAuthenticated: boolean;
    token: string | null;
    setToken: (token: string | null) => void;
    userId: string | null;
}
