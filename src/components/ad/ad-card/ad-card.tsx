import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa"; // Importing edit icon from react-icons
import { NavLink } from "react-router-dom";
import { AdCardProps } from "../../../types/component-props";

const AdCard: React.FC<AdCardProps> = ({ ad, mine }) => {
    const handleDelete = (adId: string, event: React.MouseEvent) => {
        event.preventDefault(); // Prevent navigation
        // Implement delete functionality here
        console.log(`Deleting ad with id: ${adId}`);
    };

    const handleEdit = (adId: string, event: React.MouseEvent) => {
        event.preventDefault(); // Prevent navigation
        // Implement edit functionality here
        console.log(`Editing ad with id: ${adId}`);
    };

    return (
        <NavLink
            to={`/ads/${ad.id}`}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:bg-gray-200 flex flex-col h-full"
        >
            <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                        {ad.title}
                    </h3>
                    <p className="text-gray-600 mb-4 truncate-multiline">
                        {ad.description}
                    </p>
                </div>
                {mine && (
                    <div className="flex justify-end space-x-4 mt-4">
                        <button
                            onClick={(event) => handleEdit(ad.id, event)}
                            className="text-blue-600 hover:text-blue-800 flex items-center"
                        >
                            <FaEdit className="mr-1" />
                            Modifier
                        </button>
                        <button
                            onClick={(event) => handleDelete(ad.id, event)}
                            className="text-red-600 hover:text-red-800 flex items-center"
                        >
                            <FaTrash className="mr-1" />
                            Supprimer
                        </button>
                    </div>
                )}
            </div>

            <div className="bg-gray-100 p-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                    <span className="text-lg text-gray-500">
                        {ad.author.name}
                    </span>
                    <span className="text-lg font-bold text-green-600">
                        ${ad.price.toFixed(2)}
                    </span>
                </div>
            </div>
        </NavLink>
    );
};

AdCard.displayName = "AdCard";

export { AdCard };
