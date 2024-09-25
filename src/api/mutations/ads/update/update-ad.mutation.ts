import { editAd } from "@/api/services/ads/edit/edit-ad.service";
import { useAppAuth } from "@/hooks/contexts-hooks/auth/app";
import { EditAdFormValues } from "@/types/dtos";
import { useMutation } from "@tanstack/react-query";

export const useUpdateAdMutation = () => {
    const { token } = useAppAuth();

    interface EditAdResponse {
        title: string;
        description: string;
    }

    return useMutation<EditAdResponse, Error, EditAdFormValues>({
        mutationFn: (editedAd: EditAdFormValues) => editAd(token, editedAd),
        onSuccess: (data) => {
            //TODO: toast
            console.log("Annonce modifiée avec succès :", data);
        },
        onError: (error) => {
            console.error("Erreur de connexion :", error);
        },
    });
};
