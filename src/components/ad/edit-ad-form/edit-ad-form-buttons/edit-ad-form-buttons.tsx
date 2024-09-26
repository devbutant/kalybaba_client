import { Button } from "@/components/button";
import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditAdButtons: FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    return (
        <div className="flex items-center justify-between">
            <Button
                type="submit"
                className="bg-indigo-700 hover:bg-indigo-800 focus:ring-2 focus:ring-opacity-50"
            >
                Enregistrer les modifications
            </Button>
            <Button
                type="button"
                className="bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-opacity-50"
                onClick={() => {
                    navigate(`/annonces/${id}`);
                }}
            >
                Annuler
            </Button>
        </div>
    );
};

EditAdButtons.displayName = "EditAdButtons";

export { EditAdButtons };
