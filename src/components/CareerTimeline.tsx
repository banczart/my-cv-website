import { LineChart } from "lucide-react";

export const CareerTimeline = () => {
  const years = Array.from({ length: 10 }, (_, i) => 2007 + (i * 2));
  
  const calculateTotal = (periods: { duration: number }[]) => {
    const totalMonths = periods.reduce((sum, period) => sum + period.duration, 0);
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    return months > 0 ? `${years}y ${months}m` : `${years}y`;
  };

  const timelineData = [
    { 
      label: "Engineering Management", 
      color: "bg-[hsl(var(--cv-red))]",
      periods: [
        { start: 2015, duration: 123, label: "10y 3m" }
      ]
    },
    { 
      label: "Product Ownership", 
      color: "bg-[hsl(var(--cv-orange))]",
      periods: [
        { start: 2015, duration: 123, label: "10y 3m" }
      ]
    },
    { 
      label: "Team Leadership", 
      color: "bg-[hsl(var(--cv-green))]",
      periods: [
        { start: 2008, duration: 210, label: "17y 6m" }
      ]
    },
    { 
      label: "Project Management", 
      color: "bg-[hsl(var(--cv-cyan))]",
      periods: [
        { start: 2011, duration: 47, label: "3y 11m" }
      ]
    },
    { 
      label: "Test Management & Testing", 
      color: "bg-[hsl(var(--cv-purple))]",
      periods: [
        { start: 2008, duration: 209, label: "17y 5m" }
      ]
    },
    { 
      label: "DevOps", 
      color: "bg-[hsl(var(--cv-pink))]",
      periods: [
        { start: 2008, duration: 206, label: "17y 2m" }
      ]
    },
    { 
      label: "Software Development", 
      color: "bg-[hsl(var(--cv-yellow))]",
      periods: [
        { start: 2015, duration: 123, label: "10y 3m" }
      ]
    }
  ];

  return (
    <section className="py-3">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-6 h-6 bg-primary flex items-center justify-center rounded">
          <LineChart className="w-3.5 h-3.5 text-white" />
        </div>
        <h2 className="text-base font-semibold text-foreground uppercase tracking-wide section-title-underline">
          Career Timeline
        </h2>
      </div>

      {/* Years header */}
      <div className="flex">
        <div className="w-52" />
        {years.map((year, yearIdx) => (
          <div key={year} className={`flex-1 text-center text-11px font-medium text-muted-foreground py-2 ${yearIdx % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
            {year}
          </div>
        ))}
      </div>

      {/* Timeline rows */}
      <div className="relative">
        {/* Background stripes that span the entire timeline area */}
        <div className="absolute inset-0 flex z-10">
          <div className="w-52" />
          {years.map((year, yearIdx) => (
            <div key={`bg-${year}`} className={`flex-1 ${yearIdx % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`} />
          ))}
        </div>
        
        <div className="relative space-y-2 z-20">
          {timelineData.map((track, idx) => (
            <div key={idx} className="flex items-center h-5">
              <div className="career-timeline-label w-52 text-11px font-medium text-foreground pr-2 flex items-baseline gap-2">
                <span className="flex-1 whitespace-nowrap overflow-hidden text-ellipsis">{track.label}</span>
                <span className="text-11px text-muted-foreground font-normal whitespace-nowrap">
                  {calculateTotal(track.periods)}
                </span>
              </div>
              <div className="flex-1 relative h-full">
                {track.periods.map((period, periodIdx) => {
                  const startMonth = (period.start - 2006) * 12;
                  const left = (startMonth / (20 * 12)) * 100;
                  const width = (period.duration / (20 * 12)) * 100;
                  
                  return (
                    <div
                      key={periodIdx}
                      className={`absolute ${track.color} h-full flex items-center justify-center text-11px font-medium text-white`}
                      style={{
                        left: `${left}%`,
                        width: `${width}%`
                      }}
                    >
                      {period.label}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
