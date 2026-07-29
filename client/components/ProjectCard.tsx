"use client";

import React, { useState } from "react";

import { ArrowUpRight, ExternalLink, Palette, FileCode } from "lucide-react";
import { toast } from "sonner";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  links?: {
    live?: string;
    design?: string;
    caseStudy?: string;
    isLiveUnavailable?: boolean;
  };
  category: "designer" | "developer";
  impact?: string;
  metric?: string;
  directLink?: boolean;
}

export default function ProjectCard({
  project,
}: { project: Project }) {
  const [imgError, setImgError] = useState(false);

  const linkSet = {
    live: project.links?.live ?? project.link,
    design: project.links?.design ?? project.link,
    caseStudy: project.links?.caseStudy ?? project.link,
  };

  const handleLiveClick = (e: React.MouseEvent) => {
    if (project.links?.isLiveUnavailable) {
      e.preventDefault();
      toast.info("Live project is currently unavailable", {
        description: "The platform is undergoing maintenance. Please check back later.",
        duration: 4000,
      });
    }
  };

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open project ${project.title}`}
      className={`
            group cursor-pointer relative flex flex-col h-full bg-white rounded-2xl overflow-hidden
            border border-gray-100 hover:border-gray-200
            shadow-sm hover:shadow-2xl transition-all duration-400 ease-out hover:-translate-y-1.5 active:scale-[0.98]
            focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 text-left
          `}
        >
          {/* IMAGE CONTAINER */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-gray-900">
            {!imgError ? (
              <img
                src={project.image}
                alt={`${project.title}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{ objectPosition: project.category === "developer" ? "50% 38%" : "50% 50%" }}
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-2 rounded bg-gray-200 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400">
                      {project.category === "designer"
                        ? <><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="12" r="3"/></>
                        : <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>
                      }
                    </svg>
                  </div>
                  <span className="text-xs text-gray-500 font-medium">{project.title}</span>
                </div>
              </div>
            )}

            {/* SUBTLE OVERLAY FOR BETTER CONTRAST */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-500" />

            {/* GLASSMORPHIC CONTENT CARD */}
            <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4 z-10 flex flex-col justify-end">
              <div className="p-3 sm:p-4 rounded-2xl bg-black/30 group-hover:bg-black/60 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-500 ease-out">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-base sm:text-lg text-white tracking-tight drop-shadow-sm">
                    {project.title}
                  </h3>
                  <div className="bg-white/20 p-1.5 rounded-full transition-transform duration-500 group-hover:rotate-45 group-hover:bg-white/30 ml-2 flex-shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>
                </div>
                
                {/* EXPANDABLE CONTENT */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                  <div className="overflow-hidden">
                    <div className="pt-3">
                      <p className="text-xs sm:text-sm text-gray-200 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                      
                      {/* TAGS */}
                      {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {project.tags.slice(0, 3).map((tag, idx) => (
                            <span key={idx} className="text-[9px] sm:text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full bg-white/10 text-white border border-white/10">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </a>
  );
}
