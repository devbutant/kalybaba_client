import React from "react";
import { useAdListQuery } from "../../api/queries/ads";

const Homepage: React.FC = () => {
    const { data: ads } = useAdListQuery();

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <header className="bg-blue-600 text-white py-4 w-full shadow-md">
                <h1 className="text-center text-3xl font-bold">
                    Bienvenue sur Yadetout
                </h1>
            </header>

            <main className="flex flex-col items-center justify-center flex-1 text-center px-4">
                <h2 className="text-2xl font-semibold mb-6">
                    Dernières annonces
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ads &&
                        ads.map((ad, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-lg p-6 max-w-sm"
                            >
                                <h3 className="text-xl font-bold mb-2">
                                    {ad.title}
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    {ad.description}
                                </p>
                                <span className="text-green-600 font-semibold">
                                    {ad.price}
                                </span>
                            </div>
                        ))}
                </div>
            </main>

            <footer className="bg-gray-800 text-white py-4 w-full text-center">
                <p>&copy; 2024 Yadetout</p>
            </footer>
        </div>
    );
};

Homepage.displayName = "Homepage";

export { Homepage };
