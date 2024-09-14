import React from "react";
import { LoginForm } from "../../components/login";

const Login: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-300">
            <LoginForm />
        </div>
    );
};

Login.displayName = "Login";

export { Login };
