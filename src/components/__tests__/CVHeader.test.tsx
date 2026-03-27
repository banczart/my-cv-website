import { describe, it, expect } from "vitest";
import { render, screen } from "@/test/test-utils";
import { CVHeader } from "../CVHeader";

describe("CVHeader", () => {
  it("renders without crashing", () => {
    render(<CVHeader />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("displays the full name", () => {
    render(<CVHeader />);
    expect(
      screen.getByRole("heading", { level: 1, name: /artur banczyk/i })
    ).toBeInTheDocument();
  });

  it("displays the job titles", () => {
    render(<CVHeader />);
    expect(screen.getByText(/product owner/i)).toBeInTheDocument();
    expect(screen.getByText(/engineering manager/i)).toBeInTheDocument();
    expect(screen.getByText(/test manager/i)).toBeInTheDocument();
  });

  it("displays the phone number", () => {
    render(<CVHeader />);
    expect(screen.getByText("+48 515 762 415")).toBeInTheDocument();
  });

  it("displays the email address", () => {
    render(<CVHeader />);
    expect(
      screen.getByText("arturbanczyk@yahoo.co.uk")
    ).toBeInTheDocument();
  });

  it("renders LinkedIn profile link", () => {
    render(<CVHeader />);
    const linkedinLink = screen.getByRole("link", { name: /artur-banczyk/i });
    expect(linkedinLink).toHaveAttribute(
      "href",
      "http://www.linkedin.com/in/artur-banczyk"
    );
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders the website link", () => {
    render(<CVHeader />);
    const websiteLink = screen.getByRole("link", { name: /cvbanczyk\.pl/i });
    expect(websiteLink).toHaveAttribute("href", "https://cvbanczyk.pl/");
    expect(websiteLink).toHaveAttribute("target", "_blank");
  });

  it("renders the recommendations link", () => {
    render(<CVHeader />);
    const recsLink = screen.getByRole("link", { name: /recommendations/i });
    expect(recsLink).toHaveAttribute("target", "_blank");
  });

  it("renders the profile image with alt text", () => {
    render(<CVHeader />);
    const img = screen.getByAltText("Profile");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/media/AB_profile_picture.jpeg");
  });

  it("renders the arrow icon", () => {
    render(<CVHeader />);
    const arrow = screen.getByAltText("Arrow icon");
    expect(arrow).toHaveAttribute("src", "/media/arrow-right.svg");
  });
});
