import { ContactButtons } from "./contact-buttons";
import { cvData } from "@/lib/data";

export function Sidebar() {
  return (
    <aside className="w-full md:w-[35%] p-12 md:p-16 border-r border-zinc-800 flex flex-col">
      <ContactButtons />

      <div className="mt-12 md:mt-16">
        <h1 className="text-4xl md:text-5xl font-light mb-3 leading-tight">
          {cvData.personal.name}
        </h1>
        <h2 className="text-lg md:text-xl font-light text-muted-foreground mb-8 md:mb-10">
          {cvData.personal.title}
        </h2>
        <p className="text-base leading-relaxed text-foreground">
          {cvData.personal.description}
        </p>
      </div>
    </aside>
  );
}
