import { logoutUser } from "@/api/services/logout";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useLogoutMutation = () => {
    const navigate = useNavigate();

    return useMutation<void, Error>({
        mutationFn: logoutUser,
        onSuccess: () => navigate("/connexion"),
        onError: (error) => {
            console.log(error && "toast error");
        },
    });
};
