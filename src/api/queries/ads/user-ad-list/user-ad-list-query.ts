import { fetchUserAdList } from "@/api/services/ads/user-ad-list";
import { useAppAuth } from "@/hooks/contexts-hooks/auth/app";
import { AdDto } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useUserAdListQuery = () => {
    const { user } = useAppAuth();
    const userId = user?.id ?? null;

    return useQuery<AdDto[]>({
        queryKey: ["ads"],
        queryFn: () => fetchUserAdList(userId),
    });
};
