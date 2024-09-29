import { z } from "zod";

export const loginSchema = z.object({
    email: z
        .string({ required_error: "Merci d'entrer une adresse e-mail." })
        .email("Merci de renseigner un email valide"),
    password: z
        .string({ required_error: "Merci d'entrer un mot de passe." })
        .min(8, "Le mot de passe doit contenir au moins 8 caractères"),
});

export type LoginFormFields = z.infer<typeof loginSchema>;
