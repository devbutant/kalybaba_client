import React from "react";
import { Ad } from "../../../types";
import { ActionButtons } from "../action-buttons";

interface SingleAdProps {
    ad: Ad;
    isMine: boolean;
}

const SingleAd: React.FC<SingleAdProps> = (props) => {
    const { ad, isMine } = props;

    return (
        <>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                {ad.title}
            </h2>
            <p className="text-gray-600 mb-4">{ad.description}</p>
            <div className="text-lg font-bold text-green-600">
                ${ad.price.toFixed(2)}
            </div>
            <div className="text-sm text-gray-500 mt-2">
                Publié par : {ad.author.name}
            </div>

            {isMine && <ActionButtons />}
        </>
    );
};

SingleAd.displayName = "SingleAd";

export { SingleAd };
