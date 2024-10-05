import { confirmEmail } from "@/api/services/confirm-email";
import { useMutation } from "@tanstack/react-query";

type RegisterDto = {
    token: string;
};

export const useConfirmEmailMutation = () => {
    return useMutation<string, Error, RegisterDto>({
        mutationFn: confirmEmail,
        onSuccess: async (accessToken) => {
            localStorage.removeItem("email_token");
            if (accessToken) {
                localStorage.setItem("access_token", accessToken);
            }
        },
        onError: (error) => {
            console.log("erreur! ", error);
        },
    });
};
