import { useAppAuth } from "@/hooks/contexts-hooks/auth/app";
import { useQuery } from "@tanstack/react-query";
import { AdDto } from "../../../../types";
import { fetchUserAdList } from "../../../services/ads/user-ad-list";

export const useUserAdListQuery = () => {
    const { token, userId } = useAppAuth();

    return useQuery<AdDto[]>({
        queryKey: ["ads", token],
        queryFn: () => fetchUserAdList(token, userId),
        enabled: !!token,
    });
};
