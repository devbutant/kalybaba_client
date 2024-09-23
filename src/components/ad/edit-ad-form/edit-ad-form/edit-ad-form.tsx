import React from "react";
import { useUpdateAd } from "../../../../hooks/ad";
import { EditAdFormProps } from "../../../../types/dtos/ads";
import { Input } from "../../../form";
import { EditAdButtons } from "../edit-ad-form-buttons";
import { formFields } from "../edit-ad-form-fields";

const EditAdForm: React.FC<EditAdFormProps> = (props) => {
    const { ad } = props;
    const { onSubmit, form } = useUpdateAd(ad);

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
            <EditAdButtons />
        </form>
    );
};

export { EditAdForm };
