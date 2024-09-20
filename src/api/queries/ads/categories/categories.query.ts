import { useQuery } from "@tanstack/react-query";
import createAxiosInstance from "../../../../config/axios/axiosConfig";
import { useAppAuth } from "../../../../hooks/contexts-hooks/auth/app";

// Todo: dans un serv
type Category = {
    id: string;
    name: string;
};

export const useCategoryListQuery = () => {
    const { token } = useAppAuth();
    const axiosInstance = createAxiosInstance(token);

    // Todo dans un serv
    const fetchCategoryList = async () => {
        const { data: categoryList } = await axiosInstance.get(`/categories`);
        return categoryList;
    };

    return useQuery<Category[]>({
        queryKey: ["categories", token],
        queryFn: fetchCategoryList,
        enabled: !!token,
    });
};
