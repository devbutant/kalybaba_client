import { registerUser } from "@/api/services/register";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

type RegisterDto = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    city: string;
};

export const useRegisterMutation = () => {
    const navigate = useNavigate();

    return useMutation<
        Omit<RegisterDto, "confirmPassword">,
        Error,
        RegisterDto
    >({
        mutationFn: registerUser,
        // TODO: ici je dois faire une requete vers un endpoint qui mettra le statut de l'utilisateur à "pending" et lui enverra un mail de confirmation
        // Une fois le mail de confirmation reçu, l'utilisateur pourra se connecter et choisir un mot de passe pour finaliser son inscription
        // Son statut passera à "active"
        // Les utilisateurs avec un statut "pending" seront supprimés après 24h
        onSuccess: async () => {
            navigate("/confirmation-email");
        },
        onError: (error) => {
            console.error("Erreur de connexion :", error);
        },
    });
};
