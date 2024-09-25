import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUpdateAdMutation } from "../../../api/mutations/ads/update/update-ad.mutation";
import { AdDto, EditAdFormValues } from "../../../types";
import { useGetDefaultValues } from "./use-get-default-values.hook";

const useEditAd = (ad: AdDto | undefined) => {
    const { getDefaultValues } = useGetDefaultValues();
    const editAdMutation = useUpdateAdMutation();

    const navigate = useNavigate();

    if (!ad) {
        console.log("Annonce non trouvée");
    }

    const form = useForm<EditAdFormValues>({
        defaultValues: getDefaultValues(ad),
    });

    const onSubmit: SubmitHandler<EditAdFormValues> = async (data) => {
        try {
            await editAdMutation.mutateAsync(data);
        } catch (error) {
            console.error("Error updating ad:", error);
        } finally {
            form.reset();
            navigate(-1);
        }
    };

    return { onSubmit, form };
};

useEditAd.displayName = "useEditAd";

export { useEditAd };
