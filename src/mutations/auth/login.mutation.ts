import { useMutation } from "@tanstack/react-query";
import { useAppAuth } from "../../hooks/auth/app";
import { loginUser } from "../../services/login/login-service";
import { LoginDto, LoginResponseDto } from "../../types/dtos";
import { useUpdateStatusMutation } from "./connection-mutation";

export const useLoginMutation = () => {
    const { setToken } = useAppAuth();
    const updateStatusMutation = useUpdateStatusMutation();

    return useMutation<LoginResponseDto, Error, LoginDto>({
        mutationFn: loginUser,
        onSuccess: async (data) => {
            const newToken = data.access_token;
            setToken(newToken);
            updateStatusMutation.mutate({ token: newToken, connected: true });
        },
        onError: (error) => {
            console.error("Erreur de connexion :", error);
        },
    });
};
