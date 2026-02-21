"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import SplitImage from "@/components/SplitImage";
import ProjectsSection from "@/components/ProjectsSection";

export default function Index({ onChatOpen }: { onChatOpen?: () => void }) {
  const [sliderPos, setSliderPos] = useState(50);

  const showDesigner = sliderPos > 18;
  const showDeveloper = sliderPos < 82;

  return (
    <Layout onChatOpen={onChatOpen}>
      {/* HERO */}
      <section className="min-h-screen md:h-[calc(100vh-88px)] flex items-center justify-center px-4 sm:px-6 -mt-24 sm:-mt-32 md:py-0 pb-12 md:pb-0">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4 lg:gap-16">

          {/* DESIGNER */}
          <div
            className={`text-center lg:text-left transition-all duration-300 ${
              showDesigner
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3 pointer-events-none"
            }`}
          >
            <h2 className="font-catamaran font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
              designer
            </h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600 max-w-sm mx-auto lg:mx-0 leading-relaxed">
              Product designer specialising in UI design and systems
            </p>
          </div>

          {/* IMAGE */}
          <SplitImage sliderPos={sliderPos} setSliderPos={setSliderPos} />

          {/* DEVELOPER */}
          <div
            className={`text-center lg:text-right transition-all duration-300 ${
              showDeveloper
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3 pointer-events-none"
            }`}
          >
            <h2 className="font-catamaran font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight whitespace-nowrap">
              &lt;developer&gt;
            </h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600 max-w-sm mx-auto lg:mx-0 leading-relaxed">
              Front-end developer & ML enthusiast
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <ProjectsSection />
    </Layout>
  );
}
