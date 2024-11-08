import { SingleAd } from "@/components/ad/single-ad";
import { useSingleAd } from "@/hooks/ad";
import { FC } from "react";
import { SingleAdLayout } from "./single-ad-layout";

const SingleAdPage: FC = () => {
    const { singleAdData } = useSingleAd();
    const { singleAd, isLoading, error, isMine, singleAdId } = singleAdData;

    if (!singleAdId) return <p>Erreur : l'annonce n'a pas d'ID valide.</p>;
    if (isLoading) return <p>Chargement...</p>;
    if (error) return <p>Erreur lors du chargement de l'annonce</p>;

    if (!singleAd) return <p>Aucune annonce trouvée</p>;

    return (
        <div className="flex items-center justify-center h-full bg-gray-50">
            <SingleAdLayout ad={singleAd}>
                <SingleAd ad={singleAd} isMine={isMine} />
            </SingleAdLayout>
        </div>
    );
};

SingleAdPage.displayName = "SingleAdPage";

export { SingleAdPage };
