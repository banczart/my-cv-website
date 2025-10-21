import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export const ProfessionalSummary = () => {
  const highlights = [
    "**Engineering Manager** with experience leading teams ranging from small units to groups of up to **70 engineers**.",
    "**Product Owner** guiding cross-functional teams to deliver customer-focused solutions aligned with strategic goals.",
    "**Engineer** with 20 years of commercial experience in **Software Development**, **Testing**, and **DevOps**",
    "**Project Manager** cultivating **empowerment** and a **blame-free culture**, building resilient, **high-performing** agile teams.",
    "**Code Quality Advocate** fostering **design principles**, **clean code**, and **mentorship**",
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-4">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-6 h-6 bg-primary flex items-center justify-center rounded">
          <Star className="w-3.5 h-3.5 text-white fill-white" />
        </div>
        <h2 className="text-base font-semibold text-foreground uppercase tracking-wide section-title-underline">
          Professional Summary
        </h2>
      </div>
      
      <ul className="space-y-1 text-12-8px">
        {highlights.map((highlight, index) => {
          const parts = highlight.split(/(\*\*.*?\*\*)/g);
          return (
            <li key={index} className="flex items-center gap-3 text-muted-foreground">
              <span className="text-foreground">•</span>
              <span className="flex-1">
                {parts.map((part, i) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={i} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
                  }
                  return <span key={i}>{part}</span>;
                })}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
