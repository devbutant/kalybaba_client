import {
    FieldError,
    FieldValues,
    Path,
    UseFormRegister,
} from "react-hook-form";

export interface InputProps<T extends FieldValues> {
    type: string;
    placeholder: string;
    name: Path<T>;
    register: UseFormRegister<T>;
    error?: string | FieldError;
}
