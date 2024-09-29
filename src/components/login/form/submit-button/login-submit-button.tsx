import { Button } from "@/components/button";
import { LoginSubmitButtonProps } from "@/types/component-props/login-submit-button";
import { FC, PropsWithChildren } from "react";

const LoginSubmitButton: FC<PropsWithChildren<LoginSubmitButtonProps>> = (
    props
) => {
    const { isSubmitting, errors } = props;

    return (
        <div>
            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4"
            >
                {isSubmitting ? "Chargement..." : "Se connecter"}
            </Button>

            {errors.root && (
                <p className="text-red-500 text-sm">{errors.root.message}</p>
            )}
        </div>
    );
};

LoginSubmitButton.displayName = "LoginSubmitButton";

export { LoginSubmitButton };
