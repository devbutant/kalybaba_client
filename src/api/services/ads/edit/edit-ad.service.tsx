import createAxiosInstance from "@/config/axios/axiosConfig";
import { EditAdFormValues } from "@/types";

interface EditAdResponse {
    title: string;
    description: string;
}

export const editAd = async (
    editedAd: EditAdFormValues
): Promise<EditAdResponse> => {
    const axiosInstance = createAxiosInstance();
    const response = await axiosInstance.patch(`/ads/${editedAd.id}`, editedAd);

    return response.data;
};
