import { LoginSubmitButtonProps } from "../../../../types/component-props/login-submit-button";
import { Button } from "../../../button";

const LoginSubmitButton: React.FC<
    React.PropsWithChildren<LoginSubmitButtonProps>
> = (props) => {
    const { isSubmitting, errors } = props;

    return (
        <>
            <Button
                type="submit"
                className="mt-2 w-full bg-indigo-600 text-white shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
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
