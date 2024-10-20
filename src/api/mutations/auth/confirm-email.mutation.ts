import { confirmEmail } from "@/api/services/confirm-email";
import { useMutation } from "@tanstack/react-query";

type RegisterDto = {
    token: string;
};

export const useConfirmEmailMutation = () => {
    return useMutation<string, Error, RegisterDto>({
        mutationFn: confirmEmail,
        onError: (error) => {
            console.log("erreur! ", error);
        },
    });
};
