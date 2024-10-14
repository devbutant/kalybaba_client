import { fetchAdList } from "@/api/services/ads";
import { AdDto } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useAdListQuery = () => {
    return useQuery<AdDto[]>({
        queryKey: ["ads"], // Ajout du token comme dépendance de la clé (?)
        queryFn: () => fetchAdList(), // Passez le token à fetchAdList
    });
};
