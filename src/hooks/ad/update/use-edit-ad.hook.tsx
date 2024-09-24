import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUpdateAdMutation } from "../../../api/mutations/ads/update/update-ad.mutation";
import { EditAdFormValues } from "../../../types";
import { useSingleAd } from "../single-ad";
import { useGetDefaultValues } from "./use-get-default-values.hook";

const useEditAd = () => {
    const { singleAdData } = useSingleAd();
    const { singleAd, refetch } = singleAdData;

    const { getDefaultValues } = useGetDefaultValues();
    const editAdMutation = useUpdateAdMutation();

    const navigate = useNavigate();

    if (!singleAd) {
        throw new Error("Annonce non trouvée");
    }

    const form = useForm<EditAdFormValues>({
        defaultValues: getDefaultValues(singleAd),
    });

    const onSubmit: SubmitHandler<EditAdFormValues> = async (data) => {
        try {
            await editAdMutation.mutateAsync(data);
            refetch();
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
