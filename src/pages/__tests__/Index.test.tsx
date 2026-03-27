import { describe, it, expect } from "vitest";
import { render, screen } from "@/test/test-utils";
import Index from "../Index";

describe("Index Page", () => {
  it("renders without crashing", () => {
    render(<Index />);
    expect(
      screen.getByRole("heading", { level: 1, name: /artur banczyk/i })
    ).toBeInTheDocument();
  });

  it("renders all CV sections", () => {
    render(<Index />);
    expect(
      screen.getByRole("heading", { name: /professional summary/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /career timeline/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /technical skills/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /language proficiency/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /work experience/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /education/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /courses & certifications/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /references/i })
    ).toBeInTheDocument();
  });

  it("renders the GDPR footer", () => {
    render(<Index />);
    expect(
      screen.getByText(/personal data protection act/i)
    ).toBeInTheDocument();
  });

  it("has correct page structure with a4-container", () => {
    render(<Index />);
    const container = document.querySelector(".a4-container");
    expect(container).toBeInTheDocument();
    const page = document.querySelector(".a4-page");
    expect(page).toBeInTheDocument();
  });

  it("renders main element wrapping content sections", () => {
    render(<Index />);
    const main = document.querySelector("main");
    expect(main).toBeInTheDocument();
  });
});
