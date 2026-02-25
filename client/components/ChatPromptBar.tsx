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
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentQuestion = QUESTIONS[currentIndex];
    
    if (!isDeleting) {
      // Typing effect
      if (displayedText.length < currentQuestion.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentQuestion.slice(0, displayedText.length + 1));
        }, 50); // 50ms per character for smooth typing
        return () => clearTimeout(timeout);
      } else {
        // Wait 3 seconds before deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 3000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 30); // Faster deletion
        return () => clearTimeout(timeout);
      } else {
        // Move to next question
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % QUESTIONS.length);
      }
    }
  }, [displayedText, currentIndex, isDeleting]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen();
    }
  };

  return (
    <button
      onClick={onOpen}
      onKeyDown={handleKeyDown}
      className="
        group
        relative
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
        hover:bg-[#FAFAFA]
        focus:border-2
        focus:border-black
        focus:bg-[#FAFAFA]
        focus:outline-none
        active:bg-[#F5F5F5]
        transition-all
        duration-200
        cursor-pointer
        flex
        items-center
        gap-3
        overflow-hidden
      "
    >
      {/* Chat Icon */}
      <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
        <MessageCircle
          size={18}
          strokeWidth={2}
          className="text-black"
        />
      </div>

      {/* Animated Question */}
      <div className="flex-1 text-left min-w-0 relative h-6 flex items-center">
        <div className="text-base font-normal text-[#555555] group-hover:text-black truncate transition-colors duration-200">
          {displayedText}
          <span className="inline-block w-0.5 h-4 bg-black ml-0.5 animate-pulse" />
        </div>
      </div>

      {/* Arrow Indicator */}
      <div className="flex-shrink-0">
        <div className="text-base font-medium text-black group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300 ease-out">
          →
        </div>
      </div>

      {/* Subtle shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-black/[0.02] to-transparent skew-x-12 group-hover:animate-[shine_1.5s_ease-out]" />
      </div>
    </button>
  );
}
