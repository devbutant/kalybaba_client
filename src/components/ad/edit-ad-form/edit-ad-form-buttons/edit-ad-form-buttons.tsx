import { Button } from "@/shadcn/components/ui/button";
import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditAdButtons: FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    return (
        <div className="flex items-center justify-between">
            <Button type="submit">Enregistrer les modifications</Button>
            <Button
                type="button"
                variant="destructive"
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
