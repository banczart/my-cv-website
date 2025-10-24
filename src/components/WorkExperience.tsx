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
    devops?: string;
    aitools?: string;
    clientserver?: string;
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
          <h3 className="font-semibold text-foreground mb-1" style={{ fontSize: '14px' }}>{title}</h3>
          <p className="text-muted-foreground font-semibold" style={{ fontSize: '12.8px' }}>{subtitle}</p>
        </div>
        
        <div className="flex items-center justify-end" style={{ width: '120px', flexShrink: 0 }}>
          {companyLogo && (
            <img src={companyLogo} alt={company} className="max-h-10 max-w-full w-auto h-auto object-contain" />
          )}
        </div>
      </div>

      <div className="text-muted-foreground mb-1" style={{ fontSize: '12px' }}>
        {period} ({duration})
      </div>
      <div className="text-muted-foreground mb-4" style={{ fontSize: '12px' }}>
        {location}
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mb-4">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex gap-3 text-muted-foreground" style={{ fontSize: '11px' }}>
            <span className="text-foreground mt-0.5">•</span>
            <span className="flex-1" style={{ hyphens: 'auto', wordBreak: 'break-word', textAlign: 'justify' }}>
              {parseAchievement(achievement)}
            </span>
          </li>
        ))}
      </ul>

      {keywords && (
        <div style={{ fontSize: '11px', lineHeight: '1.4' }}>
          <div style={{ wordWrap: 'break-word' }}>
            {keywords.other && (
              <>
                <strong className="font-semibold text-foreground">Keywords:</strong> <span className="text-muted-foreground">{keywords.other}</span>
                {(keywords.approach || keywords.devops || keywords.languages || keywords.aitools || keywords.clientserver || keywords.tools) && <span style={{ marginLeft: '16px' }}></span>}
              </>
            )}
            {keywords.approach && (
              <>
                <strong className="font-semibold text-foreground">Approach:</strong> <span className="text-muted-foreground">{keywords.approach}</span>
                {(keywords.devops || keywords.languages || keywords.aitools || keywords.clientserver || keywords.tools) && <span style={{ marginLeft: '16px' }}></span>}
              </>
            )}
            {keywords.devops && (
              <>
                <strong className="font-semibold text-foreground">DevOps:</strong> <span className="text-muted-foreground">{keywords.devops}</span>
                {(keywords.languages || keywords.aitools || keywords.clientserver || keywords.tools) && <span style={{ marginLeft: '16px' }}></span>}
              </>
            )}
            {keywords.languages && (
              <>
                <strong className="font-semibold text-foreground">Languages:</strong> <span className="text-muted-foreground">{keywords.languages}</span>
                {(keywords.aitools || keywords.clientserver || keywords.tools) && <span style={{ marginLeft: '16px' }}></span>}
              </>
            )}
            {keywords.aitools && (
              <>
                <strong className="font-semibold text-foreground">AI Tools:</strong> <span className="text-muted-foreground">{keywords.aitools}</span>
                {(keywords.clientserver || keywords.tools) && <span style={{ marginLeft: '16px' }}></span>}
              </>
            )}
            {keywords.clientserver && (
              <>
                <strong className="font-semibold text-foreground">Client/Server/DB:</strong> <span className="text-muted-foreground">{keywords.clientserver}</span>
                {(keywords.tools) && <span style={{ marginLeft: '16px' }}></span>}
              </>
            )}
            {keywords.tools && (
              <>
                <strong className="font-semibold text-foreground">Other Tools:</strong> <span className="text-muted-foreground">{keywords.tools}</span>
              </>
            )}
          </div>
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
        "**Led globally distributed engineering teams**, driving strategic alignment, organizational effectiveness, and delivery of enterprise-grade energy software solutions.",
        "**Owned and architected multiple products**, including Energy Component Smart SaaS, Qapps Framework, and Support Tools, leveraging cloud-native technologies.",
        "**Designed and implemented cloud architecture** for scalable, secure, and high-performance SaaS solutions, optimizing cost and operational efficiency across upstream and midstream workflows.",
        "**Oversaw full testing lifecycle**: manual, automated (MS Playwright), and performance testing—ensuring product quality, reliability, and compliance with industry standards.",
        "**Championed CI/CD and DevOps transformation**, deploying pipelines via Jenkins, GitHub CI/CD, and Azure DevOps to accelerate delivery and improve engineering productivity.",
        "**Led AI adoption in software development**, integrating intelligent automation and enhancing user experience across EC platforms and micro-applications.",
        "**Managed Czech Republic branch operations**, including fiscal accountability, recruitment, cross-functional collaboration, and strategic integration with global teams.",
        "**Contributed to enterprise architecture and security governance**, participating in EC Architects forum, managing static code analysis (Veracode), penetration testing, and 3rd-party system integrations."
      ],
      keywords: {
        other: "ELC, TA, JD, HC, R&R, ESAT, NPS, RM",
        languages: "TypeScript, JavaScript, XML, SQL, HTML, CSS",
        approach: "Agile, Scrum, Kanban",
        devops: "Jenkins, GitHub Actions, Azure DevOps, Docker, Docker hub, Rancher Desktop, CI/CD pipelines, Kubernetes (K8s), AWS, Azure, Windows, Linux, MacOS",
        tools: "JIRA, Confluence, Git, BPMN & UML tools, Keycloak, MS Playwright, Cypress, Selenium, Electron,  XMind, Figma, Veracode, IntelliJ, VS Code, Android Studio, Xcode",
        aitools: "GitHub Copilot, claude.ai",
        clientserver: "AngularJS, ESLint, Node.js",
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
        "**Led globally distributed software engineering teams**, driving strategic alignment, agile delivery, and cross-functional collaboration across upstream and midstream energy domains.",
        "**Owned and delivered multiple products**, including SMART SaaS, Mobile Framework, and Support Tools, using AWS, Angular, REST APIs, and modern front-end technologies.", 
        "**Architected and implemented cloud-native solutions**, enabling scalable, secure, and cost-efficient SaaS offerings for onshore and offshore oil & gas operations.",
        "**Directed full product lifecycle**, including roadmap creation, system design, and execution—resulting in faster time-to-market and improved customer satisfaction.",
        "**Oversaw comprehensive testing strategy**, including manual, automated (MS Playwright), and performance testing—reducing critical defects and enhancing product reliability.",
        "**Drove CI/CD and DevOps adoption**, implementing pipelines with Jenkins, GitHub CI/CD, and Azure DevOps to streamline releases and improve engineering efficiency.",
        "**Managed Czech Republic Oil & Gas unit**, including fiscal responsibility, recruitment, and strategic collaboration with global branches and partners (e.g., KADME).",
        "**Contributed to enterprise architecture and security governance**, leading Veracode static scans, penetration testing, and integration with 3rd-party systems while actively participating in the EC Architects forum."
      ],
      keywords: {
        other: "ELC, TA, JD, HC, R&R, ESAT, NPS, RM",
        languages: "TypeScript, JavaScript, XML, SQL, HTML, CSS",
        approach: "Agile, Scrum, Kanban",
        devops: "Jenkins, GitHub Actions, Azure DevOps, Docker, Docker hub, Rancher Desktop, CI/CD pipelines, Kubernetes (K8s), AWS, Azure, Windows, Linux, MacOS",
        tools: "JIRA, Confluence, Git, BPMN & UML tools, Keycloak, MS Playwright, Cypress, Selenium, Electron,  XMind, Figma, Veracode, IntelliJ, VS Code, Android Studio, Xcode",
        clientserver: "AngularJS, ESLint, Node.js",
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
         "**Product Owner** of a cloud-based, end-to-end multi-channel advertising management platform covering sales, CRM, booking, production, and invoicing.",
         "Led development of **Multichannel Web Edition Advertisement Booking** using a 3-tier architecture (AngularJS, Spring Framework, Oracle DB).",
         "Delivered **Cross Advertising Integration** platform with built-in connectors to major Ad-servers (Google DFP, Adform) and CRM systems (Salesforce, SuperOffice).",
         "Oversaw legacy systems and rich internet applications including **MPagePlacement** (Adobe Flex), **Page Robot**, and **Adobe InDesign Plugins**.",
         "Acted as **CTO of R&D** for the Media department, defining and executing product strategy across the Cross Advertising suite.",
         "Spearheaded **CI/CD implementation** using Jenkins, GitHub CI/CD, and Azure DevOps to streamline deployment and development workflows.",
         "**Managed globally distributed teams**, budgets, schedules, risks, and stakeholder relationships across multiple advertising technology projects.",
         "**Supported sales** through technical consultancy, RFPs, solution proposals, MVPs, and contract negotiations."
      ],
      keywords: {
        other: "ELC, TA, JD, HC, R&R, ESAT, NPS, RM",
        languages: "TypeScript, JavaScript, XML, SQL, HTML, CSS, JAVA",
        approach: "Agile, Scrum, Kanban",
        devops: "Jenkins, GitHub, Azure DevOps, Docker,CI/CD pipelines, Kubernetes (K8s), AWS",
        tools: "JIRA, Confluence, Git, BPMN & UML tools, Keycloak, Cypress, Selenium, Protractor, XMind, Figma, Veracode, IntelliJ, VS Code, GoogleDFP, Adform, Adnuntius, Super Office, Salesforce, Adobe InDesign",
        clientserver: "AngularJS, Bootstrap, jQuery, Protractor, Gruntjs, HTML5, CSS3, Apache Tomcat, Apache CXF, Hibernate, Spring Framework, Maven, Oracle, PostgresSQL, MariaDB, Java 1.8, JSP, JAX-WS, WSDL, SOAP, Adobe Flex platform, Adobe AIR runtime, Java EE Server, Hibernate, Jboss (Wildfly)",
      }
    },,
  {
      title: "Senior Project Manager",
      subtitle: "Release Manager, Scrum Master",
      company: "Tieto",
      companyLogo: "/logos/tieto.png",
      period: "December 2013 - September 2015",
      duration: "1 year 9 months",
      location: "Ostrava, Czech Republic",
      achievements: [
         "**Led Agile delivery of medium and large-scale IT projects**, from contract setup and backlog refinement to production deployment.",
         "Facilitated sprint planning, daily stand-ups, and retrospectives to ensure **continuous improvement and team alignment**.",
         "Managed **customer and subcontractor relationships**, ensuring technical compliance and collaborative delivery.",
         "Oversaw budgeting, resource allocation, and progress tracking across **globally distributed Agile teams**.",
         "Supported **issue resolution** and **change management** through transparent communication and **iterative development cycles**."
      ],
      keywords: {
        approach: "Agile, Scrum, Kanban",
        devops: "Jenkins, GitHub, Azure DevOps, Docker,CI/CD pipelines, Kubernetes (K8s), AWS",
        tools: "JIRA, Confluence, MS Project, OpenProject, MS Toolkit, Git, Nexus, XMind, Figma, Salesforce",}
    },
     {
      title: "Delivery Manager",
      subtitle: "",
      company: "Tieto",
      companyLogo: "/logos/tieto.png",
      period: "November 2013 - July 2014",
      duration: "8 months",
      location: "Ostrava, Czech Republic",
      achievements: [
         "**Coordinated delivery activities** for the **City of Helsinki** account, supporting **Customer Executives** and **Delivery Executives**.",
         "**Identified service opportunities** aligned with customer needs, leveraging **TCZ site capabilities**.",
         "Maintained **close collaboration** with **TCZ leadership**, initiating and communicating **new business leads**.",
         "Provided **cross-unit delivery overviews** to support strategic planning and executive decision-making.",
         "Ensured **alignment between customer expectations and internal capabilities** through proactive **communication and coordination**."
      ],
      keywords: {
        approach: "Agile",
        tools: "JIRA, Confluence, MS Project, OpenProject, MS Toolkit, XMind, Figma, Salesforce",}
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
         "**Led QA and project management** across multiple IT projects, overseeing full lifecycle from **contract setup** to **production deployment**.",
         "Defined and tracked **QA metrics** such as **defect density**, **test coverage**, and **defect resolution time**, driving continuous quality improvement.",
         "Managed **resource planning**, **recruitment**, and **subcontractor coordination**, ensuring efficient team performance and delivery.",
         "Directed **staffing** and **team leadership**, aligning test strategy with business goals and fostering cross-functional collaboration.",
         "Maintained strong **customer engagement**, resolving issues and adapting QA processes to meet evolving **business requirements**."
      ],
      keywords: {
        approach: "Agile, Scrum, Kanban",
        devops: "Jenkins, GitHub, AWS, Docker,CI/CD pipelines",
        tools: "JIRA, Confluence, MS Project, OpenProject, MS Toolkit, Git, Keycloak, Cypress, Selenium, Postman, SoapUI, Protractor, XMind"}
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
         "**Led QA consulting and test management** across multiple IT projects, ensuring alignment with business and technical goals.",
         "Managed the **Test Services Portfolio**, overseeing **resource allocation**, **recruitment**, and **subcontractor agreements**.",
         "Directed **project staffing**, career path planning, and team coordination to support delivery excellence.",
         "Maintained strong **customer engagement**, handling requests, resolving issues, and ensuring satisfaction.",
         "**Provided **strategic communication** to department leadership and team leads regarding upcoming projects and delivery challenges."
      ],
      keywords: {
        approach: "Agile, Scrum, Kanban, Watterfall",
        devops: "Jenkins, GitHub",
        tools: "HP Quality Center, Test Link, Bugzilla, Test Complete, JIRA, Confluence, MS Toolkit, Git, Keycloak, Selenium, Protractor, Postman, SoapUI,"}
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
         "**Managed multiple complex projects**, overseeing **release-level test planning**, **execution**, and **UAT coordination**.",
         "Led **testing process development**, including **automation** and **performance testing** guidelines, ensuring consistent quality standards.",
         "Directed **environment coordination**, **status monitoring**, and **cross-project communication** with project managers and test leads.",
         "Conducted **reviews of deliverables**, tracked testing procedures, and reported status to **program management**.",
         "Managed and mentored the **Test Management** & **QA consultancy team**, driving service excellence and supporting **career development**."
      ],
