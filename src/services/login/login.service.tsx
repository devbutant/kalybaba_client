import axios from "axios";
import { LoginDto, LoginResponseDto } from "../../types/dtos";

export const loginUser = async (
    userData: LoginDto
): Promise<LoginResponseDto> => {
    const response = await axios.post(
        `${process.env.VITE_APP_API_URL}/auth/login`,
        userData
    );
    return response.data;
};

export const updateUserConnectionStatus = async (
    token: string | null,
    connected: boolean
): Promise<void> => {
    if (!token) return;
    await axios.patch(
        `${process.env.VITE_APP_API_URL}/users/connected`,
        { connected },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
};
