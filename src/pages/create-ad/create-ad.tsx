import { Button } from "../../components/button";
import { Input } from "../../components/form";
import { SplashScreen } from "../../components/loading";
import { useCategory } from "../../hooks/ads/category";
import { useCreateAd } from "../../hooks/ads/create";
import { useType } from "../../hooks/ads/type";

const CreateAd: React.FC = () => {
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
        <div className="mx-auto p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-8 text-blue-800">
                Déposer une nouvelle annonce
            </h1>
            <form
                onSubmit={handleSubmit(onFormSubmit)}
                className="grid grid-cols-2 gap-6"
            >
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
