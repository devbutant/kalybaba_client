import { EditAdFormField } from "@/types";

export const formFields: EditAdFormField[] = [
    {
        name: "title",
        type: "text",
        placeholder: "Titre",
    },
    {
        name: "description",
        type: "textarea",
        placeholder: "Description",
    },
    {
        name: "city",
        type: "text",
        placeholder: "Ville",
    },
    {
        name: "price",
        type: "number",
        placeholder: "Prix",
        valueAsNumber: true,
    },
];
