import { Tags } from "@/components/ui/tag";
import { AdCardProps } from "@/types";
import { FC } from "react";
import { NavLink } from "react-router-dom";

const AdCard: FC<AdCardProps> = ({ ad }) => {
    return (
        <NavLink
            to={`/annonces/${ad.id}`}
            className="flex flex-col md:flex-row items-start bg-white rounded shadow-sm overflow-hidden transition-transform transform hover:bg-gray-200 w-full h-60"
        >
            <div className="flex items-center w-full md:w-1/3 h-full bg-gray-200">
                {ad.photos && ad.photos[0] ? (
                    <img
                        src={ad.photos[0]}
                        alt={"Photo du setup " + ad.title}
                        className="relative min-h-full min-w-full object-cover mx-auto z-10"
                    />
                ) : (
                    <div className="flex items-center justify-center w-full h-full text-gray-500 text-sm">
                        Aucune image disponible
                    </div>
                )}
            </div>

            <div className="p-4 flex flex-col justify-between md:w-2/3 w-full">
                <Tags typeEnum={ad.typeEnum} categoryEnum={ad.categoryEnum} />
                <h3 className="text-xl font-semibold text-gray-800 mt-2">
                    {ad.title}
                </h3>
                <p className="mt-2 text-gray-600 line-clamp-3">
                    {ad.description}
                </p>
                <div className="mt-auto">
                    <div className="flex justify-between items-center mt-4">
                        <span className="text-lg text-gray-500">
                            {ad.author.name}
                        </span>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

AdCard.displayName = "AdCard";

export { AdCard };
