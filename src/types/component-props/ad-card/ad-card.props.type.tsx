export interface AdCardProps {
    ad: {
        id: string;
        title: string;
        description: string;
        price: number;
        author: {
            id: string;
            name: string;
            city: string;
        };
        typeEnum: string;
        categoryEnum: string;
    };
    mine?: boolean;
}
