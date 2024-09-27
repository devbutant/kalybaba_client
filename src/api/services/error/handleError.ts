import { AxiosError } from "axios";

const handleError = (
    error: unknown,
    setErrorFunction: (
        name: "root",
        type: { type: string; message: string }
    ) => void
) => {
    const errorMessageList = {
        generic: "Une erreur est survenue, veuillez réessayer",
        unauthorized: "Email ou mot de passe incorrect",
    };
    let errorMsgToSend: string;

    if (error instanceof AxiosError) {
        const statusCode = error.response?.status;
        const errorMessage =
            statusCode === 401
                ? errorMessageList.unauthorized
                : errorMessageList.generic;
        errorMsgToSend = errorMessage;
    } else {
        errorMsgToSend = errorMessageList.generic;
    }
    setErrorFunction("root", {
        type: "manual",
        message: errorMsgToSend,
    });
};

handleError.displayName = "handleError";

export { handleError };
