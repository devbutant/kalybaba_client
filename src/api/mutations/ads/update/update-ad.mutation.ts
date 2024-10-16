import { editAd } from "@/api/services/ads/edit/edit-ad.service";
import { EditAdFormValues } from "@/types/dtos";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useUpdateAdMutation = () => {

    const navigate = useNavigate();

    interface EditAdResponse {
        title: string;
        description: string;
    }

    return useMutation<EditAdResponse, Error, EditAdFormValues>({
        mutationFn: (editedAd: EditAdFormValues) => editAd(editedAd),
        onSuccess: () => {
            navigate(-1);
        },
        onError: (error) => {
            console.error("Erreur de connexion :", error);
        },
    });
};
