import axios from "axios";
import { AdDto } from "../../../types";
import { API } from "../../../utils/environment";

export const fetchSingleAd = async (
    token: string | null,
    singleAdId: string | null
): Promise<AdDto> => {
    const { data: singleAd } = await axios.get(`${API.URL}/ads/${singleAdId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    console.log("singleAd", singleAd);

    return singleAd;
};
