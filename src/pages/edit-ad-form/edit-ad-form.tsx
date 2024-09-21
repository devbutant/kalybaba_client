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
    onSave: () => void;
    onDelete: () => void;
}

interface FormValues {
    title: string;
    description: string;
    price: number;
    address: string;
}

const EditAdForm: React.FC<EditAdFormProps> = ({
    ad,
    onCancel,
    onSave,
    onDelete,
}) => {
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

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        if (!token) throw new Error("Token not found");

        try {
            const axiosInstance = createAxiosInstance(token);
            await axiosInstance.patch(`/ads/${ad.id}`, data);
            onSave();
        } catch (error) {
            console.error("Error updating ad:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-6">
            <Input
                type="text"
                placeholder="Titre"
                name="title"
                register={register}
                error={errors.title}
                requiredMsg="Title is required"
            />
            <Input
                type="textarea"
                placeholder="Description"
                name="description"
                register={register}
                error={errors.description}
                requiredMsg="Description is required"
            />
            <Input
                type="text"
                placeholder="Ville"
                name="address"
                register={register}
                error={errors.address}
                requiredMsg="Address is required"
            />
            <Input
                type="number"
                placeholder="Prix"
                name="price"
                register={register}
                error={errors.price}
                requiredMsg="Price is required"
                valueAsNumber
            />
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
                <Button
                    type="button"
                    onClick={onDelete}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Supprimer
                </Button>
            </div>
        </form>
    );
};

export { EditAdForm };
