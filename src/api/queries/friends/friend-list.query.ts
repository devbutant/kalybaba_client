import { useAppAuth } from "@/hooks/contexts-hooks/auth/app";
import { useQuery } from "@tanstack/react-query";
import { UserDto } from "../../../types";
import { fetchFriendList } from "../../services/friends";

export const useFriendListQuery = () => {
    const { token } = useAppAuth();

    return useQuery<UserDto[]>({
        queryKey: ["users", token], // Ajout du token comme dépendance de la clé (?)
        queryFn: () => fetchFriendList(token), // Passez le token à fetchFriendList
        enabled: !!token,
    });
};
