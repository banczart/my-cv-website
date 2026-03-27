import { describe, it, expect } from "vitest";
import { render, screen } from "@/test/test-utils";
import Index from "@/pages/Index";

describe("CV Page Integration", () => {
  it("renders all CV sections in the correct order", () => {
    render(<Index />);

    const headings = screen
      .getAllByRole("heading", { level: 2 })
      .map((h) => h.textContent);

    // Verify expected section headings appear in order
    const expectedOrder = [
      "Professional Summary",
      "Career Timeline",
      "Technical Skills",
      "Language Proficiency",
      "Work Experience",
      "Education",
      "Courses & Certifications",
      "References",
    ];

    expectedOrder.forEach((heading) => {
      expect(headings).toContain(heading);
    });

    // Verify ordering
    const indices = expectedOrder.map((h) => headings.indexOf(h));
    for (let i = 1; i < indices.length; i++) {
      expect(indices[i]).toBeGreaterThan(indices[i - 1]);
    }
  });

  it("renders header above all sections", () => {
    render(<Index />);
    const h1 = screen.getByRole("heading", { level: 1 });
    const firstH2 = screen.getAllByRole("heading", { level: 2 })[0];

    // h1 should come before h2 in DOM order
    expect(
      h1.compareDocumentPosition(firstH2) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy();
  });

  it("renders footer below all sections", () => {
    render(<Index />);
    const footer = document.querySelector("footer");
    const lastSection = document.querySelectorAll("section");
    const lastSectionEl = lastSection[lastSection.length - 1];

    expect(footer).toBeInTheDocument();
    expect(
      lastSectionEl.compareDocumentPosition(footer!) &
        Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy();
  });

  it("contains consistent data between sections", () => {
    render(<Index />);

    // Header says "ARTUR BANCZYK" and work experience references companies
    expect(
      screen.getByRole("heading", { level: 1 })
    ).toHaveTextContent("ARTUR BANCZYK");

    // Work experience and technical skills both reference relevant tools
    expect(screen.getByText("Senior QA Manager")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /technical skills/i })
    ).toBeInTheDocument();
  });

  it("renders all 8 content sections", () => {
    render(<Index />);
    const sections = document.querySelectorAll("section");
    expect(sections.length).toBe(8);
  });
});
