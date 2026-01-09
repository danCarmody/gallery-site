import { test, expect, firefox } from "@playwright/test";

test("gallery loads with at least one card visible", async ({page}) => {
    await page.goto("/gallery");
    await expect(page.getByRole("heading", {name: /gallery/i})).toBeVisible();
    await expect(page.locator(".gallery-card ").first()).toBeVisible();
});

test("first gallery card navigate to a model detail page - no 404", async ({page}) => {
    await page.goto("/gallery");

    const firstCard = page.locator(".gallery-card").first();
    await firstCard.click();
    await expect(page.locator("img").first()).toBeVisible(); 
});