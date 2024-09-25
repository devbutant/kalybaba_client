import { useSingleAd } from "@/hooks/ad";
import { Link, useParams } from "react-router-dom";

const ActionButtons: React.FC = () => {
    const { editFormMethods } = useSingleAd();
    const { handleDelete } = editFormMethods;

    const { id } = useParams<{ id: string }>();

    return (
        <div className="mt-4 flex justify-end space-x-4">
            <Link
                to={`/annonces/modification/${id}`}
                className="text-blue-600 hover:text-blue-800"
            >
                Modifier
            </Link>
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
