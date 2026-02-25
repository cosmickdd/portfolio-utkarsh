"use client";

import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

interface ChatPromptBarProps {
  onOpen: () => void;
}

const QUESTIONS = [
  "What projects have you designed?",
  "Tell me about your AI experience",
  "How do you approach product design?",
  "What's your tech stack?",
  "Can you build real-time apps?",
  "What's your design process?",
  "Tell me about Nadanparinda",
  "What AI projects have you built?",
];

export default function ChatPromptBar({ onOpen }: ChatPromptBarProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimatingOut(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % QUESTIONS.length);
        setIsAnimatingOut(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <button
      onClick={onOpen}
      className="
        group
        w-full
        max-w-md
        mx-auto
        mb-8
        px-5
        py-3.5
        sm:px-6
        sm:py-4
        bg-white
        border
        border-gray-200
        rounded-full
        shadow-sm
        hover:shadow-md
        transition-all
        duration-300
        hover:border-gray-300
        active:scale-95
        cursor-pointer
        flex
        items-center
        gap-3
        sm:gap-4
      "
    >
      {/* Chat Icon */}
      <div className="flex-shrink-0">
        <MessageCircle
          size={20}
          className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300"
        />
      </div>

      {/* Animated Question */}
      <div className="flex-1 text-left min-w-0">
        <div
          className={`
            text-sm
            sm:text-base
            text-gray-600
            group-hover:text-gray-900
            transition-all
            duration-300
            truncate
            ${
              isAnimatingOut
                ? "opacity-0 -translate-y-2"
                : "opacity-100 translate-y-0"
            }
          `}
        >
          {QUESTIONS[currentIndex]}
        </div>
      </div>

      {/* Arrow Indicator */}
      <div className="flex-shrink-0">
        <div className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-0.5 transition-all duration-300">
          →
        </div>
      </div>
    </button>
  );
}
