import React from "react";
import { useAdListQuery } from "../../api/queries/ads";
import { AdCard } from "../../components/ad";

const Homepage: React.FC = () => {
    const { data: ads } = useAdListQuery();

    return (
        <div className="min-h-screenflex flex-col">
            <main className="flex flex-col flex-1">
                <h2 className="text-2xl font-semibold mb-6">
                    Dernières annonces
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ads &&
                        ads.map((ad, index) => <AdCard key={index} ad={ad} />)}
                </div>
            </main>
        </div>
    );
};

Homepage.displayName = "Homepage";

export { Homepage };
