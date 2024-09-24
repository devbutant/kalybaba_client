import React from "react";
import { useCategoryListQuery } from "../../../../api/queries/ads/categories/categories.query";
import { useTypeListQuery } from "../../../../api/queries/ads/types/types.query";
import { useUpdateAd } from "../../../../hooks/ad";
import { useGetDefaultValues } from "../../../../hooks/ad/update/use-get-default-values.hook";
import { EditAdFormProps } from "../../../../types/dtos/ads";
import { Input, Select } from "../../../form";
import { EditAdButtons } from "../edit-ad-form-buttons";
import { formFields } from "../edit-ad-form-fields";

const EditAdForm: React.FC<EditAdFormProps> = (props) => {
    const { ad } = props; // Assurez-vous que ad contient l'annonce à éditer
    const { onSubmit, form } = useUpdateAd(ad);

    console.log(ad);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = form;

    const {
        data: categories,
        isLoading: isLoadingCategories,
        isError: isErrorCategories,
    } = useCategoryListQuery();

    const {
        data: types,
        isLoading: isLoadingTypes,
        isError: isErrorTypes,
    } = useTypeListQuery();

    // Récupérer les valeurs par défaut de l'annonce
    const { getDefaultValues } = useGetDefaultValues();
    const defaultValues = getDefaultValues(ad);

    if (isLoadingCategories || isLoadingTypes)
        return <p>Chargement des données...</p>;
    if (isErrorCategories || isErrorTypes)
        return <p>Erreur lors de la récupération des données</p>;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {formFields.map((field) => (
                <Input
                    key={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    name={field.name}
                    register={register}
                    error={errors[field.name]}
                    requiredMsg={field.requiredMsg}
                    valueAsNumber={field.valueAsNumber}
                    // Passez la valeur par défaut directement
                />
            ))}

            <Select
                key="category"
                placeholder="Sélectionnez une catégorie"
                name="category"
                register={register}
                error={errors["category"]}
                requiredMsg="La catégorie est requise"
                options={categories?.map((category) => ({
                    id: category.id,
                    value: category.id,
                    label: category.name,
                }))}
                // Passez l'ID de la catégorie par défaut
                defaultValue={defaultValues.category}
            />

            <Select
                key="type"
                placeholder="Sélectionnez un type"
                name="type"
                register={register}
                error={errors["type"]}
                requiredMsg="Le type est requis"
                options={types?.map((type) => ({
                    id: type.id,
                    value: type.id,
                    label: type.name,
                }))}
                // Passez l'ID du type par défaut
                defaultValue={defaultValues.type}
            />

            <EditAdButtons />
        </form>
    );
};

export { EditAdForm };
