import { fetchFriendList } from "@/api/services/friends";
import { UserDto } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useFriendListQuery = () => {
    return useQuery<UserDto[]>({
        queryKey: ["friends"],
        queryFn: fetchFriendList,
    });
};
