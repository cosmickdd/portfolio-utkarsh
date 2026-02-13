"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

interface MousePos {
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState<MousePos>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Detect if hovering over interactive elements
    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("group");

      setIsHoveringInteractive(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousemove", handleHover);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousemove", handleHover);
    };
  }, []);

  return (
    <>
      {/* Hide default cursor globally */}
      <style>{`
        * {
          cursor: none;
        }
        input, textarea, select {
          cursor: auto;
        }
      `}</style>

      {/* Custom Cursor Badge */}
      {isVisible && isHoveringInteractive && (
        <div
          className="fixed pointer-events-none z-[9999]"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            transform: "translate(-50%, -50%)",
            transition: "opacity 0.15s ease-out",
          }}
        >
          <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-5 py-2.5 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap">
            See Case Study & Live Site
            <ArrowRight size={14} strokeWidth={2.5} />
          </div>
        </div>
      )}

      {/* Simple dot cursor for non-interactive areas */}
      {isVisible && !isHoveringInteractive && (
        <div
          className="fixed pointer-events-none z-[9999]"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="w-2 h-2 bg-black rounded-full" />
        </div>
      )}
    </>
  );
}
