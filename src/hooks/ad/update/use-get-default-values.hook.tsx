const useGetDefaultValues = () => {
    type DefaultAdValues = {
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
    };

    const getDefaultValues = (ad: Partial<DefaultAdValues>) => ({
        id: ad.id || "",
        title: ad.title || "",
        description: ad.description || "",
        price: ad.price || 0,
        address: ad.address || "",
        type: {
            id: ad.type?.id || "",
            value: ad.type?.name || "",
        },
        category: {
            id: ad.category?.id || "",
            value: ad.category?.name || "",
        },
    });

    return {
        getDefaultValues,
    };
};

useGetDefaultValues.displayName = "useGetDefaultValues";

export { useGetDefaultValues };
