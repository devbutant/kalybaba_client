import React from "react";
import { EditAdForm } from "../../components/ad/edit-ad-form/ok-edit-ad-form";
import { SingleAd } from "../../components/ad/single-ad";
import { useSingleAd } from "../../hooks/ad";
import { useSingleAdContext } from "../../hooks/contexts-hooks/ad";
import { SingleAdLayout } from "./single-ad-layout";

const SingleAdPage: React.FC = () => {
    const { singleAdData } = useSingleAd();
    const { singleAd, isLoading, error, isMine, singleAdId } = singleAdData;

    const { editFormStates } = useSingleAdContext();
    const { isEditing } = editFormStates;

    // Todo: Gérer les cas d'erreur
    if (!singleAdId) return <p>Erreur : l'annonce n'a pas d'ID valide.</p>;
    if (isLoading) return <p>Chargement...</p>;
    if (error) return <p>Erreur lors du chargement de l'annonce</p>;

    if (!singleAd) return <p>Aucune annonce trouvée</p>;

    return (
        <SingleAdLayout ad={singleAd}>
            {isEditing ? (
                <EditAdForm ad={singleAd} />
            ) : (
                <SingleAd ad={singleAd} isMine={isMine} />
            )}
        </SingleAdLayout>
    );
};

SingleAdPage.displayName = "SingleAdPage";

export { SingleAdPage };
