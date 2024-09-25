import { useSingleAd } from "@/hooks/ad";
import { useEditAd } from "@/hooks/ad/update";
import { categories } from "@/types/enums/categories";
import { types } from "@/types/enums/types";
import React from "react";
import { EditAdFormValues } from "../../../../types";
import { Input, Select } from "../../../form";
import { EditAdButtons } from "../edit-ad-form-buttons";
import { formFields } from "../edit-ad-form-fields";

const EditAdForm: React.FC = () => {
    const { singleAdData } = useSingleAd();
    const { singleAd } = singleAdData;

    const { onSubmit, form } = useEditAd(singleAd);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = form;

    return (
        <div className="mx-auto bg-white p-8 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Modifier l'annonce
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {formFields.map((field) => (
                    <div key={field.name} className="mb-4">
                        <Input<EditAdFormValues>
                            type={field.type}
                            placeholder={field.placeholder}
                            name={field.name}
                            register={register}
                            requiredMessage={field.requiredMessage}
                            valueAsNumber={field.valueAsNumber}
                            minLength={field.minLength}
                            maxLength={field.maxLength}
                            validationMessage={field.validationMessage}
                        />
                        {errors[field.name] && (
                            <span className="text-red-500 text-sm">
                                {errors[field.name]?.message}
                            </span>
                        )}
                    </div>
                ))}

                <div className="mb-4">
                    <Select
                        placeholder="Sélectionnez une catégorie"
                        name="categoryEnum"
                        register={register}
                        error={errors["categoryEnum"]}
                        requiredMessage="La catégorie est requise"
                        options={categories}
                    />
                    {errors["categoryEnum"] && (
                        <span className="text-red-500 text-sm">
                            {errors["categoryEnum"]?.message}
                        </span>
                    )}
                </div>

                <div className="mb-4">
                    <Select
                        placeholder="Sélectionnez un type"
                        name="typeEnum"
                        register={register}
                        error={errors.typeEnum}
                        requiredMessage="Le type est requis"
                        options={types}
                    />
                    {errors.typeEnum && (
                        <span className="text-red-500 text-sm">
                            {errors.typeEnum?.message}
                        </span>
                    )}
                </div>

                <EditAdButtons />
            </form>
        </div>
    );
};

EditAdForm.displayName = "EditAdForm";

export { EditAdForm };
