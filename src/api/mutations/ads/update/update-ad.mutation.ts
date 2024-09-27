import { editAd } from "@/api/services/ads/edit/edit-ad.service";
import { useAppAuth } from "@/hooks/contexts-hooks/auth/app";
import { EditAdFormValues } from "@/types/dtos";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useUpdateAdMutation = () => {
    const { token } = useAppAuth();

    const navigate = useNavigate();

    interface EditAdResponse {
        title: string;
        description: string;
    }

    return useMutation<EditAdResponse, Error, EditAdFormValues>({
        mutationFn: (editedAd: EditAdFormValues) => editAd(token, editedAd),
        onSuccess: (data) => {
            navigate(-1);
            //TODO: toast
            console.log("Annonce modifiée avec succès :", data);
        },
        onError: (error) => {
            console.error("Erreur de connexion :", error);
        },
    });
};
