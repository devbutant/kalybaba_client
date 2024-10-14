import { updateUserConnectionStatus } from "@/api/services/login";
import { useMutation } from "@tanstack/react-query";

export const useUpdateStatusMutation = () => {
    return useMutation<void, Error, { connected: boolean }>({
        mutationFn: ({ connected }) => updateUserConnectionStatus(connected),
        onError: (error) => {
            console.error("Erreur de mise à jour du statut :", error);
        },
    });
};
