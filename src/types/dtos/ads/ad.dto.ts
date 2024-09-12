export interface AdDto {
    id: string;
    title: string;
    description: string;
    address: string;
    price: string;
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
