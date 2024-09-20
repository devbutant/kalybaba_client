// import { FieldValues } from "react-hook-form";
// import { InputProps } from "../../../types";

// // TODO: gérer les props
// const Input = <T extends FieldValues>({
//     type,
//     placeholder,
//     name,
//     register,
//     error,
// }: InputProps<T>) => {
//     return (
//         <div>
//             <label
//                 htmlFor={String(name)}
//                 className="block text-sm font-medium text-gray-700"
//             >
//                 {placeholder}
//             </label>
//             <input
//                 {...register(name)}
//                 type={type}
//                 placeholder={placeholder}
//                 className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             />
//             {error && (
//                 <p className="text-red-700 text-sm">
//                     {typeof error === "string" ? error : error.message}
//                 </p>
//             )}
//         </div>
//     );
// };

// Input.displayName = "Input";

// export { Input };

import {
    FieldError,
    FieldValues,
    Path,
    UseFormRegister,
} from "react-hook-form";

interface Option {
    value: string;
    label: string;
}

// Type pour les props de Input
interface InputProps<T extends FieldValues> {
    type: string;
    placeholder?: string;
    name: Path<T>;
    register: UseFormRegister<T>;
    error?: FieldError | string;
    valueAsNumber?: boolean; // Ajout de cette propriété
    requiredMsg?: string;
    min?: number;
    step?: number;
    options?: Option[];
}

const Input = <T extends FieldValues>({
    type,
    placeholder,
    name,
    register,
    error,
    valueAsNumber = false,
    requiredMsg,
    min,
    step,
    options,
}: InputProps<T>) => {
    return (
        <div>
            <label
                htmlFor={String(name)}
                className="block text-sm font-medium text-gray-700"
            >
                {placeholder}
            </label>

            {options && options.length > 0 ? (
                <select
                    id={String(name)}
                    {...register(name, { valueAsNumber })}
                    className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                    <option value="">Sélectionnez une option</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    {...register(name, {
                        required: requiredMsg || "Ce champ est requis",
                        valueAsNumber: valueAsNumber, // Passer la propriété valueAsNumber ici
                    })}
                    type={type}
                    placeholder={placeholder}
                    min={min}
                    step={step}
                    className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
            )}
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
