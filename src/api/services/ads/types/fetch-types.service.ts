import createAxiosInstance from "../../../../config/axios/axiosConfig";
import { Category } from "../../../../types";

export const fetchTypeList = async (
    token: string | null
): Promise<Category[]> => {
    const axiosInstance = createAxiosInstance(token);
    const { data: types } = await axiosInstance.get(`/types`);

    return types;
};
