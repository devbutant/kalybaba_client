import createAxiosInstance from "@/config/axios/axiosConfig";
import { AdDto } from "@/types";

export const createAd = async (newAd: FormData) => {
    try {
        const axiosInstance = createAxiosInstance();
        const { data: ad } = await axiosInstance.post<AdDto>("/ads", newAd, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        return ad;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
