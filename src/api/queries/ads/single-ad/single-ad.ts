import { fetchSingleAd } from "@/api/services/ads/single-ad";
import { useAppAuth } from "@/hooks/contexts-hooks/auth/app";
import { AdDto } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useSingleAdQuery = (adId: string) => {
    const { token } = useAppAuth();

    return useQuery<AdDto>({
        queryKey: ["ads", adId, token],
        queryFn: () => fetchSingleAd(token, adId),
        enabled: !!token,
    });
};
