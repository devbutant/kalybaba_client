import { useCategoryListQuery } from "../../../api/queries/ads/categories/categories.query";
import { Category } from "../../../types";
import { Option } from "../../../types/dtos/ads/form";

const useCategory = () => {
    const { data: categories, isLoading: loadingCategories } =
        useCategoryListQuery();
    const categoryOptions: Option[] | undefined = categories?.map(
        (category: Category) => ({
            value: category.id,
            label: category.name,
        })
    );

    return { categoryOptions, loadingCategories };
};

useCategory.displayName = "useCategory";

export { useCategory };
