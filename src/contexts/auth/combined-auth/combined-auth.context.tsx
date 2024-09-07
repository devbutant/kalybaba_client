import React, { createContext, ReactNode, useContext } from "react";
import {
    AppAuthContext,
    AppAuthProvider,
    AuthContextType,
} from "../app-auth/app-auth.context";
import {
    SocketAuthContext,
    SocketAuthContextType,
    SocketAuthProvider,
} from "../socket-auth/socket-auth.context";

interface CombinedAuthContextType {
    socketAuth: SocketAuthContextType;
    appAuth: AuthContextType;
}

export const CombinedAuthContext = createContext<
    CombinedAuthContextType | undefined
>(undefined);

export const CombinedAuthProvider: React.FC<{ children: ReactNode }> = ({
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

const CombinedAuthContextWrapper: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const socketAuth = useContext(SocketAuthContext);
    const appAuth = useContext(AppAuthContext);

    if (!socketAuth || !appAuth) {
        throw new Error(
            "CombinedAuthContextWrapper must be used within both SocketAuthProvider and AppAuthProvider"
        );
    }

    return (
        <CombinedAuthContext.Provider value={{ socketAuth, appAuth }}>
            {children}
        </CombinedAuthContext.Provider>
    );
};
