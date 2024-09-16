import { useMutation } from "@tanstack/react-query";
import { LoginDto, LoginResponseDto } from "../../../types/dtos";
import { loginUser } from "../../services/login/login.service";
import { useUpdateStatusMutation } from "./connection-mutation";

export const useLoginMutation = () => {
    const updateStatusMutation = useUpdateStatusMutation();

    return useMutation<LoginResponseDto, Error, LoginDto>({
        mutationFn: loginUser,
        onSuccess: async () => {
            updateStatusMutation.mutate({ connected: true });
        },
        onError: (error) => {
            console.error("Erreur de connexion :", error);
        },
    });
};
