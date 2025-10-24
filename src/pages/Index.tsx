import { CVHeader } from "@/components/CVHeader";
import { ProfessionalSummary } from "@/components/ProfessionalSummary";
import { CareerTimeline } from "@/components/CareerTimeline";
import { TechnicalSkills } from "@/components/TechnicalSkills";
import { LanguageProficiency } from "@/components/LanguageProficiency";
import { WorkExperience } from "@/components/WorkExperience";
import { Education } from "@/components/Education";
import { Courses } from "@/components/Courses";
import { References } from "@/components/References";

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
            <Education />
            <Courses />
            <References />
          </main>
          <footer className="py-8 text-center text-muted-foreground border-t border-border mt-8" style={{ fontSize: '10px' }}>
            <p>I agree to the processing of personal data provided in this document for realizing the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
