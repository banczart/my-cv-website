import { Star } from "lucide-react";

export const TechnicalSkills = () => {
  const renderStars = (count: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < count ? 'fill-primary text-primary' : 'text-muted-foreground stroke-2'
            }`}
            fill={i < count ? undefined : "none"}
          />
        ))}
      </div>
    );
  };

  const programmingLanguages = [
    { name: "XML", rating: 4 },
    { name: "SQL", rating: 4 },
    { name: "HTML", rating: 4 },
  ];

  const tools = [
    { name: "Docker", rating: 5 },
    { name: "Kubernetes", rating: 4 },
    { name: "Jenkins", rating: 4 },
  ];

  const additionalLanguages = [
    "Basic (TypeScript, JavaScript, C#, C++)", "Build tools (Maven, Gradle)", "AI Tools (GitHub Copilot, claude.ai, ChatGPT)", "Frameworks (Angular, React)", "Front-end (AngularJS, Bootstrap, jQuery, CSS3, GoJS)", "Back-end (Apache Tomcat, Apache CXF)", "Security (Veracode)", "Authentication (Keycloak)", "Development environment (IntelliJ, VS Code, Eclipse, Android Studio, Xcode)", "Mobile Application Publishing (Android, Apple stores)"
  ];
  const additionalTools = [
    "Git", "GitHub Actions", "Azure DevOps", "AWS", "Terraform",
    "Ansible", "Selenium", "Jest", "React", "Node.js"
  ];

  const methodologies = [
    { name: "Agile", rating: 5 },
    { name: "Waterfall", rating: 5 },
  ];
  const additionalMethodologies = [
    "Scrum", "Kanban", "XP", "SAFe"
  ];

  const CloudAndIntegrations = [
    { name: "AWS", rating: 4 },
    { name: "Azure", rating: 4 },
    { name: "API Integration", rating: 5 },
  ];
  const additionalCloudAndIntegrations = [
    "Google Cloud", "REST APIs", "Microservices", "SaaS", "PaaS", "OAuth", "GraphQL"
  ];

  const DevOps = [
    { name: "CI/CD tools", rating: 4 },
    { name: "Containerization", rating: 4 },
    { name: "Deployment", rating: 4 },
  ];
  const additionalDevOps = [
    "Jenkins", "GitHub Actions", "Azure DevOps", "Docker", "Docker Hub", "Rancher Desktop", "Windows", "Linux", "MacOS", "CI/CD pipelines", "Kubernetes (K8s)", "AWS", "Azure"
  ];

  const TestingAndAutomation = [
    { name: "Test Management", rating: 5 },
    { name: "Manual Testing", rating: 5 },
    { name: "Test Automation", rating: 4 },
  ];
  const additionalTestingAndAutomation = [
    "TDD", "BDD", "Load Testing", "Performance Testing", "E2E Testing", "API Testing", "Selenium", "Playwright", "Cypress", "Protractor", "JIRA", "HP Quality Center", "Test Link", "Bugzilla", "Test Complete"
  ];

  const ProjectManagementTools = [
    { name: "JIRA", rating: 5 },
    { name: "Confluence", rating: 5 },
    { name: "MS Project", rating: 4 },
  ];
  const additionalProjectManagementTools = [
    "Git", "Azure DevOps Boards", "GitHub Projects", "Open Project", "MS Toolkit", "Prezi", "XMind", "Figma", "Adobe InDesign"
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-4">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-6 h-6 bg-primary flex items-center justify-center rounded">
          <div className="w-3 h-3">
            <svg viewBox="0 0 12 12" fill="none" className="w-full h-full">
              <circle cx="6" cy="6" r="5" stroke="white" strokeWidth="1.5" fill="none"/>
              <circle cx="6" cy="6" r="2" fill="white"/>
            </svg>
          </div>
        </div>
        <h2 className="text-base font-semibold text-foreground uppercase tracking-wide section-title-underline">
          Technical Skills
        </h2>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="font-bold text-foreground mb-4 text-12-8px">Methodologies</h3>
          <div className="grid grid-cols-3 gap-8 mb-4">
            {methodologies.map((methodology, index) => (
              <div key={methodology.name} className="flex items-center justify-between relative px-2">
                <div className="font-medium text-foreground text-12-8px">{methodology.name}</div>
                {renderStars(methodology.rating)}
                {index < methodologies.length - 1 && (
                  <div className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 w-px h-6 bg-border"></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-xs text-muted-foreground">
            <span className="font-medium"> </span>
            {additionalMethodologies.join(", ")}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-foreground mb-4 text-12-8px">Cloud & Integrations</h3>
          <div className="grid grid-cols-3 gap-8 mb-4">
            {CloudAndIntegrations.map((item, index) => (
              <div key={item.name} className="flex items-center justify-between relative px-2">
                <div className="font-medium text-foreground text-12-8px">{item.name}</div>
                {renderStars(item.rating)}
                {index < CloudAndIntegrations.length - 1 && (
                  <div className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 w-px h-6 bg-border"></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-xs text-muted-foreground">
            <span className="font-medium">Also: </span>
            {additionalCloudAndIntegrations.join(", ")}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-foreground mb-4 text-12-8px">DevOps</h3>
          <div className="grid grid-cols-3 gap-8 mb-4">
            {DevOps.map((item, index) => (
              <div key={item.name} className="flex items-center justify-between relative px-2">
                <div className="font-medium text-foreground text-12-8px">{item.name}</div>
                {renderStars(item.rating)}
                {index < DevOps.length - 1 && (
                  <div className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 w-px h-6 bg-border"></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-xs text-muted-foreground">
            <span className="font-medium"> </span>
            {additionalDevOps.join(", ")}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-foreground mb-4 text-12-8px">Testing</h3>
          <div className="grid grid-cols-3 gap-8 mb-4">
            {TestingAndAutomation.map((item, index) => (
              <div key={item.name} className="flex items-center justify-between relative px-2">
                <div className="font-medium text-foreground text-12-8px">{item.name}</div>
                {renderStars(item.rating)}
                {index < TestingAndAutomation.length - 1 && (
                  <div className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 w-px h-6 bg-border"></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-xs text-muted-foreground">
            <span className="font-medium"> </span>
            {additionalTestingAndAutomation.join(", ")}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-foreground mb-4 text-12-8px">Project Management Tools</h3>
          <div className="grid grid-cols-3 gap-8 mb-4">
            {ProjectManagementTools.map((item, index) => (
              <div key={item.name} className="flex items-center justify-between relative px-2">
                <div className="font-medium text-foreground text-12-8px">{item.name}</div>
                {renderStars(item.rating)}
                {index < ProjectManagementTools.length - 1 && (
                  <div className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 w-px h-6 bg-border"></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-xs text-muted-foreground">
            <span className="font-medium">Also: </span>
            {additionalProjectManagementTools.join(", ")}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-foreground mb-4 text-12-8px">Coding</h3>
          <div className="grid grid-cols-3 gap-8 mb-4">
            {programmingLanguages.map((lang, index) => (
              <div key={lang.name} className="flex items-center justify-between relative px-2">
                <div className="font-medium text-foreground text-12-8px">{lang.name}</div>
                {renderStars(lang.rating)}
                {index < programmingLanguages.length - 1 && (
                  <div className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 w-px h-6 bg-border"></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-xs text-muted-foreground">
            <span className="font-medium"> </span>
            {additionalLanguages.join(", ")}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-foreground mb-4 text-12-8px">Tools</h3>
          <div className="grid grid-cols-3 gap-8 mb-4">
            {tools.map((tool, index) => (
              <div key={tool.name} className="flex items-center justify-between relative px-2">
                <div className="font-medium text-foreground text-12-8px">{tool.name}</div>
                {renderStars(tool.rating)}
                {index < tools.length - 1 && (
                  <div className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 w-px h-6 bg-border"></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-xs text-muted-foreground">
            <span className="font-medium">Also: </span>
            {additionalTools.join(", ")}
          </div>
        </div>
      </div>
    </section>
  );
};
