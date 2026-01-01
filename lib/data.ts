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
    title: "Computer Science Student & Competitive Programmer",
    description:
      "Computer Science student at Institut Teknologi Bandung with a strong passion for competitive programming and software development. Proven track record in international and national informatics competitions, including ICPC Asia-Jakarta 2025 Finalist and 2nd Place at Hology 8.0 2025. Experienced in building diverse projects ranging from AI-powered applications to game development.",
  },
  contact: {
    linkedin: {
      username: "ilhamfp",
      url: "https://ilhamfp.com",
    },
    github: {
      username: "cmd-prompt",
      url: "https://github.com/cmd-prompt",
    },
    email: "fpahmad36@gmail.com",
  },
  awards: [
    {
      title: "Finalist, ICPC Asia-Jakarta 2025",
      organization: "International Collegiate Programming Contest",
      year: "2025",
      description:
        "Achieved finalist status in the International Collegiate Programming Contest (ICPC) Asia-Jakarta regional competition, one of the most prestigious international informatics competitions at the collegiate level, competing against top university teams across Asia.",
    },
    {
      title: "2nd Place, Hology 8.0",
      organization: "National Indonesian Informatics Competition",
      year: "2025",
      description:
        "Secured second place in Hology 8.0, a highly competitive national Indonesian informatics competition open to college students nationwide, demonstrating exceptional problem-solving skills and algorithmic expertise.",
    },
    {
      title: "Finalist, OSN Informatika",
      organization: "National Science Olympiad - Informatics",
      year: "2023",
      description:
        "Selected as a finalist in the National Science Olympiad (OSN) for Informatics, competing among the best high school students across Indonesia in computer science and competitive programming.",
    },
  ],
  experience: [
    {
      role: "Computer Science Student",
      company: "Institut Teknologi Bandung",
      period: "July 2024 - Expected October 2028",
      location: "Bandung, Indonesia",
      responsibilities: [
        "Pursuing Bachelor of Science in Informatics/Computer Science at one of Indonesia's premier technical universities",
        "Actively participating in competitive programming competitions at national and international levels",
        "Developing proficiency in software design, algorithms, and data structures through coursework and practical projects",
        "Collaborating on team-based projects implementing various software engineering methodologies and best practices",
      ],
    },
  ],
  projects: [
    {
      title: "Infinite Wiki",
      techStack: "Gemini AI, Web Development",
      description:
        "A Wikipedia-like website that dynamically generates article definitions using Google's Gemini AI. This innovative project combines traditional wiki functionality with modern AI capabilities to provide instant, comprehensive explanations on any topic.",
      highlights: [
        "Implemented AI-powered content generation using Gemini AI API",
        "Created a seamless user experience for accessing AI-generated encyclopedic content",
        "Successfully deployed and accessible via public website",
      ],
    },
    {
      title: "Online Library",
      techStack: "Python, Latent Sentiment Analysis (LSA), Text Analysis",
      description:
        "Developed an intelligent book recommendation system utilizing text sentiment analysis through Latent Sentiment Analysis (LSA). Created comprehensive analysis modules to process and evaluate book content for personalized recommendations.",
      highlights: [
        "Built the book recommendation engine using advanced LSA techniques",
        "Designed and implemented sentiment analysis modules from scratch",
      ],
    },
    {
      title: "Subgroddit",
      techStack: "CLI, Data Structures, Python/C++",
      description:
        "A command-line interface based Reddit-like platform demonstrating proficiency in data structures and software architecture. Implemented core functionality including persistent storage and advanced voting mechanisms.",
      highlights: [
        "Developed load/save module for data persistence",
        "Implemented custom double-ended linked list data structure",
        "Created voting system with efficient data manipulation",
      ],
    },
    {
      title: "Matrix Calculator",
      techStack: "Python/C++, Linear Algebra",
      description:
        "A comprehensive calculator application for matrix operations, focusing on advanced mathematical computations. Worked on multiple complex modules including linear equation solving, determinant calculation, and regression analysis.",
      highlights: [
        "Implemented linear equation system solver module",
        "Developed determinant calculation algorithms",
        "Created regression analysis module for statistical computations",
      ],
    },
    {
      title: "Gravity Runner",
      techStack: "Unity, C#, Game Development",
      description:
        "An endless runner game developed in Unity game engine, featuring dynamic gameplay mechanics and player abilities. Specialized in implementing the player skill system that enhances gameplay variety and user engagement.",
      highlights: [
        "Designed and implemented player skill system",
        "Created interactive gameplay mechanics in Unity environment",
      ],
    },
  ],
  skills: [
    {
      category: "Languages & Technologies",
      items: [
        "Programming Languages: Python, C++, C",
        "Version Control: Git",
        "Game Development: Unity, C#",
        "AI/ML: Gemini AI API, Latent Sentiment Analysis (LSA)",
      ],
    },
    {
      category: "Technical Competencies",
      items: [
        "Data Structures & Algorithms",
        "Competitive Programming",
        "Software Design (Coursework)",
        "Text Analysis & Sentiment Processing",
      ],
    },
    {
      category: "Education",
      items: [
        "Bachelor of Science in Informatics/Computer Science - Institut Teknologi Bandung, 2024-2028 (Expected)",
        "Competitive Programming: ICPC, National Olympiads",
        "Advanced coursework in Software Design and Computer Science fundamentals",
      ],
    },
  ],
};
