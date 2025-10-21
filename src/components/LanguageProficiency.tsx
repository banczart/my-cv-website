export const LanguageProficiency = () => {
  const languages = [
    { name: "Polsih", level: "Native", color: "bg-primary" },
    { name: "English", level: "C2 Proficient", color: "bg-[hsl(var(--cv-orange))]" },
    { name: "Czech", level: "Basic", color: "bg-[hsl(var(--cv-green))]" },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-4">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-6 h-6 bg-primary flex items-center justify-center rounded">
          <div className="w-3 h-3">
            <svg viewBox="0 0 12 12" fill="none" className="w-full h-full">
              <path d="M2 3h8M3 6h6M4 9h4" stroke="white" strokeWidth="1.5"/>
            </svg>
          </div>
        </div>
        <h2 className="text-base font-semibold text-foreground uppercase tracking-wide section-title-underline">
          Language Proficiency
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-8 mb-4">
        {languages.map((lang, index) => (
          <div key={lang.name} className="flex items-center justify-between relative px-2">
            <div className="font-medium text-foreground text-12-8px">{lang.name}</div>
            <div className="font-medium text-12-8px" style={{ color: 'hsl(217 91% 40%)' }}>
              {lang.level}
            </div>
            {index < languages.length - 1 && (
              <div className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 w-px h-6 bg-border"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
