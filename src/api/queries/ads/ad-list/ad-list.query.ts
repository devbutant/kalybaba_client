import { fetchAdList } from "@/api/services/ads";
import { AdDto } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useAdListQuery = () => {
    return useQuery<AdDto[]>({
        queryKey: ["ads"],
        queryFn: () => fetchAdList(), // Passez le token à fetchAdList
    });
};
