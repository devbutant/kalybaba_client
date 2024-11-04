import { Tags } from "@/components/ui/tag";
import { Ad } from "@/types";
import { FC, useState } from "react";
import { ActionButtons } from "../action-buttons";

interface SingleAdProps {
    ad: Ad;
    isMine: boolean;
}

const SingleAd: FC<SingleAdProps> = ({ ad, isMine }) => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    return (
        <div className="flex flex-col md:flex-row justify-center p-4 gap-10 items-center">
            <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xl flex-grow border px-6 pb-5">
                {isMine && <ActionButtons />}

                <Tags
                    typeEnum={ad.typeEnum}
                    categoryEnum={ad.categoryEnum}
                    className="mb-4"
                />

                <div className="relative flex justify-center py-4">
                    {ad.photos && ad.photos[currentPhotoIndex] ? (
                        <img
                            src={ad.photos[currentPhotoIndex]}
                            alt={"Photo du setup " + ad.title}
                            className="min-w-96 h-64 object-scale-down"
                        />
                    ) : (
                        <div className="flex items-center justify-center w-full h-64 text-gray-500 text-sm">
                            Aucune image disponible
                        </div>
                    )}
                </div>

                <div className="text-gray-500">
                    Publié par:{" "}
                    <span className="font-medium">{ad.author.name}</span>
                </div>
            </div>

            <div className="flex-col w-4/5 md:w-1/3">
                <div className="grid grid-cols-2 gap-2 h-full pb-4 w-full">
                    {ad.photos &&
                        ad.photos.map((photo, index) => (
                            <div
                                key={index}
                                className={`relative border-8 transition-all duration-200 hover:scale-105  ${
                                    index === currentPhotoIndex
                                        ? "border-blue-500"
                                        : "border-gray-300"
                                }`}
                            >
                                <img
                                    src={photo}
                                    alt={`Miniature ${index + 1}`}
                                    className="object-cover w-full h-full cursor-pointer transition-transform duration-200"
                                    onClick={() => setCurrentPhotoIndex(index)}
                                />
                            </div>
                        ))}
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {ad.title}
                </h2>
                <p className="text-lg text-gray-700 mb-4">{ad.description}</p>
            </div>
        </div>
    );
};

SingleAd.displayName = "SingleAd";

export { SingleAd };
