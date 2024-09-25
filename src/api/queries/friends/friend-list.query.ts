import { fetchFriendList } from "@/api/services/friends";
import { useAppAuth } from "@/hooks/contexts-hooks/auth/app";
import { UserDto } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useFriendListQuery = () => {
    const { token } = useAppAuth();

    return useQuery<UserDto[]>({
        queryKey: ["users", token], // Ajout du token comme dépendance de la clé (?)
        queryFn: () => fetchFriendList(token), // Passez le token à fetchFriendList
        enabled: !!token,
    });
};
