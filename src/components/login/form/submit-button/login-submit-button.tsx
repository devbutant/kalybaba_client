import { Button } from "@/components/button";
import { LoginSubmitButtonProps } from "@/types/component-props/login-submit-button";
import { FC, PropsWithChildren } from "react";

const LoginSubmitButton: FC<PropsWithChildren<LoginSubmitButtonProps>> = (
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
                {isSubmitting ? "Loading..." : "Connexion"}
            </Button>

            {errors.root && (
                <p className="text-red-700 text-sm">{errors.root.message}</p>
            )}
        </>
    );
};

LoginSubmitButton.displayName = "LoginSubmitButton";

export { LoginSubmitButton };
