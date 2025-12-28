"use client";

import * as React from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { cn } from "@/lib/utils";

interface SegmentedToggleProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

export function SegmentedToggle({
  value,
  onChange,
  options,
}: SegmentedToggleProps) {
  return (
    <ToggleGroup.Root
      type="single"
      value={value}
      onValueChange={(v) => v && onChange(v)}
      className="
        relative flex items-center
        bg-gray-100
        rounded-full
        p-1
        shadow-sm
      "
    >
      {/* Sliding Indicator */}
      <div
        className={cn(
          "absolute top-1 bottom-1 w-1/2 rounded-full bg-white shadow transition-all duration-300",
          value === options[0] ? "left-1" : "left-1/2"
        )}
      />

      {options.map((option) => (
        <ToggleGroup.Item
          key={option}
          value={option}
          className={cn(
            "relative z-10 px-6 py-2 text-sm font-medium rounded-full transition-colors",
            value === option
              ? "text-black"
              : "text-gray-500 hover:text-black"
          )}
        >
          {option}
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  );
}
