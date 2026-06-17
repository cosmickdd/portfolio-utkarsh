"use client";

import { Figma, Code2, BookOpen } from "lucide-react";

type Category = "design" | "development" | "learning";

interface ResourcesSelectorProps {
  active: Category;
  onChange: (category: Category) => void;
}

export function ResourcesSelector({ active, onChange }: ResourcesSelectorProps) {
  const categories = [
    { id: "design", label: "Design", Icon: Figma },
    { id: "development", label: "Development", Icon: Code2 },
    { id: "learning", label: "Learning", Icon: BookOpen },
  ] as const;

  return (
    <div className="grid grid-cols-3 sm:flex sm:flex-row gap-2 sm:gap-0 p-1.5 bg-gray-100/90 rounded-[1.5rem] border border-gray-200 shadow-sm sm:rounded-[1.5rem]">
      {categories.map(({ id, label, Icon }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => onChange(id)}
            className={`flex flex-col sm:flex-row sm:flex-1 items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-2.5 sm:py-3 rounded-[1.1rem] font-semibold transition-all duration-300 ${
              isActive
                ? "bg-black text-white shadow-[0_14px_30px_rgba(0,0,0,0.18)]"
                : "bg-transparent text-gray-600 hover:bg-white/80 hover:text-gray-900"
            }`}
          >
            <div className={`flex h-8 sm:h-10 w-8 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl ${isActive ? "bg-white/10" : "bg-white shadow-sm ring-1 ring-gray-200"}`}>
              <Icon className="h-4 sm:h-5 w-4 sm:w-5" />
            </div>
            <span className="text-xs sm:text-base leading-tight sm:leading-normal">{label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default ResourcesSelector;