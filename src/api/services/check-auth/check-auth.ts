import createAxiosInstance from "@/config/axios/axiosConfig";

export const checkAuth = async () => {
    try {
        const axiosInstance = createAxiosInstance();
        const { data: user } = await axiosInstance.get("/auth/me");

        return user;
    } catch (error: unknown) {
        throw new Error(
            error as string | "Une erreur est survenue, veuillez réessayer"
        );
    }
};
