import { usePreRegisterMutation } from "@/api/mutations/auth/pre-register.mutation";
import { preRegisterSchema } from "@/types/auth/schemas/pre-register";
import { PreRegisterFormFields } from "@/types/auth/schemas/pre-register/pre-register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

const usePreRegisterForm = () => {
    const form = useForm<PreRegisterFormFields>({
        resolver: zodResolver(preRegisterSchema),
    });

    const { handleSubmit, setError } = form;

    const preRegisterMutation = usePreRegisterMutation();

    const onFormSubmit: SubmitHandler<PreRegisterFormFields> = async (
        userEmail
    ) => {
        try {
            await preRegisterMutation.mutateAsync(userEmail);
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

usePreRegisterForm.displayName = "usePreRegisterForm";

export { usePreRegisterForm };
