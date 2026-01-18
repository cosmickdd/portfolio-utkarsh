"use client";

import { ArrowRight } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  category: "designer" | "developer";
}

interface ProjectCardProps {
  project: Project;
  isVisible: boolean;
}

export default function ProjectCard({
  project,
  isVisible,
}: ProjectCardProps) {
  return (
    <a
      href={project.link}
      aria-label={`View ${project.title} case study`}
      className={`
        group relative flex flex-col bg-white rounded-2xl overflow-hidden
        border border-gray-100 hover:border-gray-300
        transition-all duration-500 cursor-pointer
        focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }
        sm:hover:-translate-y-2
        sm:hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
        active:opacity-95 active:scale-98
      `}
      style={{
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* IMAGE */}
      <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 flex-shrink-0">
        <img
          src={project.image}
          alt={`${project.title} project thumbnail`}
          className="w-full h-full object-cover transition-transform duration-700 sm:group-hover:scale-105"
        />

        {/* Overlay gradient - always visible on mobile, appears on hover on desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />

        {/* Hover CTA (desktop only) */}
        <div className="hidden sm:flex absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
          <div className="inline-flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-all duration-300 group-hover:gap-3">
            View
            <ArrowRight size={16} />
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col flex-grow p-5 sm:p-6 md:p-7 lg:p-8">
        {/* Title & Description */}
        <div className="mb-3 sm:mb-4">
          <h3 className="font-catamaran font-bold text-lg sm:text-xl md:text-2xl text-black mb-2 line-clamp-2 group-hover:text-gray-800 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* TAGS */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-2.5 mb-4 sm:mb-5 flex-grow">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 sm:px-3 md:px-3.5 py-1 sm:py-1.5 rounded-full bg-gray-50 group-hover:bg-gray-100 text-gray-700 font-medium transition-colors border border-gray-100"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* MOBILE CTA - Always visible, touch-friendly */}
        <div className="sm:hidden inline-flex items-center gap-2 text-xs font-semibold text-black group-hover:text-gray-700 transition-colors">
          View Project
          <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </a>
  );
}
