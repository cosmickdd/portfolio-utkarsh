"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    __preloaderShown?: boolean;
  }
}

type Phase = "visible" | "sliding" | "done";

export default function Preloader() {
  const [phase, setPhase] = useState<Phase>("visible");

  useEffect(() => {
    if (window.__preloaderShown) {
      setPhase("done");
      return;
    }

    window.__preloaderShown = true;

    // Hold for 5s, then trigger the slide-up curtain
    const slideTimer = setTimeout(() => {
      setPhase("sliding");
    }, 5000);

    // Unmount after slide animation completes (5s + 0.9s transition)
    const doneTimer = setTimeout(() => {
      setPhase("done");
    }, 5900);

    return () => {
      clearTimeout(slideTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none"
      style={{
        // Two-panel curtain: top half slides up, bottom half slides down
      }}
    >
      {/* TOP CURTAIN PANEL */}
      <div
        className="absolute left-0 right-0 bg-black"
        style={{
          top: 0,
          height: "50%",
          transform: phase === "sliding" ? "translateY(-100%)" : "translateY(0)",
          transition: phase === "sliding" ? "transform 0.85s cubic-bezier(0.76, 0, 0.24, 1)" : "none",
        }}
      />

      {/* BOTTOM CURTAIN PANEL */}
      <div
        className="absolute left-0 right-0 bg-black"
        style={{
          bottom: 0,
          height: "50%",
          transform: phase === "sliding" ? "translateY(100%)" : "translateY(0)",
          transition: phase === "sliding" ? "transform 0.85s cubic-bezier(0.76, 0, 0.24, 1)" : "none",
        }}
      />

      {/* LOGO — centered, fades out just before curtains split */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          opacity: phase === "sliding" ? 0 : 1,
          transition: phase === "sliding" ? "opacity 0.25s ease-out" : "none",
        }}
      >
        <img
          src="/images/logo-animation/logoanimation.gif"
          alt="Loading"
          className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 object-contain"
          draggable={false}
        />
      </div>
    </div>
  );
}
