import { Briefcase } from "lucide-react";

interface ExperienceProps {
  title: string;
  subtitle: string;
  company: string;
  companyLogo?: string;
  period: string;
  duration: string;
  location: string;
  achievements: string[];
  keywords?: {
    languages?: string;
    approach?: string;
    tools?: string;
    other?: string;
  };
}

const ExperienceItem = ({ 
  title, 
  subtitle, 
  company, 
  companyLogo, 
  period, 
  duration,
  location, 
  achievements,
  keywords 
}: ExperienceProps) => {
  const parseAchievement = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="mb-10">
      <div className="flex items-start gap-6 mb-3">
        <div className="flex-1">
          <h3 className="text-base font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-muted-foreground font-semibold" style={{ fontSize: '13px' }}>{subtitle}</p>
        </div>
        
        <div className="flex items-center justify-end" style={{ width: '120px', flexShrink: 0 }}>
          {companyLogo && (
            <img src={companyLogo} alt={company} className="max-h-10 max-w-full w-auto h-auto object-contain" />
          )}
        </div>
      </div>

      <div className="text-muted-foreground mb-1" style={{ fontSize: '13px' }}>
        {period} ({duration})
      </div>
      <div className="text-muted-foreground mb-4" style={{ fontSize: '13px' }}>
        {location}
      </div>

      <ul className="space-y-2 mb-4">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex gap-3 text-xs text-muted-foreground">
            <span className="text-foreground mt-0.5">-</span>
            <span className="flex-1">
              {parseAchievement(achievement)}
            </span>
          </li>
        ))}
      </ul>

      {keywords && (
        <div className="flex flex-wrap gap-x-4 gap-y-1" style={{ fontSize: '12px' }}>
          {keywords.languages && (
            <span><strong className="font-semibold text-foreground">Languages:</strong> <span className="text-muted-foreground">{keywords.languages}</span></span>
          )}
          {keywords.approach && (
            <span><strong className="font-semibold text-foreground">Approach:</strong> <span className="text-muted-foreground">{keywords.approach}</span></span>
          )}
          {keywords.other && (
            <span><strong className="font-semibold text-foreground">Keywords:</strong> <span className="text-muted-foreground">{keywords.other}</span></span>
          )}
          {keywords.tools && (
            <span><strong className="font-semibold text-foreground">Tools:</strong> <span className="text-muted-foreground">{keywords.tools}</span></span>
          )}
        </div>
      )}
    </div>
  );
};

