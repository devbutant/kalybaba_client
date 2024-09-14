export interface AdDto {
    id: string;
    title: string;
    description: string;
    address: string;
    price: number;
    authorId: string;
    categoryId: string;
    typeId: string;
    createdAt: string;
    updatedAt: string;
    type: {
        id: string;
        name: string;
        description: string;
    };
    category: {
        id: string;
        name: string;
        description: string;
    };
}
