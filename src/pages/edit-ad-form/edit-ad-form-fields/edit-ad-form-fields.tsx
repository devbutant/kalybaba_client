import { EditAdFormField } from "../../../types";

export const formFields: EditAdFormField[] = [
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
