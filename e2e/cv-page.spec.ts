import { test, expect } from "@playwright/test";

test.describe("CV Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("loads successfully with correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/CV - Artur Banczyk/i);
  });

  test("displays the name heading", async ({ page }) => {
    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toContainText("ARTUR BANCZYK");
  });

  test("displays all major sections", async ({ page }) => {
    const sections = [
      "Professional Summary",
      "Career Timeline",
      "Technical Skills",
      "Language Proficiency",
      "Work Experience",
      "Education",
      "Courses & Certifications",
      "References",
    ];

    for (const section of sections) {
      await expect(
        page.getByRole("heading", { name: section })
      ).toBeVisible();
    }
  });

  test("profile image loads correctly", async ({ page }) => {
    const profileImg = page.getByAltText("Profile");
    await expect(profileImg).toBeVisible();
  });

  test("contact links are present with correct hrefs", async ({ page }) => {
    const linkedinLink = page.getByRole("link", { name: /artur-banczyk/i });
    await expect(linkedinLink).toBeVisible();
    await expect(linkedinLink).toHaveAttribute(
      "href",
      /linkedin\.com/
    );

    const websiteLink = page.getByRole("link", { name: /cvbanczyk\.pl/i });
    await expect(websiteLink).toBeVisible();
    await expect(websiteLink).toHaveAttribute("href", /cvbanczyk\.pl/);
  });

  test("GDPR footer is visible", async ({ page }) => {
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
    await expect(footer).toContainText("Personal Data Protection Act");
  });

  test("work experience entries are visible", async ({ page }) => {
    await expect(page.getByText("Senior QA Manager")).toBeVisible();
    await expect(
      page.getByText("Product Owner & Engineering Manager")
    ).toBeVisible();
    await expect(
      page.getByText("GSM/UMTS Product Validation Engineer")
    ).toBeVisible();
  });

  test("company logos are loaded", async ({ page }) => {
    const logos = page.locator('img[alt="Quorum Software"]');
    const count = await logos.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });
});
