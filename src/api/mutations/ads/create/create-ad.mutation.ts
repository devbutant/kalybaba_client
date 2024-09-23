import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAppAuth } from "../../../../hooks/contexts-hooks/auth/app";
import { AdDto, CreateAdDto } from "../../../../types/dtos";
import { createAd } from "../../../services/ads/create";

export const useCreateAdMutation = () => {
    const { token } = useAppAuth();
    const navigate = useNavigate();

    return useMutation<AdDto, Error, CreateAdDto>({
        mutationFn: (newAd: CreateAdDto) => createAd(newAd, token),
        onSuccess: () => {
            navigate(-1);
        },
        onError: (error) => {
            console.error("Erreur de connexion :", error);
        },
    });
};
