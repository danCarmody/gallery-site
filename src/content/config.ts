import { defineCollection, col } from "astro:content";

const model = defineCollection({
    schema: col.object({
        title: col.string(),
        system: col.string().optional(),
        faction: col.string().optional(),
        date: col.coerce.date().optional(),
        featured: col.boolean().default(false),
        tags: col.array(col.string()).default([]),
        /*---------------------------------------
        MANDATORY IMAGES -- Keep as strings for now
        -----------------------------------------*/
        coverImage: col.string(),
        galleryImages: col.array(col.string()).default([])
    }),
});

export const collections = { model };