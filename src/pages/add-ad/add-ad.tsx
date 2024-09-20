import { useMutation, useQuery } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../components/form";
import createAxiosInstance from "../../config/axios/axiosConfig";
import { useAppAuth } from "../../hooks/contexts-hooks/auth";
import { AdDto } from "../../types";

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

interface Option {
    value: string;
    label: string;
}

const AddAd = () => {
    const { token, userId } = useAppAuth();
    const axiosInstance = createAxiosInstance(token);

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
            const { data: categoryList } = await axiosInstance.get(
                `/categories`
            );
            return categoryList;
        },
    });

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

    const categoryOptions: Option[] | undefined = categories?.map(
        (category) => ({
            value: category.id,
            label: category.name,
        })
    );

    const addNewAd = async (newAd: FormValues) => {
        const { data: ad } = await axiosInstance.post<AdDto>("/ads", newAd);
        return ad;
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
        console.log("data", data);
        if (!token || !userId) {
            console.error("Token non disponible");
            return;
        }

        const adWithAuthorId = { ...data, authorId: userId };
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
                    options={typeOptions} // Passer les options pour le sélecteur
                />
                <Input
                    type="text"
                    placeholder="Sélectionnez une catégorie"
                    name="categoryId"
                    register={register}
                    error={errors.categoryId}
                    options={categoryOptions} // Passer les options pour le sélecteur
                />

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
