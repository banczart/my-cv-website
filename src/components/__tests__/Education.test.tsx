import { describe, it, expect } from "vitest";
import { render, screen } from "@/test/test-utils";
import { Education } from "../Education";

describe("Education", () => {
  it("renders without crashing", () => {
    render(<Education />);
    expect(
      screen.getByRole("heading", { name: /education/i })
    ).toBeInTheDocument();
  });

  it("renders both degrees", () => {
    render(<Education />);
    const degrees = screen.getAllByText(
      /Master's Degree in Electronics & Telecommunications/
    );
    expect(degrees.length).toBe(2);
  });

  it("renders institution names", () => {
    render(<Education />);
    expect(
      screen.getByText("Silesian University of Technology")
    ).toBeInTheDocument();
    expect(screen.getByText("Bournemouth University")).toBeInTheDocument();
  });

  it("renders locations and periods", () => {
    render(<Education />);
    expect(screen.getByText(/Gliwice, Poland/)).toBeInTheDocument();
    expect(screen.getByText(/2000 - 2005/)).toBeInTheDocument();
    expect(
      screen.getByText(/Bournemouth, United Kingdom/)
    ).toBeInTheDocument();
    expect(screen.getByText(/Socrates Erasmus Program/)).toBeInTheDocument();
  });
});
