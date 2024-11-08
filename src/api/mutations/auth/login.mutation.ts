import { loginUser } from "@/api/services/login";
import { LoginDto, LoginResponseDto } from "@/types/dtos";
import { useMutation } from "@tanstack/react-query";

export const useLoginMutation = () => {
    return useMutation<LoginResponseDto, Error, LoginDto>({
        mutationFn: loginUser,
        onSuccess: () => (window.location.href = "/"),
        onError: (error) => {
            console.log(error && "toast error");
        },
    });
};
