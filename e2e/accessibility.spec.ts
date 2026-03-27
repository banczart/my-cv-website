import { test, expect } from "@playwright/test";

test.describe("Accessibility", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("page has correct lang attribute", async ({ page }) => {
    const lang = await page.getAttribute("html", "lang");
    expect(lang).toBeTruthy();
  });

  test("all images have alt text", async ({ page }) => {
    const images = page.locator("img");
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute("alt");
      expect(alt, `Image ${i} missing alt text`).toBeTruthy();
    }
  });

  test("heading hierarchy starts with h1", async ({ page }) => {
    const h1 = page.getByRole("heading", { level: 1 });
    await expect(h1).toBeVisible();
    const h1Count = await h1.count();
    expect(h1Count).toBe(1);
  });

  test("heading hierarchy has h2 sections", async ({ page }) => {
    const h2s = page.getByRole("heading", { level: 2 });
    const count = await h2s.count();
    expect(count).toBeGreaterThanOrEqual(8);
  });

  test("external links have target=_blank and rel=noopener", async ({
    page,
  }) => {
    const externalLinks = page.locator('a[target="_blank"]');
    const count = await externalLinks.count();

    for (let i = 0; i < count; i++) {
      const rel = await externalLinks.nth(i).getAttribute("rel");
      expect(rel).toContain("noopener");
    }
  });

  test("page has readable font sizes", async ({ page }) => {
    // Check that the body text is at least 10px
    const fontSize = await page.evaluate(() => {
      const body = document.body;
      return parseFloat(window.getComputedStyle(body).fontSize);
    });
    expect(fontSize).toBeGreaterThanOrEqual(10);
  });
});
