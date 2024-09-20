import { useQuery } from "@tanstack/react-query";
import { useAppAuth } from "../../../../hooks/contexts-hooks/auth/app";
import { Type } from "../../../../types";
import { fetchTypeList } from "../../../services/ads/types";

export const useTypeListQuery = () => {
    const { token } = useAppAuth();

    return useQuery<Type[]>({
        queryKey: ["types", token],
        queryFn: () => fetchTypeList(token),
        enabled: !!token,
    });
};
