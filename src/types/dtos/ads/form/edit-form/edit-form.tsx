// Todo voir si on peut pas utiliser une même interface à chaque fois pour une annonce
export interface Ad {
    id: string;
    title: string;
    description: string;
    price: number;
    address: string;
    author: {
        name: string;
    };
}

export interface EditAdFormProps {
    ad: Ad;
    onCancel: () => void;
    onSave: () => void;
}

export interface EditAdFormValues {
    id: string;
    title: string;
    description: string;
    price: number;
    address: string;
}

export interface EditAdFormField {
    type: string;
    placeholder: string;
    name: keyof EditAdFormValues;
    requiredMsg: string;
    valueAsNumber?: boolean;
}
