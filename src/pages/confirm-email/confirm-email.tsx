import { FC } from "react";
import { useParams } from "react-router-dom";

const ConfirmEmail: FC = () => {
    const { accessToken } = useParams<{ accessToken: string }>();

    let welcome;

    if (accessToken) {
        const token = accessToken.split("access-token=")[1];
        localStorage.setItem("access_token", token);

        welcome = (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-300">
                <h1>Bienvenue</h1>
                <h2>Vous allez être redirigé..</h2>
            </div>
        );

        window.location.href = "/";
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
