import { describe, it, expect } from "vitest";
import { render, screen } from "@/test/test-utils";
import { WorkExperience } from "../WorkExperience";

describe("WorkExperience", () => {
  it("renders without crashing", () => {
    render(<WorkExperience />);
    expect(
      screen.getByRole("heading", { name: /work experience/i })
    ).toBeInTheDocument();
  });

  it("renders all 11 job titles", () => {
    render(<WorkExperience />);
    expect(screen.getByText("Senior QA Manager")).toBeInTheDocument();
    expect(
      screen.getByText("Product Owner & Engineering Manager")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Product Owner & Senior Software Manager")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Product Owner & R&D Manager (CTO)")
    ).toBeInTheDocument();
    expect(screen.getByText("Senior Project Manager")).toBeInTheDocument();
    expect(screen.getByText("Delivery Manager")).toBeInTheDocument();
    expect(
      screen.getByText("Lead Test Manager & Project Manager")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Senior Test Manager & QA Consultant")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Test Manager & QA Consultant")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Protocol Field Test (PFT) Team Leader")
    ).toBeInTheDocument();
    expect(
      screen.getByText("GSM/UMTS Product Validation Engineer")
    ).toBeInTheDocument();
  });

  it("renders company names and logos", () => {
    render(<WorkExperience />);
    const quorumLogos = screen.getAllByAltText("Quorum Software");
    expect(quorumLogos.length).toBe(2);

    const tietoEvryLogos = screen.getAllByAltText("TietoEvry");
    expect(tietoEvryLogos.length).toBe(2);

    const samsungLogo = screen.getByAltText("Samsung Electronics");
    expect(samsungLogo).toBeInTheDocument();

    const lgLogo = screen.getByAltText("LG Electronics");
    expect(lgLogo).toBeInTheDocument();
  });

  it("renders periods and durations", () => {
    render(<WorkExperience />);
    expect(
      screen.getByText(/January 2026 - Present/)
    ).toBeInTheDocument();
    expect(screen.getByText(/0 years 3 months/)).toBeInTheDocument();
    expect(
      screen.getByText(/February 2006 - July 2008/)
    ).toBeInTheDocument();
  });

  it("renders locations", () => {
    render(<WorkExperience />);
    expect(screen.getByText("Remote, Poland")).toBeInTheDocument();
    const ostrava = screen.getAllByText("Ostrava, Czech Republic");
    expect(ostrava.length).toBeGreaterThanOrEqual(5);
    const warsaw = screen.getAllByText("Warsaw, Poland");
    expect(warsaw.length).toBe(2);
  });

  it("renders achievements with bold text formatting", () => {
    render(<WorkExperience />);
    // Check that **bold** markdown is rendered as <strong>
    const strongElements = document.querySelectorAll("strong");
    expect(strongElements.length).toBeGreaterThan(10);
  });

  it("renders keyword sections", () => {
    render(<WorkExperience />);
    // Check for keyword labels
    const keywordsLabels = screen.getAllByText("Keywords:");
    expect(keywordsLabels.length).toBeGreaterThanOrEqual(1);

    const approachLabels = screen.getAllByText("Approach:");
    expect(approachLabels.length).toBeGreaterThanOrEqual(1);

    const devopsLabels = screen.getAllByText("DevOps:");
    expect(devopsLabels.length).toBeGreaterThanOrEqual(1);
  });
});
