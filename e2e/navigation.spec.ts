import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("home page route renders CV", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { level: 1 })
    ).toContainText("ARTUR BANCZYK");
  });

  test("unknown routes show 404 page", async ({ page }) => {
    await page.goto("/this-page-does-not-exist");
    await expect(page.getByText("404")).toBeVisible();
    await expect(page.getByText(/page not found/i)).toBeVisible();
  });

  test("404 page has a link back to home", async ({ page }) => {
    await page.goto("/nonexistent");
    const homeLink = page.getByRole("link", { name: /return to home/i });
    await expect(homeLink).toBeVisible();
    await expect(homeLink).toHaveAttribute("href", "/");
  });

  test("clicking home link from 404 navigates to CV", async ({ page }) => {
    await page.goto("/nonexistent");
    await page.getByRole("link", { name: /return to home/i }).click();
    await expect(
      page.getByRole("heading", { level: 1 })
    ).toContainText("ARTUR BANCZYK");
  });
});
