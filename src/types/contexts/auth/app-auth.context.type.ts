export interface AppAuthContextType {
    token: string | null;
    setToken: (token: string | null) => void;
    user: User | null;
    setUser: (user: User | null) => void;
}

export type User = {
    isAuthenticated: boolean;
    id: string | null;
    roles: string[] | null;
};
