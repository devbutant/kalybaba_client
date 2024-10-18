import { useLogoutMutation } from "@/api/mutations/auth/logout/logout.mutation";
import { useMessages } from "@/hooks/messages";
import { useSocket } from "@/hooks/socket";

const useLogout = () => {
    const { disconnectSocket } = useSocket();
    const { stopListeningToMessages } = useMessages();

    const authenticationMutation = useLogoutMutation();

    const handleLogout = async (): Promise<void> => {
        try {
            await authenticationMutation.mutateAsync();
            disconnectSocket();
            stopListeningToMessages();
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    return { handleLogout };
};

useLogout.displayName = "useLogout";

export { useLogout };
