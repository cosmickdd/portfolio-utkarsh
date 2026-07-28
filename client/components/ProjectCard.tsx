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
          {/* IMAGE CONTAINER - Fixed aspect ratio for uniform card sizes */}
          <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100 flex-shrink-0">
            {!imgError ? (
              <img
                src={project.image}
                alt={`${project.title}`}
                className="w-full h-full object-cover group-hover:opacity-95 transition-opacity duration-300"
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
          </div>

          {/* CONTENT - Minimal at bottom */}
          <div className="flex flex-col p-4 sm:p-5 flex-grow justify-between">
            <div>
              {/* Title */}
              <h3 className="font-semibold text-base text-gray-900 mb-1 line-clamp-1">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-500 leading-relaxed line-clamp-1">
                {project.description}
              </p>
            </div>
          </div>
    </a>
  );
}
