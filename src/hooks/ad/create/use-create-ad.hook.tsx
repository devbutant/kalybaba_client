import { useCreateAdMutation } from "@/api/mutations/ads/create/create-ad.mutation";
import { useAppAuth } from "@/hooks/contexts-hooks/auth/app";
import { CreateAdDto } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const useCreateAd = () => {
    const { userId } = useAppAuth();

    if (!userId) {
        throw new Error("Vous devez être authentifié pour créer une annonce");
    }

    const createAdSchema = z.object({
        title: z
            .string()
            .min(5, "Le titre doit contenir au moins 5 caractères")
            .max(50, "Le titre doit contenir au maximum 50 caractères"),
        description: z
            .string()
            .min(20, "La description doit contenir au moins 20 caractères"),
        price: z.number().min(0, "Le prix doit être positif"),
        city: z
            .string()
            .min(2, "La ville doit contenir au moins 2 caractères")
            .max(100, "La ville doit contenir au maximum 100 caractères"),
        typeEnum: z.string().min(1, "Le type doit être renseigné"),
        categoryEnum: z.string().min(1, "La catégorie doit être renseignée"),
    });

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
        resolver: zodResolver(createAdSchema),
    });
    const { setError } = form;

    const createNewAdMutation = useCreateAdMutation();

    const onFormSubmit: SubmitHandler<CreateAdDto> = async (newAd) => {
        try {
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

    return {
        onFormSubmit,
        form,
    };
};

useCreateAd.displayName = "useCreateAd";

export { useCreateAd };
