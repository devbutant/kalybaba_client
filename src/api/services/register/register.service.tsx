import createAxiosInstance from "@/config/axios/axiosConfig";

type RegisterDto = {
    name: string;
    password: string;
    confirmPassword: string;
    city: string;
    phone?: string;
    token: string;
    userId: string;
};

export const registerUser = async (userData: RegisterDto): Promise<void> => {
    const { confirmPassword, userId, ...user } = userData;

    const checkPassword = (password: string, confirmPassword: string) => {
        if (password !== confirmPassword) {
            throw new Error("Passwords do not match");
        }
    };

    checkPassword(userData.password, confirmPassword);

    try {
        const axiosInstance = createAxiosInstance();
        const userWithRole = { ...user, role: "USER" };
        await axiosInstance.patch(`/users/${userId}`, userWithRole);
    } catch (error: unknown) {
        throw new Error(
            error as string | "Une erreur est survenue, veuillez réessayer"
        );
    }
};
