import { preRegisterUser } from "@/api/services/register/pre-register.service";
import { useMutation } from "@tanstack/react-query";

type PreRegisterDto = {
    email: string;
};

export const usePreRegisterMutation = () => {
    // const navigate = useNavigate();

    return useMutation<void, Error, PreRegisterDto>({
        mutationFn: preRegisterUser,
        // TODO: ici je dois faire une requete vers un endpoint qui mettra le statut de l'utilisateur à "pending" et lui enverra un mail de confirmation
        // Une fois le mail de confirmation reçu, l'utilisateur pourra se connecter et choisir un mot de passe pour finaliser son inscription
        // Son statut passera à "active"
        // Les utilisateurs avec un statut "pending" sont à supprimer après 24h

        onSuccess: async () => {
            console.log("Utilisateur enregistré avec succès");
            // navigate("/confirmation-email");
        },
        onError: (error) => {
            console.error("Erreur de connexion :", error);
        },
    });
};
