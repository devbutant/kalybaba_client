import { fetchUserAdList } from "@/api/services/ads/user-ad-list";
import { AdResponse } from "@/api/services/ads/user-ad-list/fetch-user-ad-list.service";
import { useQuery } from "@tanstack/react-query";

export const useUserAdListQuery = (page: number = 1, perPage: number = 10) => {
    return useQuery<AdResponse>({
        queryKey: ["ads", page, perPage],
        queryFn: () => fetchUserAdList(page, perPage),
    });
};
