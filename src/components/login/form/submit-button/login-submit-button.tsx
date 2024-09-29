import { Button } from "@/components/button";
import { LoginSubmitButtonProps } from "@/types/component-props/login-submit-button";
import { FC, PropsWithChildren } from "react";

const LoginSubmitButton: FC<PropsWithChildren<LoginSubmitButtonProps>> = (
    props
) => {
    const { isSubmitting, errors } = props;

    return (
        <>
            <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Chargement..." : "Se connecter"}
            </Button>

            {errors.root && (
                <p className="text-red-500 text-sm">{errors.root.message}</p>
            )}
        </>
    );
};

LoginSubmitButton.displayName = "LoginSubmitButton";

export { LoginSubmitButton };
