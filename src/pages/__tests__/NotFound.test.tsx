import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@/test/test-utils";
import NotFound from "../NotFound";

describe("NotFound Page", () => {
  it("renders without crashing", () => {
    render(<NotFound />);
    expect(
      screen.getByRole("heading", { name: "404" })
    ).toBeInTheDocument();
  });

  it("displays the error message", () => {
    render(<NotFound />);
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });

  it("renders a link back to home", () => {
    render(<NotFound />);
    const homeLink = screen.getByRole("link", { name: /return to home/i });
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("logs 404 error to console", () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    render(<NotFound />);
    expect(consoleSpy).toHaveBeenCalledWith(
      "404 Error: User attempted to access non-existent route:",
      "/"
    );
    consoleSpy.mockRestore();
  });
});
