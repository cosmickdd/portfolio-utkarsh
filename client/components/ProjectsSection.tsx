"use client";

import { useState, useRef, useEffect } from "react";
import ProjectCard, { Project } from "./ProjectCard";

const PROJECTS: Record<"designer" | "developer", Project[]> = {
  designer: [
    {
      id: "aiinterviewagents",
      title: "AI Interview Agents",
      description: "Intelligent interview preparation platform scaling to 5,000+ signups in 15 days. Achieved 333% daily growth with intuitive UX for skill assessment.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      tags: ["AI", "Founding Designer", "Rapid Growth"],
      link: "/projects/aiinterviewagents",
      category: "designer",
    },
    {
      id: "prana-ai",
      title: "Prana AI",
      description: "AI-powered Ayurvedic health assistant for personalized wellness guidance across web and mobile.",
      image: "https://images.unsplash.com/photo-1576091160550-112173faf246?w=800&h=600&fit=crop",
      tags: ["AI", "Healthcare", "UX Systems"],
      link: "/projects/prana-ai",
      category: "designer",
    },
  ],
  developer: [
    {
      id: "rapidophilia",
      title: "Rapidophilia",
      description: "Full-stack travel discovery platform with AI-powered recommendations and seamless booking integration.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
      tags: ["React", "Node.js", "AI/ML"],
      link: "/projects/rapidophilia",
      category: "developer",
    },
    {
      id: "aiocc",
      title: "AI Operations Command Center",
      description: "Intelligent, lightweight operations command center for SMBs unifying Gmail, Slack, Notion, and Google Drive.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      tags: ["Python", "Composio", "Automation"],
      link: "/projects/aiocc",
      category: "developer",
    },
  ],
};

export default function ProjectsSection() {
  const [activeTab, setActiveTab] =
    useState<"designer" | "developer">("designer");

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Section reveal only once
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`
        w-full bg-white
        px-4 sm:px-6 lg:px-10
        py-12 sm:py-14 lg:py-16
        transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      <div className="max-w-7xl mx-auto">

        {/* TOGGLE */}
        <div className="flex justify-center mb-8 sm:mb-9">
          <div className="inline-flex bg-gray-100/50 backdrop-blur-sm rounded-full p-1.5 border border-gray-200/50">
            {(["designer", "developer"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  cursor-target px-7 sm:px-8 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300
                  ${activeTab === tab
                    ? "bg-black text-white shadow-lg shadow-black/10 scale-105"
                    : "text-gray-500 hover:text-gray-700"}
                `}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* TITLE */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <h2 className="font-catamaran font-bold text-4xl sm:text-5xl lg:text-6xl tracking-[0.08em] mb-1.5">
            Recent Projects
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            {activeTab === "designer" 
              ? "Crafted experiences that inspire" 
              : "Built solutions that scale"}
          </p>
        </div>

        {/* GRID — smooth transition */}
        <div
          className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-5 sm:gap-6 lg:gap-8
            transition-all duration-500
            mb-16 sm:mb-18
          "
        >
          {PROJECTS[activeTab].map((project, i) => (
            <div
              key={project.id}
              style={{ 
                transitionDelay: `${i * 100}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)"
              }}
              className="transition-all duration-500"
            >
              <ProjectCard project={project} isVisible={visible} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-10 sm:pt-12 border-t border-gray-200">
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            Interested in collaboration?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 bg-black text-white rounded-lg font-medium text-sm hover:bg-gray-900 transition-all duration-300 hover:shadow-lg"
          >
            Get In Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
