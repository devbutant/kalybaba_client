import { Tags } from "@/components/ui/tag";
import { AdCardProps } from "@/types/component-props";
import { FC } from "react";
import { NavLink } from "react-router-dom";

const AdCard: FC<AdCardProps> = (props) => {
    const { ad } = props;

    return (
        <NavLink
            to={`/annonces/${ad.id}`}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:bg-gray-200 flex flex-col"
        >
            <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <Tags
                        typeEnum={ad.typeEnum}
                        categoryEnum={ad.categoryEnum}
                    />
                    <h3 className="text-2xl font-semibold mb-2 text-gray-800 truncate-multiline">
                        {ad.title}
                    </h3>
                    <p className="text-gray-600 mb-4 truncate-multiline">
                        {ad.description}
                    </p>
                </div>
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
