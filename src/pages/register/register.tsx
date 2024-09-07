import React from "react";
import { NavLink } from "react-router-dom";

const Register: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-300">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
                    Créer un compte
                </h1>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Pseudo"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                    <input
                        type="email"
                        placeholder="Mail"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                    <input
                        type="password"
                        placeholder="Mot de passe"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                    <input
                        type="password"
                        placeholder="Confirmer le mot de passe"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        S'inscrire
                    </button>
                </form>
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
