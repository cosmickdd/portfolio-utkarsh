"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

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
          group cursor-target relative flex flex-col h-full bg-white rounded-3xl overflow-hidden
          border border-gray-200/50 shadow-md hover:shadow-2xl
          transition-all duration-500
          focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2
          ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8 pointer-events-none"
          }
          hover:-translate-y-2
          active:opacity-95
          ${isAnimating ? "card-glow" : ""}
        `}
        style={{
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* IMAGE CONTAINER WITH PREMIUM EFFECTS */}
        <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0">
          {/* Main Image */}
          <img
            src={project.image}
            alt={`${project.title} case study visual`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
          />

          {/* Layered Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent group-hover:from-black/70 group-hover:via-black/30 transition-all duration-500" />
          
          {/* Premium Corner Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
          
          {/* Floating Badge */}
          <div className="absolute top-4 left-4 sm:top-5 sm:left-5 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/95 backdrop-blur-sm rounded-full text-xs sm:text-sm font-bold text-black shadow-lg">
              <span className="w-2 h-2 bg-slate-900 rounded-full animate-pulse"></span>
              View Project
            </span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col flex-grow p-5 sm:p-6 md:p-7 lg:p-8">
          {/* Category Badge */}
          <div className="mb-3.5 sm:mb-4 flex items-center gap-2">
            <span className="inline-flex items-center justify-center">
              <Sparkles size={14} className="text-slate-700" />
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-700">
              {project.category === "designer" ? "Design Vision" : "Technical Architect"}
            </span>
          </div>

          {/* Title & Description */}
          <div className="mb-4 sm:mb-5">
            <h3 className="font-catamaran font-bold text-lg sm:text-xl md:text-2xl text-black mb-2.5 line-clamp-2 group-hover:text-gray-800 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed line-clamp-3 group-hover:text-gray-700 transition-colors">
              {project.description}
            </p>
          </div>

          {/* Impact Metric Badge - Enhanced */}
          {(project.impact || project.metric) && (
            <div className="mb-4 sm:mb-5 p-3 sm:p-4 rounded-xl bg-gray-50 border border-gray-200 group-hover:border-gray-300 transition-all duration-300">
              <p className="text-sm sm:text-base font-semibold text-gray-900 leading-snug">
                {project.metric || project.impact}
              </p>
            </div>
          )}

          {/* TAGS - Enhanced*/}
          <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-5 sm:mb-6 flex-grow">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-gray-50 to-gray-100 group-hover:from-gray-100 group-hover:to-gray-50 text-gray-700 font-semibold transition-all duration-300 border border-gray-150 group-hover:border-gray-300 hover:scale-105"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA - Interactive */}
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-black group-hover:text-gray-700 transition-all duration-300 group-hover:translate-x-1">
            <span>Explore Case Study</span>
            <ArrowRight size={14} className="transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-0" />
          </div>
        </div>

        {/* Premium shine effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        </div>
      </a>
    </>
  );
}
