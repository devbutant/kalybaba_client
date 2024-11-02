import { z } from "zod";
import { AdDto } from "./ad.dto";

export const createAdSchema = z.object({
    title: z.string().min(1, { message: "Le titre est requis" }),
    description: z.string().min(1, { message: "La description est requise" }),
    photos: z.array(z.instanceof(File)).optional(),
    city: z.string().min(1, { message: "L'adresse est requise" }),
    price: z.number().min(0, { message: "Le prix doit être positif" }),
    authorId: z.string().min(1, { message: "L'auteur est requis" }),
    categoryId: z.string().min(1, { message: "La catégorie est requise" }),
    typeId: z.string().min(1, { message: "Le type est requis" }),
});

export type CreateAdDto = Pick<
    AdDto,
    | "description"
    | "title"
    | "photos"
    | "city"
    | "price"
    | "authorId"
    | "categoryEnum"
    | "typeEnum"
>;
