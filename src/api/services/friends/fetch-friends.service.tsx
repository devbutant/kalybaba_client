import createAxiosInstance from "@/config/axios/axiosConfig";
import { UserDto } from "@/types";

export const fetchFriendList = async (): Promise<UserDto[]> => {
    const axiosInstance = createAxiosInstance();
    const { data: friendList } = await axiosInstance.get(`/friends`);

    return friendList;
};
