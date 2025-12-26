"use client";

import { useRef } from "react";

export default function SplitImage({
  sliderPos,
  setSliderPos,
}: {
  sliderPos: number;
  setSliderPos: (v: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const update = (x: number) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const pos = ((x - r.left) / r.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, pos)));
  };

  return (
    <div className="flex justify-center">
      <div
        ref={ref}
        onMouseMove={(e) => update(e.clientX)}
        className="
          relative
          w-[230px]
          sm:w-[280px]
          md:w-[340px]
          lg:w-[420px]
          max-h-[55svh]
        "
      >
        <img
          src="/mvp/mobilescreen1.png"
          className="w-full h-auto block"
          draggable={false}
        />

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
        >
          <img
            src="/mvp/mobilescreen2.png"
            className="w-full h-auto block"
            style={{ transform: "translateY(-6px)" }}
            draggable={false}
          />
        </div>

        <div
          className="absolute top-0 bottom-0 w-px bg-neutral-300"
          style={{ left: `${sliderPos}%` }}
        />
      </div>
    </div>
  );
}
