import createAxiosInstance from "../../../config/axios/axiosConfig";
import { UserDto } from "../../../types";

export const fetchFriendList = async (
    token: string | null
): Promise<UserDto[]> => {
    const axiosInstance = createAxiosInstance(token);
    const { data: friendList } = await axiosInstance.get(`/friends`);

    return friendList;
};
