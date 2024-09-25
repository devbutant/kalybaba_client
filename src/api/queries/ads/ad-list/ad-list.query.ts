import { useAppAuth } from "@/hooks/contexts-hooks/auth/app";
import { useQuery } from "@tanstack/react-query";
import { AdDto } from "../../../../types";
import { fetchAdList } from "../../../services/ads";

export const useAdListQuery = () => {
    const { token } = useAppAuth();

    return useQuery<AdDto[]>({
        queryKey: ["ads", token], // Ajout du token comme dépendance de la clé (?)
        queryFn: () => fetchAdList(token), // Passez le token à fetchAdList
        enabled: !!token,
    });
};
