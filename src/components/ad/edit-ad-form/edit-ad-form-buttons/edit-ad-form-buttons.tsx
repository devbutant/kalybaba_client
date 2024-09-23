import { useSingleAd } from "../../../../hooks/ad";
import { Button } from "../../../button";

const EditAdButtons: React.FC = () => {
    const { editFormMethods } = useSingleAd();
    const { handleCancelEdit } = editFormMethods;

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
                onClick={handleCancelEdit}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Cancel
            </Button>
        </div>
    );
};

EditAdButtons.displayName = "EditAdButtons";

export { EditAdButtons };
