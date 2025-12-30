import { Card } from "@/components/ui/card";
import { cvData } from "@/lib/data";

export function SkillsSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-sm font-medium text-muted-foreground tracking-widest text-right">
        SKILLS
      </h2>
      {cvData.skills.map((skillCategory, index) => (
        <Card key={index} className="p-6 bg-card/50 border-zinc-800">
          <h3 className="text-xl font-normal mb-4">{skillCategory.category}</h3>
          <ul className="space-y-2">
            {skillCategory.items.map((item, idx) => (
              <li key={idx} className="text-sm leading-relaxed flex gap-3">
                <span className="text-blue-500 mt-1.5">•</span>
                <span className="flex-1">{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
