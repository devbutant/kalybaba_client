import createAxiosInstance from "@/config/axios/axiosConfig";
import { AdDto } from "@/types";

export const fetchAdList = async (token: string | null): Promise<AdDto[]> => {
    const axiosInstance = createAxiosInstance(token);
    const { data: adList } = await axiosInstance.get(`/ads`);

    return adList;
};
