"use client";

import { useState } from "react";
import ProjectCard, { Project } from "./ProjectCard";

const PROJECTS: Record<"designer" | "developer", Project[]> = {
  designer: [
    {
      id: "ai-interview-agents",
      title: "AI Interview Agents",
      description: "Designed an interview prep platform that grew incredibly fast - 5,000+ signups in its first month. The UX makes practicing feel natural and less intimidating.",
      image: "https://res.cloudinary.com/dz4h0eagy/image/upload/v1785258084/ef7405f2-7079-4fcb-8518-597c73c8f447_qbd57o.png",
      tags: ["AI", "Founding Designer", "Rapid Growth"],
      link: "https://www.behance.net/gallery/252481637/AI-Interview-Agents",
      directLink: true,
      category: "designer",
      metric: "5,000+ users in first month • 90%+ user satisfaction",
    },
    {
      id: "animall-bhai",
      title: "Animall Bhai",
      description: "A UX case study focusing on improving the 1-trial start experience for Animall Bhai, increasing user engagement and adoption.",
      image: "https://res.cloudinary.com/dz4h0eagy/image/upload/v1785255947/ChatGPT_Image_Jul_28_2026_09_55_27_PM_vmj7sk.png",
      tags: ["UX Research", "Case Study", "Product Design"],
      link: "https://www.behance.net/gallery/253168309/Improving-1-Trial-Starts-Animall-Bhai",
      directLink: true,
      category: "designer",
      metric: "Enhanced trial start conversion",
    },
    {
      id: "aranya-ai",
      title: "Aranya AI",
      description: "Designed an AI health assistant that brings Ayurveda to life. Built clean, intuitive interfaces across web and mobile so users get personalized wellness advice easily.",
      image: "https://res.cloudinary.com/dz4h0eagy/image/upload/v1785256454/ChatGPT_Image_Jul_28_2026_10_03_59_PM_m4puzj.png",
      tags: ["AI", "Healthcare", "UX Systems"],
      link: "https://www.behance.net/gallery/252462795/Aranya-AI-AI-Powered-Farming-Plant-Care-App",
      directLink: true,
      category: "designer",
      metric: "Launched across iOS & Android • Personalized user experience",
    },
    {
      id: "nadanparinda",
      title: "Nadan Parinda Trek",
      description: "Complete end-to-end design for a tour, travel and mountaineering website. Created an immersive experience that captures the spirit of adventure and makes trip planning seamless.",
      image: "https://res.cloudinary.com/dz4h0eagy/image/upload/v1785257019/ChatGPT_Image_Jul_28_2026_10_12_06_PM_xkgwux.png",
      tags: ["UI/UX Design", "Travel", "Figma"],
      link: "https://nadanparinda.vercel.app/",
      directLink: true,
      category: "designer",
      metric: "Complete design system • Live production website",
    }
  ],
  developer: [
    {
      id: "aiocc",
      title: "AI Operations Command Center",
      description: "Built a command center that connects all your tools - Gmail, Slack, Notion, Google Drive - in one place. Smart automation that actually saves time and makes work easier.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      tags: ["Python", "Composio", "Automation"],
      link: "/projects/aiocc",
      links: {
        caseStudy: "/projects/aiocc",
      },
      category: "developer",
      metric: "Saves 10+ hours/week • 5 tools unified in one platform",
    },
    {
      id: "rapidophilia",
      title: "Rapidophilia",
      description: "Built a travel discovery platform that actually understands what you want to do. Smart recommendations, seamless booking, all designed to make travel planning fun.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
      tags: ["React", "Node.js", "AI/ML"],
      link: "/projects/rapidophilia",
      links: {
        caseStudy: "/projects/rapidophilia",
      },
      category: "developer",
      metric: "Increased bookings by 45% • Users save 2+ hours per trip",
    },
    {
      id: "project-three",
      title: "Project Three",
      description: "Built a full-stack solution with incredible user experience and solid engineering foundations.",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=600&fit=crop",
      tags: ["React", "Firebase", "Real-time"],
      link: "/projects/project-three",
      links: {
        caseStudy: "/projects/project-three",
      },
      category: "developer",
      metric: "Sub-second load times • 99.9% uptime guarantee",
    },
    {
      id: "realtime-collab",
      title: "Real-time Collaboration Platform",
      description: "Built a collaborative document editor with real-time sync, cursor presence, and conflict resolution. Powers 10k+ users daily.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
      tags: ["React", "WebSocket", "CRDT"],
      link: "/projects/collab-platform",
      links: {
        caseStudy: "/projects/collab-platform",
      },
      category: "developer",
      metric: "10k+ daily users • Sub-100ms latency",
    }
  ]
};

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"designer" | "developer">("designer");

  const ITEMS_PER_PAGE = 6;
  const projects = PROJECTS[activeTab];



  return (
    <>
      <section
        className={`
          w-full bg-white
          px-4 sm:px-6 lg:px-10
          py-16 sm:py-20 lg:py-24
        `}
      >
        <div className="max-w-7xl mx-auto">

        {/* PREMIUM TOGGLE */}
        <div className="flex justify-center mb-12 sm:mb-14 lg:mb-16">
          <div className="relative inline-flex bg-white/80 backdrop-blur-md rounded-2xl p-1.5 border border-gray-200 shadow-lg shadow-black/5">
            {(["designer", "developer"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  relative z-10 cursor-target px-6 sm:px-9 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-500 uppercase tracking-wide outline-none focus:outline-none
                  ${activeTab === tab
                    ? "text-white"
                    : "text-gray-600 hover:text-gray-900"}
                `}
              >
                <span className="relative z-10">{tab === "designer" ? "Design" : "Code"}</span>
                {activeTab === tab && (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-xl shadow-xl shadow-black/30 -z-10 animate-in fade-in slide-in-from-top-1 duration-500" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* HERO TITLE */}
        <div className="text-center mb-14 sm:mb-16 lg:mb-20">
          <h2 className="font-catamaran font-black text-4xl sm:text-5xl lg:text-7xl tracking-[-0.02em] mb-4 sm:mb-5 leading-tight">
            {activeTab === "designer" 
              ? "Beautiful designs people actually love" 
              : "Code that grows with you"}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {activeTab === "designer" 
              ? "I design interfaces that feel right. Thoughtful, clean, and focused on helping you achieve your goals."
              : "I build scalable solutions that start simple and grow with your needs. Clean architecture, from day one."}
          </p>
        </div>

        {/* GRID WITH SMOOTH TRANSITIONS */}
        <div className="relative mb-12 sm:mb-14 lg:mb-16">
          <div
            className="
              grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2
              gap-6 sm:gap-8 lg:gap-10
              transition-all duration-500
            "
          >
            {projects.map((project) => (
              <div key={project.id}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>

    </>
  );
}
