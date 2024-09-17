import axios from "axios";
import { AdDto } from "../../../types";
import { API } from "../../../utils/environment";

export const fetchAdList = async (token: string | null): Promise<AdDto[]> => {
    const { data: adList } = await axios.get(`${API.URL}/ads`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: "GET",
        withCredentials: true,
    });

    return adList;
};
