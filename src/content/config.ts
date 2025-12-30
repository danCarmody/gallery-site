import { defineCollection, z } from "astro:content";

const models = defineCollection({
    schema: z.object({
        title: z.string(),
        system: z.string().optional(),
        faction: z.string().optional(),
        date: z.coerce.date().optional(),
        featured: z.boolean().default(false),
        tags: z.array(z.string()).default([]),
        /*---------------------------------------
        MANDATORY IMAGES -- Keep as strings for now
        -----------------------------------------*/
        coverImage: z.string(),
        galleryImages: z.array(z.string()).default([])
    }),
});

export const collections = { models };