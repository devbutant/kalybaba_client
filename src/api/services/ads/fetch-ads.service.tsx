import createAxiosInstance from "@/config/axios/axiosConfig";
import { AdDto } from "@/types";

export const fetchAdList = async (): Promise<AdDto[]> => {
    const axiosInstance = createAxiosInstance();
    const { data: adList } = await axiosInstance.get(`/ads`);

    return adList;
};
