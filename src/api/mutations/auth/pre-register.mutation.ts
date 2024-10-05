import { preRegisterUser } from "@/api/services/register/pre-register.service";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

type PreRegisterDto = {
    email: string;
};

export const usePreRegisterMutation = () => {
    const navigate = useNavigate();
    return useMutation<void, Error, PreRegisterDto>({
        mutationFn: preRegisterUser,
        onSuccess: async () => {
            navigate("/confirmation-email");
        },
        onError: (error) => {
            console.error(
                error || "Une erreur s'est produite, veuillez réessayer"
            );
        },
    });
};
