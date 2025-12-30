export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  linkedin: { username: string; url: string };
  github: { username: string; url: string };
  email: string;
}

export interface Award {
  title: string;
  organization: string;
  year: string;
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export interface Project {
  title: string;
  techStack: string;
  description: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface CVData {
  personal: PersonalInfo;
  contact: ContactInfo;
  awards: Award[];
  experience: Experience[];
  projects: Project[];
  skills: SkillCategory[];
}

export const cvData: CVData = {
  personal: {
    name: "Your Name NEEDED",
    title: "Your Title NEEDED",
    description:
      "A brief professional description highlighting your expertise, experience, and what makes you unique in your field. This should capture your professional identity and core competencies. NEEDED",
  },
  contact: {
    linkedin: {
      username: "yourusername NEEDED",
      url: "https://linkedin.com/in/yourusername NEEDED",
    },
    github: {
      username: "yourusername NEEDED",
      url: "https://github.com/yourusername NEEDED",
    },
    email: "your.email@example.com NEEDED",
  },
  awards: [
    {
      title: "Outstanding Achievement Award NEEDED",
      organization: "Organization Name NEEDED",
      year: "Year NEEDED",
      description:
        "Brief description of the award, what it recognizes, and why you received it. Include the impact or significance of this achievement. NEEDED",
    },
    {
      title: "Excellence in Innovation Award NEEDED",
      organization: "Institution Name NEEDED",
      year: "Year NEEDED",
      description:
        "Description of the award criteria and your specific accomplishment that earned this recognition. Highlight the competitive nature or selectivity if applicable. NEEDED",
    },
    {
      title: "Best Project Award NEEDED",
      organization: "Event/Competition Name NEEDED",
      year: "Year NEEDED",
      description:
        "Details about the project or work that was recognized, the evaluation criteria, and what set your work apart from others. NEEDED",
    },
  ],
  experience: [
    {
      role: "Senior Position Title NEEDED",
      company: "Company Name NEEDED",
      period: "Start Date - End Date NEEDED",
      location: "Location NEEDED",
      responsibilities: [
        "Key responsibility or achievement demonstrating leadership and impact on the organization. NEEDED",
        "Major project or initiative you led, including measurable outcomes and results. NEEDED",
        "Technical skills, tools, or methodologies you employed in this role. NEEDED",
        "Collaboration or team leadership experience that showcases your soft skills. NEEDED",
      ],
    },
    {
      role: "Mid-Level Position Title NEEDED",
      company: "Company Name NEEDED",
      period: "Start Date - End Date NEEDED",
      location: "Location NEEDED",
      responsibilities: [
        "Primary responsibilities and contributions to the team or department. NEEDED",
        "Specific projects or deliverables you were responsible for. NEEDED",
        "Skills developed or technologies mastered during this position. NEEDED",
      ],
    },
    {
      role: "Junior Position Title NEEDED",
      company: "Company Name NEEDED",
      period: "Start Date - End Date NEEDED",
      location: "Location NEEDED",
      responsibilities: [
        "Early career responsibilities and learning experiences. NEEDED",
        "Notable contributions or projects from this foundational role. NEEDED",
      ],
    },
  ],
  projects: [
    {
      title: "Major Project Name NEEDED",
      techStack: "Technology 1, Technology 2, Technology 3 NEEDED",
      description:
        "Comprehensive description of the project, its purpose, and the problem it solves. Include your specific role and contributions. NEEDED",
      highlights: [
        "Key feature or functionality you implemented. NEEDED",
        "Technical challenge you overcame and how you solved it. NEEDED",
        "Impact or results of the project (users, performance metrics, etc.). NEEDED",
      ],
    },
    {
      title: "Secondary Project Name NEEDED",
      techStack: "Framework 1, Library 2, Tool 3 NEEDED",
      description:
        "Overview of this project, highlighting what makes it unique or innovative. Explain your motivation and the value it provides. NEEDED",
      highlights: [
        "Notable technical implementation or architecture decision. NEEDED",
        "Collaboration aspects if it was a team project. NEEDED",
      ],
    },
    {
      title: "Side Project or Open Source Contribution NEEDED",
      techStack: "Technologies Used NEEDED",
      description:
        "Brief description of this additional project or contribution. Emphasize what you learned or how it demonstrates your passion for the field. NEEDED",
      highlights: [],
    },
  ],
  skills: [
    {
      category: "Technical Skills NEEDED",
      items: [
        "Programming Languages: Language 1, Language 2, Language 3, Language 4 NEEDED",
        "Frameworks & Libraries: Framework 1, Framework 2, Library 1, Library 2 NEEDED",
        "Tools & Platforms: Tool 1, Platform 1, Tool 2, Platform 2 NEEDED",
        "Databases: Database 1, Database 2, Database 3 NEEDED",
      ],
    },
    {
      category: "Professional Skills NEEDED",
      items: [
        "Leadership and team management NEEDED",
        "Project planning and execution NEEDED",
        "Cross-functional collaboration NEEDED",
        "Agile/Scrum methodologies NEEDED",
      ],
    },
    {
      category: "Certifications & Education NEEDED",
      items: [
        "Degree Name - University Name, Year NEEDED",
        "Certification Name - Issuing Organization, Year NEEDED",
        "Additional Training - Course or Program Name NEEDED",
      ],
    },
  ],
};
