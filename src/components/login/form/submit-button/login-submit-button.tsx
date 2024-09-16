import axios from "axios";
import { LoginSubmitButtonProps } from "../../../../types/component-props/login-submit-button";
import { API } from "../../../../utils/environment";
import { Button } from "../../../button";

const LoginSubmitButton: React.FC<
    React.PropsWithChildren<LoginSubmitButtonProps>
> = (props) => {
    const { isSubmitting, errors } = props;

    const handleTest = async () => {
        try {
            const rs = await axios.get(`${API.URL}/auth/test`, {
                withCredentials: true,
            });
            console.log(rs);
        } catch (error) {
            console.error("Error during request:", error);
        }
    };

    return (
        <>
            <Button
                type="submit"
                className="mt-2 w-full bg-indigo-600 text-white shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Loading..." : "Connexion"}
            </Button>

            <Button
                type="button"
                className="mt-2 w-full bg-red-600 text-white shadow hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                onClick={handleTest}
            >
                Test
            </Button>

            {errors.root && (
                <p className="text-red-700 text-sm">{errors.root.message}</p>
            )}
        </>
    );
};

LoginSubmitButton.displayName = "LoginSubmitButton";

export { LoginSubmitButton };
