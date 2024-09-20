import createAxiosInstance from "../../../../config/axios/axiosConfig";
import { AdDto, CreateAdDto } from "../../../../types";

export const createNewAd = async (newAd: CreateAdDto, token: string | null) => {
    const axiosInstance = createAxiosInstance(token);
    console.log(newAd);

    const { data: ad } = await axiosInstance.post<AdDto>("/ads", newAd);
    return ad;
};
