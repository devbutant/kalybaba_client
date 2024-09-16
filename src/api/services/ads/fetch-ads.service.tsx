import axios from "axios";
import { AdDto } from "../../../types";
import { API } from "../../../utils/environment";

export const fetchAdList = async (): Promise<AdDto[]> => {
    const { data: adList } = await axios.get(`${API.URL}/ads`, {
        withCredentials: true,
    });

    return adList;
};
