// hooks/useUsers.ts
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAppAuth } from "../contexts/app-auth/app-auth.context";
import { UserDto } from "../types/dto/user.dto";

// Modifiez fetchUsers pour accepter le token en paramètre
const fetchUsers = async (token: string | null): Promise<UserDto[]> => {
    const { data } = await axios.get("http://localhost:3001/users", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

export const useUsers = () => {
    const { token } = useAppAuth(); // Obtenez le token ici

    return useQuery<UserDto[]>({
        queryKey: ["users", token], // Ajoutez le token comme dépendance de la clé
        queryFn: () => fetchUsers(token), // Passez le token à fetchUsers
        enabled: !!token, // Assurez-vous que la requête n'est pas effectuée si le token est null
    });
};
