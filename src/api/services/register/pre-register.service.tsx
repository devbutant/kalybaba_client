import createAxiosInstance from "@/config/axios/axiosConfig";
import axios from "axios";

type PreRegisterDto = {
    email: string;
};

export const preRegisterUser = async (
    userData: PreRegisterDto
): Promise<void> => {
    try {
        const axiosInstance = createAxiosInstance();
        const response = await axiosInstance.post(
            `/auth/pre-register`,
            userData
        );

        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data.message);
        } else {
            console.error(error);
        }
    }
};
