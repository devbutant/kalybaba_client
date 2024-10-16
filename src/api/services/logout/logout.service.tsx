import createAxiosInstance from "@/config/axios/axiosConfig";
const axiosInstance = createAxiosInstance();

export const logoutUser = async (): Promise<void> => {
    const response = await axiosInstance.post(`/auth/logout`);
    console.log(response);

    return response.data;
};