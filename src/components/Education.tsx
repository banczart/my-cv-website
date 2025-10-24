import { GraduationCap } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "Master's Degree",
      field: "Electronics & Telecommunications",
      institution: "Silesian University of Technology",
      location: "Gliwice, Poland",
      period: "2000 - 2005"
    },
    {
      degree: "Master's Degree",
      field: "Electronics & Telecommunications",
      institution: "Bournemouth University",
      location: "Bournemouth, United Kingdom",
      period: "2005 - 2005 (Socrates Erasmus Program)"
    }
  ];

  return (
    <section className="py-3">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-6 h-6 bg-primary flex items-center justify-center rounded">
          <GraduationCap className="w-3.5 h-3.5 text-white" />
        </div>
        <h2 className="text-base font-semibold text-foreground uppercase tracking-wide section-title-underline">
          Education
        </h2>
      </div>

      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index}>
            <h3 className="font-semibold text-foreground" style={{ fontSize: '14px' }}>
              {edu.degree} in {edu.field}
            </h3>
            <p className="text-muted-foreground" style={{ fontSize: '12.8px' }}>
              {edu.institution}
            </p>
            <p className="text-muted-foreground" style={{ fontSize: '12px' }}>
              {edu.location} • {edu.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
