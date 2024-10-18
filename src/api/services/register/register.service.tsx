import createAxiosInstance from "@/config/axios/axiosConfig";

type RegisterDto = {
    name: string;
    password: string;
    city: string;
    phone?: string;
    userId: string;
};

export const registerUser = async (userData: RegisterDto): Promise<string> => {
    const { userId, ...user } = userData;

    try {
        const axiosInstance = createAxiosInstance();
        await axiosInstance.patch(`/users/${userId}`, user);
        window.location.href = "/";

        return "Inscription réalisée avec succès";
    } catch (error: unknown) {
        throw new Error(
            error as string | "Une erreur est survenue, veuillez réessayer"
        );
    }
};
