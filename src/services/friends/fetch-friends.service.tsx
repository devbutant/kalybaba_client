import axios from "axios";
import { UserDto } from "../../types/dtos";

export const fetchFriendList = async (
    token: string | null
): Promise<UserDto[]> => {
    const { data: friendList } = await axios.get(
        `${import.meta.env.VITE_APP_API_URL}/friends/list`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return friendList;
};
