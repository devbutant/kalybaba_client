import axios from "axios";
import { LoginDto, LoginResponseDto } from "../../types/dtos";
import { API } from "../../utils/environment/variables";

export const loginUser = async (
    userData: LoginDto
): Promise<LoginResponseDto> => {
    const response = await axios.post(`${API.URL}/auth/login`, userData);
    return response.data;
};

export const updateUserConnectionStatus = async (
    token: string | null,
    connected: boolean
): Promise<void> => {
    if (!token) return;
    await axios.patch(
        `${API.URL}/users/connected`,
        { connected },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
};
