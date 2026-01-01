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
    name: "Ahmad Fauzan Putra",
    title: "Computer Science Student",
    description:
      "Computer Science student at Institut Teknologi Bandung. Received Honors in ICPC Asia-Jakarta 2025 and placed 2nd in Hology 8.0 2025. Built projects using Python, C++, and various technologies including AI, game development, and data structures.",
  },
  contact: {
    linkedin: {
      username: "Ahmad Fauzan Putra",
      url: "https://www.linkedin.com/in/ahmad-fauzan-p-b88608340/",
    },
    github: {
      username: "cmd-prompt",
      url: "https://github.com/cmd-prompt",
    },
    email: "fpahmad36@gmail.com",
  },
  awards: [
    {
      title: "Honors, ICPC Asia-Jakarta",
      organization: "ICPC",
      year: "2025",
      description:
        "International informatics competition at the collegiate level",
    },
    {
      title: "2nd Place, Hology 8.0",
      organization: "Hology",
      year: "2025",
      description:
        "National Indonesian informatics competition open to college students",
    },
    {
      title: "Finalist, OSN Informatika",
      organization: "OSN",
      year: "2023",
      description:
        "National Indonesian informatics competition for highschool students",
    },
  ],
  experience: [
    {
      role: "Bachelor of Science in Informatics/Computer Science",
      company: "Institut Teknologi Bandung",
      period: "July 2024 - Expected October 2028",
      location: "Bandung, Indonesia",
      responsibilities: [
        "Coursework in Software Design",
        "Working on projects involving algorithms and data structures",
      ],
    },
  ],
  projects: [
    {
      title: "Infinite Wiki",
      techStack: "Gemini AI",
      description:
        "A Wikipedia-like website that generates the definitions using Gemini AI.",
      highlights: [],
    },
    {
      title: "Online Library",
      techStack: "Latent Sentiment Analysis (LSA)",
      description:
        "Built the Book Recommendation system using text sentiment analysis done via Latent Sentiment Analysis (LSA) and created the analysis modules.",
      highlights: [],
    },
    {
      title: "Subgroddit",
      techStack: "CLI",
      description:
        "A CLI-based Reddit-like Website. Created the load/save module, double-ended linked list, and voting module.",
      highlights: [],
    },
    {
      title: "Matrix Calculator",
      techStack: "Linear Algebra",
      description:
        "A calculator app for matrices. Worked on the linear equation system module, determinant module, and regression module.",
      highlights: [],
    },
    {
      title: "Gravity Runner",
      techStack: "Unity",
      description:
        "An \"Endless Runner\" game developed in Unity. Specifically worked in creating the skills the player can use.",
      highlights: [],
    },
  ],
  skills: [
    {
      category: "Languages And Technologies",
      items: [
        "Python, C++, C, Git",
      ],
    },
    {
      category: "Coursework",
      items: [
        "Software Design",
      ],
    },
  ],
};
