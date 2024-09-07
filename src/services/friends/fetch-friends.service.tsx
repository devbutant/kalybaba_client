import axios from "axios";
import { UserDto } from "../../types/dtos";

export const fetchFriendList = async (
    token: string | null
): Promise<UserDto[]> => {
    const { data: friendList } = await axios.get(
        "http://localhost:3001/friends/list",
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return friendList;
};
