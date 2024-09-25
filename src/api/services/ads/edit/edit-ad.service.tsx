import createAxiosInstance from "@/config/axios/axiosConfig";
import { EditAdFormValues } from "@/types";

interface EditAdResponse {
    title: string;
    description: string;
}

export const editAd = async (
    token: string | null,
    editedAd: EditAdFormValues
): Promise<EditAdResponse> => {
    if (!token) throw new Error("Token not found");

    const axiosInstance = createAxiosInstance(token);
    const response = await axiosInstance.patch(`/ads/${editedAd.id}`, editedAd);

    return response.data;
};
