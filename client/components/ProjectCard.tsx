"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
}

interface ProjectCardProps {
  project: Project;
  isVisible: boolean;
}

export default function ProjectCard({
  project,
  isVisible,
}: ProjectCardProps) {
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
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label={`Open links for ${project.title}`}
          className={`
            group cursor-pointer relative flex flex-col h-full bg-white rounded-xl overflow-hidden
            border border-gray-200 hover:border-gray-300
            hover:shadow-lg transition-all duration-300 text-left
            focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"
            }
          `}
        >
          {/* IMAGE CONTAINER - Takes up most of the card */}
          <div className="relative w-full flex-grow overflow-hidden bg-gray-100 min-h-[200px]">
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
          <div className="flex flex-col p-4 sm:p-5 flex-shrink-0">
            {/* Title */}
            <h3 className="font-semibold text-base text-gray-900 mb-1 line-clamp-2">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-xs text-gray-500 leading-relaxed line-clamp-1">
              {project.description}
            </p>
          </div>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md w-[95vw] h-auto max-h-[90vh] border border-gray-200 bg-white rounded-2xl shadow-xl p-0 overflow-hidden">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 px-5 sm:px-6 py-6 sm:py-8 border-b border-gray-200">
          <DialogHeader className="space-y-3">
            <DialogTitle className="text-xl sm:text-2xl text-gray-900 font-bold break-words">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-gray-600 text-sm sm:text-sm leading-relaxed line-clamp-4">
              {project.description}
            </DialogDescription>
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-2 sm:px-2.5 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </DialogHeader>
        </div>

        {/* Links section */}
        <div className="px-5 sm:px-6 py-5 sm:py-6">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">Access Project</p>
          <div className="space-y-2.5 sm:space-y-3">
            <a
              href={linkSet.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLiveClick}
              className="group w-full flex items-center justify-between px-3 sm:px-4 py-3 sm:py-3.5 rounded-lg border border-gray-200 hover:border-gray-900 bg-white hover:bg-gray-900 text-gray-900 hover:text-white font-medium transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 sm:active:scale-100 touch-target"
            >
              <div className="flex items-center gap-3 min-w-0">
                <ExternalLink className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">Live Project</span>
              </div>
              <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
            <a
              href={linkSet.design}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full flex items-center justify-between px-3 sm:px-4 py-3 sm:py-3.5 rounded-lg border border-gray-200 hover:border-blue-500 bg-white hover:bg-blue-50 text-gray-900 hover:text-blue-900 font-medium transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 sm:active:scale-100 touch-target"
            >
              <div className="flex items-center gap-3 min-w-0">
                <Palette className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">View Design</span>
              </div>
              <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
            <a
              href={linkSet.caseStudy}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full flex items-center justify-between px-3 sm:px-4 py-3 sm:py-3.5 rounded-lg border border-gray-200 hover:border-purple-500 bg-white hover:bg-purple-50 text-gray-900 hover:text-purple-900 font-medium transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 sm:active:scale-100 touch-target"
            >
              <div className="flex items-center gap-3 min-w-0">
                <FileCode className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">Read Case Study</span>
              </div>
              <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
