import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppAuth } from "../../hooks/auth/app";

type LoginData = {
    email: string;
    password: string;
};

type LoginResponse = {
    access_token: string;
};

const loginUser = async (userData: LoginData): Promise<LoginResponse> => {
    const response = await axios.post(
        "http://localhost:3001/auth/login",
        userData
    );
    return response.data;
};

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setToken } = useAppAuth();
    const navigate = useNavigate();

    const mutation = useMutation<LoginResponse, Error, LoginData>({
        mutationFn: loginUser,
        onSuccess: (data) => {
            setToken(data.access_token);
            navigate("/");
        },
        onError: (error) => {
            console.error("Erreur de connexion :", error);
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate({ email, password });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-300">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">
                    Bienvenue
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Mot de passe
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="••••••••"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label
                                htmlFor="remember-me"
                                className="ml-2 block text-sm text-gray-900"
                            >
                                Se souvenir de moi
                            </label>
                        </div>
                        <div className="text-sm">
                            <a
                                href="#"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Mot de passe oublié ?
                            </a>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                        >
                            Connexion
                        </button>
                    </div>
                </form>
                <p className="mt-6 text-center text-gray-600">
                    Pas encore de compte ?{" "}
                    <NavLink
                        to="/inscription"
                        className="text-blue-500 hover:underline"
                    >
                        Inscris-toi
                    </NavLink>
                </p>
            </div>
        </div>
    );
};

export default Login;
