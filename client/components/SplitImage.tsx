"use client";

import { useRef } from "react";

interface SplitImageProps {
  sliderPos: number;
  setSliderPos: (value: number) => void;
}

export default function SplitImage({
  sliderPos,
  setSliderPos,
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
    <div className="flex justify-center w-full">
      <div
        ref={containerRef}
        className="
          relative
          w-[280px] sm:w-[320px] md:w-[380px]
          lg:w-[440px] xl:w-[480px]
          cursor-ew-resize
        "
        onMouseMove={(e) => updateSlider(e.clientX)}
        onTouchMove={(e) =>
          updateSlider(e.touches[0].clientX)
        }
      >
        {/* ================= BASE IMAGE ================= */}
        <picture>
          {/* Mobile */}
          <source
            srcSet="/mvp/mobilescreen1.png"
            media="(max-width: 767px)"
          />

          {/* Desktop */}
          <img
            src="/mvp/fulldesignerpotrait.png"
            className="w-full h-auto block"
            draggable={false}
          />
        </picture>

        {/* OVERLAY IMAGE — DEVELOPER */}
<div
  className="absolute inset-0 overflow-hidden pointer-events-none"
  style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
>
  {/* MOBILE IMAGE */}
  <img
    src="/mvp/mobilescreen2.png"
    alt="Developer"
    className="
      block w-full h-auto
      md:hidden
      translate-y-[-4px]
      select-none
      drop-shadow-[0_12px_30px_rgba(0,0,0,0.12)]
    "
    draggable={false}
  />

  {/* DESKTOP IMAGE */}
  <img
    src="/mvp/fulldeveloperpotrait.png"
    alt="Developer"
    className="
      hidden md:block
      w-full h-auto
      select-none
      drop-shadow-[0_12px_30px_rgba(0,0,0,0.12)]
    "
    draggable={false}
  />
</div>

        {/* ================= DIVIDER ================= */}
        <div
          className="absolute top-0 bottom-0"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="w-[1.5px] h-full bg-neutral-300" />
        </div>
      </div>
    </div>
  );
}
