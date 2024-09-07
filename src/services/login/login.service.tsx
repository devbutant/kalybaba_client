import axios from "axios";
import { LoginDto, LoginResponseDto } from "../../types/dtos";

export const loginUser = async (
    userData: LoginDto
): Promise<LoginResponseDto> => {
    const response = await axios.post(
        "http://localhost:3001/auth/login",
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
        `http://localhost:3001/users/connected`,
        { connected },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
};
