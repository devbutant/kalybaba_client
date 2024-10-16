import createAxiosInstance from "@/config/axios/axiosConfig";
import { LoginDto, LoginResponseDto } from "@/types/dtos";
const axiosInstance = createAxiosInstance();

export const loginUser = async (
    userData: LoginDto
): Promise<LoginResponseDto> => {
    const response = await axiosInstance.post(`/auth/login`, userData);
    return response.data;
};
