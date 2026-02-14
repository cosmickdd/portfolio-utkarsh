export const resumeData = {
  summary: `I'm Utkarsh Tiwari, a Product Designer and AI/ML enthusiast based in New Delhi, India. 
  I specialize in designing intuitive user experiences for complex AI systems and building scalable design systems. 
  I have experience working as a Product Designer at AI Interview Agents, Senior UI/UX Designer at Cloud Computing Cell, 
  and Freelance Product Designer at Rapidophilia. I hold a B.Tech in Information Technology from AKGEC and 
  completed Machine Learning I certification from Columbia University.`,

  experience: [
    {
      role: "Product Designer",
      company: "AI Interview Agents",
      duration: "6 months",
      description: "Designed end-to-end interview preparation platform with focus on AI-driven feedback mechanisms. Created design system with 40+ components using Figma. Improved user engagement by 35% through UX optimization.",
      skills: ["UI/UX Design", "Design Systems", "Figma", "User Research", "Prototyping"]
    },
    {
      role: "Senior UI/UX Designer",
      company: "Cloud Computing Cell",
      duration: "1.5 years",
      description: "Led design initiative for cloud platform documentation portal. Designed 50+ screens with focus on accessibility. Mentored 5 junior designers and established design standards across organization.",
      skills: ["Design Leadership", "Interaction Design", "Accessibility", "Usability Testing", "Design System"]
    },
    {
      role: "Freelance Product Designer",
      company: "Rapidophilia",
      duration: "2 years",
      description: "Designed web and mobile interfaces for fintech startup. Created design system from scratch. Achieved 40% improvement in onboarding completion rate through iterative design.",
      skills: ["Product Design", "Web Design", "Mobile Design", "Wireframing", "Prototyping"]
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Aryabhata Group of Engineering College (AKGEC)",
      duration: "2021-2025",
      gpa: "8.2/10"
    },
    {
      certification: "Machine Learning I",
      issuer: "Columbia University",
      date: "2024"
    }
  ],

  skills: {
    design: ["UI/UX Design", "Product Design", "Interaction Design", "Visual Design", "Animation Design", "Design Systems", "Wireframing", "Prototyping"],
    tools: ["Figma", "Adobe XD", "Sketch", "Framer", "Protopie", "Adobe Creative Suite"],
    research: ["User Research", "Usability Testing", "Accessibility Testing", "A/B Testing", "User Interviews", "Competitive Analysis"],
    technical: ["HTML/CSS", "JavaScript/TypeScript", "React", "Tailwind CSS", "Git", "Responsive Design", "API Integration"],
    soft: ["Communication", "Problem Solving", "Team Leadership", "Mentoring", "Presentation", "Strategic Thinking"]
  },

  projects: [
    {
      name: "AI Interview Platform",
      description: "End-to-end platform redesign for interview preparation. Implemented AI-driven feedback system with real-time analysis.",
      impact: "35% increase in user engagement"
    },
    {
      name: "Cloud Platform Portal",
      description: "Comprehensive redesign of documentation portal for cloud infrastructure company. Created accessible, user-friendly interface.",
      impact: "50% reduction in support tickets"
    },
    {
      name: "Fintech Mobile App",
      description: "Complete design system and UI/UX for mobile payment application. Focused on security and simplicity.",
      impact: "40% improvement in onboarding completion"
    }
  ],

  aboutMe: {
    location: "New Delhi, India",
    interests: ["AI/ML Design", "Design Systems", "Accessibility", "Web3", "Startups"],
    funFact: "I love exploring how technology can solve real-world problems and making complex systems feel simple."
  }
};

// Convert resume to searchable chunks for RAG
export const resumeChunks = [
  {
    id: "summary",
    content: resumeData.summary,
    category: "summary"
  },
  ...resumeData.experience.map((exp, idx) => ({
    id: `experience-${idx}`,
    content: `${exp.role} at ${exp.company} (${exp.duration}): ${exp.description}. Key skills: ${exp.skills.join(", ")}`,
    category: "experience"
  })),
  ...resumeData.education.map((edu, idx) => ({
    id: `education-${idx}`,
    content: edu.degree ? `${edu.degree} from ${edu.institution} (${edu.duration}), GPA: ${edu.gpa}` : `${edu.certification} from ${edu.issuer} (${edu.date})`,
    category: "education"
  })),
  {
    id: "skills",
    content: `Design skills: ${resumeData.skills.design.join(", ")}. Tools: ${resumeData.skills.tools.join(", ")}. Research methods: ${resumeData.skills.research.join(", ")}. Technical: ${resumeData.skills.technical.join(", ")}. Soft skills: ${resumeData.skills.soft.join(", ")}`,
    category: "skills"
  },
  ...resumeData.projects.map((proj, idx) => ({
    id: `project-${idx}`,
    content: `Project: ${proj.name}. ${proj.description} Impact: ${proj.impact}`,
    category: "projects"
  })),
  {
    id: "about",
    content: `Based in ${resumeData.aboutMe.location}. Interested in: ${resumeData.aboutMe.interests.join(", ")}. Fun fact: ${resumeData.aboutMe.funFact}`,
    category: "about"
  }
];
