import { useState } from "react";
import { useSocketAuth } from "../../contexts/socket-auth/socket-auth.context";

export const useMessages = () => {
    const { socket } = useSocketAuth();
    const [messages, setMessages] = useState<
        Array<{ id: string; userId: string; data: string }>
    >([]);

    const listenToMessages = () => {
        if (socket) {
            socket.on("message", (id: string, userId: string, data: string) => {
                console.log("Received message:", id, userId, data);

                setMessages((prevMessages) => [
                    ...prevMessages,
                    { id, userId, data },
                ]);
            });
        }
    };

    const stopListeningToMessages = () => {
        if (socket) {
            socket.off("message");
        }
    };

    const sendMessage = (message: string, isAuthenticated: boolean) => {
        if (message.trim() && isAuthenticated && socket) {
            socket.emit("message", message);
        } else if (!isAuthenticated) {
            console.log("User not authenticated");
        }
    };

    return { messages, sendMessage, listenToMessages, stopListeningToMessages };
};
