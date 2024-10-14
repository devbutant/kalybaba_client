import { updateUserConnectionStatus } from "@/api/services/login";
import { useMessages } from "@/hooks/messages";
import { useSocket } from "@/hooks/socket";

const useLogout = () => {
    const { disconnectSocket } = useSocket();
    const { stopListeningToMessages } = useMessages();

    const handleLogout = async (): Promise<void> => {
        try {
            await updateUserConnectionStatus(false);
        } catch (error) {
            console.error("Error during logout:", error);
        } finally {
            disconnectSocket();
            stopListeningToMessages();
        }
    };

    return { handleLogout };
};

useLogout.displayName = "useLogout";

export { useLogout };
