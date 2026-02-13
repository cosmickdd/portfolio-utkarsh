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
        group cursor-target relative flex flex-col bg-white rounded-3xl overflow-hidden
        border border-gray-200 shadow-sm hover:shadow-xl
        transition-all duration-500
        focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }
        hover:-translate-y-1
        active:opacity-95
      `}
      style={{
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* IMAGE CONTAINER */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden bg-gray-100 flex-shrink-0">
        <img
          src={project.image}
          alt={`${project.title} project thumbnail`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-300" />
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
