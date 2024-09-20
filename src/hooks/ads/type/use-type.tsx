import { useTypeListQuery } from "../../../api/queries/ads/types/types.query";
import { Option } from "../../../types/dtos/ads/form";

const useType = () => {
    const { data: types, isLoading: loadingTypes } = useTypeListQuery();

    const typeOptions: Option[] | undefined = types?.map((type) => ({
        value: type.id,
        label: type.name,
    }));

    return { typeOptions, loadingTypes };
};

useType.displayName = "useType";

export { useType };
