import { useMutation } from "@tanstack/react-query";
import { useAppAuth } from "../../../../hooks/contexts-hooks/auth/app";
import { AdDto, CreateAdDto } from "../../../../types/dtos";
import { createNewAd } from "../../../services/ads/create";

export const useCreateAdMutation = () => {
    const { token } = useAppAuth();

    return useMutation<AdDto, Error, CreateAdDto>({
        mutationFn: (newAd: CreateAdDto) => createNewAd(newAd, token),
        onSuccess: (data) => {
            console.log("Annonce déposée avec succès :", data);
        },
        onError: (error) => {
            console.error("Erreur de connexion :", error);
        },
    });
};
