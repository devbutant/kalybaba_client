import { FormContainer } from "@/components/form";
import { LoginForm } from "@/components/login";
import { FC } from "react";

const Login: FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-300">
            <FormContainer title="Bienvenue!">
                <LoginForm />
            </FormContainer>
        </div>
    );
};

Login.displayName = "Login";

export { Login };
