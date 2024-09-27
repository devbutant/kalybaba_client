import {
    FieldError,
    FieldValues,
    Path,
    UseFormRegister,
} from "react-hook-form";

import { FieldErrorsImpl, Merge } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface SelectProps<T extends FieldValues> {
    placeholder?: string;
    name: Path<T>;
    register: UseFormRegister<T>;
    error?: FieldError | Merge<FieldError, FieldErrorsImpl<T>> | string;
    valueAsNumber?: boolean;
    options?: string[];
}

const Select = <T extends FieldValues>({
    placeholder,
    name,
    register,
    error,
    valueAsNumber = false,
    options,
}: SelectProps<T>) => {
    const { t } = useTranslation();

    const errorMessage =
        typeof error === "string"
            ? error
            : (error?.message as string | undefined);

    if (!options || options.length === 0) {
        throw new Error("Options are required for select field");
    }

    return (
        <div className="min-w-96">
            {/* Todo: label component */}
            <label
                htmlFor={String(name)}
                className="block text-sm font-medium text-gray-700"
            >
                {placeholder}
            </label>

            <select
                id={String(name)}
                {...register(name, {
                    valueAsNumber,
                    required: "Champ obligatoire",
                })}
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
                <option disabled value="">
                    {placeholder}
                </option>

                {options.map((option) => {
                    return (
                        <option key={option} value={option}>
                            {t("categoryOrType." + option)}
                        </option>
                    );
                })}
            </select>

            {/* TODO: composant error  */}
            {errorMessage && (
                <p className="text-red-700 text-sm">{errorMessage}</p>
            )}
        </div>
    );
};

Select.displayName = "Select";

export { Select };
