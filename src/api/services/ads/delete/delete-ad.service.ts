import createAxiosInstance from "@/config/axios/axiosConfig";
import { AdDto } from "@/types";

export const deleteAd = async (adId: string, token: string | null) => {
    const axiosInstance = createAxiosInstance(token);
    await axiosInstance.delete<AdDto>(`/ads/${adId}`);

    const toto = "Suppression de l'annonce effectuée avec succès";

    return toto;
};
