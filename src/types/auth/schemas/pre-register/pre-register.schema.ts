import { z } from "zod";

export const preRegisterSchema = z.object({
    email: z
        .string({
            required_error: "Veuillez renseigner une adresse e-mail.",
        })
        .email("Merci de renseigner un email valide."),
});

export type PreRegisterFormFields = z.infer<typeof preRegisterSchema>;
