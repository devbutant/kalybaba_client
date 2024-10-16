import createAxiosInstance from "@/config/axios/axiosConfig";
import { AdDto, CreateAdDto } from "@/types";

export const createAd = async (newAd: CreateAdDto) => {
    const axiosInstance = createAxiosInstance();
    const { data: ad } = await axiosInstance.post<AdDto>("/ads", newAd);

    return ad;
};
