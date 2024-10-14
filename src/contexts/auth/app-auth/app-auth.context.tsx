import { AppAuthContextType } from "@/types/contexts";
import { createContext, FC, ReactNode } from "react";

export const AppAuthContext = createContext<AppAuthContextType | undefined>(
    undefined
);

export const AppAuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <AppAuthContext.Provider value={{}}>{children}</AppAuthContext.Provider>
    );
};
