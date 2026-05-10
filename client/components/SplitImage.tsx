"use client";

import { useRef, useState } from "react";

interface SplitImageProps {
  sliderPos: number;
  setSliderPos: (value: number) => void;
  className?: string;
}

export default function SplitImage({
  sliderPos,
  setSliderPos,
  className = "",
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
    setIsDragging(true);
    updatePosition(e.clientX);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging) updatePosition(e.clientX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <div className={`flex justify-center ${className}`}>
      <div
        ref={containerRef}
        className="
          relative
          w-[220px] sm:w-[260px] md:w-[300px] lg:w-[340px]
          select-none touch-none
          overflow-hidden
        "
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        style={{ cursor: "ew-resize" }}
      >
        {/* BASE IMAGE — designer side (sets the container size) */}
        <img
          src="/mvp/mobilescreen1.png"
          alt="Designer"
          className="w-full h-auto block"
          draggable={false}
        />

        {/* OVERLAY IMAGE — developer side, pinned to exact same dimensions */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
        >
          <img
            src="/mvp/mobilescreen2.png"
            alt="Developer"
            className="absolute inset-0 w-full h-full object-cover object-top"
            draggable={false}
          />
        </div>

        {/* DIVIDER — clean 1px line, no handle */}
        <div
          className="absolute top-0 bottom-0 z-30 pointer-events-none"
          style={{ left: `${sliderPos}%`, transform: "translateX(-0.5px)" }}
        >
          <div className="w-[1px] h-full bg-white/80" />
        </div>
      </div>
    </div>
  );
}
