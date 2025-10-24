import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export const ProfessionalSummary = () => {
  const highlights = [
    "**Engineering Manager** with experience leading teams ranging from small units to groups of up to **70 engineers**.",
    "**Product Owner** guiding cross-functional teams to deliver customer-focused solutions aligned with strategic goals.",
    "**Engineer** with **20 years** of commercial experience in **Leading SW Development**, **Testing**, and **DevOps**",
    "**Test Manager** driving agile teams to deliver **scalable UI & API** test solutions with strong **quality ownership**.",
    "**Project Manager** fostering **empowerment** and **blame-free culture**, enabling **high-performing Agile teams**.",
    "**AI Enthusiast** exploring **practical applications** of **artificial intelligence** in **software development**.",
    "**Clean Code Evangelist** fostering **design principles**, **clean code**, and **mentorship**",
  ];

  return (
    <section className="py-3">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-6 h-6 bg-primary flex items-center justify-center rounded">
          <Star className="w-3.5 h-3.5 text-white fill-white" />
        </div>
        <h2 className="text-base font-semibold text-foreground uppercase tracking-wide section-title-underline">
          Professional Summary
        </h2>
      </div>
      
      <ul className="space-y-1 text-12-8px" style={{ fontFamily: "'Nunito Sans', sans-serif", fontVariationSettings: '"wdth" 85, "YTLC" 540', paddingLeft: '8px' }}>
        {highlights.map((highlight, index) => {
          const parts = highlight.split(/(\*\*.*?\*\*)/g);
          return (
            <li key={index} className="flex items-start text-muted-foreground">
              <span className="text-foreground mr-3">•</span>
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
