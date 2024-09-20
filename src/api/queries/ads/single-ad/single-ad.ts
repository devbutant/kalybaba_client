import { useQuery } from "@tanstack/react-query";
import { useAppAuth } from "../../../../hooks/contexts-hooks/auth/app";
import { AdDto } from "../../../../types";
import { fetchSingleAd } from "../../../services/single-ad";

export const useSingleAdQuery = (adId: string) => {
    const { token } = useAppAuth();

    return useQuery<AdDto>({
        queryKey: ["ads", adId, token], // Ajout du token comme dépendance de la clé (?)
        queryFn: () => fetchSingleAd(token, adId),
        enabled: !!token,
    });
};
