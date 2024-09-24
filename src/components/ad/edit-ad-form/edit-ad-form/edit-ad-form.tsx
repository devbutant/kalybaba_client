import React from "react";
import { useUpdateAd } from "../../../../hooks/ad";
import { EditAdFormProps } from "../../../../types/dtos/ads";
import { Input, Select } from "../../../form";
import { EditAdButtons } from "../edit-ad-form-buttons";
import { formFields } from "../edit-ad-form-fields";

const EditAdForm: React.FC<EditAdFormProps> = (props) => {
    const { ad } = props; // Assurez-vous que ad contient l'annonce à éditer

    // TODO: Voir avec Laulau
    const { onSubmit, form } = useUpdateAd(ad);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = form;

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
                    register={register}
                    error={errors[field.name]}
                    requiredMsg={field.requiredMsg}
                    valueAsNumber={field.valueAsNumber}
                />
            ))}

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
                error={errors["typeEnum"]}
                requiredMsg="Le type est requis"
                options={types}
            />

            <EditAdButtons />
        </form>
    );
};

export { EditAdForm };
