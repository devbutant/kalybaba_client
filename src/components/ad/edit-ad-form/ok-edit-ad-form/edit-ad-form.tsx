import React from "react";
import { useSingleAd, useUpdateAd } from "../../../../hooks/ad";
import { Input, Select } from "../../../form";
import { EditAdButtons } from "../edit-ad-form-buttons";
import { formFields } from "../edit-ad-form-fields";

const EditAdForm: React.FC = () => {
    const { singleAdData } = useSingleAd();
    const { singleAd, isLoading, error, isMine, singleAdId } = singleAdData;

    console.log(isMine);

    const { onSubmit, form } = useUpdateAd(singleAd || {});

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = form;

    if (!singleAdId) return <p>Erreur : l'annonce n'a pas d'ID valide.</p>;
    if (isLoading) return <p>Chargement...</p>;
    if (error) return <p>Erreur lors du chargement de l'annonce</p>;
    if (!singleAd) return <p>Annonce non trouvée</p>;

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
        <form onSubmit={handleSubmit(onSubmit)}>
            {formFields.map((field) => (
                <Input
                    key={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    name={field.name}
                    register={register(field.name, {
                        minLength: {
                            value: field.minLength,
                            message: field.validationMessage,
                        },
                    })}
                    error={errors[field.name]}
                    requiredMsg={field.requiredMsg}
                    valueAsNumber={field.valueAsNumber}
                />
            ))}
            {/* <div>
                {errors[field.name] && (
                    <p className="error-message">
                        {errors[field.name].message}
                    </p>
                )}
            </div> */}

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

            <EditAdButtons />
        </form>
    );
};

export { EditAdForm };
