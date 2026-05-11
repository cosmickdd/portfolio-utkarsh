"use client";

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
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentQuestion = QUESTIONS[currentIndex];

    if (!isDeleting) {
      if (displayedText.length < currentQuestion.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentQuestion.slice(0, displayedText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsDeleting(true), 3000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => setDisplayedText(displayedText.slice(0, -1)), 30);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % QUESTIONS.length);
      }
    }
  }, [displayedText, currentIndex, isDeleting]);

  return (
    <button
      onClick={onOpen}
      className="
        hidden md:flex
        group relative
        w-full max-w-[480px]
        mx-auto mb-10 md:mb-14
        h-[46px]
        px-6
        bg-white/80 backdrop-blur-sm
        rounded-full
        shadow-[0_1px_3px_rgba(0,0,0,0.04),0_0_0_1px_rgba(0,0,0,0.06)]
        hover:shadow-[0_2px_8px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.08)]
        hover:-translate-y-px
        focus:outline-none
        focus:shadow-[0_2px_8px_rgba(0,0,0,0.08),0_0_0_2px_rgba(0,0,0,0.1)]
        active:scale-[0.998]
        transition-all duration-300
        cursor-pointer
        flex items-center
      "
    >
      <span className="flex-1 text-left text-[13px] sm:text-sm text-gray-400 truncate tracking-wide">
        {displayedText}
        <span className="inline-block w-[1.5px] h-[14px] bg-gray-300 ml-0.5 animate-pulse rounded-full align-middle" />
      </span>

      {/* Subtle arrow — simple SVG, not an imported icon */}
      <svg
        width="14" height="14" viewBox="0 0 14 14" fill="none"
        className="flex-shrink-0 ml-3 text-gray-300 group-hover:text-gray-500 group-hover:translate-x-0.5 transition-all duration-300"
      >
        <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
