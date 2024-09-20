import createAxiosInstance from "../../../../config/axios/axiosConfig";
import { AdDto, CreateAdDto } from "../../../../types";

export const createAd = async (newAd: CreateAdDto, token: string | null) => {
    const axiosInstance = createAxiosInstance(token);
    const { data: ad } = await axiosInstance.post<AdDto>("/ads", newAd);

    return ad;
};
