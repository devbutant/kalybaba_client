import axios from "axios";
import { AdDto } from "../../../types";
import { API } from "../../../utils/environment";

export const fetchMyAdList = async (
    token: string | null,
    userId: string | null
): Promise<AdDto[]> => {
    const { data: myAdList } = await axios.get(
        `${API.URL}/ads/user/${userId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return myAdList;
};
