import createAxiosInstance from "@/config/axios/axiosConfig";
import { AdDto } from "@/types";

export const fetchSingleAd = async (
    singleAdId: string | null
): Promise<AdDto> => {
    const axiosInstance = createAxiosInstance();
    const { data: singleAd } = await axiosInstance.get(`/ads/${singleAdId}`);

    return singleAd;
};
