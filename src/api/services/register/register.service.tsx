import createAxiosInstance from "@/config/axios/axiosConfig";

//TODO: redondance, centraliser les types
type RegisterDto = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    city: string;
};

export const registerUser = async (
    userData: RegisterDto
): Promise<Omit<RegisterDto, "confirmPassword">> => {
    const { confirmPassword, ...user } = userData;

    const checkPassword = (password: string, confirmPassword: string) => {
        if (password !== confirmPassword) {
            throw new Error("Passwords do not match");
        }
    };

    checkPassword(userData.password, confirmPassword);

    try {
        const axiosInstance = createAxiosInstance();
        const response = await axiosInstance.post(`/auth/register`, user);

        return response.data;
    } catch (error: unknown) {
        throw new Error(
            error as string | "Une erreur est survenue, veuillez réessayer"
        );
    }
};
