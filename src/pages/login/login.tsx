import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { LoginForm } from "../../components/login/form/login-form";
import { useLoginMutation } from "../../mutations/auth/login.mutation";

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const authenticatationMutation = useLoginMutation();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        authenticatationMutation.mutate({ email, password });
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
