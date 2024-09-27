import { registerUser } from "@/api/services/register";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

type RegisterDto = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    city: string;
};

export const useRegisterMutation = () => {
    const navigate = useNavigate();

    return useMutation<
        Omit<RegisterDto, "confirmPassword">,
        Error,
        RegisterDto
    >({
        mutationFn: registerUser,
        onSuccess: async () => {
            navigate("/connexion");
        },
        onError: (error) => {
            console.error("Erreur de connexion :", error);
        },
    });
};
