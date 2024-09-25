import { EditAdFormValues } from "@/types";

const useGetDefaultValues = () => {
    type DefaultAdValues = {
        id: string;
        title: string;
        description: string;
        price: number;
        city: string;
        typeEnum: string;
        categoryEnum: string;
    };

    const getDefaultValues = (
        ad: Pick<EditAdFormValues, keyof DefaultAdValues> | undefined
    ): DefaultAdValues => ({
        id: ad?.id || "",
        title: ad?.title || "",
        description: ad?.description || "",
        price: ad?.price || 0,
        city: ad?.city || "",
        categoryEnum: ad?.categoryEnum || "",
        typeEnum: ad?.typeEnum || "",
    });

    return {
        getDefaultValues,
    };
};

useGetDefaultValues.displayName = "useGetDefaultValues";

export { useGetDefaultValues };