keywords: {
        approach: "Agile, Waterfall",
        devops: "Jenkins, GitHub",
        tools: "HP Quality Center, Test Link, Bugzilla, Test Complete, JIRA, Confluence, MS Toolkit, Git, Keycloak, Selenium, Protractor, Postman, SoapUI,"}
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
         "**Led planning and coordination** of mobile software testing processes, including **field tests**, **GCF/IOT**, and **operator join tests** across European regions.",
         "Managed **test team workload**, **environment setup**, and **test lab operations**, ensuring readiness and efficiency.",
         "Defined and executed **test plans**, covering **automation**, **performance**, and **business-critical user scenarios**.",
         "Conducted **requirement analysis** and communicated **testing strategies** to project stakeholders and team leads.",
         "Achieved successful ramp-up of new application testing efforts, contributing to **quality improvements** and **goal attainment**."
      ],
      keywords: {
        tools: "HP Quality Center, MS Toolkit, Samsung SDK"
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
         "**Led validation and testing** of 2G/3G mobile handsets for major European operators (VDF, TMO, ORG), ensuring compliance with client requirements.",
         "Performed **static and dynamic software testing**, achieving a **significant reduction in field defects** through early-stage validation.",
         "Collaborated with **global development teams** (Korea, India, Russia) and operators to resolve issues and align on release quality.",
         "Developed and maintained **test plans**, **checklists**, and **documentation**, and coordinated **field testing** across multiple European countries (up to 60% travel).",
         "Managed **defect lifecycle**, including prioritization, analysis, and reporting, contributing to **improved defect resolution time** and **lower defect leakage**.",
         "Provided **technical support** to service and sales teams, and delivered **internal training** to new QA engineers in Warsaw and other European LG offices."
      ],
      keywords: {
        tools: "HP Quality Center, MS Toolkit, LG SDK"
      }
    }
  ];

  return (
    <section className="py-3">
      <div className="flex items-center gap-3 mb-6">
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
