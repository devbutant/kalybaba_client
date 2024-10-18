import { refreshToken } from "@/api/services/refresh-token";
import { registerUser } from "@/api/services/register";
import { useMutation } from "@tanstack/react-query";

type RegisterDto = {
    name: string;
    password: string;
    city: string;
    phone?: string;
    userId: string;
};

export const useRegisterMutation = () => {
    return useMutation<string, Error, RegisterDto>({
        mutationFn: registerUser,
        onSuccess: async () => {
            refreshToken();
        },
        onError: (error) => {
            console.error("Erreur de connexion :", error);
        },
    });
};
