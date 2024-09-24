import {
    FieldError,
    FieldValues,
    Path,
    UseFormRegister,
} from "react-hook-form";

import { FieldErrorsImpl, Merge } from "react-hook-form";
import { Option } from "../../../types";

interface SelectProps<T extends FieldValues> {
    placeholder?: string;
    name: Path<T>;
    register: UseFormRegister<T>;
    error?: FieldError | Merge<FieldError, FieldErrorsImpl<T>> | string;
    valueAsNumber?: boolean;
    requiredMsg?: string;
    options?: Option[];
    defaultValue: {
        id: string;
        value: string;
    };
}

const Select = <T extends FieldValues>({
    placeholder,
    name,
    register,
    error,
    valueAsNumber = false,
    requiredMsg,
    options,
    defaultValue,
}: SelectProps<T>) => {
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
            <h2>
                {defaultValue.value} {defaultValue.id}
            </h2>
            <select
                id={String(name)}
                {...register(name, { valueAsNumber, required: requiredMsg })}
                defaultValue={defaultValue.id} // Utilisation de defaultValue sur le select
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
                <option value="" disabled>
                    {placeholder}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label.charAt(0).toUpperCase() +
                            option.label.slice(1)}
                    </option>
                ))}
            </select>
            {errorMessage && (
                <p className="text-red-700 text-sm">{errorMessage}</p>
            )}
        </div>
    );
};

Select.displayName = "Select";

export { Select };
