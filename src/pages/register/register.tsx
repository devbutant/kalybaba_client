import { RegisterForm } from "@/components/register";
import { FC } from "react";
import { NavLink } from "react-router-dom";

const Register: FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-300">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
                    Créer un compte
                </h1>
                <RegisterForm />
                <p className="mt-4 text-sm text-gray-600 text-center">
                    Vous avez déjà un compte ?{" "}
                    <NavLink
                        to="/connexion"
                        className="text-blue-500 hover:underline"
                    >
                        Connexion
                    </NavLink>
                </p>
            </div>
        </div>
    );
};

Register.displayName = "Register";

export { Register };
