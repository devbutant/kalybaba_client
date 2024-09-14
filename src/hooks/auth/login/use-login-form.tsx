import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginMutation } from "../../../api/mutations/auth/login.mutation";
import { LoginFormFields, loginSchema } from "../../../types/auth/schemas";

const useLoginForm = () => {
    const form = useForm<LoginFormFields>({
        resolver: zodResolver(loginSchema),
    });

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = form;

    const authenticationMutation = useLoginMutation();

    const onFormSubmit: SubmitHandler<LoginFormFields> = async (
        credentials
    ) => {
        try {
            await authenticationMutation.mutateAsync(credentials);
        } catch (error: unknown) {
            setError("root", {
                type: "manual",
                message:
                    error instanceof Error
                        ? error.message
                        : "An error occurred",
            });
        }
    };

    return {
        register,
        handleSubmit,
        setError,
        errors,
        isSubmitting,
        onFormSubmit,
    };
};

useLoginForm.displayName = "useLoginForm";

export { useLoginForm };
