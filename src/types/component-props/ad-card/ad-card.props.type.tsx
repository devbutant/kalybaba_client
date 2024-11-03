export interface AdCardProps {
    ad: {
        id: string;
        title: string;
        description: string;
        photos: string[];
        price: number;
        author: {
            id: string;
            name: string;
            city: string;
        };
        typeEnum?: string | undefined;
        categoryEnum?: string | undefined;
    };
    mine?: boolean;
}
