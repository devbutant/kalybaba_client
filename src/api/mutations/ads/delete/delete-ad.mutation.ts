import { useAppAuth } from "@/hooks/contexts-hooks/auth/app";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { deleteAd } from "../../../services/ads/delete";

export const useDeleteAdMutation = () => {
    const { token } = useAppAuth();
    const { id: adId } = useParams<{ id: string }>();

    const navigate = useNavigate();

    if (!adId) {
        throw new Error("L'identifiant de l'annonce est introuvable");
    }

    return useMutation<string, Error, string>({
        mutationFn: () => deleteAd(adId, token),
        onSuccess: () => {
            navigate(-1);
        },
        onError: (error) => {
            console.error("Erreur de connexion :", error);
        },
    });
};
