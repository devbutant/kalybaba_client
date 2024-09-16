import { FieldValues } from "react-hook-form";
import { InputProps } from "../../../types";

// TODO: vertical split / Voir la photo sur mon tel pour réorganiser le projet (plus logiique)
// TODO: vertical split / Voir la photo sur mon tel pour réorganiser le projet (plus logiique)
// TODO: vertical split / Voir la photo sur mon tel pour réorganiser le projet (plus logiique)
// TODO: vertical split / Voir la photo sur mon tel pour réorganiser le projet (plus logiique)
// TODO: vertical split / Voir la photo sur mon tel pour réorganiser le projet (plus logiique)
// TODO: vertical split / Voir la photo sur mon tel pour réorganiser le projet (plus logiique)
// TODO: vertical split / Voir la photo sur mon tel pour réorganiser le projet (plus logiique)
// TODO: vertical split / Voir la photo sur mon tel pour réorganiser le projet (plus logiique)
// TODO: vertical split / Voir la photo sur mon tel pour réorganiser le projet (plus logiique)
// TODO: vertical split / Voir la photo sur mon tel pour réorganiser le projet (plus logiique)
// TODO: vertical split / Voir la photo sur mon tel pour réorganiser le projet (plus logiique)
// TODO: vertical split / Voir la photo sur mon tel pour réorganiser le projet (plus logiique)
// TODO: vertical split / Voir la photo sur mon tel pour réorganiser le projet (plus logiique)
// TODO: vertical split / Voir la photo sur mon tel pour réorganiser le projet (plus logiique)
// TODO: vertical split / Voir la photo sur mon tel pour réorganiser le projet (plus logiique)
// TODO: vertical split / Voir la photo sur mon tel pour réorganiser le projet (plus logiique)
// TODO: vertical split / Voir la photo sur mon tel pour réorganiser le projet (plus logiique)
// TODO: vertical split / Voir la photo sur mon tel pour réorganiser le projet (plus logiique)
// TODO: vertical split / Voir la photo sur mon tel pour réorganiser le projet (plus logiique)
// TODO: vertical split / Voir la photo sur mon tel pour réorganiser le projet (plus logiique)

// TODO: gérer les props
const Input = <T extends FieldValues>({
    type,
    placeholder,
    name,
    register,
    error,
}: InputProps<T>) => {
    return (
        <div>
            <label
                htmlFor={String(name)}
                className="block text-sm font-medium text-gray-700"
            >
                {placeholder}
            </label>
            <input
                {...register(name)}
                type={type}
                placeholder={placeholder}
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {error && (
                <p className="text-red-700 text-sm">
                    {typeof error === "string" ? error : error.message}
                </p>
            )}
        </div>
    );
};

Input.displayName = "Input";

export { Input };
