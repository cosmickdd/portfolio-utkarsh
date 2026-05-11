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

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label={`Open links for ${project.title}`}
          className={`
            group cursor-pointer relative flex flex-col h-full bg-white rounded-lg overflow-hidden
            border border-gray-200 hover:border-gray-300
            hover:shadow-md transition-all duration-200 text-left
            focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"
            }
          `}
        >
          {/* IMAGE CONTAINER */}
          <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-gray-100 flex-shrink-0">
            {!imgError ? (
              <img
                src={project.image}
                alt={`${project.title}`}
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-200"
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

            {/* Category Badge */}
            <div className="absolute top-3 left-3">
              <span className="text-[10px] font-semibold uppercase tracking-wide text-white px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm">
                {project.category === "designer" ? "Design" : "Dev"}
              </span>
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col flex-grow p-5 sm:p-6">
            {/* Title */}
            <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-3">
              {project.description}
            </p>

            {/* Impact Metric */}
            {(project.impact || project.metric) && (
              <div className="mb-4 p-3 rounded-lg bg-gray-50 border border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <p className="text-xs font-medium text-gray-700">
                    {project.metric || project.impact}
                  </p>
                </div>
              </div>
            )}

            {/* TAGS */}
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2 py-1 rounded bg-gray-100 text-gray-600 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md border border-gray-200 bg-white rounded-lg shadow-lg">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-xl text-gray-900 font-semibold">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-sm">
            Access the project links below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-2 pt-2">
          <a
            href={linkSet.live}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-between rounded-lg border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 px-4 py-3 text-sm font-medium text-gray-900 transition-colors"
          >
            <div className="flex items-center gap-3">
              <ExternalLink className="w-4 h-4 text-gray-500" />
              Live Project
            </div>
            <span className="text-gray-400">→</span>
          </a>
          <a
            href={linkSet.design}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-between rounded-lg border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 px-4 py-3 text-sm font-medium text-gray-900 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Palette className="w-4 h-4 text-gray-500" />
              Design
            </div>
            <span className="text-gray-400">→</span>
          </a>
          <a
            href={linkSet.caseStudy}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-between rounded-lg border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 px-4 py-3 text-sm font-medium text-gray-900 transition-colors"
          >
            <div className="flex items-center gap-3">
              <FileCode className="w-4 h-4 text-gray-500" />
              Case Study
            </div>
            <span className="text-gray-400">→</span>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
