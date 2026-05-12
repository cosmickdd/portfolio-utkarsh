"use client";

import { useState, useRef, useEffect } from "react";
import ProjectCard, { Project } from "./ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PROJECTS: Record<"designer" | "developer", Project[]> = {
  designer: [
    {
      id: "aiinterviewagents",
      title: "AI Interview Agents",
      description: "Designed an interview prep platform that grew incredibly fast - 5,000+ signups in 15 days. The interface made preparation feel effortless and actually enjoyable.",
      image: "https://res.cloudinary.com/dq72obe1o/image/upload/f_auto,q_auto/aiinterviewagents_y8gpbb",
      tags: ["AI", "Founding Designer", "Rapid Growth"],
      link: "https://aiinterviewagents.com",
      links: {
        live: "https://aiinterviewagents.com",
        design: "https://www.figma.com/design/7TkMm9XqZPuc3DvvKz6q3r/AIIA?node-id=1839-5796&t=GcddPXSGzeAdnwWh-1",
        caseStudy: "/aiinterviewagents",
      },
      category: "designer",
      metric: "5,000+ users in 15 days • 90%+ user satisfaction",
    },
    {
      id: "prana-ai",
      title: "Prana AI",
      description: "Designed an AI health assistant that brings Ayurveda to life. Built clean, intuitive interfaces across web and mobile so users get personalized wellness advice easily.",
      image: "/images/projects/prana-ai.png",
      tags: ["AI", "Healthcare", "UX Systems"],
      link: "https://pranaai.vercel.app",
      links: {
        live: "https://prana-ai.vercel.app",
        design: "https://www.figma.com/design/C1XQkWfRoENS4OabryGznK/Prana-Ai-Ranked-5th-at-prometeo-25-devquest--Community-?node-id=0-1&t=OX2ylfhatjwC8DTS-1",
        caseStudy: "/prana-ai",
        isLiveUnavailable: true,
      },
      category: "designer",
      metric: "Launched across iOS & Android • Personalized user experience",
    },
    {
      id: "nadanparinda",
      title: "Nadanparinda Treks",
      description: "Complete end-to-end design for a tour, travel and mountaineering website. Created an immersive experience that captures the spirit of adventure and makes trip planning seamless.",
      image: "/images/projects/nadanparinda.png",
      tags: ["UI/UX Design", "Travel", "Figma"],
      link: "https://nadanparinda.vercel.app",
      links: {
        live: "https://nadanparinda.vercel.app",
        design: "https://www.figma.com/design/63sXdDeQYgKuOxYCO9rGQW/nadanparinda?node-id=0-1&t=0n0zwE7ZEklMv5bw-1",
        caseStudy: "/nadanparinda",
      },
      category: "designer",
      metric: "Complete design system • Live production website",
    },
    {
      id: "trek",
      title: "Trek",
      description: "A comprehensive trip and travel social and booking app. Designed to foster community engagement while providing a seamless booking experience for travelers.",
      image: "/images/projects/trek.png",
      tags: ["UI/UX Design", "Travel", "Social App"],
      link: "https://www.figma.com/design/m5AjbA6JtgHvlc5USJQRRg/trek--Community-?node-id=0-1&t=KazAJAxNI7KuBOcJ-1",
      links: {
        design: "https://www.figma.com/design/m5AjbA6JtgHvlc5USJQRRg/trek--Community-?node-id=0-1&t=KazAJAxNI7KuBOcJ-1",
        caseStudy: "/trek",
      },
      category: "designer",
      metric: "Social-driven travel ecosystem",
    },
    {
      id: "quizaki",
      title: "Quizaki",
      description: "Designed an interactive quiz competition platform that brings excitement to learning. Built gamified experiences with real-time leaderboards and celebration moments.",
      image: "/images/projects/quizaki.png",
      tags: ["Gamification", "UI/UX", "Real-time"],
      link: "https://quizaki.vercel.app",
      links: {
        live: "https://quizaki.vercel.app",
        design: "https://www.figma.com/design/kE8K8mlmQSxq7cir3cHVEL/quizaki--Community-?node-id=91-98&t=u3bpyWuaX5cK3WWm-1",
        caseStudy: "/quizaki",
      },
      category: "designer",
      metric: "100+ participants • Engagement-focused design",
    },
    {
      id: "design-system-project",
      title: "Design System - Component Library",
      description: "Built a comprehensive design system with 40+ components, design tokens, and documentation. Enabled teams to ship features 3x faster with consistent branding.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      tags: ["Design Systems", "Figma", "Documentation"],
      link: "https://www.figma.com/community",
      links: {
        design: "https://www.figma.com/community",
      },
      category: "designer",
      metric: "40+ components • Used by 50+ designers",
    },
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
        caseStudy: "/aiocc",
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
        caseStudy: "/rapidophilia",
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
        caseStudy: "/project-three",
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
        caseStudy: "/collab-platform",
      },
      category: "developer",
      metric: "10k+ daily users • Sub-100ms latency",
    },
    {
      id: "data-analytics-dashboard",
      title: "Data Analytics Dashboard",
      description: "Built a real-time analytics dashboard that processes 100k+ events per day. Visualizes complex metrics with interactive charts and custom queries.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["TypeScript", "D3.js", "PostgreSQL"],
      link: "/projects/analytics-dashboard",
      links: {
        caseStudy: "/analytics-dashboard",
      },
      category: "developer",
      metric: "100k+ events/day • 50+ concurrent users",
    },
    {
      id: "ml-recommendation-engine",
      title: "ML-Powered Recommendation Engine",
      description: "Developed machine learning recommendation system that increased product discovery by 40%. Trained models on user behavior and content similarity.",
      image: "https://images.unsplash.com/photo-1555949519-1a70d38e5e5d?w=800&h=600&fit=crop",
      tags: ["Python", "TensorFlow", "ML Ops"],
      link: "/projects/ml-recommendations",
      links: {
        caseStudy: "/ml-recommendations",
      },
      category: "developer",
      metric: "40% increase in discovery • 0.92 accuracy score",
    },
  ],
};

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"designer" | "developer">("designer");
  const [currentPage, setCurrentPage] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const ITEMS_PER_PAGE = 6;
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
          <div className="relative inline-flex bg-white/80 backdrop-blur-md rounded-2xl p-1.5 border border-gray-200 shadow-lg shadow-black/5">
            {(["designer", "developer"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  relative z-10 cursor-target px-6 sm:px-9 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-500 uppercase tracking-wide
                  ${activeTab === tab
                    ? "text-white"
                    : "text-gray-600 hover:text-gray-900"}
                `}
              >
                <span className="relative z-10">{tab === "designer" ? "Design" : "Engineering"}</span>
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
    <section className="w-full bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white mt-20 sm:mt-28 md:mt-36 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="px-6 sm:px-8 md:px-16 lg:px-20 relative">
        <div className="max-w-7xl mx-auto py-16 sm:py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 lg:gap-24 items-start">
            {/* LEFT SIDE - HEADING */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-slate-300 font-medium">Available for opportunities</span>
              </div>
              <h2 className="font-catamaran font-bold text-4xl sm:text-5xl md:text-6xl leading-tight text-white">
                {activeTab === "designer"
                  ? "Feel free to connect. Let's build impactful products together"
                  : "Feel free to connect. Let's build amazing things together"}
              </h2>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
                I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            {/* RIGHT SIDE - CONTACT CARD */}
            <div className="space-y-8">
              {/* Profile Section */}
              <div className="flex items-center gap-4">
                <img
                  src="/images/image.png"
                  alt="Profile"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-white/20 flex-shrink-0 shadow-xl"
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
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/cosmickdd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Info - Improved Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="mailto:cosimckdd@gmail.com"
                  className="group relative bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 hover:bg-slate-900/70 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                      <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-slate-500 mb-1 font-medium">EMAIL</p>
                      <p className="text-sm text-white font-medium break-all group-hover:text-blue-400 transition-colors">
                        cosimckdd@gmail.com
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+919455234541"
                  className="group relative bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 hover:bg-slate-900/70 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                      <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-slate-500 mb-1 font-medium">PHONE</p>
                      <p className="text-sm text-white font-medium group-hover:text-blue-400 transition-colors">
                        +91 9455234541
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              {/* CTA Button - Enhanced */}
              <a
                href="/resume.pdf"
                download="Utkarsh_Tiwari_Resume.pdf"
                className="group relative inline-flex items-center gap-3 w-full sm:w-auto px-6 sm:px-8 py-4 bg-white hover:bg-gray-100 text-slate-900 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">Download Resume</span>
                <div className="relative z-10 w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center transition-all duration-300 group-hover:bg-slate-800">
                  <svg
                    className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-y-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-purple-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  );
}
