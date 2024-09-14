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
            className={"bg-white shadow-lg rounded-lg p-6 max-w-sm"}
        >
            <h3 className="text-xl font-bold mb-2">{ad.title}</h3>
            <p className="text-gray-700 mb-4">{ad.description}</p>
            <span className="text-green-600 font-semibold">{ad.price}</span>
            {children}
        </NavLink>
    );
};

AdCard.displayName = "AdCard";

export { AdCard };
