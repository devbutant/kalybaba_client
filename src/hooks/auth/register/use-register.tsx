import { useRegisterMutation } from "@/api/mutations/auth/register.mutation";
import { RegisterFormFields, registerSchema } from "@/types/auth/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

const useRegisterForm = () => {
    const form = useForm<RegisterFormFields>({
        resolver: zodResolver(registerSchema),
    });

    const { handleSubmit, setError } = form;

    const registerMutation = useRegisterMutation();

    const onFormSubmit: SubmitHandler<RegisterFormFields> = async (
        payloads
    ) => {
        try {
            await registerMutation.mutateAsync(payloads);
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
        handleSubmit,
        setError,
        onFormSubmit,
        form,
    };
};

useRegisterForm.displayName = "useRegisterForm";

export { useRegisterForm };
