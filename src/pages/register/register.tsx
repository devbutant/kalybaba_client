import { FormContainer } from "@/components/form/form-container";
import { RegisterForm } from "@/components/register";
import { FC } from "react";

const Register: FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-300">
            <FormContainer title="Entrez vos informations">
                <RegisterForm />
            </FormContainer>
        </div>
    );
};

Register.displayName = "Register";

export { Register };
