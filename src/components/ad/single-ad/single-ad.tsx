import { Ad } from "@/types";
import { FC } from "react";
import { ActionButtons } from "../action-buttons";

interface SingleAdProps {
    ad: Ad;
    isMine: boolean;
}

const SingleAd: FC<SingleAdProps> = (props) => {
    const { ad, isMine } = props;

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xl mx-auto">
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

            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {ad.title}
                </h2>

                <p className="text-lg text-gray-700 mb-4">{ad.description}</p>

                <div className="flex justify-between items-center">
                    <div className="text-gray-500">
                        Publié par :{" "}
                        <span className="font-medium">{ad.author.name}</span>
                    </div>
                </div>

                {isMine && (
                    <div className="mt-4">
                        <ActionButtons />
                    </div>
                )}
            </div>
        </div>
    );
};

SingleAd.displayName = "SingleAd";

export { SingleAd };
