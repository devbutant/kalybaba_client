import { Button } from "@/components/button";
import { Input, Select } from "@/components/form";
import { useCreateAd } from "@/hooks/ad";
import { FC } from "react";

const CreateAd: FC = () => {
    const { onFormSubmit, mutationError, isSuccess, form } = useCreateAd();
    const {
        handleSubmit,
        formState: { errors, isSubmitting },
        register,
    } = form;

    // TODO: mettre les types et les catégories dans un fichier séparé
    const types = ["OFFER", "DEMAND"];

    const categories = [
        "VEHICLE",
        "REAL_ESTATE",
        "MULTIMEDIA",
        "HOME",
        "LEISURE",
        "FASHION",
        "CHILDREN",
        "ANIMALS",
        "SERVICES",
        "EMPLOYMENT",
        "OTHERS",
    ];

    return (
        <div className="mx-auto p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-8 text-blue-800">
                Déposer une nouvelle annonce
            </h1>
            <form
                onSubmit={handleSubmit(onFormSubmit)}
                className="grid grid-cols-2 gap-6"
            >
                {/* TODO: Créer un composants CreateAdInputs */}
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
                    placeholder="Ville"
                    name="city"
                    register={register}
                    error={errors.city}
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

                <Select
                    key="category"
                    placeholder="Sélectionnez une catégorie"
                    name="categoryEnum"
                    register={register}
                    error={errors["categoryEnum"]}
                    requiredMessage="La catégorie est requise"
                    options={categories}
                />

                <Select
                    key="type"
                    placeholder="Sélectionnez un type"
                    name="typeEnum"
                    register={register}
                    error={errors.typeEnum}
                    requiredMessage="Le type est requis"
                    options={types}
                />

                <Button
                    type="submit"
                    className="bg-indigo-700 hover:bg-indigo-800 focus:ring-2 focus:ring-opacity-50"
                >
                    {isSubmitting ? (
                        <p>Envoi de l'annonce...</p>
                    ) : (
                        <p>Déposer l'annonce</p>
                    )}
                </Button>
            </form>

            {mutationError && (
                <p className="text-red-500 mt-6">
                    Erreur :{" "}
                    {mutationError.message || "Une erreur est survenue."}
                </p>
            )}
            {isSuccess && (
                <p className="text-green-500 mt-6">
                    Annonce déposée avec succès !
                </p>
            )}
        </div>
    );
};

CreateAd.displayName = "CreateAd";

export { CreateAd };
