import { Tags } from "@/components/ui/tag";
import { AdCardProps } from "@/types";
import { FC } from "react";
import { NavLink } from "react-router-dom";

const AdCard: FC<AdCardProps> = ({ ad }) => {
    return (
        <NavLink
            to={`/annonces/${ad.id}`}
            className="flex flex-col md:flex-row items-start bg-white rounded shadow-sm overflow-hidden transition-transform transform hover:bg-gray-200"
        >
            <div className="flex-shrink-0 w-full md:w-1/3">
                <img
                    src={ad.photos && ad.photos[0]}
                    alt={"Photo du setup " + ad.title}
                    className="w-full h-48 md:h-auto object-cover"
                />
            </div>

            <div className="p-4 flex flex-col justify-between md:w-2/3">
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
                        <span className="text-lg font-bold text-green-600">
                            ${ad.price.toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export { AdCard };
