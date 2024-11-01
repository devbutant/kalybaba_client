import { useAppAuth } from "@/hooks/contexts-hooks/auth/app-auth/use-auth.hook";
import { FC } from "react";

const Profil: FC = () => {
    const { authData } = useAppAuth();
    const { user } = authData;
    console.log("authData ", authData);

    return (
        <div className="flex flex-col items-center p-6">
            {/* Main Container */}
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 md:p-12">
                {/* Profile Header Section */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Profile"
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-indigo-500"
                    />
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl font-semibold text-gray-800">
                            John Doe
                        </h1>
                        <p className="text-gray-600">Développeur Full Stack</p>
                        <p className="text-gray-500">{user.email}</p>
                        <div className="mt-4 flex gap-4 justify-center md:justify-start">
                            <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none">
                                Modifier le profil
                            </button>
                            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 focus:outline-none">
                                Voir les paramètres
                            </button>
                        </div>
                    </div>
                </div>

                {/* Quick Actions Section */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-indigo-50 p-4 rounded-lg text-center">
                        <h2 className="text-lg font-semibold text-indigo-600">
                            Messages
                        </h2>
                        <p className="text-gray-600">12 nouveaux messages</p>
                        <button className="mt-2 text-indigo-500 hover:underline">
                            Voir
                        </button>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg text-center">
                        <h2 className="text-lg font-semibold text-indigo-600">
                            Notifications
                        </h2>
                        <p className="text-gray-600">
                            5 nouvelles notifications
                        </p>
                        <button className="mt-2 text-indigo-500 hover:underline">
                            Voir
                        </button>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg text-center">
                        <h2 className="text-lg font-semibold text-indigo-600">
                            Amis
                        </h2>
                        <p className="text-gray-600">28 amis</p>
                        <button className="mt-2 text-indigo-500 hover:underline">
                            Gérer
                        </button>
                    </div>
                </div>

                {/* Additional Information Section */}
                <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-xl font-semibold text-gray-700">
                        Informations personnelles
                    </h2>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <span className="block text-gray-600">Nom :</span>
                            <span className="block text-gray-800 font-medium">
                                John Doe
                            </span>
                        </div>
                        <div>
                            <span className="block text-gray-600">Email :</span>
                            <span className="block text-gray-800 font-medium">
                                johndoe@example.com
                            </span>
                        </div>
                        <div>
                            <span className="block text-gray-600">
                                Téléphone :
                            </span>
                            <span className="block text-gray-800 font-medium">
                                +33 6 12 34 56 78
                            </span>
                        </div>
                        <div>
                            <span className="block text-gray-600">
                                Adresse :
                            </span>
                            <span className="block text-gray-800 font-medium">
                                123 Rue de Paris, France
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Profil.displayName = "Profil";

export { Profil };
