import { BookOpen } from "lucide-react";

export const Courses = () => {
  const courses = [
    {
      name: "Model Context Protocol (MCP): Hands-On with Agentic AI",
      provider: "LinkedIn",
      year: "2025"
    },
    {
      name: "Career Essentials in Generative AI",
      provider: "Microsoft and LinkedIn",
      year: "2025"
    },
    {
      name: "AWS Cloud Practitioner Essentials",
      provider: "Amazon Web Services (AWS)",
      year: "2019"
    },
    {
      name: "AWSome Day Conference",
      provider: "Amazon Web Services (AWS)",
      year: "2019"
    },
    {
      name: "IAB HowTo: use the full power of PROGRAMMATIC",
      provider: "IAB Poland",
      year: "2017"
    },
    {
      name: "ISTQB Certified Tester - Foundation Level",
      provider: "Global Association For Software Quality (GASQ)",
      year: "2007"
    }
  ];

  return (
    <section className="py-3">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-6 h-6 bg-primary flex items-center justify-center rounded">
          <BookOpen className="w-3.5 h-3.5 text-white" />
        </div>
        <h2 className="text-base font-semibold text-foreground uppercase tracking-wide section-title-underline">
          Courses & Certifications
        </h2>
      </div>

      <ul className="space-y-2" style={{ paddingLeft: '6px' }}>
        {courses.map((course, index) => (
          <li key={index} className="flex items-start text-muted-foreground" style={{ fontSize: '11px' }}>
            <span className="text-foreground mr-3">•</span>
            <span className="flex-1">
              <strong className="font-semibold text-foreground">{course.name}</strong> - {course.provider} ({course.year})
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
