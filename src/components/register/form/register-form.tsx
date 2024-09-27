import { Input } from "@/components/form";
import { useRegisterForm } from "@/hooks/auth/register";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { fields } from "./fields";
import { RegisterSubmitButton } from "./submit-button/register-submit-button";

const RegisterForm: FC = () => {
    const { register, handleSubmit, errors, isSubmitting, onFormSubmit } =
        useRegisterForm();

    return (
        <form className="space-y-4" onSubmit={handleSubmit(onFormSubmit)}>
            {fields.map((field) => (
                <Input
                    key={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    name={field.name}
                    register={register}
                    error={errors[field.name]}
                />
            ))}

            <div>
                <p className="text-sm text-gray-900">
                    Vous avez déjà un compte ?{" "}
                    <NavLink
                        to="/connexion"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        Connectez-vous
                    </NavLink>
                </p>
            </div>

            <RegisterSubmitButton isSubmitting={isSubmitting} errors={errors} />
        </form>
    );
};

RegisterForm.displayName = "RegisterForm";

export { RegisterForm };
