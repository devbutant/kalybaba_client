import { fetchUserAdList } from "@/api/services/ads/user-ad-list";
import { AdDto } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useUserAdListQuery = () => {
    return useQuery<AdDto[]>({
        queryKey: ["ads"],
        queryFn: fetchUserAdList,
    });
};
