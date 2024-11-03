import createAxiosInstance from "@/config/axios/axiosConfig";
import { LoginDto, LoginResponseDto } from "@/types/dtos";

export const loginUser = async (
    userData: LoginDto
): Promise<LoginResponseDto> => {
    try {
        const axiosInstance = createAxiosInstance();
        const response = await axiosInstance.post(`/auth/login`, userData);
        return response.data;
    } catch (error) {
        console.log(error);

        throw error;
    }
};
