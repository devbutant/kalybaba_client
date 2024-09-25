import { useNavigate, useParams } from "react-router-dom";
import { useDeleteAdMutation } from "../../../api/mutations/ads/delete/delete-ad.mutation";
import { useSingleAdQuery } from "../../../api/queries/ads/single-ad";
import { useAppAuth } from "../../contexts-hooks/auth";

const useSingleAd = () => {
    const { id: singleAdId } = useParams<{ id: string }>();
    const { token, userId } = useAppAuth();

    const navigate = useNavigate();

    const {
        data: singleAd,
        isLoading,
        error,
        refetch,
    } = useSingleAdQuery(singleAdId as string);

    const isMine = singleAd?.authorId === userId;
    const deleteAdMutation = useDeleteAdMutation();

    const handleDelete = async () => {
        if (!token || !singleAd) throw new Error("Token not found");

        try {
            await deleteAdMutation.mutateAsync(singleAd.id);
        } catch (error) {
            console.error("Error deleting ad:", error);
        } finally {
            navigate(-2);
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
