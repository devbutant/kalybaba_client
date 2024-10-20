import { Socket } from "socket.io-client";

export interface AppAuthContextType {
    socket: Socket | null;
    setSocket: (socket: Socket | null) => void;
    isAppAuthenticated: boolean;
    setIsAppAuthenticated: (isAppAuthenticated: boolean) => void;
}
