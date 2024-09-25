import { SocketAuthContextType } from "@/types/contexts";
import { createContext, FC, ReactNode, useState } from "react";
import { Socket } from "socket.io-client";

export const SocketAuthContext = createContext<
    SocketAuthContextType | undefined
>(undefined);

export const SocketAuthProvider: FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [isSocketAuthenticated, setIsSocketAuthenticated] =
        useState<boolean>(false);
    return (
        <SocketAuthContext.Provider
            value={{
                socket,
                setSocket,
                isSocketAuthenticated,
                setIsSocketAuthenticated,
            }}
        >
            {children}
        </SocketAuthContext.Provider>
    );
};
