import { UserCheck } from "lucide-react";

export const References = () => {
  const references = [
    {
      name: "Dagfinn Rosnes",
      role: "Senior Director",
      company: "Quorum Software",
      email: "dagfinn.rosnes@quorumsoftware.com",
      phone: "+47 (926) 62264"
    },
    {
      name: "Jan Löfgren",
      role: "Head of Portfolio & Operations",
      company: "TietoEvry",
      email: "jan.lofgren@tietoevry.com",
      phone: "+46708867168"
    },
    {
      name: "Frode Barstad",
      role: "Delivery Manager",
      company: "Bouvet ASA",
      email: "fbarstad@gmail.com"
    },
    {
      name: "Mirna Milic",
      role: "Task Lead Project Deliveries",
      company: "Equinor",
      email: "mmil@equinor.com"
    }
  ];

  return (
    <section className="py-3">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-6 h-6 bg-primary flex items-center justify-center rounded">
          <UserCheck className="w-3.5 h-3.5 text-white" />
        </div>
        <h2 className="text-base font-semibold text-foreground uppercase tracking-wide section-title-underline">
          References
        </h2>
      </div>

      <ul className="space-y-3" style={{ paddingLeft: '6px' }}>
        {references.map((reference, index) => (
          <li key={index} className="flex items-start text-muted-foreground" style={{ fontSize: '11px' }}>
            <span className="text-foreground mr-3">•</span>
            <span className="flex-1">
              <strong className="font-semibold text-foreground">{reference.name}</strong> - {reference.role}, {reference.company}
              <br />
              Email: {reference.email} • Phone: {reference.phone}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
