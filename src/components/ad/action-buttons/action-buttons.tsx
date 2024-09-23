import { useSingleAd } from "../../../hooks/ad";

const ActionButtons: React.FC = () => {
    const { editFormMethods } = useSingleAd();
    const { handleEditClick, handleDelete } = editFormMethods;

    return (
        <div className="mt-4 flex justify-end space-x-4">
            <button
                onClick={handleEditClick}
                className="text-blue-600 hover:text-blue-800"
            >
                Modifier
            </button>
            <button
                onClick={handleDelete}
                className="text-red-600 hover:text-red-800"
            >
                Supprimer
            </button>
        </div>
    );
};

ActionButtons.displayName = "ActionButtons";

export { ActionButtons };
