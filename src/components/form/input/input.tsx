import {
    FieldError,
    FieldValues,
    Path,
    UseFormRegister,
} from "react-hook-form";

import { FieldErrorsImpl, Merge } from "react-hook-form";

interface InputProps<T extends FieldValues> {
    type: string;
    placeholder?: string;
    name: Path<T>;
    register: UseFormRegister<T>;
    error?: FieldError | Merge<FieldError, FieldErrorsImpl<T>> | string;
    valueAsNumber?: boolean;
    min?: number;
    step?: number;
    options?: string[];
}

const Input = <T extends FieldValues>({
    type,
    placeholder,
    name,
    register,
    error,
    valueAsNumber = false,
    min,
    step,
}: InputProps<T>) => {
    const errorMessage =
        typeof error === "string"
            ? error
            : (error?.message as string | undefined);

    return (
        <div className="max-w-96">
            {/* Todo: label component */}
            <label
                htmlFor={String(name)}
                className="block text-sm font-medium text-gray-700"
            >
                {placeholder}
            </label>

            <input
                {...register(name, {
                    required: "Merci de renseigner ce champ",
                    valueAsNumber,
                })}
                type={type}
                placeholder={placeholder}
                min={min}
                step={step}
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />

            {errorMessage && (
                <p className="text-red-700 text-sm">{errorMessage}</p>
            )}
        </div>
    );
};

Input.displayName = "Input";

export { Input };
