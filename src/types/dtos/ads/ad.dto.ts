import { z } from "zod";

export const adSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    city: z.string(),
    price: z.number(),
    authorId: z.string(),
    categoryId: z.string(),
    typeId: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    type: z.object({
        id: z.string(),
        name: z.string(),
        description: z.string(),
    }),
    category: z.object({
        id: z.string(),
        name: z.string(),
        description: z.string(),
    }),
    typeEnum: z.string(),
    categoryEnum: z.string(),
    author: z.object({
        id: z.string(),
        email: z.string(),
        name: z.string(),
        city: z.string(),
        phone: z.string(),
        connected: z.boolean(),
    }),
});

export type AdDto = z.infer<typeof adSchema>;

// TODO: voir pour utiliser des interfaces au lieu des types pour pouvoir étendre les types
