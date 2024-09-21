import { SubmitHandler, useForm } from "react-hook-form";
import { useUpdateAdMutation } from "../../../api/mutations/ads/update/update-ad.mutation";
import { EditAdFormValues } from "../../../types";
import { useAppAuth } from "../../contexts-hooks/auth/app";

const useUpdateAd = (ad: Partial<EditAdFormValues>, onSave: () => void) => {
    const { token } = useAppAuth();

    if (!token) {
        throw new Error("Vous devez être authentifié pour créer une annonce");
    }

    // useEditAdForm hook
    type DefaultAdValues = {
        id: string;
        title: string;
        description: string;
        price: number;
        address: string;
    };

    const getDefaultValues = (ad: Partial<DefaultAdValues>) => ({
        id: ad.id || "",
        title: ad.title || "",
        description: ad.description || "",
        price: ad.price || 0,
        address: ad.address || "",
    });
    // TODO le useForm est censé utilié le schema de validation

    const form = useForm<EditAdFormValues>({
        defaultValues: getDefaultValues(ad),
    });

    const editAdMutation = useUpdateAdMutation();

    const onSubmit: SubmitHandler<EditAdFormValues> = async (data) => {
        if (!token) throw new Error("Token not found");

        try {
            await editAdMutation.mutateAsync(data);
            onSave();
        } catch (error) {
            console.error("Error updating ad:", error);
        }
    };

    return {
        onSubmit,
        form,
    };
};

useUpdateAd.displayName = "useUpdateAd";

export { useUpdateAd };
