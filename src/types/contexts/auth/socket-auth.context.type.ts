import { Socket } from "socket.io-client";

export interface SocketAuthContextType {
    socket: Socket | null;
    setSocket: (socket: Socket | null) => void;
    isSocketAuthenticated: boolean;
    setIsSocketAuthenticated: (isSocketAuthenticated: boolean) => void;
}
