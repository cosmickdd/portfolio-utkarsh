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

  const updateFromClientX = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));

    setSliderPos(percent);
  };

  return (
    <div className={`flex justify-center ${className}`}>
      <div
        ref={containerRef}
        className="
          relative
          w-[280px] sm:w-[320px] md:w-[360px]
          lg:w-[420px]
          select-none
        "
        onMouseMove={(e) => updateFromClientX(e.clientX)}
        onTouchMove={(e) =>
          updateFromClientX(e.touches[0].clientX)
        }
      >
        {/* BASE IMAGE */}
        <img
          src="/mvp/mobilescreen1.png"
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
          <div className="w-[2px] h-full bg-neutral-300" />
        </div>
      </div>
    </div>
  );
}
