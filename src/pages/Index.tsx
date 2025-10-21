import { CVHeader } from "@/components/CVHeader";
import { ProfessionalSummary } from "@/components/ProfessionalSummary";
import { CareerTimeline } from "@/components/CareerTimeline";
import { TechnicalSkills } from "@/components/TechnicalSkills";
import { LanguageProficiency } from "@/components/LanguageProficiency";
import { WorkExperience } from "@/components/WorkExperience";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="a4-container">
        <div className="a4-page">
          <CVHeader />
          <main>
            <ProfessionalSummary />
            <CareerTimeline />
            <TechnicalSkills />
            <LanguageProficiency />
            <WorkExperience />
          </main>
          <footer className="max-w-5xl mx-auto px-6 py-8 text-center text-sm text-muted-foreground border-t border-border">
            <p>© {new Date().getFullYear()} Artur Banczyk. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
