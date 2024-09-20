import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateAdMutation } from "../../../api/mutations/ads/create/create-new-ad.mutation";
import { CreateAdDto } from "../../../types";
import { createAdSchema } from "../../../types/dtos/ads";
import { useAppAuth } from "../../contexts-hooks/auth/app";

const useCreateAd = () => {
    const { userId } = useAppAuth();

    const form = useForm<CreateAdDto>({
        resolver: zodResolver(createAdSchema),
    });

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = form;

    const createNewAdMutation = useCreateAdMutation();

    const onFormSubmit: SubmitHandler<CreateAdDto> = async (newAd) => {
        if (userId) {
            try {
                const adWithAuthorId = { ...newAd, authorId: userId };
                await createNewAdMutation.mutateAsync(adWithAuthorId);
            } catch (error: unknown) {
                setError("root", {
                    type: "manual",
                    message:
                        error instanceof Error
                            ? error.message
                            : "An error occurred",
                });
            }
        }
    };

    const isSuccess = createNewAdMutation.isSuccess;
    const mutationError = createNewAdMutation.error;

    return {
        register,
        handleSubmit,
        setError,
        errors,
        isSubmitting,
        onFormSubmit,
        isSuccess,
        mutationError,
    };
};

useCreateAd.displayName = "useCreateAd";

export { useCreateAd };
