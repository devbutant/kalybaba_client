import createAxiosInstance from "@/config/axios/axiosConfig";
import { LoginDto, LoginResponseDto } from "@/types/dtos";
const axiosInstance = createAxiosInstance();

export const loginUser = async (
    userData: LoginDto
): Promise<LoginResponseDto> => {
    try {
        const response = await axiosInstance.post(`/auth/login`, userData);
        return response.data;
    } catch (error) {
        console.log(error);

        throw error; // Re-throw the error to handle it further up the call stack if needed
    }
};
