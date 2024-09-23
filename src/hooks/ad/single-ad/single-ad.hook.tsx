import { useParams } from "react-router-dom";
import { useDeleteAdMutation } from "../../../api/mutations/ads/delete/delete-ad.mutation";
import { useSingleAdQuery } from "../../../api/queries/ads/single-ad";
import { useSingleAdContext } from "../../contexts-hooks/ad";
import { useAppAuth } from "../../contexts-hooks/auth";

const useSingleAd = () => {
    const { id: singleAdId } = useParams<{ id: string }>();
    const { token, userId } = useAppAuth();

    const {
        data: singleAd,
        isLoading,
        error,
        refetch,
    } = useSingleAdQuery(singleAdId as string);

    const isMine = singleAd?.author.id === userId;

    const { editFormStates } = useSingleAdContext();
    const { setIsEditing } = editFormStates;

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
    };

    const handleSaveEdit = async () => {
        setIsEditing(false);
        await refetch();
    };

    const deleteAdMutation = useDeleteAdMutation();

    const handleDelete = async () => {
        if (!token || !singleAd) throw new Error("Token not found");

        try {
            await deleteAdMutation.mutateAsync(singleAd.id);
        } catch (error) {
            console.error("Error deleting ad:", error);
        }
    };

    const editFormMethods = {
        handleEditClick,
        handleCancelEdit,
        handleSaveEdit,
        handleDelete,
    };

    const singleAdData = {
        singleAd,
        isLoading,
        error,
        isMine,
        singleAdId,
    };

    return { editFormMethods, singleAdData };
};

useSingleAd.displayName = "useSingleAd";

export { useSingleAd };
