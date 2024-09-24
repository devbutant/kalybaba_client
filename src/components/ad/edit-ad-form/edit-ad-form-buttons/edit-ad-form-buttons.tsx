import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../../button";

const EditAdButtons: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    return (
        <div className="flex items-center justify-between">
            <Button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Save
            </Button>
            <Button
                type="button"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => {
                    navigate(`/annonces/${id}`);
                }}
            >
                Cancel
            </Button>
        </div>
    );
};

EditAdButtons.displayName = "EditAdButtons";

export { EditAdButtons };
