import { useQuery } from "@tanstack/react-query";
import { UserDto } from "../../types/dtos";
import { useAppAuth } from "../contexts-hooks/auth/app";

import { fetchFriendList } from "../../services/friends/fetch-friends.service";

export const useFriendList = () => {
    const { token } = useAppAuth();

    return useQuery<UserDto[]>({
        queryKey: ["users", token], // Ajout du token comme dépendance de la clé (?)
        queryFn: () => fetchFriendList(token), // Passez le token à fetchFriendList
        enabled: !!token,
    });
};
