import { CombinedAuthContextType } from "@/types/contexts";
import { createContext, FC, ReactNode, useContext } from "react";
import { AppAuthProvider } from "../app-auth";
import {
    SocketAuthContext,
    SocketAuthProvider,
} from "../socket-auth/socket-auth.context";

export const CombinedAuthContext = createContext<
    CombinedAuthContextType | undefined
>(undefined);

export const CombinedAuthProvider: FC<{ children: ReactNode }> = ({
    children,
}) => {
    return (
        <AppAuthProvider>
            <SocketAuthProvider>
                <CombinedAuthContextWrapper>
                    {children}
                </CombinedAuthContextWrapper>
            </SocketAuthProvider>
        </AppAuthProvider>
    );
};

const CombinedAuthContextWrapper: FC<{ children: ReactNode }> = ({
    children,
}) => {
    const socketAuth = useContext(SocketAuthContext);

    if (!socketAuth) {
        throw new Error(
            "CombinedAuthContextWrapper must be used within both SocketAuthProvider and AppAuthProvider"
        );
    }

    return (
        <CombinedAuthContext.Provider value={{ socketAuth }}>
            {children}
        </CombinedAuthContext.Provider>
    );
};
