import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppAuth } from "../../hooks/contexts-hooks/auth";
import { API } from "../../utils/environment";

type FormValues = {
    title: string;
    description: string;
    address: string; // Ajout de l'adresse
    price: number;
    authorId: string; // Ajout de l'ID de l'auteur
    categoryId: string; // Ajout de l'ID de la catégorie
    typeId: string; // Ajout de l'ID du type
};

type PostAdResponseDto = {
    id: string;
    title: string;
    description: string;
    address: string;
    price: number;
    authorId: string;
    categoryId: string;
    typeId: string;
    createdAt: string; // Utiliser string car c'est un format ISO
    updatedAt: string; // Utiliser string car c'est un format ISO
    type: {
        id: string;
        name: string;
        description: string;
    };
    category: {
        id: string;
        name: string;
        description: string;
    };
    author?: {
        id: string;
        email: string;
        name: string;
        password?: string; // À éviter de renvoyer pour des raisons de sécurité
        address: string;
        phone: string;
        connected: boolean;
        createdAt: string; // Utiliser string car c'est un format ISO
        updatedAt: string; // Utiliser string car c'est un format ISO
    };
};

const AddAd = () => {
    const { token } = useAppAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const addNewAd = async (newAd: FormValues) => {
        const response = await axios.post<PostAdResponseDto>(
            `${API.URL}/ads`,
            {
                title: newAd.title,
                description: newAd.description,
                address: newAd.address, // Assure-toi que newAd contient aussi l'adresse
                price: newAd.price,
                authorId: newAd.authorId, // Assure-toi que newAd contient authorId
                categoryId: newAd.categoryId, // Assure-toi que newAd contient categoryId
                typeId: newAd.typeId, // Assure-toi que newAd contient typeId
                createdAt: new Date().toISOString(), // Date actuelle au format ISO
                updatedAt: new Date().toISOString(), // Date actuelle au format ISO
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`, // Ajouter le token à l'en-tête Authorization
                },
            }
        );
        return response.data;
    };

    const mutation = useMutation<PostAdResponseDto, Error, FormValues>({
        mutationFn: addNewAd,
        onSuccess: async (data) => {
            console.log("Annonce déposée avec succès :", data);
        },
        onError: (error) => {
            console.error("Erreur de connexion :", error);
        },
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        mutation.mutate(data, {
            onSuccess: (response) => {
                console.log("Annonce déposée avec succès :", response.title);
                // Rediriger ou afficher un message de succès
            },
            onError: (error) => {
                console.error("Erreur lors du dépôt de l'annonce :", error);
                // Gérer les erreurs (afficher un message, etc.)
            },
        });
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-md shadow-md mt-8">
            <h1 className="text-2xl font-bold mb-6">
                Déposer une nouvelle annonce
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Titre de l'annonce
                    </label>
                    <input
                        type="text"
                        id="title"
                        {...register("title", {
                            required: "Le titre est requis",
                        })}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {errors.title && (
                        <span className="text-red-500 text-sm">
                            {errors.title.message}
                        </span>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Description
                    </label>
                    <textarea
                        id="description"
                        {...register("description", {
                            required: "La description est requise",
                        })}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {errors.description && (
                        <span className="text-red-500 text-sm">
                            {errors.description.message}
                        </span>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="price"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Prix (en €)
                    </label>
                    <input
                        type="number"
                        id="price"
                        {...register("price", {
                            required: "Le prix est requis",
                            min: {
                                value: 0,
                                message: "Le prix doit être positif",
                            },
                        })}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {errors.price && (
                        <span className="text-red-500 text-sm">
                            {errors.price.message}
                        </span>
                    )}
                </div>

                <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Déposer l'annonce
                </button>
            </form>

            {mutation.isError && (
                <p className="text-red-500 mt-4">
                    Erreur :{" "}
                    {mutation.error?.message || "Une erreur est survenue."}
                </p>
            )}
            {mutation.isSuccess && (
                <p className="text-green-500 mt-4">
                    Annonce déposée avec succès !
                </p>
            )}
        </div>
    );
};

AddAd.displayName = "AddAd";

export { AddAd };
