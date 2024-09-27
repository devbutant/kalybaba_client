import { Button } from "@/components/button";
import { RegisterFormFields } from "@/types/auth";
import { FC, PropsWithChildren } from "react";
import { FieldErrors } from "react-hook-form";

export interface RegisterSubmitButtonProps {
    isSubmitting: boolean;
    errors: FieldErrors<RegisterFormFields>;
}

const RegisterSubmitButton: FC<PropsWithChildren<RegisterSubmitButtonProps>> = (
    props
) => {
    const { isSubmitting, errors } = props;

    return (
        <>
            <Button
                type="submit"
                className="mt-2 w-full bg-indigo-700 hover:bg-indigo-800 focus:ring-2 focus:ring-opacity-50"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Loading..." : "Inscription"}
            </Button>

            {errors.root && (
                <p className="text-red-700 text-sm">{errors.root.message}</p>
            )}
        </>
    );
};

RegisterSubmitButton.displayName = "RegisterSubmitButton";

export { RegisterSubmitButton };
