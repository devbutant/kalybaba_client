import React from "react";
import { useParams } from "react-router-dom";
import { useSingleAdQuery } from "../../api/queries/single-ad";

const SingleAd: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const { data: singleAd, isLoading, error } = useSingleAdQuery(id as string);

    if (!id) return <p>Erreur : l'annonce n'a pas d'ID valide.</p>;

    if (isLoading) return <p>Chargement...</p>;
    if (error) return <p>Erreur lors du chargement de l'annonce</p>;

    return (
        singleAd && (
            <>
                <div className="max-w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="p-6">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                            {singleAd.title}
                        </h2>
                        <p className="text-gray-600 mb-4">
                            {singleAd.description}
                        </p>
                        <div className="text-lg font-bold text-green-600">
                            ${singleAd.price.toFixed(2)}
                        </div>
                        <div className="text-sm text-gray-500 mt-2">
                            Publié par : {singleAd.author.name}
                        </div>
                    </div>
                    <div className="bg-gray-100 p-4 border-t border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-800">
                            Détails supplémentaires :
                        </h3>
                        <p className="text-gray-600">{singleAd.address}</p>
                    </div>
                </div>
            </>
        )
    );
};

SingleAd.displayName = "SingleAd";

export { SingleAd };
