import createAxiosInstance from "../../../config/axios/axiosConfig";
import { LoginDto, LoginResponseDto } from "../../../types/dtos";

export const loginUser = async (
    userData: LoginDto
): Promise<LoginResponseDto> => {
    const axiosInstance = createAxiosInstance(null);
    const response = await axiosInstance.post(`/auth/login`, userData);
    return response.data;
};

export const updateUserConnectionStatus = async (
    token: string | null,
    connected: boolean
): Promise<void> => {
    if (!token) return;

    const data = {
        connected,
    };

    const axiosInstance = createAxiosInstance(token);
    await axiosInstance.patch(`/users/connected`, data);
};
