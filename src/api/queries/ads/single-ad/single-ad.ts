import { useAppAuth } from "@/hooks/contexts-hooks/auth/app";
import { useQuery } from "@tanstack/react-query";
import { AdDto } from "../../../../types";
import { fetchSingleAd } from "../../../services/ads/single-ad";

export const useSingleAdQuery = (adId: string) => {
    const { token } = useAppAuth();

    return useQuery<AdDto>({
        queryKey: ["ads", adId, token],
        queryFn: () => fetchSingleAd(token, adId),
        enabled: !!token,
    });
};
