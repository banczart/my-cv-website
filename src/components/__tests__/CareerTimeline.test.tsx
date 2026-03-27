import { describe, it, expect } from "vitest";
import { render, screen } from "@/test/test-utils";
import { CareerTimeline } from "../CareerTimeline";

describe("CareerTimeline", () => {
  it("renders without crashing", () => {
    render(<CareerTimeline />);
    expect(
      screen.getByRole("heading", { name: /career timeline/i })
    ).toBeInTheDocument();
  });

  it("renders year markers", () => {
    render(<CareerTimeline />);
    expect(screen.getByText("2007")).toBeInTheDocument();
    expect(screen.getByText("2015")).toBeInTheDocument();
    expect(screen.getByText("2023")).toBeInTheDocument();
  });

  it("renders all 7 skill categories", () => {
    render(<CareerTimeline />);
    expect(screen.getByText("Engineering Management")).toBeInTheDocument();
    expect(screen.getByText("Product Ownership")).toBeInTheDocument();
    expect(screen.getByText("Team Leadership")).toBeInTheDocument();
    expect(screen.getByText("Project Management")).toBeInTheDocument();
    expect(
      screen.getByText("Test Management & Testing")
    ).toBeInTheDocument();
    expect(screen.getByText("DevOps")).toBeInTheDocument();
    expect(screen.getByText("Software Development")).toBeInTheDocument();
  });

  it("renders duration labels for each track", () => {
    render(<CareerTimeline />);
    // "10y 3m" appears multiple times (Engineering Management, Product Ownership, Software Development)
    const durations = screen.getAllByText("10y 3m");
    expect(durations.length).toBeGreaterThanOrEqual(3);
  });

  it("renders period labels inside timeline bars", () => {
    render(<CareerTimeline />);
    // Period labels like "10y 3m" appear inside the colored bars
    const periodLabels = screen.getAllByText(/\d+y\s*\d*m?/);
    expect(periodLabels.length).toBeGreaterThan(0);
  });
});
