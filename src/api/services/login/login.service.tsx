import axios from "axios";
import { LoginDto, LoginResponseDto } from "../../../types/dtos";
import { API } from "../../../utils/environment";

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

    const options = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const data = {
        connected,
    };

    await axios.patch(`${API.URL}/users/connected`, data, options);
};
