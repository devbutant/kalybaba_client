import { EditAdFormField } from "../../../../types";

export const formFields: EditAdFormField[] = [
    {
        type: "text",
        placeholder: "Titre",
        name: "title",
        requiredMsg: "Le titre est requis",
    },
    {
        type: "textarea",
        placeholder: "Description",
        name: "description",
        requiredMsg: "La description est requise",
    },
    {
        type: "text",
        placeholder: "Ville",
        name: "city",
        requiredMsg: "La ville est requise",
    },
    {
        type: "number",
        placeholder: "Prix",
        name: "price",
        requiredMsg: "Le prix est requis",
        valueAsNumber: true,
    },
];
