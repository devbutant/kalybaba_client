import createAxiosInstance from "../../../config/axios/axiosConfig";
import { AdDto } from "../../../types";

export const fetchMyAdList = async (
    token: string | null,
    userId: string | null
): Promise<AdDto[]> => {
    const axiosInstance = createAxiosInstance(token);
    const { data: myAdList } = await axiosInstance.get(`/ads/user/${userId}`);

    return myAdList;
};
