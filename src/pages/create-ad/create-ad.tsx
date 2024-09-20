import { Button } from "../../components/button";
import { Input } from "../../components/form";
import { SplashScreen } from "../../components/loading";
import { useCategory } from "../../hooks/ads/category";
import { useCreateAd } from "../../hooks/ads/create";
import { useType } from "../../hooks/ads/type";

const CreateAdd: React.FC = () => {
    const { onFormSubmit, mutationError, isSuccess, form } = useCreateAd();
    const {
        handleSubmit,
        formState: { errors, isSubmitting },
        register,
    } = form;

    const { typeOptions, loadingTypes } = useType();
    const { categoryOptions, loadingCategories } = useCategory();

    if (loadingCategories || loadingTypes) {
        return <SplashScreen />;
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

                <Button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    {isSubmitting ? (
                        <p>Envoi de l'annonce...</p>
                    ) : (
                        <p>Déposer l'annonce</p>
                    )}
                </Button>
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

CreateAdd.displayName = "CreateAdd";

export { CreateAdd };
