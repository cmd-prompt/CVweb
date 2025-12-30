import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cvData } from "@/lib/data";

export function ProjectsSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-sm font-medium text-muted-foreground tracking-widest text-right">
        PROJECTS
      </h2>
      {cvData.projects.map((project, index) => (
        <Card key={index} className="p-6 bg-card/50 border-zinc-800">
          <h3 className="text-xl font-normal mb-2">{project.title}</h3>
          <div className="mb-4">
            <Badge variant="secondary" className="text-xs">
              {project.techStack}
            </Badge>
          </div>
          <p className="text-sm leading-relaxed mb-4">{project.description}</p>
          {project.highlights.length > 0 && (
            <ul className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="text-sm leading-relaxed flex gap-3">
                  <span className="text-blue-500 mt-1.5">•</span>
                  <span className="flex-1">{highlight}</span>
                </li>
              ))}
            </ul>
          )}
        </Card>
      ))}
    </div>
  );
}
