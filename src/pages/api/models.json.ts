import { APIRoute } from "astro"; 
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
    const models = await getCollection("models");

    const payload = models.map((m) => ({
        slug: m.slug,
        title: m.data.title,
        system: m.data.system,
        faction: m.data.faction,
        date: m.data.date ? m.data.date.toISOString() : null,
        coverIamge: m.data.coverImage,
        galleryImages: m.data.galleryImages ?? [],
     }));

     return new Response(JSON.stringify(payload), {
        headers: {"Content-type": "application/json"},
     });
};