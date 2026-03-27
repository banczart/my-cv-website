import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useIsMobile } from "../use-mobile";

describe("useIsMobile", () => {
  let listeners: Map<string, (() => void)[]>;

  beforeEach(() => {
    listeners = new Map();

    // Mock matchMedia
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(
          (event: string, handler: () => void) => {
            const handlers = listeners.get(event) || [];
            handlers.push(handler);
            listeners.set(event, handlers);
          }
        ),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  it("returns false for desktop viewport (>= 768px)", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 1024,
    });
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });

  it("returns true for mobile viewport (< 768px)", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 375,
    });
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
  });

  it("returns false at exactly 768px", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 768,
    });
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });

  it("updates when viewport changes", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 1024,
    });
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);

    // Simulate resize to mobile
    act(() => {
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        value: 375,
      });
      const handlers = listeners.get("change") || [];
      handlers.forEach((h) => h());
    });

    expect(result.current).toBe(true);
  });
});
