import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSingleAdQuery } from "../../api/queries/ads/single-ad";
import createAxiosInstance from "../../config/axios/axiosConfig";
import { useAppAuth } from "../../hooks/contexts-hooks/auth";
import { EditAdForm } from "../edit-ad-form";

interface SingleAdProps {
    mine?: boolean;
}

const SingleAd: React.FC<SingleAdProps> = (props) => {
    const { id } = useParams<{ id: string }>();
    const { mine = false } = props;
    const { token } = useAppAuth();

    const {
        data: singleAd,
        isLoading,
        error,
        refetch,
    } = useSingleAdQuery(id as string);
    const [isEditing, setIsEditing] = useState(false);

    if (!id) return <p>Erreur : l'annonce n'a pas d'ID valide.</p>;

    if (isLoading) return <p>Chargement...</p>;
    if (error) return <p>Erreur lors du chargement de l'annonce</p>;

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

    const handleDelete = async () => {
        console.log("Deleting ad...");

        if (!token || !singleAd) throw new Error("Token not found");

        try {
            const axiosInstance = createAxiosInstance(token);
            await axiosInstance.delete(`/ads/${singleAd.id}`);
        } catch (error) {
            console.error("Error deleting ad:", error);
        }
    };

    return (
        singleAd && (
            <>
                <div
                    className="mx-auto bg-white shadow-md rounded-lg overflow-hidden"
                    style={{ width: "40rem" }}
                >
                    {isEditing ? (
                        <EditAdForm
                            ad={singleAd}
                            onCancel={handleCancelEdit}
                            onSave={handleSaveEdit}
                        />
                    ) : (
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
                            {mine && (
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
                            )}
                        </div>
                    )}
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
