import createAxiosInstance from "../../../../config/axios/axiosConfig";
import { AdDto } from "../../../../types";

export const deleteAd = async (adId: string, token: string | null) => {
    const axiosInstance = createAxiosInstance(token);
    const deletedAd = await axiosInstance.delete<AdDto>(`/ads/${adId}`);
    console.log(deletedAd);

    const toto = "Suppression de l'annonce effectuée avec succès";

    return toto;
};
