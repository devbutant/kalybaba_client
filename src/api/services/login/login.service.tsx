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
    connected: boolean
): Promise<void> => {
    await axios.patch(
        `${API.URL}/users/connected`,
        { connected },
        {
            withCredentials: true,
        }
    );
};