export const WorkExperience = () => {
  const experiences: ExperienceProps[] = [
    {
      title: "Product Owner & Country Manager",
      subtitle: "Engineering Manager, Release Manager, Scrum Master",
      company: "Quorum Software",
      companyLogo: "/logos/quorum-software.png",
      period: "June 2021 - Present",
      duration: "4 years 6 months",
      location: "Ostrava, Czech Republic",
      achievements: [
        "..."
      ],
      keywords: {
        other: "KPI, OKR, MBO, L&D, PDP"
      }
    },
    {
      title: "Product Owner & Senior Software Manager",
      subtitle: "Engineering Manager, Release Manager, Scrum Master",
      company: "TietoEvry",
      companyLogo: "/logos/TietoEvry.png",
      period: "March 2019 - May 2021",
      duration: "2 years 3 months",
      location: "Ostrava, Czech Republic",
      achievements: [
        "..."
       ],
      keywords: {
        languages: "TypeScript, Python, Go",
        approach: "Agile, Scrum",
        tools: "Docker, Kubernetes, Azure DevOps, Jenkins"
      }
    },
    {
      title: "Product Owner & R&D Manager (CTO)",
      subtitle: "Engineering Manager, Release Manager, Scrum Master",
      company: "TietoEvry",
      companyLogo: "/logos/TietoEvry.png",
      period: "September 2015 - February 2019",
      duration: "3 years 7 months",
      location: "Ostrava, Czech Republic",
      achievements: [
         "..."
      ],
      keywords: {
        languages: "JavaScript, Node.js, React",
        approach: "Kanban",
        tools: "Git, Jest, MongoDB, AWS"
      }
    },
  {
      title: "Senior Project Manager",
      subtitle: "Engineering Manager, Release Manager, Scrum Master",
      company: "Tieto",
      companyLogo: "/logos/tieto.png",
      period: "September 2015 - February 2019",
      duration: "3 years 7 months",
      location: "Ostrava, Czech Republic",
      achievements: [
         "..."
      ],
      keywords: {
        languages: "JavaScript, Node.js, React",
        approach: "Kanban",
        tools: "Git, Jest, MongoDB, AWS"
      }
    },
     {
      title: "Delivery Manager",
      subtitle: "",
      company: "Tieto",
      companyLogo: "/logos/tieto.png",
      period: "November 2013 - July 2014",
      duration: "3 years 7 months",
      location: "Ostrava, Czech Republic",
      achievements: [
         "..."
      ],
      keywords: {
        languages: "JavaScript, Node.js, React",
        approach: "Kanban",
        tools: "Git, Jest, MongoDB, AWS"
      }
    },
     {
      title: "Lead Test Manager & Project Manager",
      subtitle: "Quality Assurance Coach, Software Engineer in Test",
      company: "Tieto",
      companyLogo: "/logos/tieto.png",
      period: "October 2011 - December 2013",
      duration: "2 years 2 months",
      location: "Ostrava, Czech Republic",
      achievements: [
         "..."
      ],
      keywords: {
        languages: "JavaScript, Node.js, React",
        approach: "Kanban",
        tools: "Git, Jest, MongoDB, AWS"
      }
    },
    {
      title: "Senior Test Manager & QA Consultant",
      subtitle: "Quality Assurance Coach, Software Engineer in Test",
      company: "Tieto",
      companyLogo: "/logos/tieto.png",
      period: "October 2009 - October 2011",
      duration: "2 years",
      location: "Ostrava, Czech Republic",
      achievements: [
         "..."
      ],
      keywords: {
        languages: "JavaScript, Node.js, React",
        approach: "Kanban",
        tools: "Git, Jest, MongoDB, AWS"
      }
    },
    {
      title: "Test Manager & QA Consultant",
      subtitle: "Quality Assurance Coach, Software Engineer in Test",
      company: "Tieto",
      companyLogo: "/logos/tieto.png",
      period: "October 2008 - October 2009",
      duration: "1 year",
      location: "Ostrava, Czech Republic",
      achievements: [
         "..."
      ],
      keywords: {
        languages: "JavaScript, Node.js, React",
        approach: "Kanban",
        tools: "Git, Jest, MongoDB, AWS"
      }
    },
    {
      title: "Protocol Field Test (PFT) Team Leader",
      subtitle: "",
      company: "Samsung Electronics",
      companyLogo: "/logos/samsung.png",
      period: "July 2008 - October 2008",
      duration: "3 months",
      location: "Warsaw, Poland",
      achievements: [
         "..."
      ],
      keywords: {
        languages: "JavaScript, Node.js, React",
        approach: "Kanban",
        tools: "Git, Jest, MongoDB, AWS"
      }
    },
    {
      title: "GSM/UMTS Product Validation Engineer",
      subtitle: "",
      company: "LG Electronics",
      companyLogo: "/logos/lg.png",
      period: "February 2006 - July 2008",
      duration: "2 years 5 months",
      location: "Warsaw, Poland",
      achievements: [
         "..."
      ],
      keywords: {
        languages: "JavaScript, Node.js, React",
        approach: "Kanban",
        tools: "Git, Jest, MongoDB, AWS"
      }
    }
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-4">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-6 h-6 bg-primary flex items-center justify-center rounded">
          <Briefcase className="w-3.5 h-3.5 text-white" />
        </div>
        <h2 className="text-base font-semibold text-foreground uppercase tracking-wide section-title-underline">
          Work Experience
        </h2>
      </div>

      <div>
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};
