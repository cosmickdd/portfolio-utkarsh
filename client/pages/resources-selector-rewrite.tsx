"use client";

import { useState } from "react";
import { Figma, Code2, BookOpen } from "lucide-react";

export function ResourcesSelector() {
  const [active, setActive] = useState<"design" | "development" | "learning">("design");

  const categories = [
    { id: "design", label: "Design", Icon: Figma },
    { id: "development", label: "Development", Icon: Code2 },
    { id: "learning", label: "Learning", Icon: BookOpen },
  ] as const;

  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row p-1.5 bg-gray-100/90 rounded-[1.5rem] border border-gray-200 shadow-sm gap-1.5 sm:gap-0">
          {categories.map(({ id, label, Icon }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-[1.1rem] font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-black text-white shadow-[0_14px_30px_rgba(0,0,0,0.18)]"
                    : "bg-transparent text-gray-600 hover:bg-white/80 hover:text-gray-900"
                }`}
              >
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${isActive ? "bg-white/10" : "bg-white shadow-sm ring-1 ring-gray-200"}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className="hidden sm:inline">{label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ResourcesSelector;