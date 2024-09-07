import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Token } from "../../types";
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

export const updateConnectedStatus = async (
    token: string | null
): Promise<void> => {
    if (!token) return;

    const decodedToken = jwtDecode<Token>(token);
    const userId = decodedToken.id;

    await axios.patch(
        `http://localhost:3001/users/${userId}/connected`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
};
