import { registerUser } from "@/api/services/register";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

type RegisterDto = {
    name: string;
    password: string;
    confirmPassword: string;
    city: string;
    phone?: string;
    token: string;
    userId: string;
};

export const useRegisterMutation = () => {
    const navigate = useNavigate();

    return useMutation<void, Error, RegisterDto>({
        mutationFn: registerUser,
        onSuccess: async () => {
            // TODO: faire un refresh token pour que l'utilisateur puisse avoir accès aux autres routes
            navigate("/");
        },
        onError: (error) => {
            console.error("Erreur de connexion :", error);
        },
    });
};
