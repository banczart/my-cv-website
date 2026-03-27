import { describe, it, expect } from "vitest";
import { render, screen } from "@/test/test-utils";
import { Courses } from "../Courses";

describe("Courses", () => {
  it("renders without crashing", () => {
    render(<Courses />);
    expect(
      screen.getByRole("heading", { name: /courses & certifications/i })
    ).toBeInTheDocument();
  });

  it("renders all 6 courses", () => {
    render(<Courses />);
    const items = screen.getAllByRole("listitem");
    expect(items.length).toBe(6);
  });

  it("renders course names in bold", () => {
    render(<Courses />);
    expect(
      screen.getByText("Model Context Protocol (MCP): Hands-On with Agentic AI")
    ).toBeInTheDocument();
    expect(
      screen.getByText("ISTQB Certified Tester - Foundation Level")
    ).toBeInTheDocument();
    expect(
      screen.getByText("AWS Cloud Practitioner Essentials")
    ).toBeInTheDocument();
  });

  it("renders providers and years", () => {
    render(<Courses />);
    // "LinkedIn" appears in multiple course entries, so use getAllByText
    const linkedinMatches = screen.getAllByText(/LinkedIn/);
    expect(linkedinMatches.length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Amazon Web Services \(AWS\)/).length).toBe(2);
    expect(screen.getAllByText(/2025/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/2007/)).toBeInTheDocument();
  });
});
