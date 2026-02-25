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
        max-w-[600px]
        mx-auto
        mb-12
        md:mb-16
        h-14
        px-5
        py-4
        bg-white
        border
        border-black
        rounded-xl
        hover:border-2
        hover:border-black
        focus:border-2
        focus:border-black
        focus:bg-[#FAFAFA]
        focus:outline-none
        transition-all
        duration-300
        cursor-pointer
        flex
        items-center
        gap-3
      "
    >
      {/* Chat Icon */}
      <div className="flex-shrink-0">
        <MessageCircle
          size={18}
          strokeWidth={2}
          className="text-black"
        />
      </div>

      {/* Animated Question */}
      <div className="flex-1 text-left min-w-0">
        <div
          className={`
            text-base
            font-normal
            text-[#555555]
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
        <div className="text-base text-black group-hover:translate-x-[2px] transition-transform duration-300">
          →
        </div>
      </div>
    </button>
  );
}
