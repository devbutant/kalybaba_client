import { useConfirmEmailMutation } from "@/api/mutations/auth/confirm-email.mutation";
import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";

const ConfirmEmail: FC = () => {
    const { token } = useParams<{ token: string }>();

    const confirmEmailMutation = useConfirmEmailMutation();
    const { isSuccess, isError, isPending, data } = confirmEmailMutation;

    let welcome;

    useEffect(() => {
        if (token) {
            localStorage.setItem("email_token", token);
            confirmEmailMutation.mutate({
                token,
            });
        }
    }, [token]);

    if (isPending) {
        welcome = (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-300">
                <h1>Chargement...</h1>
            </div>
        );
    }

    if (isSuccess) {
        console.log("data :", data);

        welcome = (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-300">
                <h1>Bienvenue</h1>
                <h2>Vous allez être redirigé..</h2>
            </div>
        );
    }

    if (isError) {
        welcome = (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-300">
                <h1>Erreur</h1>
                <h2>Une erreur est survenue.</h2>
            </div>
        );
    }

    welcome = (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-300">
            <h1>Bienvenue</h1>
            <h2>
                Nouveau membre ? Valider votre e-mail en cliquant sur le lien
                envoyé à votre adresse mail.
                <br />
                Vérifiez votre boîte de réception ou vos spams.
            </h2>
        </div>
    );

    return welcome;
};

ConfirmEmail.displayName = "ConfirmEmail";

export { ConfirmEmail };
