import { CombinedAuthContextType } from "@/types/contexts";
import { createContext, FC, ReactNode, useContext } from "react";
import { AppAuthContext, AppAuthProvider } from "../index";
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
