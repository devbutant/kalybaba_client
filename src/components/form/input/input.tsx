import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface InputProps<T extends FieldValues> {
    type: string;
    placeholder?: string;
    name: Path<T>;
    register: UseFormRegister<T>;
    valueAsNumber?: boolean;
    requiredMessage?: string;
    minLength?: number;
    maxLength?: number;
    validationMessage?: string;
    min?: number;
    step?: number;
    options?: string[];
}

const Input = <T extends FieldValues>({
    type,
    placeholder,
    name,
    register,
    valueAsNumber = false,
    requiredMessage,
    minLength,
    maxLength,
    validationMessage,
    min,
    step,
}: InputProps<T>) => {
    return (
        <div className="min-w-96">
            {/* Todo: label component */}
            <label
                htmlFor={String(name)}
                className="block text-sm font-medium text-gray-700"
            >
                {placeholder}
            </label>

            <input
                {...register(name, {
                    required: requiredMessage,
                    valueAsNumber,
                    minLength:
                        minLength && validationMessage
                            ? {
                                  value: minLength,
                                  message: validationMessage,
                              }
                            : undefined,
                    maxLength:
                        maxLength && validationMessage
                            ? {
                                  value: maxLength,
                                  message: validationMessage,
                              }
                            : undefined,
                })}
                type={type}
                placeholder={placeholder}
                min={min}
                step={step}
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>
    );
};

Input.displayName = "Input";

export { Input };
