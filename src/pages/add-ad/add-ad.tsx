import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppAuth } from "../../hooks/contexts-hooks/auth";
import { AdDto } from "../../types";
import { API } from "../../utils/environment";

type FormValues = {
    title: string;
    description: string;
    address: string;
    price: number;
    authorId: string;
    categoryId: string;
    typeId: string;
};

type Category = {
    id: string;
    name: string;
};

type Type = {
    id: string;
    name: string;
};

const AddAd = () => {
    const { token, userId } = useAppAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const { data: categories, isLoading: loadingCategories } = useQuery<
        Category[]
    >({
        queryKey: ["categories"],
        queryFn: async () => {
            const response = await axios.get<Category[]>(
                `${API.URL}/categories`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            return response.data;
        },
    });

    const { data: types, isLoading: loadingTypes } = useQuery<Type[]>({
        queryKey: ["types"],
        queryFn: async () => {
            const response = await axios.get<Type[]>(`${API.URL}/types`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        },
    });

    const addNewAd = async (newAd: FormValues) => {
        console.log("newAd", newAd);
        const response = await axios.post<AdDto>(`${API.URL}/ads`, newAd, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    };

    const mutation = useMutation<AdDto, Error, FormValues>({
        mutationFn: addNewAd,
        onSuccess: (data) => {
            console.log("Annonce déposée avec succès :", data);
        },
        onError: (error) => {
            console.error("Erreur de connexion :", error);
        },
    });
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        if (!token || !userId) {
            console.error("Token non disponible");
            return;
        }

        const adWithAuthorId = { ...data, authorId: userId }; // Ajout de authorId
        mutation.mutate(adWithAuthorId);
    };

    if (loadingCategories || loadingTypes) {
        return <p>Chargement des données...</p>;
    }

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
                        Titre
                    </label>
                    <input
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

                {/* Champ description */}
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

                {/* Champ address */}
                <div>
                    <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Adresse
                    </label>
                    <input
                        id="address"
                        {...register("address", {
                            required: "L'adresse est requise",
                        })}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {errors.address && (
                        <span className="text-red-500 text-sm">
                            {errors.address.message}
                        </span>
                    )}
                </div>

                {/* Champ price */}
                <div>
                    <label
                        htmlFor="price"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Prix
                    </label>
                    <input
                        id="price"
                        type="number"
                        {...register("price", {
                            required: "Le prix est requis",
                            valueAsNumber: true,
                        })}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {errors.price && (
                        <span className="text-red-500 text-sm">
                            {errors.price.message}
                        </span>
                    )}
                </div>

                {/* Champ typeId avec une liste déroulante */}
                <div>
                    <label
                        htmlFor="typeId"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Type
                    </label>
                    <select
                        id="typeId"
                        {...register("typeId", {
                            required: "Le type est requis",
                        })}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                        <option value="">Sélectionnez un type</option>
                        {types?.map((type) => (
                            <option key={type.id} value={type.id}>
                                {type.name}
                            </option>
                        ))}
                    </select>
                    {errors.typeId && (
                        <span className="text-red-500 text-sm">
                            {errors.typeId.message}
                        </span>
                    )}
                </div>

                {/* Champ categoryId avec une liste déroulante */}
                <div>
                    <label
                        htmlFor="categoryId"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Catégorie
                    </label>
                    <select
                        id="categoryId"
                        {...register("categoryId", {
                            required: "La catégorie est requise",
                        })}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                        <option value="">Sélectionnez une catégorie</option>
                        {categories?.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                    {errors.categoryId && (
                        <span className="text-red-500 text-sm">
                            {errors.categoryId.message}
                        </span>
                    )}
                </div>

                {/* Soumission du formulaire */}
                <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    {mutation.isPending ? (
                        <p>Envoi de l'annonce...</p>
                    ) : (
                        <p>Déposer l'annonce</p>
                    )}
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
