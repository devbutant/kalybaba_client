import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginForm } from "../../components/login/form/login-form";
import { useAppAuth } from "../../hooks/auth/app";
import {
    loginUser,
    updateConnectedStatus,
} from "../../services/login/login-service";

import { LoginDto, LoginResponseDto } from "../../types/dtos";

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setToken } = useAppAuth();
    const navigate = useNavigate();

    const mutation = useMutation<LoginResponseDto, Error, LoginDto>({
        mutationFn: loginUser,
        onSuccess: async (data) => {
            const newToken = data.access_token;
            setToken(newToken);
            const connectedStatus = await updateConnectedStatus(newToken);
            console.log("connectedStatus", connectedStatus);

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
        <LoginForm
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
        >
            <p className="mt-6 text-center text-gray-600">
                Pas encore de compte ?{" "}
                <NavLink
                    to="/inscription"
                    className="text-blue-500 hover:underline"
                >
                    Inscris-toi
                </NavLink>
            </p>
        </LoginForm>
    );
};

Login.displayName = "Login";

export { Login };
