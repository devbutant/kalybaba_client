import { useCheckAuthQuery } from "@/api/queries/auth/check-auth/check-auth.query";
import { createContext, FC, ReactNode, useEffect, useState } from "react";

type AuthCheckResponseType = {
    isAuthenticated: boolean;
    user: {
        id: string;
        name: string;
        email: string;
        role: string;
        city: string;
        phone: string;
    };
};

type AuthContextProps = {
    authData: AuthCheckResponseType | null;
    isLoading: boolean;
    error: Error | null;
};

export const AppAuthContext = createContext<AuthContextProps | undefined>(
    undefined
);

export const AppAuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const { data, isLoading, error } = useCheckAuthQuery();
    const [authData, setAuthData] = useState(null);

    useEffect(() => {
        if (data) {
            setAuthData(data);
        }
    }, [data]);

    return (
        <AppAuthContext.Provider value={{ authData, isLoading, error }}>
            {children}
        </AppAuthContext.Provider>
    );
};
