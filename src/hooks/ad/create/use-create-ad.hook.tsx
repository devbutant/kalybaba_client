import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateAdMutation } from "../../../api/mutations/ads/create/create-ad.mutation";
import { CreateAdDto } from "../../../types";
import { useAppAuth } from "../../contexts-hooks/auth/app";

const useCreateAd = () => {
    const { userId } = useAppAuth();

    if (!userId) {
        throw new Error("Vous devez être authentifié pour créer une annonce");
    }

    // TODO le useForm est censé utilié le schema de validation
    const form = useForm<CreateAdDto>({
        defaultValues: {
            title: "",
            description: "",
            city: "",
            price: 0,
            authorId: userId,
            categoryEnum: "",
            typeEnum: "",
        },
    });
    const { setError } = form;

    const createNewAdMutation = useCreateAdMutation();

    const onFormSubmit: SubmitHandler<CreateAdDto> = async (newAd) => {
        try {
            console.log(newAd);

            const adWithAuthorId = { ...newAd, authorId: userId };
            await createNewAdMutation.mutateAsync(adWithAuthorId);
        } catch (error: unknown) {
            setError("root", {
                type: "manual",
                message:
                    error instanceof Error
                        ? error.message
                        : "Une erreur est survenue",
            });
        }
    };

    const isSuccess = createNewAdMutation.isSuccess;
    const mutationError = createNewAdMutation.error;

    return {
        onFormSubmit,
        isSuccess,
        mutationError,
        form,
    };
};

useCreateAd.displayName = "useCreateAd";

export { useCreateAd };
