import React, { createContext, ReactNode, useState } from "react";
import { Socket } from "socket.io-client";

interface SocketAuthContextType {
    socket: Socket | null;
    setSocket: (socket: Socket | null) => void;
    isSocketAuthenticated: boolean;
    setIsSocketAuthenticated: (isSocketAuthenticated: boolean) => void;
}

export const SocketAuthContext = createContext<
    SocketAuthContextType | undefined
>(undefined);

export const SocketAuthProvider: React.FC<{ children: ReactNode }> = ({
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
