import { useSocketAuth } from "../contexts-hooks/auth/socket";
import { useChat } from "../contexts-hooks/chat";

export const useMessages = () => {
    const { socket } = useSocketAuth();
    const { setMessages } = useChat();

    const listenToMessages = () => {
        if (socket) {
            socket.on("message", (id: string, userId: string, data: string) => {
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

    return { sendMessage, listenToMessages, stopListeningToMessages };
};
