import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";

function renderApp(initialRoute = "/") {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });

  return render(
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <MemoryRouter initialEntries={[initialRoute]}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MemoryRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

describe("App Integration", () => {
  it("renders the CV page at root route", () => {
    renderApp("/");
    expect(
      screen.getByRole("heading", { level: 1, name: /artur banczyk/i })
    ).toBeInTheDocument();
  });

  it("renders 404 page for unknown routes", () => {
    renderApp("/nonexistent-page");
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });

  it("renders all providers without errors", () => {
    renderApp("/");
    // If we get here without throwing, all providers initialized correctly
    expect(document.querySelector("#root") || document.body).toBeTruthy();
  });

  it("404 page contains link back to home", () => {
    renderApp("/some/bad/path");
    const homeLink = screen.getByRole("link", { name: /return to home/i });
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
