import createAxiosInstance from "@/config/axios/axiosConfig";
import { LoginDto, LoginResponseDto } from "@/types/dtos";
const axiosInstance = createAxiosInstance();

export const loginUser = async (
    userData: LoginDto
): Promise<LoginResponseDto> => {
    const response = await axiosInstance.post(`/auth/login`, userData);
    console.log("response ", response);
    console.log("response ", response);
    console.log("response ", response);

    return response.data;
};

export const updateUserConnectionStatus = async (
    connected: boolean
): Promise<void> => {
    const data = {
        connected,
    };

    try {
        await axiosInstance.patch(`/users/connected`, data);
        console.log("success");
    } catch (error: unknown) {
        throw new Error(
            error as string | "Une erreur est survenue, veuillez réessayer"
        );
    }
};
