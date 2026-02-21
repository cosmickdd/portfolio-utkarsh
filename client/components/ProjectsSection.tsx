"use client";

import { useState, useRef, useEffect } from "react";
import ProjectCard, { Project } from "./ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PROJECTS: Record<"designer" | "developer", Project[]> = {
  designer: [
    {
      id: "aiinterviewagents",
      title: "AI Interview Agents",
      description: "Designed an interview prep platform that grew incredibly fast—5,000+ signups in 15 days. The interface made preparation feel effortless and actually enjoyable.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      tags: ["AI", "Founding Designer", "Rapid Growth"],
      link: "/projects/aiinterviewagents",
      category: "designer",
      metric: "5,000+ users in 15 days • 90%+ user satisfaction",
    },
    {
      id: "prana-ai",
      title: "Prana AI",
      description: "Designed an AI health assistant that brings Ayurveda to life. Built clean, intuitive interfaces across web and mobile so users get personalized wellness advice easily.",
      image: "https://images.unsplash.com/photo-1576091160550-2173fb9c6ded?w=800&h=600&fit=crop",
      tags: ["AI", "Healthcare", "UX Systems"],
      link: "/projects/prana-ai",
      category: "designer",
      metric: "Launched across iOS & Android • Personalized user experience",
    },
    {
      id: "rapidophilia",
      title: "Rapidophilia",
      description: "Built a travel discovery platform that actually understands what you want to do. Smart recommendations, seamless booking, all designed to make travel planning fun.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
      tags: ["React", "Node.js", "AI/ML"],
      link: "/projects/rapidophilia",
      category: "designer",
      metric: "Increased bookings by 45% • Users save 2+ hours per trip",
    },
  ],
  developer: [
    {
      id: "aiocc",
      title: "AI Operations Command Center",
      description: "Built a command center that connects all your tools—Gmail, Slack, Notion, Google Drive—in one place. Smart automation that actually saves time and makes work easier.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      tags: ["Python", "Composio", "Automation"],
      link: "/projects/aiocc",
      category: "developer",
      metric: "Saves 10+ hours/week • 5 tools unified in one platform",
    },
    {
      id: "project-two",
      title: "Project Two",
      description: "Another great engineering project showcasing cutting-edge technology and scalable architecture.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
      tags: ["TypeScript", "Node.js", "Cloud"],
      link: "/projects/project-two",
      category: "developer",
      metric: "40% faster performance • Reduced infrastructure costs",
    },
    {
      id: "project-three",
      title: "Project Three",
      description: "Built a full-stack solution with incredible user experience and solid engineering foundations.",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=600&fit=crop",
      tags: ["React", "Firebase", "Real-time"],
      link: "/projects/project-three",
      category: "developer",
      metric: "Sub-second load times • 99.9% uptime guarantee",
    },
  ],
};

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"designer" | "developer">("designer");
  const [currentPage, setCurrentPage] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const ITEMS_PER_PAGE = 3;
  const projects = PROJECTS[activeTab];
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const visibleProjects = projects.slice(startIndex, endIndex);

  // Reset page when tab changes
  useEffect(() => {
    setCurrentPage(0);
  }, [activeTab]);

  // Section reveal only once
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const goToPage = (page: number) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <section
        ref={sectionRef}
        className={`
          w-full bg-white
          px-4 sm:px-6 lg:px-10
          py-16 sm:py-20 lg:py-24
          transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
      >
        <div className="max-w-7xl mx-auto">

        {/* PREMIUM TOGGLE */}
        <div className="flex justify-center mb-12 sm:mb-14 lg:mb-16">
          <div className="inline-flex bg-gradient-to-r from-gray-50 to-gray-100/50 backdrop-blur-sm rounded-full p-1 border border-gray-200/60 shadow-sm">
            {(["designer", "developer"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  cursor-target px-8 sm:px-10 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 uppercase tracking-wider
                  ${activeTab === tab
                    ? "bg-black text-white shadow-lg shadow-black/20 scale-105"
                    : "text-gray-500 hover:text-gray-700 hover:bg-white/50"}
                `}
              >
                {tab === "designer" ? "My Design Work" : "My Engineering"}
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
              grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
              gap-6 sm:gap-7 lg:gap-8
              transition-all duration-500
            "
          >
            {visibleProjects.map((project, i) => (
              <div
                key={project.id}
                style={{ 
                  transitionDelay: `${i * 100}ms`,
                  opacity: 1,
                  transform: "translateY(0)"
                }}
                className="transition-all duration-500"
              >
                <ProjectCard project={project} isVisible={visible} />
              </div>
            ))}
          </div>

          {/* PAGINATION CONTROLS */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-12 sm:mt-14">
              {/* Left Arrow */}
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 0}
                className={`
                  cursor-target p-2.5 sm:p-3 rounded-full transition-all duration-300
                  ${currentPage === 0
                    ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                    : "bg-gray-100 hover:bg-black text-gray-700 hover:text-white active:scale-95"}
                `}
                aria-label="Previous projects"
              >
                <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2 sm:gap-3">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToPage(i)}
                    className={`
                      cursor-target transition-all duration-300 rounded-full
                      ${currentPage === i
                        ? "w-3 h-3 sm:w-3.5 sm:h-3.5 bg-black"
                        : "w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gray-300 hover:bg-gray-400"}
                    `}
                    aria-label={`Go to page ${i + 1}`}
                  />
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages - 1}
                className={`
                  cursor-target p-2.5 sm:p-3 rounded-full transition-all duration-300
                  ${currentPage === totalPages - 1
                    ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                    : "bg-gray-100 hover:bg-black text-gray-700 hover:text-white active:scale-95"}
                `}
                aria-label="Next projects"
              >
                <ChevronRight size={20} className="sm:w-6 sm:h-6" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>

    {/* PREMIUM CTA FOOTER - DARK MODE */}
    <section className="w-full bg-slate-950 text-white mt-20 sm:mt-28 md:mt-36">
      <div className="px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto py-16 sm:py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* LEFT SIDE - HEADING */}
            <div>
              <h2 className="font-catamaran font-bold text-4xl sm:text-5xl md:text-6xl leading-tight text-white mb-8">
                {activeTab === "designer"
                  ? "Feel free to connect. Let's build impactful products together"
                  : "Feel free to connect. Let's build amazing things together"}
              </h2>
            </div>

            {/* RIGHT SIDE - CONTACT CARD */}
            <div className="space-y-8">
              {/* Profile Section */}
              <div className="flex items-center gap-4">
                <img
                  src="/images/image.png"
                  alt="Profile"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-orange-500 flex-shrink-0"
                />
                <div>
                  <p className="text-lg sm:text-xl font-bold text-white">Utkarsh</p>
                  <p className="text-sm sm:text-base text-slate-400">
                    {activeTab === "designer" ? "Product Designer" : "Full Stack Developer"}
                  </p>
                  <div className="flex gap-2 mt-2">
                    <a
                      href="https://linkedin.com/in/cosmickdd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-orange-400 transition"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/cosmickdd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-orange-400 transition"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Contact me</p>
                  <a
                    href="mailto:cosimckdd@gmail.com"
                    className="text-base sm:text-lg text-white hover:text-orange-400 transition font-medium break-all"
                  >
                    cosimckdd@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Phone</p>
                  <a
                    href="tel:+919455234541"
                    className="text-base sm:text-lg text-white hover:text-orange-400 transition font-medium"
                  >
                    +91 9455234541
                  </a>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="/resume.pdf"
                download="Utkarsh_Tiwari_Resume.pdf"
                className="inline-flex items-center gap-0 px-6 sm:px-8 py-3.5 sm:py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 active:scale-95 group"
              >
                <span>Resume</span>
                <div className="ml-3 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center transition-all duration-300">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-black rotate-45 group-hover:rotate-0 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* FOOTER BOTTOM */}
          <div className="mt-16 sm:mt-20 pt-12 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex items-center gap-2">
              <img src="/images/logoicon.png" alt="Logo" className="w-6 h-6" />
              <p className="text-sm text-slate-400">© 2025. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-6 md:justify-self-end">
              <a
                href="https://twitter.com/cosmickdd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 hover:text-orange-400 transition"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com/in/cosmickdd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 hover:text-orange-400 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/cosmickdd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 hover:text-orange-400 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
