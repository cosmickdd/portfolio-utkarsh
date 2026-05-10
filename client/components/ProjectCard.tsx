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
            group cursor-target relative flex flex-col h-full bg-white rounded-xl overflow-hidden
            border border-gray-200 shadow-sm-card 
            hover:shadow-md-card
            hover:-translate-y-0.5
            transition-all duration-300 text-left
            focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8 pointer-events-none"
            }
          `}
          style={{
            transitionTimingFunction: "ease-out",
          }}
        >
          {/* IMAGE CONTAINER */}
            <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-100 flex-shrink-0">
              {/* Main Image */}
              {!imgError ? (
                <img
                  src={project.image}
                  alt={`${project.title} case study visual`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  style={{ objectPosition: project.category === "developer" ? "50% 38%" : "50% 50%" }}
                  onError={() => setImgError(true)}
                />
              ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-gray-300/50 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400">
                      {project.category === "designer" 
                        ? <><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="12" r="3"/></>
                        : <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>
                      }
                    </svg>
                  </div>
                  <span className="text-xs text-gray-400 font-medium">{project.title}</span>
                </div>
              </div>
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            
            {/* Category Badge — top left */}
            <div className="absolute top-3 left-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/90 px-2.5 py-1 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10">
                {project.category === "designer" ? "Design" : "Development"}
              </span>
            </div>

            {/* Arrow — top right, appears on hover */}
            <div className="absolute top-3 right-3 w-8 h-8 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-sm-card">
              <ArrowUpRight className="w-4 h-4 text-gray-800" />
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col flex-grow p-5 sm:p-6">
            {/* Title & Description */}
            <div className="mb-4">
              <h3 className="font-catamaran font-bold text-lg sm:text-xl text-gray-900 mb-2 line-clamp-2 group-hover:text-black transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 font-light group-hover:text-gray-600 transition-colors">
                {project.description}
              </p>
            </div>

            {/* Impact Metric */}
            {(project.impact || project.metric) && (
              <div className="mb-4 p-3 rounded-xl bg-gray-50 border border-gray-100 group-hover:border-gray-200 group-hover:bg-gray-100/70 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                  <p className="text-xs font-semibold text-gray-700 leading-snug">
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
                  className="text-[10px] px-2.5 py-1 rounded-lg bg-gray-100 text-gray-500 font-medium border border-gray-100 group-hover:border-gray-200 group-hover:bg-gray-200/70 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-black to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
        </button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md border border-gray-800 bg-gray-950 text-white rounded-xl shadow-2xl shadow-black/40">
        <DialogHeader className="space-y-2">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-800 bg-gray-900/60 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            Open Links
          </div>
          <DialogTitle className="text-lg text-white font-bold">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-gray-400 text-sm">
            Choose what you want to open.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-2.5 pt-1">
          <a
            href={linkSet.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full inline-flex items-center justify-between rounded-xl border border-gray-800 bg-gray-900/60 px-4 py-3.5 text-sm font-semibold text-white hover:border-white/20 hover:bg-white/5 transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
              Live Project
            </div>
            <span className="text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">↗</span>
          </a>
          <a
            href={linkSet.design}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full inline-flex items-center justify-between rounded-xl border border-gray-800 bg-gray-900/60 px-4 py-3.5 text-sm font-semibold text-white hover:border-white/20 hover:bg-white/5 transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <Palette className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
              Design
            </div>
            <span className="text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">↗</span>
          </a>
          <a
            href={linkSet.caseStudy}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full inline-flex items-center justify-between rounded-xl border border-gray-800 bg-gray-900/60 px-4 py-3.5 text-sm font-semibold text-white hover:border-white/20 hover:bg-white/5 transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <FileCode className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
              Case Study
            </div>
            <span className="text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">↗</span>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
