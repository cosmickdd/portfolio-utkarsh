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

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(100, Math.max(0, (x / rect.width) * 100));

    setSliderPos(percent);
  };

  return (
    <div className={`flex justify-center ${className}`}>
      <div
        ref={containerRef}
        className="
          relative
          w-[260px]
          sm:w-[300px]
          md:w-[360px]
          lg:w-[420px]
          select-none
          touch-none
        "
        onPointerMove={(e) => updatePosition(e.clientX)}
      >
        {/* BASE IMAGE */}
        <img
          src="/mvp/mobilescreen1.png"
          alt="Designer"
          className="w-full h-auto block"
          draggable={false}
        />

        {/* OVERLAY IMAGE */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
        >
          <img
            src="/mvp/mobilescreen2.png"
            alt="Developer"
            className="w-full h-auto block"
            draggable={false}
            style={{
              transform: "translateY(-4px)", // alignment fix
            }}
          />
        </div>

        {/* DIVIDER */}
        <div
          className="absolute top-0 bottom-0 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="w-[2px] h-full bg-orange-500" />
        </div>
      </div>
    </div>
  );
}
