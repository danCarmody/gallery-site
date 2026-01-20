import { describe, it, expect } from "vitest";
import { getCollection } from "astro:content";

describe("contect : models", () => {
    it("every model has required fields.", async () => {
        const models = await getCollection("models");

        expect(models.length).toBeGreaterThan(0);

        for(const m of models){
            expect(m.data.title).toBeTruthy();
            expect(m.data.system).toBeTruthy();
            expect(m.data.faction).toBeTruthy();
            expect(m.data.coverImage).toMatch(/^\/.+\.(png|jpe?g|webp)$/i);
        }
    });
});