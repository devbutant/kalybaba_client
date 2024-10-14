import { loginUser } from "@/api/services/login";
import { useAppAuth } from "@/hooks/contexts-hooks/auth";
import { LoginDto, LoginResponseDto } from "@/types/dtos";
import { useMutation } from "@tanstack/react-query";

export const useLoginMutation = () => {
    const { setUser } = useAppAuth();

    return useMutation<LoginResponseDto, Error, LoginDto>({
        mutationFn: loginUser,
        onSuccess: async (data) => {
            const user = data.user;

            setUser({
                isAuthenticated: user.isAuthenticated,
                id: user.id,
                roles: user.roles,
            });
        },
        onError: (error) => {
            console.log(error && "toast error");
        },
    });
};
