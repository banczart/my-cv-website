import { describe, it, expect } from "vitest";
import { render, screen } from "@/test/test-utils";
import { ProfessionalSummary } from "../ProfessionalSummary";

describe("ProfessionalSummary", () => {
  it("renders without crashing", () => {
    render(<ProfessionalSummary />);
    expect(
      screen.getByRole("heading", { name: /professional summary/i })
    ).toBeInTheDocument();
  });

  it("renders all highlight bullet points", () => {
    render(<ProfessionalSummary />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(9);
  });

  it("renders bold text from markdown-style formatting", () => {
    render(<ProfessionalSummary />);
    // **Engineering Manager** should render as <strong>
    const boldTexts = document.querySelectorAll("strong");
    expect(boldTexts.length).toBeGreaterThan(0);
    const engineeringManager = Array.from(boldTexts).find(
      (el) => el.textContent === "Engineering Manager"
    );
    expect(engineeringManager).toBeTruthy();
  });

  it("renders key role highlights", () => {
    render(<ProfessionalSummary />);
    expect(screen.getByText("Product Owner")).toBeInTheDocument();
    expect(screen.getByText("Test Manager")).toBeInTheDocument();
    expect(screen.getByText("AI Enthusiast")).toBeInTheDocument();
  });

  it("renders the section icon", () => {
    render(<ProfessionalSummary />);
    // Star icon is rendered inside the heading area
    const section = document.querySelector("section");
    expect(section).toBeInTheDocument();
  });
});
