import { describe, it, expect } from "vitest";
import { render, screen } from "@/test/test-utils";
import { LanguageProficiency } from "../LanguageProficiency";

describe("LanguageProficiency", () => {
  it("renders without crashing", () => {
    render(<LanguageProficiency />);
    expect(
      screen.getByRole("heading", { name: /language proficiency/i })
    ).toBeInTheDocument();
  });

  it("renders all three languages", () => {
    render(<LanguageProficiency />);
    expect(screen.getByText("Polish")).toBeInTheDocument();
    expect(screen.getByText("English")).toBeInTheDocument();
    expect(screen.getByText("Czech")).toBeInTheDocument();
  });

  it("renders proficiency levels", () => {
    render(<LanguageProficiency />);
    expect(screen.getByText("Native")).toBeInTheDocument();
    expect(screen.getByText("C2 Proficient")).toBeInTheDocument();
    expect(screen.getByText("Basic")).toBeInTheDocument();
  });

  it("renders dividers between language items (except the last)", () => {
    render(<LanguageProficiency />);
    // 3 languages, 2 dividers
    const dividers = document.querySelectorAll(".bg-border");
    expect(dividers.length).toBe(2);
  });
});
