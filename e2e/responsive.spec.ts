import { test, expect } from "@playwright/test";

test.describe("Responsive Design", () => {
  test("renders correctly on mobile viewport", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");
    await expect(
      page.getByRole("heading", { level: 1 })
    ).toContainText("ARTUR BANCZYK");
    await expect(
      page.getByRole("heading", { name: /professional summary/i })
    ).toBeVisible();
  });

  test("renders correctly on tablet viewport", async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto("/");
    await expect(
      page.getByRole("heading", { level: 1 })
    ).toContainText("ARTUR BANCZYK");
    await expect(
      page.getByRole("heading", { name: /work experience/i })
    ).toBeVisible();
  });

  test("renders correctly on desktop viewport", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");
    await expect(
      page.getByRole("heading", { level: 1 })
    ).toContainText("ARTUR BANCZYK");
  });

  test("no horizontal overflow on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");

    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });

    expect(hasOverflow).toBe(false);
  });

  test("no horizontal overflow on tablet", async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto("/");

    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });

    expect(hasOverflow).toBe(false);
  });
});
