import { registerUser } from "@/api/services/register";
import { useMutation } from "@tanstack/react-query";

type RegisterDto = {
    name: string;
    password: string;
    confirmPassword: string;
    phone?: string;
    city: string;
    token: string;
    userId: string;
};

export const useRegisterMutation = () => {
    // const navigate = useNavigate();

    return useMutation<void, Error, RegisterDto>({
        mutationFn: registerUser,
        // TODO: ici je dois faire une requete vers un endpoint qui mettra le statut de l'utilisateur à "pending" et lui enverra un mail de confirmation
        // Une fois le mail de confirmation reçu, l'utilisateur pourra se connecter et choisir un mot de passe pour finaliser son inscription
        // Son statut passera à "active"
        // Les utilisateurs avec un statut "pending" seront supprimés après 24h

        // Leboncoin
        // Apres insertion du mail :
        // Rediretion vers : page 'confirmez votre e mail avec code'

        // https://auth.leboncoin.fr/create-part-account/?client_id=lbc-front-web&from_to=https%3A%2F%2Fwww.leboncoin.fr%2F

        // Une fois le code entré : définir un mot de passe etc

        onSuccess: async () => {
            // TODO: faire une request pour update le ROLE de l'utilisateur
            console.log("Utilisateur enregistré avec succès");

            // navigate("/confirmation-email");
        },
        onError: (error) => {
            console.error("Erreur de connexion :", error);
        },
    });
};
