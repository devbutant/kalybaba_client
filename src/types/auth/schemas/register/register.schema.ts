import { z } from "zod";

const min1chiffreRegex = /(?=.*\d)/;
const min1specialRegex = /(?=.*[@$!%*?&])/;

const passwordRegex = new RegExp(
    min1chiffreRegex.source + min1specialRegex.source
); // .source est utilisé pour obtenir la chaîne de caractères de l'expression régulière

export const registerSchema = z
    .object({
        name: z
            .string()
            .min(3, "Le nom doit contenir au moins 3 caractères")
            .max(20, "Le nom doit contenir au plus 20 caractères"),
        email: z.string().email("Merci de renseigner un email valide"),
        password: z
            .string()
            .min(8, "Le mot de passe doit contenir au moins 8 caractères")
            .max(50, "Le mot de passe doit contenir au plus 50 caractères")
            .regex(
                passwordRegex,
                "Le mot de passe doit contenir au moins un chiffre et un caractère spécial"
            ),
        confirmPassword: z
            .string()
            .min(8, "Le mot de passe doit contenir au moins 8 caractères")
            .max(50, "Le mot de passe doit contenir au plus 50 caractères")
            .regex(
                passwordRegex,
                "Le mot de passe doit contenir au moins un chiffre et un caractère spécial"
            ),
        city: z
            .string()
            .min(3, "La ville doit contenir au moins 2 caractères")
            .max(30, "La ville doit contenir au plus 30 caractères"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Les mots de passe ne correspondent pas",
        path: ["confirmPassword"],
    });

export type RegisterFormFields = z.infer<typeof registerSchema>;