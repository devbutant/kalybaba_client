import { useAppAuth } from "@/hooks/contexts-hooks/auth/app";
import { useMutation } from "@tanstack/react-query";
import { EditAdFormValues } from "../../../../types/dtos";
import { editAd } from "../../../services/ads/edit/edit-ad.service";

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
