import { createAd } from "@/api/services/ads/create";
import { AdDto, CreateAdDto } from "@/types/dtos";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useCreateAdMutation = () => {
    const navigate = useNavigate();

    return useMutation<AdDto, Error, CreateAdDto>({
        mutationFn: (newAd: CreateAdDto) => createAd(newAd),
        onSuccess: () => {
            navigate("/mes-annonces");
        },
        onError: (error) => {
            console.error("Erreur de connexion :", error);
        },
    });
};
