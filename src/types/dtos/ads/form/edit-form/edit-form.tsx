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
    category: {
        id: string;
        name: string;
    };
    type: {
        id: string;
        name: string;
    };
}

export interface EditAdFormProps {
    ad: Ad;
}

export interface EditAdFormValues {
    id: string;
    title: string;
    description: string;
    price: number;
    address: string;
    type: {
        id: string;
        name: string;
    };
    category: {
        id: string;
        name: string;
    };
}

export interface EditAdFormField {
    type: string;
    placeholder: string;
    name: keyof EditAdFormValues;
    requiredMsg: string;
    valueAsNumber?: boolean;
}
