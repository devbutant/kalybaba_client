import { useDeleteAdMutation } from "@/api/mutations/ads/delete/delete-ad.mutation";
import { useSingleAdQuery } from "@/api/queries/ads/single-ad";
import { useCheckAuthQuery } from "@/api/queries/auth/check-auth/check-auth.query";
import { useParams } from "react-router-dom";

const useSingleAd = () => {
    const { id: singleAdId } = useParams<{ id: string }>();
    const { data } = useCheckAuthQuery();
    const userId = data?.user?.id;

    const {
        data: singleAd,
        isLoading,
        error,
        refetch,
    } = useSingleAdQuery(singleAdId as string);

    const isMine = singleAd?.authorId === userId;
    const deleteAdMutation = useDeleteAdMutation();

    const handleDelete = async () => {
        if (!singleAd) throw new Error("Annonce non trouvée");

        try {
            await deleteAdMutation.mutateAsync(singleAd.id);
        } catch (error) {
            console.error("Error deleting ad:", error);
        }
    };

    const editFormMethods = {
        handleDelete,
    };

    const singleAdData = {
        singleAd,
        isLoading,
        error,
        isMine,
        singleAdId,
        refetch,
    };

    return { editFormMethods, singleAdData };
};

useSingleAd.displayName = "useSingleAd";

export { useSingleAd };
