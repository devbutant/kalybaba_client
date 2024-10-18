import createAxiosInstance from "@/config/axios/axiosConfig";

export const refreshToken = async (): Promise<void> => {
    try {
        const axiosInstance = createAxiosInstance();
        const response = await axiosInstance.get(`/auth/refresh-token`);
        console.log(response);
    } catch (error: unknown) {
        throw new Error(
            error as string | "Une erreur est survenue, veuillez réessayer"
        );
    }
};
