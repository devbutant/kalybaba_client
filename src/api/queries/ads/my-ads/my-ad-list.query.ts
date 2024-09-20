import { useQuery } from "@tanstack/react-query";
import { useAppAuth } from "../../../../hooks/contexts-hooks/auth/app";
import { AdDto } from "../../../../types";
import { fetchMyAdList } from "../../../services/my-ads";

export const useMyAdListQuery = () => {
    const { token, userId } = useAppAuth();

    return useQuery<AdDto[]>({
        queryKey: ["ads", token], // Ajout du token comme dépendance de la clé (?)
        queryFn: () => fetchMyAdList(token, userId),
        enabled: !!token,
    });
};
