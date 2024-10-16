import { deleteAd } from "@/api/services/ads/delete";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

export const useDeleteAdMutation = () => {
    const { id: adId } = useParams<{ id: string }>();

    const navigate = useNavigate();

    if (!adId) {
        throw new Error("L'identifiant de l'annonce est introuvable");
    }

    return useMutation<string, Error, string>({
        mutationFn: () => deleteAd(adId),
        onSuccess: () => {
            navigate("/mes-annonces");
        },
        onError: (error) => {
            console.error("Erreur de connexion :", error);
        },
    });
};
