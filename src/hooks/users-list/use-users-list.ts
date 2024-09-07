import { useQuery } from "@tanstack/react-query";
import { UserDto } from "../../types/dtos";
import { useAppAuth } from "../contexts-hooks/auth/app";

import { fetchUsers } from "../../services/users/fetch-users.service";

export const useUsersList = () => {
    const { token } = useAppAuth();

    return useQuery<UserDto[]>({
        queryKey: ["users", token], // Ajout du token comme dépendance de la clé (?)
        queryFn: () => fetchUsers(token), // Passez le token à fetchUsers
        enabled: !!token,
    });
};
