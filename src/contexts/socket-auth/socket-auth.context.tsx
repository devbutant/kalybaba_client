import React, { createContext, ReactNode, useContext, useState } from "react";
import { Socket } from "socket.io-client";

interface SocketAuthContextType {
    socket: Socket | null;
    setSocket: (socket: Socket | null) => void;
    isSocketAuthenticated: boolean;
    setIsSocketAuthenticated: (isSocketAuthenticated: boolean) => void;
}

const SocketAuthContext = createContext<SocketAuthContextType | undefined>(
    undefined
);

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

export const useSocketAuth = () => {
    const context = useContext(SocketAuthContext);
    if (context === undefined) {
        throw new Error(
            "useSocketAuth must be used within an SocketAuthProvider"
        );
    }
    return context;
};
