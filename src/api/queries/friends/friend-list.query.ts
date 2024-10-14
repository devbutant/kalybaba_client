import { fetchFriendList } from "@/api/services/friends";
import { UserDto } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useFriendListQuery = () => {
    return useQuery<UserDto[]>({
        queryKey: ["users"], // Ajout du token comme dépendance de la clé (?)
        queryFn: () => fetchFriendList(), // Passez le token à fetchFriendList
    });
};
