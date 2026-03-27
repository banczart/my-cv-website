import { describe, it, expect } from "vitest";
import { render, screen } from "@/test/test-utils";
import { References } from "../References";

describe("References", () => {
  it("renders without crashing", () => {
    render(<References />);
    expect(
      screen.getByRole("heading", { name: /references/i })
    ).toBeInTheDocument();
  });

  it("renders all 4 references", () => {
    render(<References />);
    const items = screen.getAllByRole("listitem");
    expect(items.length).toBe(4);
  });

  it("renders reference names", () => {
    render(<References />);
    expect(screen.getByText("Dagfinn Rosnes")).toBeInTheDocument();
    expect(screen.getByText("Jan Löfgren")).toBeInTheDocument();
    expect(screen.getByText("Frode Barstad")).toBeInTheDocument();
    expect(screen.getByText("Mirna Milic")).toBeInTheDocument();
  });

  it("renders roles and companies", () => {
    render(<References />);
    expect(screen.getByText(/Senior Director/)).toBeInTheDocument();
    expect(screen.getByText(/Quorum Software/)).toBeInTheDocument();
    expect(screen.getByText(/TietoEvry/)).toBeInTheDocument();
    expect(screen.getByText(/Bouvet ASA/)).toBeInTheDocument();
    expect(screen.getByText(/Equinor/)).toBeInTheDocument();
  });

  it("renders email addresses", () => {
    render(<References />);
    expect(
      screen.getByText(/dagfinn\.rosnes@quorumsoftware\.com/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/jan\.lofgren@tietoevry\.com/)
    ).toBeInTheDocument();
  });

  it("renders phone numbers where available", () => {
    render(<References />);
    expect(screen.getByText(/\+47 \(926\) 62264/)).toBeInTheDocument();
    expect(screen.getByText(/\+46708867168/)).toBeInTheDocument();
  });
});
