import { Button } from "../../components/button";
import { Input, Select } from "../../components/form";
import { useCreateAd } from "../../hooks/ad";

const CreateAd: React.FC = () => {
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
                    requiredMsg="La catégorie est requise"
                    options={categories}
                />

                <Select
                    key="type"
                    placeholder="Sélectionnez un type"
                    name="typeEnum"
                    register={register}
                    error={errors.typeEnum}
                    requiredMsg="Le type est requis"
                    options={types}
                />

                {/* <Input
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
                /> */}

                <Button
                    type="submit"
                    className="inline-flex justify-center py-2 px-6 border border-transparent shadow-lg text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
