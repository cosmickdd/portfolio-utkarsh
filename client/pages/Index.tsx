"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import SplitImage from "@/components/SplitImage";
import ProjectsSection from "@/components/ProjectsSection";

export default function Index() {
  const [sliderPos, setSliderPos] = useState(50);

  const showDesigner = sliderPos > 18;
  const showDeveloper = sliderPos < 82;

  return (
    <Layout>
      {/* HERO */}
      <section className="h-[calc(100vh-88px)] flex items-center justify-center px-4">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-6 sm:gap-8 lg:gap-16">

          {/* DESIGNER */}
          <div
            className={`text-center lg:text-left transition-all duration-300 ${
              showDesigner
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3 pointer-events-none"
            }`}
          >
            <h2 className="font-catamaran font-bold text-[2.2rem] sm:text-[2.8rem] md:text-[3.4rem] tracking-[0.08em]">
              designer
            </h2>
            <p className="mt-2 text-sm text-[#8F8F8F] max-w-xs mx-auto lg:mx-0">
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
            <h2 className="font-catamaran font-bold text-[2.2rem] sm:text-[2.8rem] md:text-[3.4rem] tracking-[0.08em] whitespace-nowrap">
              &lt;developer&gt;
            </h2>
            <p className="mt-2 text-sm text-[#8F8F8F] max-w-xs mx-auto lg:mx-0">
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
