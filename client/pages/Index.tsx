"use client";

import { useState, useEffect, useMemo } from "react";
import Layout from "@/components/Layout";
import SplitImage from "@/components/SplitImage";
import ChatPromptBar from "@/components/ChatPromptBar";
import ProjectsSection from "@/components/ProjectsSection";

/* ─────────────────────────────────────────────
   DESIGNER BACKGROUND
   Colorful, organic design elements:
   - Overlapping color theory circles
   - A pen-tool bezier path
   - Color palette strip
   ───────────────────────────────────────────── */
function DesignBackground({ opacity }: { opacity: number }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block"
      style={{ opacity, transition: "opacity 600ms ease" }}
    >
      {/* Overlapping color circles  -  like a color wheel study */}
      <svg
        className="absolute"
        style={{ top: "8%", left: "4%" }}
        width="180" height="180" viewBox="0 0 180 180" fill="none"
      >
        <circle cx="70" cy="70" r="55" fill="#f9a8d4" opacity="0.3" />
        <circle cx="110" cy="70" r="55" fill="#c4b5fd" opacity="0.25" />
        <circle cx="90" cy="105" r="55" fill="#fde68a" opacity="0.25" />
      </svg>

      {/* Bezier curve  -  like a pen tool path */}
      <svg
        className="absolute"
        style={{ top: "42%", left: "3%" }}
        width="180" height="90" viewBox="0 0 180 90" fill="none"
      >
        <path
          d="M10 70 C50 10, 90 80, 170 25"
          stroke="#d4b5fd"
          strokeWidth="1.5"
          fill="none"
          opacity="0.4"
          strokeLinecap="round"
        />
        {/* Anchor points */}
        <circle cx="10" cy="70" r="3" fill="#c4b5fd" opacity="0.5" />
        <circle cx="170" cy="25" r="3" fill="#f9a8d4" opacity="0.5" />
        {/* Control point handles  -  thin lines */}
        <line x1="10" y1="70" x2="50" y2="10" stroke="#c4b5fd" strokeWidth="0.5" opacity="0.25" />
        <line x1="170" y1="25" x2="90" y2="80" stroke="#f9a8d4" strokeWidth="0.5" opacity="0.25" />
        <circle cx="50" cy="10" r="2" fill="none" stroke="#c4b5fd" strokeWidth="0.8" opacity="0.3" />
        <circle cx="90" cy="80" r="2" fill="none" stroke="#f9a8d4" strokeWidth="0.8" opacity="0.3" />
      </svg>

      {/* Color palette strip */}
      <div
        className="absolute flex gap-[6px]"
        style={{ bottom: "28%", left: "6%" }}
      >
        {["#f472b6", "#a78bfa", "#fbbf24", "#34d399", "#fb923c"].map((c, i) => (
          <div
            key={i}
            className="rounded-full"
            style={{ width: 10, height: 10, backgroundColor: c, opacity: 0.5 }}
          />
        ))}
      </div>

      {/* Small UI wireframe rectangle */}
      <svg
        className="absolute"
        style={{ bottom: "12%", left: "8%" }}
        width="100" height="65" viewBox="0 0 100 65" fill="none"
      >
        <rect x="1" y="1" width="98" height="63" rx="8" stroke="#c4b5fd" strokeWidth="0.8" opacity="0.25" />
        <rect x="10" y="12" width="35" height="3.5" rx="2" fill="#d4b5fd" opacity="0.2" />
        <rect x="10" y="22" width="55" height="2.5" rx="1" fill="#e5e7eb" opacity="0.25" />
        <rect x="10" y="30" width="45" height="2.5" rx="1" fill="#e5e7eb" opacity="0.2" />
        <circle cx="78" cy="44" r="10" fill="#fbcfe8" opacity="0.15" />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────
   DEVELOPER BACKGROUND
   Scattered, rotated code snippets  -  Adham style
   ───────────────────────────────────────────── */
function CodeBackground({ opacity }: { opacity: number }) {
  const snippets = useMemo(() => [
    { text: "<html>", x: "62%", y: "8%", rotate: -8, size: "13px" },
    { text: "height:184px;}", x: "80%", y: "14%", rotate: 12, size: "11px" },
    { text: "React.FC", x: "70%", y: "25%", rotate: -4, size: "12px" },
    { text: "class=\"hero\">", x: "88%", y: "22%", rotate: 6, size: "10px" },
    { text: "TypeScript", x: "75%", y: "38%", rotate: -10, size: "14px" },
    { text: "{useState}", x: "92%", y: "35%", rotate: 15, size: "11px" },
    { text: "display:flex;", x: "65%", y: "48%", rotate: 5, size: "10px" },
    { text: "npm run", x: "85%", y: "52%", rotate: -6, size: "12px" },
    { text: "async/await", x: "72%", y: "62%", rotate: 8, size: "11px" },
    { text: "border-radius", x: "90%", y: "60%", rotate: -12, size: "10px" },
    { text: "</div>", x: "68%", y: "72%", rotate: -3, size: "13px" },
    { text: "git commit", x: "82%", y: "75%", rotate: 10, size: "11px" },
    { text: "REST API", x: "76%", y: "85%", rotate: -7, size: "12px" },
    { text: "const app", x: "60%", y: "88%", rotate: 4, size: "10px" },
    { text: "Python", x: "93%", y: "78%", rotate: -14, size: "13px" },
    { text: "export default", x: "70%", y: "95%", rotate: 6, size: "10px" },
    { text: "tailwind.css", x: "88%", y: "90%", rotate: -5, size: "11px" },
    { text: "onClick={}", x: "58%", y: "32%", rotate: 11, size: "10px" },
    { text: "padding:0;", x: "95%", y: "45%", rotate: -8, size: "10px" },
    { text: "vite.config", x: "64%", y: "55%", rotate: 7, size: "11px" },
  ], []);

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block"
      style={{ opacity, transition: "opacity 600ms ease" }}
    >
      {snippets.map((s, i) => (
        <span
          key={i}
          className="absolute font-mono select-none text-gray-300 whitespace-nowrap"
          style={{
            left: s.x,
            top: s.y,
            fontSize: s.size,
            fontWeight: 400,
            transform: `rotate(${s.rotate}deg)`,
            letterSpacing: "0.02em",
          }}
        >
          {s.text}
        </span>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
   ───────────────────────────────────────────── */
export default function Index({ onChatOpen }: { onChatOpen?: () => void }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [heroVisible, setHeroVisible] = useState(false);

  // Drag right -> developer fades out. Drag left -> designer fades out.
  const showDesigner = sliderPos > 12;
  const showDeveloper = sliderPos < 88;

  const designerAmount = Math.max(0, Math.min(1, sliderPos / 60));
  const developerAmount = Math.max(0, Math.min(1, (100 - sliderPos) / 60));

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout onChatOpen={onChatOpen}>
      {/* HERO */}
      <section className="min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-88px)] flex flex-col items-center justify-start px-4 sm:px-6 -mt-16 sm:-mt-24 md:-mt-40 pt-12 md:pt-16 pb-12 relative overflow-hidden space-y-6">

        <DesignBackground opacity={designerAmount * 0.85} />
        <CodeBackground opacity={developerAmount * 0.6} />

        {/* Chat Prompt Bar */}
        <div className={`relative z-10 transition-all duration-700 delay-200 w-full flex justify-center ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
          <ChatPromptBar onOpen={onChatOpen || (() => {})} />
        </div>

        {/* Content Grid */}
        <div className={`
          w-full max-w-5xl grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-6 sm:gap-8 lg:gap-16 relative z-10
          transition-all duration-700
          ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}>

          <div className={`text-center lg:text-left transition-all duration-500 ${
            showDesigner ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
          }`}>
            <h2 className="font-catamaran font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] tracking-tight leading-none text-gray-900">
              designer
            </h2>
            <p className="mt-3 text-sm text-gray-500 max-w-[260px] mx-auto lg:mx-0 leading-relaxed">
              Product designer specialising in UI design and systems
            </p>
          </div>

          <SplitImage sliderPos={sliderPos} setSliderPos={setSliderPos} />

          <div className={`text-center lg:text-right transition-all duration-500 ${
            showDeveloper ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
          }`}>
            <h2 className="font-catamaran font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] tracking-tight leading-none text-gray-900 whitespace-nowrap">
              &lt;developer&gt;
            </h2>
            <p className="mt-3 text-sm text-gray-500 max-w-[260px] mx-auto lg:ml-auto lg:mr-0 leading-relaxed">
              Front-end developer &amp; ML enthusiast
            </p>
          </div>
        </div>

        <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 transition-opacity duration-1000 delay-1000 ${heroVisible ? "opacity-20" : "opacity-0"}`}>
          <div className="w-[1px] h-10 bg-gradient-to-b from-gray-400 to-transparent" />
        </div>
      </section>

      <ProjectsSection />
    </Layout>
  );
}
