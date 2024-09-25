import { fetchUserAdList } from "@/api/services/ads/user-ad-list";
import { useAppAuth } from "@/hooks/contexts-hooks/auth/app";
import { AdDto } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useUserAdListQuery = () => {
    const { token, userId } = useAppAuth();

    return useQuery<AdDto[]>({
        queryKey: ["ads", token],
        queryFn: () => fetchUserAdList(token, userId),
        enabled: !!token,
    });
};
