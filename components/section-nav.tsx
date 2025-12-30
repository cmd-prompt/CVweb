"use client";

import { Button } from "@/components/ui/button";

type Section = "awards" | "experience" | "projects" | "skills";

interface SectionNavProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

export function SectionNav({ activeSection, onSectionChange }: SectionNavProps) {
  const sections: { key: Section; label: string }[] = [
    { key: "awards", label: "Awards" },
    { key: "experience", label: "Experience" },
    { key: "projects", label: "Projects" },
    { key: "skills", label: "Skills" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 md:left-[35%] z-50 bg-black/80 backdrop-blur-md border-t border-zinc-800 p-6">
      <div className="flex gap-4 flex-wrap">
        {sections.map((section) => (
          <Button
            key={section.key}
            variant={activeSection === section.key ? "default" : "outline"}
            size="sm"
            onClick={() => onSectionChange(section.key)}
            className={
              activeSection === section.key
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "border-zinc-800 hover:bg-zinc-900"
            }
          >
            {section.label}
          </Button>
        ))}
      </div>
    </nav>
  );
}
