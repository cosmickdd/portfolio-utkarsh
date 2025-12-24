"use client";

import { useRef } from "react";

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

  const updateSlider = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  return (
    <div className={`flex justify-center items-center flex-shrink-0 ${className}`}>
      <div
        ref={containerRef}
        className="
          relative
          w-[300px] sm:w-[340px] md:w-[380px]
          lg:w-[440px] xl:w-[480px]
          cursor-ew-resize
        "
        onMouseMove={(e) => updateSlider(e.clientX)}
      >
        {/* BASE IMAGE — DESIGNER */}
        <img
          src="/mvp/fulldesignerpotrait.png"
          alt="Designer"
          className="block w-full h-auto select-none
          drop-shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
          draggable={false}
        />

        {/* OVERLAY IMAGE — DEVELOPER */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
        >
          <img
            src="/mvp/fulldeveloperpotrait.png"
            alt="Developer"
            className="block w-full h-auto select-none
            drop-shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
            style={{ transform: "translateY(-1.4%)" }}
            draggable={false}
          />
        </div>

        {/* DIVIDER */}
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
