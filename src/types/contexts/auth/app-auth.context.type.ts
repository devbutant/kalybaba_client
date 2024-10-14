export interface AppAuthContextType {
    token: string | null;
    setToken: (token: string | null) => void;
    user: User | null;
}

export type User = {
    isAuthenticated: boolean;
    userId: string | null;
    roles: [] | null;
};
