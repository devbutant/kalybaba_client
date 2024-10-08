import { updateUserConnectionStatus } from "@/api/services/login";
import { useAppAuth } from "@/hooks/contexts-hooks/auth/app";
import { useMessages } from "@/hooks/messages";
import { useSocket } from "@/hooks/socket";

const useLogout = () => {
    const { setToken, token } = useAppAuth();
    const { disconnectSocket } = useSocket();
    const { stopListeningToMessages } = useMessages();

    const handleLogout = async (): Promise<void> => {
        if (token) {
            try {
                await updateUserConnectionStatus(token, false);
            } catch (error) {
                console.error("Error during logout:", error);
            } finally {
                disconnectSocket();
                stopListeningToMessages();
                localStorage.removeItem("access_token");
                setToken(null);
            }
        }
    };

    return { handleLogout };
};

useLogout.displayName = "useLogout";

export { useLogout };
