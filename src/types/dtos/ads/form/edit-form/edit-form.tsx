// Todo voir si on peut pas utiliser une même interface à chaque fois pour une annonce
export interface Ad {
    id: string;
    title: string;
    description: string;
    price: number;
    city: string;
    author: {
        name: string;
    };
    typeEnum: string;
    categoryEnum: string;
}

export interface EditAdFormValues {
    id: string;
    title: string;
    description: string;
    price: number;
    city: string;
    typeEnum: string;
    categoryEnum: string;
}

export interface EditAdFormProps {
    ad: Ad;
}

export interface EditAdFormField {
    type: string;
    placeholder: string;
    name: keyof EditAdFormValues;
    requiredMessage: string;
    valueAsNumber?: boolean;
    minLength?: number;
    maxLength?: number;
    validationMessage?: string;
}
