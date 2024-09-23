import { SubmitHandler, useForm } from "react-hook-form";
import { useUpdateAdMutation } from "../../../api/mutations/ads/update/update-ad.mutation";
import { EditAdFormValues } from "../../../types";
import { useAppAuth } from "../../contexts-hooks/auth/app";
import { useSingleAd } from "../single-ad";
import { useGetDefaultValues } from "./use-get-default-values.hook";

const useUpdateAd = (ad: Partial<EditAdFormValues>) => {
    const { token } = useAppAuth();

    if (!token) {
        throw new Error("Vous devez être authentifié pour créer une annonce");
    }

    const { getDefaultValues } = useGetDefaultValues();
    const form = useForm<EditAdFormValues>({
        defaultValues: getDefaultValues(ad),
    });

    const editAdMutation = useUpdateAdMutation();
    const { editFormMethods } = useSingleAd();
    const { handleSaveEdit } = editFormMethods;

    const onSubmit: SubmitHandler<EditAdFormValues> = async (data) => {
        if (!token) throw new Error("Token not found");

        try {
            await editAdMutation.mutateAsync(data);
            handleSaveEdit();
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
