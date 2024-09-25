import { LoginFormFields } from "@/types/auth";
import { FieldErrors } from "react-hook-form";

export interface LoginSubmitButtonProps {
    isSubmitting: boolean;
    errors: FieldErrors<LoginFormFields>;
}
