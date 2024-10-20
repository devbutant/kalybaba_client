import { loginUser } from "@/api/services/login";
import { LoginDto, LoginResponseDto } from "@/types/dtos";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useLoginMutation = () => {
    const navigate = useNavigate();

    return useMutation<LoginResponseDto, Error, LoginDto>({
        mutationFn: loginUser,
        onSuccess: () => navigate("/"),
        onError: (error) => {
            console.log(error && "toast error");
        },
    });
};
