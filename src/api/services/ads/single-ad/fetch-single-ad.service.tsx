import createAxiosInstance from "../../../../config/axios/axiosConfig";
import { AdDto } from "../../../../types";

export const fetchSingleAd = async (
    token: string | null,
    singleAdId: string | null
): Promise<AdDto> => {
    const axiosInstance = createAxiosInstance(token);
    const { data: singleAd } = await axiosInstance.get(`/ads/${singleAdId}`);

    return singleAd;
};
