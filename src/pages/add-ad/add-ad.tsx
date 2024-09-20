import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useCategoryListQuery } from "../../api/queries/ads/categories/categories.query";
import { Input } from "../../components/form";
import createAxiosInstance from "../../config/axios/axiosConfig";
import { useCreateAd } from "../../hooks/ads/create";
import { useAppAuth } from "../../hooks/contexts-hooks/auth";
import { CreateAdDto } from "../../types";

// type Category = {
//     id: string;
//     name: string;
// };

type Type = {
    id: string;
    name: string;
};

interface Option {
    value: string;
    label: string;
}

const AddAd: React.FC = () => {
    const { token } = useAppAuth();
    const axiosInstance = createAxiosInstance(token);

    const { onFormSubmit, isSubmitting, mutationError, isSuccess } =
        useCreateAd();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateAdDto>();

    // Aide moi a extraire ceci
    // const { data: categories, isLoading: loadingCategories } = useQuery<
    //     Category[]
    // >({
    //     queryKey: ["categories"],
    //     queryFn: async () => {
    //         const { data: categoryList } = await axiosInstance.get(
    //             `/categories`
    //         );
    //         return categoryList;
    //     },
    // });
    // fin

    const { data: categories, isLoading: loadingCategories } =
        useCategoryListQuery();

    const categoryOptions: Option[] | undefined = categories?.map(
        (category) => ({
            value: category.id,
            label: category.name,
        })
    );

    const { data: types, isLoading: loadingTypes } = useQuery<Type[]>({
        queryKey: ["types"],
        queryFn: async () => {
            const { data: typeList } = await axiosInstance.get(`/types`);
            return typeList;
        },
    });

    const typeOptions: Option[] | undefined = types?.map((type) => ({
        value: type.id,
        label: type.name,
    }));

    if (loadingCategories || loadingTypes) {
        return <p>Chargement des données...</p>;
    }

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-md shadow-md mt-8">
            <h1 className="text-2xl font-bold mb-6">
                Déposer une nouvelle annonce
            </h1>
            <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
                <Input
                    type="text"
                    placeholder="Titre"
                    name="title"
                    register={register}
                    error={errors.title}
                />
                <Input
                    type="text"
                    placeholder="Description"
                    name="description"
                    register={register}
                    error={errors.description}
                />
                <Input
                    type="text"
                    placeholder="Adresse"
                    name="address"
                    register={register}
                    error={errors.address}
                />
                <Input
                    type="number"
                    placeholder="Prix"
                    name="price"
                    register={register}
                    error={errors.price}
                    valueAsNumber={true}
                    min={0}
                    step={0.01}
                />
                <Input
                    type="text"
                    placeholder="Sélectionnez un type"
                    name="typeId"
                    register={register}
                    error={errors.typeId}
                    options={typeOptions}
                />
                <Input
                    type="text"
                    placeholder="Sélectionnez une catégorie"
                    name="categoryId"
                    register={register}
                    error={errors.categoryId}
                    options={categoryOptions}
                />

                <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    {isSubmitting ? (
                        <p>Envoi de l'annonce...</p>
                    ) : (
                        <p>Déposer l'annonce</p>
                    )}
                </button>
            </form>

            {mutationError && (
                <p className="text-red-500 mt-4">
                    Erreur :{" "}
                    {mutationError.message || "Une erreur est survenue."}
                </p>
            )}
            {isSuccess && (
                <p className="text-green-500 mt-4">
                    Annonce déposée avec succès !
                </p>
            )}
        </div>
    );
};

AddAd.displayName = "AddAd";

export { AddAd };
