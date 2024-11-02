import { useCreateAdMutation } from "@/api/mutations/ads/create/create-ad.mutation";
import { useCheckAuthQuery } from "@/api/queries/auth/check-auth/check-auth.query";
import { CreateAdDto } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const useCreateAd = () => {
    const { data } = useCheckAuthQuery();
    const userId = data?.user?.id;

    if (!userId) {
        throw new Error("Vous devez être authentifié pour créer une annonce");
    }

    const createAdSchema = z.object({
        title: z
            .string({ required_error: "Veuillez renseigner un titre." })
            .min(5, "Le titre doit contenir au moins 5 caractères.")
            .max(50, "Le titre doit contenir au maximum 50 caractères."),
        photos: z.array(z.instanceof(File)).optional(),
        description: z
            .string({ required_error: "Veuillez renseigner une description." })
            .min(20, "La description doit contenir au moins 20 caractères."),
        price: z
            .number({ required_error: "Veuillez renseigner un prix." })
            .min(0, "Le prix doit être positif."),
        city: z
            .string({ required_error: "Veuillez renseigner une ville." })
            .min(2, "La ville doit contenir au moins 2 caractères.")
            .max(100, "La ville doit contenir au maximum 100 caractères."),
        typeEnum: z.string().min(1, "Veuillez sélectionner un type."),
        categoryEnum: z.string().min(1, "Veuillez sélectionner une catégorie."),
    });

    const form = useForm<CreateAdDto>({
        defaultValues: {
            title: "",
            description: "",
            photos: undefined,
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
            const formData = createFormData(newAd, userId);
            await createNewAdMutation.mutateAsync(formData);
        } catch (error: unknown) {
            handleFormError(error);
        }
    };

    const createFormData = (newAd: CreateAdDto, userId: string) => {
        const formData = new FormData();
        formData.append("authorId", userId);

        Object.entries(newAd).forEach(([key, value]) => {
            if (key === "photos" && Array.isArray(value)) {
                value.forEach((photo) => formData.append("photos", photo));
            } else if (typeof value === "string" || typeof value === "number") {
                formData.append(key, value.toString());
            }
        });

        return formData;
    };

    const handleFormError = (error: unknown) => {
        setError("root", {
            type: "manual",
            message:
                error instanceof Error
                    ? error.message
                    : "Une erreur est survenue",
        });
    };

    return {
        onFormSubmit,
        form,
    };
};

useCreateAd.displayName = "useCreateAd";

export { useCreateAd };
