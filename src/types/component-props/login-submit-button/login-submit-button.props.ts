import { FieldErrors } from "react-hook-form";
import { LoginFormFields } from "../../auth";

export interface LoginSubmitButtonProps {
    isSubmitting: boolean;
    errors: FieldErrors<LoginFormFields>;
}
