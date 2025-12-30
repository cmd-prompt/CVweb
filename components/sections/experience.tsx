import { Card } from "@/components/ui/card";
import { cvData } from "@/lib/data";

export function ExperienceSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-sm font-medium text-muted-foreground tracking-widest text-right">
        EXPERIENCE
      </h2>
      {cvData.experience.map((job, index) => (
        <Card key={index} className="p-6 bg-card/50 border-zinc-800">
          <h3 className="text-xl font-normal mb-2">{job.role}</h3>
          <div className="text-sm text-muted-foreground mb-4">
            {job.company} • {job.period}
            <br />
            {job.location}
          </div>
          <ul className="space-y-2">
            {job.responsibilities.map((resp, idx) => (
              <li key={idx} className="text-sm leading-relaxed flex gap-3">
                <span className="text-blue-500 mt-1.5">•</span>
                <span className="flex-1">{resp}</span>
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
