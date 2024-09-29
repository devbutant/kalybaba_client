import { useLoginMutation } from "@/api/mutations/auth/login.mutation";
import { handleError } from "@/api/services/error";
import { LoginFormFields, loginSchema } from "@/types/auth/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

const useLoginForm = () => {
    const form = useForm<LoginFormFields>({
        resolver: zodResolver(loginSchema),
    });

    const {
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
            handleError(error, setError);
        }
    };

    return {
        form,
        onFormSubmit,
        errors,
        isSubmitting,
    };
};

useLoginForm.displayName = "useLoginForm";

export { useLoginForm };
