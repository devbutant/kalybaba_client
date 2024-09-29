import { useUpdateAdMutation } from "@/api/mutations/ads/update/update-ad.mutation";
import { AdDto, EditAdFormValues } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useGetDefaultValues } from "./use-get-default-values.hook";

const useEditAd = (ad: AdDto | undefined) => {
    const { getDefaultValues } = useGetDefaultValues();
    const editAdMutation = useUpdateAdMutation();

    if (!ad) {
        console.log("Annonce non trouvée");
    }

    const editAdSchema = z.object({
        id: z.string(),
        title: z
            .string({ required_error: "Veuillez renseigner un titre." })
            .min(5, "Le titre doit contenir au moins 5 caractères.")
            .max(50, "Le titre doit contenir au maximum 50 caractères."),
        description: z
            .string({ required_error: "Veuillez renseigner une description." })
            .min(20, "La description doit contenir au moins 20 caractères."),
        price: z
            .number({ required_error: "Veuillez renseigner un prix. " })
            .min(0, "Le prix doit être positif"),
        city: z
            .string({ required_error: "Veuillez renseigner une ville." })
            .min(2, "La ville doit contenir au moins 2 caractères.")
            .max(100, "La ville doit contenir au maximum 100 caractères."),
        typeEnum: z.string({
            required_error: "Veuillez sélectionner un type.",
        }),
        categoryEnum: z.string({
            required_error: "Veuillez sélectionner une catégorie.",
        }),
    });

    const form = useForm<EditAdFormValues>({
        defaultValues: getDefaultValues(ad),
        resolver: zodResolver(editAdSchema),
    });

    const onSubmit: SubmitHandler<EditAdFormValues> = async (data) => {
        try {
            await editAdMutation.mutateAsync(data);
        } catch (error) {
            console.error("Error updating ad:", error);
        } finally {
            form.reset();
        }
    };

    return { onSubmit, form };
};

useEditAd.displayName = "useEditAd";

export { useEditAd };
