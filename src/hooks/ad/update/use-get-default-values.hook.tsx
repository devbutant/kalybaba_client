const useGetDefaultValues = () => {
    type DefaultAdValues = {
        id: string;
        title: string;
        description: string;
        price: number;
        address: string;
    };

    const getDefaultValues = (ad: Partial<DefaultAdValues>) => ({
        id: ad.id || "",
        title: ad.title || "",
        description: ad.description || "",
        price: ad.price || 0,
        address: ad.address || "",
    });

    return {
        getDefaultValues,
    };
};

useGetDefaultValues.displayName = "useGetDefaultValues";

export { useGetDefaultValues };
