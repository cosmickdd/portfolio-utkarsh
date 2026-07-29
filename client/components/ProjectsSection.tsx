"use client";

import { useState } from "react";
import ProjectCard, { Project } from "./ProjectCard";

const PROJECTS: Record<"designer" | "developer", Project[]> = {
  designer: [
    {
      id: "ai-interview-agents",
      title: "AI Interview Agents",
      description: "Designed an interview prep platform that grew incredibly fast - 5,000+ signups in its first month. The UX makes practicing feel natural and less intimidating.",
      image: "https://res.cloudinary.com/dz4h0eagy/image/upload/v1785325682/9277601c-b6cd-48fc-944c-7ed7e5a12998_uto5od.png",
      tags: ["AI", "Founding Designer", "Rapid Growth"],
      link: "https://www.behance.net/gallery/252481637/AI-Interview-Agents",
      directLink: true,
      category: "designer",
      metric: "5,000+ users in first month • 90%+ user satisfaction",
    },
    {
      id: "animall-bhai",
      title: "Animall Bhai",
      description: "A UX case study focusing on improving the ₹1-trial start experience for Animall Bhai, increasing user engagement and adoption.",
      image: "https://res.cloudinary.com/dz4h0eagy/image/upload/v1785327037/ec5fb06d-5669-47d0-9f38-a622dda99555_sp7mu4.png",
      tags: ["UX Research", "Case Study", "Product Design"],
      link: "https://www.behance.net/gallery/253168309/Improving-1-Trial-Starts-Animall-Bhai",
      directLink: true,
      category: "designer",
      metric: "Enhanced trial start conversion",
    },
    {
      id: "aranya-ai",
      title: "Aranya AI",
      description: "Designed an agentic AI assistant app for farmers featuring a natural, call-like experience. Created clean, intuitive interfaces that make accessing agricultural insights effortless.",
      image: "https://res.cloudinary.com/dz4h0eagy/image/upload/v1785327583/ChatGPT_Image_Jul_29_2026_05_49_32_PM_mx2cki.png",
      tags: ["AI", "AgriTech", "Voice UI"],
      link: "https://www.behance.net/gallery/252462795/Aranya-AI-AI-Powered-Farming-Plant-Care-App",
      directLink: true,
      category: "designer",
      metric: "Launched across iOS & Android • Natural call UX",
    },
    {
      id: "nadanparinda",
      title: "Nadan Parinda Trek",
      description: "Complete end-to-end design for a tour, travel and mountaineering website. Created an immersive experience that captures the spirit of adventure and makes trip planning seamless.",
      image: "https://res.cloudinary.com/dz4h0eagy/image/upload/v1785327952/e6d93ffe-333c-463e-8c7f-b2849926aafc_w8zh6z.png",
      tags: ["UI/UX Design", "Travel", "Figma"],
      link: "https://nadanparinda.vercel.app/",
      directLink: true,
      category: "designer",
      metric: "Complete design system • Live production website",
    }
  ],
  developer: [
    {
      id: "safeenv",
      title: "Safeenv",
      description: "Safeenv handles virtual environments, dependency scanning, and package installation — without config files or headaches.",
      image: "https://res.cloudinary.com/dz4h0eagy/image/upload/v1785328272/ChatGPT_Image_Jul_29_2026_06_00_57_PM_pr9equ.png",
      tags: ["Python", "CLI", "Developer Tools"],
      link: "#",
      directLink: true,
      category: "developer",
      metric: "Zero config • Secure environments",
    },
    {
      id: "try-my-project",
      title: "Try My Project",
      description: "Build stunning interactive product demos with AI in minutes. No code. No design skills. Just results.",
      image: "https://res.cloudinary.com/dz4h0eagy/image/upload/v1785328491/ChatGPT_Image_Jul_29_2026_06_04_40_PM_qq66y6.png",
      tags: ["AI", "React", "No-Code"],
      link: "#",
      directLink: true,
      category: "developer",
      metric: "Interactive Demos • AI-Powered",
    },
    {
      id: "akgec-tp",
      title: "AKGEC T&P",
      description: "A comprehensive training and placement management system for AKGEC. Streamlines campus hiring, manages student profiles, and connects recruiters with candidates seamlessly.",
      image: "https://res.cloudinary.com/dz4h0eagy/image/upload/v1785328680/c4c948a8-2e7a-4230-bf08-32100ba3a6bd_yoelkt.png",
      tags: ["Full-Stack", "Management System", "Web App"],
      link: "#",
      directLink: true,
      category: "developer",
      metric: "Streamlined placements • Used by thousands of students",
    },
    {
      id: "aranya-ai-dev",
      title: "Aranya AI",
      description: "Developed the mobile app for an agentic AI assistant tailored for farmers. Engineered a seamless, real-time voice-call-like experience using advanced LLMs.",
      image: "https://res.cloudinary.com/dz4h0eagy/image/upload/v1785327583/ChatGPT_Image_Jul_29_2026_05_49_32_PM_mx2cki.png",
      tags: ["React Native", "Agentic AI", "Real-time Voice"],
      link: "#",
      directLink: true,
      category: "developer",
      metric: "Cross-platform deployment • Scalable AI backend",
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
            {projects.map((project, index) => (
              <div key={project.id}>
                <ProjectCard project={project} priority={index < 2} />
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>

    </>
  );
}
