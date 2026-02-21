"use client";

import React, { useState } from "react";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  category: "designer" | "developer";
  impact?: string;
  metric?: string;
}

interface ProjectCardProps {
  project: Project;
  isVisible: boolean;
}

const glowBorderStyle = `
  @keyframes glowStroke {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 100% 0%;
    }
  }

  .card-glow::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 1.5rem;
    padding: 1px;
    background: linear-gradient(90deg, 
      transparent 0%,
      transparent 15%,
      rgba(226, 232, 240, 0.3) 20%,
      rgba(243, 244, 246, 0.6) 30%,
      rgba(255, 255, 255, 1) 40%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 1) 60%,
      rgba(243, 244, 246, 0.6) 70%,
      rgba(226, 232, 240, 0.3) 80%,
      transparent 85%,
      transparent 100%
    );
    background-size: 200% 100%;
    animation: glowStroke 2s ease-in-out forwards;
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
`;

export default function ProjectCard({
  project,
  isVisible,
}: ProjectCardProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMouseEnter = () => {
    setIsAnimating(true);
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <>
      <style>{glowBorderStyle}</style>
      <a
        href={project.link}
        aria-label={`Explore ${project.title} case study`}
        onMouseEnter={handleMouseEnter}
        onAnimationEnd={handleAnimationEnd}
        className={`
          group cursor-target relative flex flex-col h-full bg-white rounded-2xl overflow-hidden
          border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-200
          transition-all duration-500
          focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
          ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8 pointer-events-none"
          }
          hover:-translate-y-1
          active:opacity-95
          ${isAnimating ? "card-glow" : ""}
        `}
        style={{
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* IMAGE CONTAINER - REFINED */}
        <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-100 flex-shrink-0">
          {/* Main Image with subtle frame */}
          <img
            src={project.image}
            alt={`${project.title} case study visual`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Subtle Overlay - Less dramatic */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/30 transition-all duration-500" />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col flex-grow p-5 sm:p-6 md:p-7">
          {/* Category Badge - Refined */}
          <div className="mb-3 inline-flex w-fit">
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-600 px-2 py-1 rounded-md bg-slate-100">
              {project.category === "designer" ? "Design" : "Development"}
            </span>
          </div>

          {/* Title & Description - Better Hierarchy */}
          <div className="mb-5">
            <h3 className="font-catamaran font-bold text-xl sm:text-2xl text-slate-900 mb-2.5 line-clamp-2 group-hover:text-slate-800 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 group-hover:text-slate-700 transition-colors">
              {project.description}
            </p>
          </div>

          {/* Impact Metric - Redesigned */}
          {(project.impact || project.metric) && (
            <div className="mb-5 p-4 rounded-lg bg-gradient-to-r from-slate-50 to-stone-50 border border-slate-200 group-hover:border-slate-300 transition-all duration-300">
              <p className="text-sm font-semibold text-slate-900 leading-snug">
                {project.metric || project.impact}
              </p>
            </div>
          )}

          {/* TAGS - Redesigned */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-medium transition-all duration-300 border border-slate-200 group-hover:bg-slate-200 group-hover:border-slate-300 hover:scale-105"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </>
  );
}
