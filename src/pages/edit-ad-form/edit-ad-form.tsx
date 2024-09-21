import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../components/button";
import { Input } from "../../components/form";
import createAxiosInstance from "../../config/axios/axiosConfig";
import { useAppAuth } from "../../hooks/contexts-hooks/auth";

interface Ad {
    id: string;
    title: string;
    description: string;
    price: number;
    address: string;
    author: {
        name: string;
    };
}

interface EditAdFormProps {
    ad: Ad;
    onCancel: () => void;
    onSave: (updatedAd: Ad) => void; // Modifiez la signature pour passer l'annonce mise à jour
}

interface FormValues {
    title: string;
    description: string;
    price: number;
    address: string;
}

type EditAdFormField = {
    type: string;
    placeholder: string;
    name: keyof FormValues;
    requiredMsg: string;
    valueAsNumber?: boolean;
};

const EditAdForm: React.FC<EditAdFormProps> = ({ ad, onCancel, onSave }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues: {
            title: ad.title,
            description: ad.description,
            price: ad.price,
            address: ad.address,
        },
    });
    const { token } = useAppAuth();

    const fetchAd = async () => {
        if (!token) throw new Error("Token not found");

        try {
            const axiosInstance = createAxiosInstance(token);
            const response = await axiosInstance.get(`/ads/${ad.id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching ad:", error);
            throw error;
        }
    };

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        if (!token) throw new Error("Token not found");

        try {
            const axiosInstance = createAxiosInstance(token);
            await axiosInstance.patch(`/ads/${ad.id}`, data);
            const updatedAd = await fetchAd(); // Refetch l'annonce après la modification
            onSave(updatedAd); // Passez l'annonce mise à jour à la fonction onSave
        } catch (error) {
            console.error("Error updating ad:", error);
        }
    };

    const formFields: EditAdFormField[] = [
        {
            type: "text",
            placeholder: "Titre",
            name: "title",
            requiredMsg: "Title is required",
        },
        {
            type: "textarea",
            placeholder: "Description",
            name: "description",
            requiredMsg: "Description is required",
        },
        {
            type: "text",
            placeholder: "Ville",
            name: "address",
            requiredMsg: "Address is required",
        },
        {
            type: "number",
            placeholder: "Prix",
            name: "price",
            requiredMsg: "Price is required",
            valueAsNumber: true,
        },
    ];

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
            <div className="flex items-center justify-between">
                <Button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Save
                </Button>
                <Button
                    type="button"
                    onClick={onCancel}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Cancel
                </Button>
            </div>
        </form>
    );
};

export { EditAdForm };
