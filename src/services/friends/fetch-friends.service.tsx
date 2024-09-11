import axios from "axios";
import { UserDto } from "../../types/dtos";
import { API } from "../../utils/environment/variables";

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
