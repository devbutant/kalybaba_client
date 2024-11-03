import { createAd } from "@/api/services/ads/create";
import { AdDto } from "@/types/dtos";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useCreateAdMutation = () => {
    const navigate = useNavigate();

    return useMutation<AdDto, Error, FormData>({
        mutationFn: (newAd: FormData) => createAd(newAd),
        onSuccess: () => {
            navigate("/mes-annonces");
        },
        onError: (error) => {
            console.error("Erreur de connexion :", error);
        },
    });
};
