import createAxiosInstance from "@/config/axios/axiosConfig";

//TODO: redondance, centraliser les types
type RegisterDto = {
    name: string;
    password: string;
    confirmPassword: string;
    city: string;
    token: string;
};

export const registerUser = async (userData: RegisterDto): Promise<void> => {
    const { confirmPassword, token, ...user } = userData;

    const checkPassword = (password: string, confirmPassword: string) => {
        if (password !== confirmPassword) {
            throw new Error("Passwords do not match");
        }
    };

    checkPassword(userData.password, confirmPassword);

    try {
        const axiosInstance = createAxiosInstance(token);
        // TODO: Ici je veux patcher l'utilisateur pour lui ajouter un statut "pending"
        // Récup de l'id du token
        // patch vers /users/:id
        // body : { userInfos, status: "active" }
        // OU PLUTOT : Role ['USER_CONFIRMED]
        // const response = await axiosInstance.post(`/auth/pre-register`, user);

        // récup l'id du token

        const response = await axiosInstance.patch(`/users/pre-register`, user);

        console.log(response);

        return response.data;
    } catch (error: unknown) {
        throw new Error(
            error as string | "Une erreur est survenue, veuillez réessayer"
        );
    }
};
