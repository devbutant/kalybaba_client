import { loginUser } from "@/api/services/login";
import { LoginDto, LoginResponseDto } from "@/types/dtos";
import { useMutation } from "@tanstack/react-query";
import { useUpdateStatusMutation } from "./connection.mutation";

export const useLoginMutation = () => {
    const updateStatusMutation = useUpdateStatusMutation();

    return useMutation<LoginResponseDto, Error, LoginDto>({
        mutationFn: loginUser,
        onSuccess: async () => {
            updateStatusMutation.mutate({ connected: true });
        },
        onError: (error) => {
            console.log(error && "toast error");
        },
    });
};
