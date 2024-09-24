import { z } from "zod";

export const adSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    city: z.string(),
    price: z.number(),
    authorId: z.string(),
    author: z.object({
        id: z.string(),
        email: z.string(),
        name: z.string(),
        city: z.string(),
        phone: z.string(),
        connected: z.boolean(),
    }),
    typeEnum: z.string(),
    categoryEnum: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
});

export type AdDto = z.infer<typeof adSchema>;

// TODO: voir pour utiliser des interfaces au lieu des types pour pouvoir étendre les types
