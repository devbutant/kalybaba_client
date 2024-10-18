import createAxiosInstance from "@/config/axios/axiosConfig";
const axiosInstance = createAxiosInstance();

export const logoutUser = async (): Promise<void> => {
    const response = await axiosInstance.post(`/auth/logout`);
    window.location.href = "/";
    return response.data;
};
