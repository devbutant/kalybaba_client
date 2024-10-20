import { logoutUser } from "@/api/services/logout";
import { useMutation } from "@tanstack/react-query";

export const useLogoutMutation = () => {
    return useMutation<void, Error>({
        mutationFn: logoutUser,
        onSuccess: () => (window.location.href = "/connexion"),
        onError: (error) => {
            console.log(error && "toast error");
        },
    });
};
