"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { SectionNav } from "@/components/section-nav";
import { AwardsSection } from "@/components/sections/awards";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";

type Section = "awards" | "experience" | "projects" | "skills";

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("awards");

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Sidebar />

      <main className="w-full md:w-[65%] p-12 md:p-16 pb-32">
        {activeSection === "awards" && <AwardsSection />}
        {activeSection === "experience" && <ExperienceSection />}
        {activeSection === "projects" && <ProjectsSection />}
        {activeSection === "skills" && <SkillsSection />}
      </main>

      <SectionNav
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
    </div>
  );
}
