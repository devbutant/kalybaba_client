import createAxiosInstance from "@/config/axios/axiosConfig";

type ConfirmEmailDto = {
    token: string;
};

export const confirmEmail = async (
    emailToken: ConfirmEmailDto
): Promise<string> => {
    try {
        const axiosInstance = createAxiosInstance();
        const response = await axiosInstance.post(
            `/auth/confirm-email`,
            emailToken
        );

        if (response.status !== 201) {
            throw new Error("Une erreur est survenue, veuillez réessayer");
        }

        const accessToken = response.data.access_token;
        return accessToken;
    } catch (error: unknown) {
        throw new Error(
            error as string | "Une erreur est survenue, veuillez réessayer"
        );
    }
};
