import { Tags } from "@/components/ui/tag";
import { AdCardProps } from "@/types";
import { FC } from "react";
import { NavLink } from "react-router-dom";

const AdCard: FC<AdCardProps> = ({ ad }) => {
    return (
        <NavLink
            to={`/annonces/${ad.id}`}
            className="flex flex-col md:flex-row items-start bg-white rounded shadow-sm overflow-hidden transition-transform transform md:hover:bg-gray-200 md:h-60 w-full"
        >
            <div className="flex items-center w-3/3 md:w-1/3 mx-auto md:h-full bg-gray-200 h-52">
                {ad.photos && ad.photos[0] ? (
                    <img
                        src={ad.photos[0]}
                        alt={"Photo du setup " + ad.title}
                        className="object-scale-down w-full h-full"
                    />
                ) : (
                    <div className="flex items-center justify-center w-full h-full text-gray-500 text-sm">
                        Aucune image disponible
                    </div>
                )}
            </div>

            <div className="px-8 py-6 flex flex-col justify-between md:w-2/3 w-full">
                <div className="flex items-center justify-between">
                    <Tags
                        typeEnum={ad.typeEnum}
                        categoryEnum={ad.categoryEnum}
                        className="mb-0"
                    />
                    <div className="flex gap-1 items-center">
                        <span className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 text-sm font-semibold">
                            {ad.author.name[0]}
                        </span>
                        <span className="text-gray-800 font-semibold">
                            {ad.author.name}
                        </span>
                    </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mt-2">
                    {ad.title}
                </h3>
                <p className="mt-2 text-gray-600 line-clamp-3">
                    {ad.description}
                </p>
            </div>
        </NavLink>
    );
};

AdCard.displayName = "AdCard";

export { AdCard };
