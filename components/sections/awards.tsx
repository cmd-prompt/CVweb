import { Card } from "@/components/ui/card";
import { cvData } from "@/lib/data";

export function AwardsSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-sm font-medium text-muted-foreground tracking-widest text-right">
        AWARDS
      </h2>
      {cvData.awards.map((award, index) => (
        <Card key={index} className="p-6 bg-card/50 border-zinc-800">
          <h3 className="text-xl font-normal mb-2">{award.title}</h3>
          <div className="text-sm text-muted-foreground mb-4">
            {award.organization} • {award.year}
          </div>
          <p className="text-sm leading-relaxed">{award.description}</p>
        </Card>
      ))}
    </div>
  );
}
