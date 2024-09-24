import { z } from "zod";
import { AdDto } from "./ad.dto";

export const createAdSchema = z.object({
    title: z.string().min(1, { message: "Le titre est requis" }),
    description: z.string().min(1, { message: "La description est requise" }),
    city: z.string().min(1, { message: "L'adresse est requise" }),
    price: z.number().min(0, { message: "Le prix doit être positif" }),
    authorId: z.string().min(1, { message: "L'auteur est requis" }), // Assurez-vous que ce champ est nécessaire
    categoryId: z.string().min(1, { message: "La catégorie est requise" }),
    typeId: z.string().min(1, { message: "Le type est requis" }),
});

// TODO utiliser un e interface et l'étendre
export type CreateAdDto = Pick<
    AdDto,
    | "title"
    | "description"
    | "city"
    | "price"
    | "authorId"
    | "categoryId"
    | "typeId"
>;
