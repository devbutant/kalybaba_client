import createAxiosInstance from "../../../../config/axios/axiosConfig";
import { Category } from "../../../../types";

export const fetchCategoryList = async (
    token: string | null
): Promise<Category[]> => {
    const axiosInstance = createAxiosInstance(token);
    const { data: categories } = await axiosInstance.get(`/categories`);

    return categories;
};
