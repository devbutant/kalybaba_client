import React from "react";
// import { useAdListQuery } from "../../api/queries/ads";

const Homepage: React.FC = () => {
    // const { data } = useAdListQuery();
    // console.log(data);

    const ads = [
        {
            title: "Vélo d'occasion",
            description: "Un vélo en bon état, à vendre à petit prix.",
            price: "150€",
        },
        {
            title: "iPhone 12",
            description: "iPhone 12 en excellent état, couleur noire.",
            price: "600€",
        },
        {
            title: "Canapé 3 places",
            description: "Canapé confortable, très peu utilisé.",
            price: "250€",
        },
        {
            title: "Ordinateur portable",
            description:
                "Laptop de 15 pouces, idéal pour le travail à distance.",
            price: "450€",
        },
        {
            title: "Table en bois",
            description:
                "Table robuste, en bois massif, idéale pour la salle à manger.",
            price: "300€",
        },
        {
            title: "Chaise de bureau",
            description:
                "Chaise ergonomique pour un confort optimal au travail.",
            price: "80€",
        },
        {
            title: "Télévision 4K",
            description: "Télévision 55 pouces, qualité 4K, presque neuve.",
            price: "700€",
        },
        {
            title: "Smartwatch",
            description:
                "Montre connectée avec suivi d'activité et notifications.",
            price: "120€",
        },
        {
            title: "Console de jeux",
            description:
                "Console de jeux dernière génération, très peu utilisée.",
            price: "500€",
        },
        {
            title: "Réfrigérateur",
            description: "Réfrigérateur de grande capacité, en très bon état.",
            price: "400€",
        },
        {
            title: "Machine à laver",
            description:
                "Machine à laver avec différents programmes, fonctionne parfaitement.",
            price: "350€",
        },
        {
            title: "Sac à dos",
            description:
                "Sac à dos pour ordinateur portable, résistant à l'eau.",
            price: "40€",
        },
        {
            title: "Appareil photo reflex",
            description: "Appareil photo reflex avec objectif inclus.",
            price: "800€",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <header className="bg-blue-600 text-white py-4 w-full shadow-md">
                <h1 className="text-center text-3xl font-bold">
                    Bienvenue sur MaGéanteBrocante
                </h1>
            </header>

            <main className="flex flex-col items-center justify-center flex-1 text-center px-4">
                <h2 className="text-2xl font-semibold mb-6">
                    Dernières annonces
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ads.map((ad, index) => (
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
                <p>&copy; 2024 MaGéanteBrocante</p>
            </footer>
        </div>
    );
};

Homepage.displayName = "Homepage";

export { Homepage };
