"use client";

import { useRef, useState } from "react";

interface SplitImageProps {
  sliderPos: number;
  setSliderPos: (value: number) => void;
  className?: string;
  isHovering?: boolean;
}

export default function SplitImage({
  sliderPos,
  setSliderPos,
  className = "",
  isHovering = false,
}: SplitImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse") return; // Mouse uses hover only
    setIsDragging(true);
    updatePosition(e.clientX);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse") return;
    if (isDragging) updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse") return;
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  return (
    <div className={`flex justify-center ${className}`}>
      <div
        ref={containerRef}
        className="
          relative
          w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px]
          select-none touch-none
          overflow-hidden
          transition-all duration-300
        "
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* BASE IMAGE  -  designer side (sets the container size) */}
        <img
          src="/mvp/mobilescreen1.png"
          alt="Designer"
          className="w-full h-auto block"
          draggable={false}
          loading="eager"
          fetchPriority="high"
        />

        {/* OVERLAY IMAGE  -  developer side, pinned to exact same dimensions */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ 
            clipPath: `inset(0 0 0 ${sliderPos}%)`,
            transition: !isHovering && !isDragging ? "clip-path 0.6s cubic-bezier(0.16, 1, 0.3, 1)" : "none"
          }}
        >
          <img
            src="/mvp/mobilescreen2.png"
            alt="Developer"
            className="absolute inset-0 w-full h-full object-cover object-top"
            draggable={false}
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* DIVIDER  -  clean 1px line on desktop, touch handle on mobile */}
        <div
          className="absolute top-0 bottom-0 z-30 pointer-events-none"
          style={{ 
            left: `${sliderPos}%`, 
            transform: "translateX(-0.5px)",
            transition: !isHovering && !isDragging ? "left 0.6s cubic-bezier(0.16, 1, 0.3, 1)" : "none"
          }}
        >
          <div className="w-[1px] h-full bg-white/80" />
          {/* Mobile-only touch drag handle indicator (completely hidden on desktop) */}
          <div className="md:hidden absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white shadow-md border border-gray-200/80 flex items-center justify-center pointer-events-none">
            <div className="flex items-center gap-0.5 text-[10px] text-gray-700 font-bold leading-none select-none">
              <span>‹</span>
              <span>›</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
