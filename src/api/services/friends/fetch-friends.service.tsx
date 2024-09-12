import axios from "axios";
import { UserDto } from "../../../types";
import { API } from "../../../utils/environment";

export const fetchFriendList = async (
    token: string | null
): Promise<UserDto[]> => {
    const { data: friendList } = await axios.get(`${API.URL}/friends/list`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return friendList;
};
