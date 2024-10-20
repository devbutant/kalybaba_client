import { useConfirmEmailMutation } from "@/api/mutations/auth/confirm-email.mutation";
import { FC, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ConfirmEmail: FC = () => {
    const { token } = useParams<{ token: string }>();

    const confirmEmailMutation = useConfirmEmailMutation();
    const { isSuccess, isError, isPending } = confirmEmailMutation;

    let welcome;

    useEffect(() => {
        if (token) {
            localStorage.setItem("email_token", token); // Pas besoin de stocker ? TODO: vu que je le passe direct dns la fonction d'apres pr check
            console.log("token: ", token);

            confirmEmailMutation.mutate({
                token,
            });
        }
    }, [token]);

    welcome = (
        <div className="min-h-screen flex flex-col gap-3 items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-300">
            <h1 className="text-3xl font-bold">Bienvenue</h1>
            <h2 className="text-xl">
                Validez votre inscription en cliquant sur le lien envoyé à votre
                adresse mail.
                <br />
                Vérifiez votre boîte de réception et vos spams.
            </h2>
        </div>
    );

    if (isPending) {
        welcome = (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-300">
                <h1>Chargement...</h1>
            </div>
        );
    }

    if (isSuccess) {
        // Redirection au bout de 5 secondes
        setTimeout(() => {
            window.location.href = "/derniere-etape";
        }, 3000);

        welcome = (
            <div className="min-h-screen flex flex-col gap-3 items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-300">
                <h1 className="text-3xl font-bold">Bienvenue</h1>
                <h2 className="text-xl">
                    Vous allez être redirigé dans quelques secondes..
                </h2>
                <p>
                    La redirection ne se fait pas ? Cliquez sur le{" "}
                    <b>
                        <Link to="/derniere-etape">lien</Link>
                    </b>
                </p>
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

    return welcome;
};

ConfirmEmail.displayName = "ConfirmEmail";

export { ConfirmEmail };
