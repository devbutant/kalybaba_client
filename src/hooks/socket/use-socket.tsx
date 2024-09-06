import { useCallback } from "react";
import io from "socket.io-client";
import { useAppAuth } from "../auth/app/use-app-auth";
import { useSocketAuth } from "../auth/socket/use-socket-auth";

export const useSocket = () => {
    const {
        isSocketAuthenticated,
        setIsSocketAuthenticated,
        setSocket,
        socket,
    } = useSocketAuth();
    const { token } = useAppAuth();

    const connectSocket = useCallback(() => {
        if (token && !socket) {
            const newSocket = io("http://localhost:3001");

            newSocket.on("connect", () => {
                console.log("Connected to server");
                newSocket.emit("authenticate", token);
            });

            newSocket.on("authenticated", () => {
                setIsSocketAuthenticated(true);
                console.log("User authenticated");
            });

            newSocket.on("authentication_error", () => {
                setIsSocketAuthenticated(false);
                console.log("Authentication failed");
            });

            setSocket(newSocket);
        }
    }, [token, socket, setIsSocketAuthenticated, setSocket]);

    const disconnectSocket = useCallback(() => {
        if (socket) {
            console.log("Disconnecting socket...");
            socket.disconnect();
            setSocket(null);
        }
    }, [socket]);

    return { socket, connectSocket, disconnectSocket, isSocketAuthenticated };
};
