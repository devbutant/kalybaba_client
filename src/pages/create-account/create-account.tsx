import { FormContainer } from "@/components/form/form-container";
import { PreRegisterForm } from "@/components/pre-register";
import { FC } from "react";

const CreateAccount: FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-300">
            <FormContainer title="Inscription">
                <PreRegisterForm />
            </FormContainer>
        </div>
    );
};

CreateAccount.displayName = "CreateAccount";

export { CreateAccount };
