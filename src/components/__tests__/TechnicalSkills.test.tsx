import { describe, it, expect } from "vitest";
import { render, screen } from "@/test/test-utils";
import { TechnicalSkills } from "../TechnicalSkills";

describe("TechnicalSkills", () => {
  it("renders without crashing", () => {
    render(<TechnicalSkills />);
    expect(
      screen.getByRole("heading", { name: /technical skills/i })
    ).toBeInTheDocument();
  });

  it("renders all skill category headings", () => {
    render(<TechnicalSkills />);
    expect(screen.getByText("Methodologies")).toBeInTheDocument();
    expect(screen.getByText("Cloud & Integrations")).toBeInTheDocument();
    expect(screen.getByText("DevOps")).toBeInTheDocument();
    expect(screen.getByText("Testing")).toBeInTheDocument();
    expect(screen.getByText("Project Management Tools")).toBeInTheDocument();
    expect(screen.getByText("Coding")).toBeInTheDocument();
    expect(screen.getByText("Databases")).toBeInTheDocument();
  });

  it("renders rated skills with names", () => {
    render(<TechnicalSkills />);
    expect(screen.getByText("Agile")).toBeInTheDocument();
    expect(screen.getByText("Waterfall")).toBeInTheDocument();
    expect(screen.getByText("AWS")).toBeInTheDocument();
    expect(screen.getByText("Azure")).toBeInTheDocument();
    expect(screen.getByText("JIRA")).toBeInTheDocument();
    expect(screen.getByText("Oracle")).toBeInTheDocument();
    expect(screen.getByText("XML")).toBeInTheDocument();
    expect(screen.getByText("SQL")).toBeInTheDocument();
  });

  it("renders star ratings (5 stars per skill)", () => {
    render(<TechnicalSkills />);
    // Each rated skill gets 5 SVG star icons
    const allSvgs = document.querySelectorAll("svg");
    // 7 categories * 3 skills each * 5 stars = 105 stars + section icon SVGs
    expect(allSvgs.length).toBeGreaterThan(100);
  });

  it("renders additional skill lists", () => {
    render(<TechnicalSkills />);
    expect(screen.getByText(/Scrum/)).toBeInTheDocument();
    expect(screen.getByText(/Kanban/)).toBeInTheDocument();
    expect(screen.getByText(/Google Cloud/)).toBeInTheDocument();
    expect(screen.getByText(/Jenkins/)).toBeInTheDocument();
    expect(screen.getByText(/E2E Testing/)).toBeInTheDocument();
    expect(screen.getByText(/MariaDB/)).toBeInTheDocument();
  });
});
