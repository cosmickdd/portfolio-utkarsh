"use client";

import { useState, useRef } from "react";

export default function SplitImage() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateSlider = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  return (
    <div className="flex justify-center items-center flex-shrink-0">
      {/* Wrapper controls visual size */}
      <div
        ref={containerRef}
        className="relative w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] xl:w-[420px] cursor-col-resize"
        onMouseDown={() => (isDragging.current = true)}
        onMouseUp={() => (isDragging.current = false)}
        onMouseLeave={() => (isDragging.current = false)}
        onMouseMove={(e) =>
          isDragging.current && updateSlider(e.clientX)
        }
      >
        {/* BASE IMAGE — DESIGNER */}
        <img
          src="/mvp/fulldesignerpotrait.png"
          alt="Designer"
          className="block w-full h-auto select-none"
          draggable={false}
        />

        {/* OVERLAY IMAGE — DEVELOPER (MICRO-ALIGNED) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
        >
          <img
            src="/mvp/fulldeveloperpotrait.png"
            alt="Developer"
            className="block w-full h-auto select-none"
            style={{ transform: "translateY(-1.4%)" }}
            draggable={false}
          />
        </div>

        {/* DIVIDER LINE ONLY */}
        <div
          className="absolute top-0 bottom-0 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="w-px h-full bg-neutral-300" />
        </div>
      </div>
    </div>
  );
}
