import { updateUserConnectionStatus } from "../../../api/services/login";
import { useAppAuth } from "../../contexts-hooks/auth/app";
import { useMessages } from "../../messages";
import { useSocket } from "../../socket";

const useLogout = () => {
    const { setToken, token } = useAppAuth();
    const { disconnectSocket } = useSocket();
    const { stopListeningToMessages } = useMessages();

    const handleLogout = async (): Promise<void> => {
        if (token) {
            try {
                console.log("Logging out...");
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
