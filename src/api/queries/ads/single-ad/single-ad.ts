import { fetchSingleAd } from "@/api/services/ads/single-ad";
import { AdDto } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useSingleAdQuery = (adId: string) => {
    return useQuery<AdDto>({
        queryKey: ["ads", adId],
        queryFn: () => fetchSingleAd(adId),
    });
};
