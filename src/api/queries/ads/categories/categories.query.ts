import { useQuery } from "@tanstack/react-query";
import { useAppAuth } from "../../../../hooks/contexts-hooks/auth/app";
import { Category } from "../../../../types";
import { fetchCategoryList } from "../../../services/ads/categories";

export const useCategoryListQuery = () => {
    const { token } = useAppAuth();

    return useQuery<Category[]>({
        queryKey: ["categories", token],
        queryFn: () => fetchCategoryList(token),
        enabled: !!token,
    });
};
