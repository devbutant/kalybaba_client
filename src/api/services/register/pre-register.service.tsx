import createAxiosInstance from "@/config/axios/axiosConfig";

//TODO: redondance, centraliser les types
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
        throw new Error(
            error as string | "Une erreur est survenue, veuillez réessayer"
        );
    }
};
