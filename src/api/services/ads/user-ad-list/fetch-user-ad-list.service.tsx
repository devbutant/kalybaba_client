import createAxiosInstance from "@/config/axios/axiosConfig";
import { AdDto } from "@/types";

export const fetchUserAdList = async (
    userId: string | null
): Promise<AdDto[]> => {
    const axiosInstance = createAxiosInstance();
    const { data: myAdList } = await axiosInstance.get(`/ads/user/${userId}`);

    return myAdList;
};
