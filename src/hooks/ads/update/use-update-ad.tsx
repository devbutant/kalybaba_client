import { SubmitHandler, useForm } from "react-hook-form";
import { useUpdateAdMutation } from "../../../api/mutations/ads/update/update-ad.mutation";
import { EditAdFormValues } from "../../../types";
import { useAppAuth } from "../../contexts-hooks/auth/app";
import { useGetDefaultValues } from "./use-get-default-values";

const useUpdateAd = (ad: Partial<EditAdFormValues>, onSave: () => void) => {
    const { token } = useAppAuth();

    if (!token) {
        throw new Error("Vous devez être authentifié pour créer une annonce");
    }
    const { getDefaultValues } = useGetDefaultValues();

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
