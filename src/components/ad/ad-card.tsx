import React from "react";
import { NavLink } from "react-router-dom";
import { AdCardProps } from "../../types/component-props";

const AdCard: React.FC<React.PropsWithChildren<AdCardProps>> = ({
    children,
    ad,
}) => {
    return (
        <NavLink
            to={`/ads/${ad.id}`}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:bg-gray-200 flex flex-col h-50"
        >
            <div className="p-6 flex-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {ad.title}
                </h3>
            </div>

            <div className="bg-gray-100 p-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-green-600">
                        ${ad.price.toFixed(2)}
                    </span>
                    <span className="text-lg text-gray-500">
                        {ad.author.address}
                    </span>
                </div>
            </div>

            {children}
        </NavLink>
    );
};

AdCard.displayName = "AdCard";

export { AdCard };
