import React from "react";
import { Input } from "../../components/form";
import { useUpdateAd } from "../../hooks/ads/update/use-update-ad";
import { EditAdFormProps } from "../../types/dtos/ads";
import { EditAdButtons } from "./edit-ad-form-buttons/";
import { formFields } from "./edit-ad-form-fields";

const EditAdForm: React.FC<EditAdFormProps> = (props) => {
    const { ad, onCancel, onSave } = props;
    // Todo: export  params from useUpdateAd
    const { onSubmit, form } = useUpdateAd(ad, onSave);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = form;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-6">
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
            <EditAdButtons onCancel={onCancel} />
        </form>
    );
};

export { EditAdForm };
