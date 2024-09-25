import { updateUserConnectionStatus } from "@/api/services/login";
import { useMutation } from "@tanstack/react-query";

export const useUpdateStatusMutation = () => {
    return useMutation<void, Error, { token: string; connected: boolean }>({
        mutationFn: ({ token, connected }) =>
            updateUserConnectionStatus(token, connected),
        onError: (error) => {
            console.error("Erreur de mise à jour du statut :", error);
        },
    });
};
