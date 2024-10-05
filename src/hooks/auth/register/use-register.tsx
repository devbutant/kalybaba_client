import { useRegisterMutation } from "@/api/mutations/auth/register.mutation";
import { useAppAuth } from "@/hooks/contexts-hooks/auth";
import { RegisterFormFields, registerSchema } from "@/types/auth/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

const useRegisterForm = () => {
    const form = useForm<RegisterFormFields>({
        resolver: zodResolver(registerSchema),
    });
    const { handleSubmit, setError } = form;

    const { token, userId } = useAppAuth();
    const registerMutation = useRegisterMutation();

    const onFormSubmit: SubmitHandler<RegisterFormFields> = async (
        userData
    ) => {
        try {
            console.log(userData);

            if (!token || !userId) {
                throw new Error("Token not found");
            }

            const userDataWithToken = { ...userData, token, userId };

            await registerMutation.mutateAsync(userDataWithToken);
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
