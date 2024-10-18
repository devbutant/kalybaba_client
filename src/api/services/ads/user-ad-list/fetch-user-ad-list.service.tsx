import createAxiosInstance from "@/config/axios/axiosConfig";
import { AdDto } from "@/types";

export const fetchUserAdList = async (): Promise<AdDto[]> => {
    const axiosInstance = createAxiosInstance();
    const { data: myAdList } = await axiosInstance.get(`/ads/current-user`);

    return myAdList;
};
