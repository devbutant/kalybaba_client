import { EditAdFormField } from "@/types";

export const formFields: EditAdFormField[] = [
    {
        type: "text",
        placeholder: "Titre",
        name: "title",
        requiredMessage: "Le titre est requis",
        minLength: 5,
        maxLength: 30,
        validationMessage: "Le titre doit contenir entre 5 et 30 caractères",
    },
    {
        type: "textarea",
        placeholder: "Description",
        name: "description",
        requiredMessage: "La description est requise",
        minLength: 10,
        maxLength: 300,
        validationMessage:
            "La description doit contenir entre 10 et 300 caractères",
    },
    {
        type: "text",
        placeholder: "Ville",
        name: "city",
        requiredMessage: "La ville est requise",
        minLength: 2,
        maxLength: 30,
        validationMessage: "La ville doit contenir entre 2 et 30 caractères",
    },
    {
        type: "number",
        placeholder: "Prix",
        name: "price",
        requiredMessage: "Le prix est requis",
        valueAsNumber: true,
    },
];
