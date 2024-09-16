import { useMutation } from "@tanstack/react-query";
import { updateUserConnectionStatus } from "../../services/login";

export const useUpdateStatusMutation = () => {
    return useMutation<void, Error, { connected: boolean }>({
        mutationFn: ({ connected }) => updateUserConnectionStatus(connected),
        onError: (error) => {
            console.error("Erreur de mise à jour du statut :", error);
        },
    });
};
