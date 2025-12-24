"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import SplitImage from "@/components/SplitImage";

export default function Index() {
  const [sliderPos, setSliderPos] = useState(50);

  const showDesigner = sliderPos > 5;
  const showDeveloper = sliderPos < 95;

  return (
    <Layout>
      <main className="flex-1">
        <section className="w-full px-6 md:px-10 lg:px-16 pt-24 pb-28 min-h-[85vh] flex items-center">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-14 lg:gap-20">

            {/* LEFT — DESIGNER */}
            <div
              className={`flex flex-col items-center lg:items-start text-center lg:text-left
              lg:pl-4 transition-all duration-300
              ${
                showDesigner
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2 pointer-events-none"
              }`}
            >
              <h2 className="font-catamaran font-bold text-[#2E2E2E]
                text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem]
                leading-none tracking-[0.12em] mb-6 whitespace-nowrap">
                designer
              </h2>
              <p className="max-w-[22rem] font-catamaran text-[#8F8F8F] text-base md:text-lg leading-relaxed">
                Product designer specialising in UI design and design systems
              </p>
            </div>

            {/* CENTER — IMAGE */}
            <SplitImage sliderPos={sliderPos} setSliderPos={setSliderPos} />

            {/* RIGHT — DEVELOPER */}
            <div
              className={`flex flex-col items-center lg:items-end text-center lg:text-right
              lg:pr-4 transition-all duration-300
              ${
                showDeveloper
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2 pointer-events-none"
              }`}
            >
              <h2 className="font-catamaran font-bold text-[#2E2E2E]
                text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem]
                leading-none tracking-[0.12em] mb-6 whitespace-nowrap">
                &lt;developer&gt;
              </h2>
              <p className="max-w-[22rem] font-catamaran text-[#8F8F8F] text-base md:text-lg leading-relaxed">
                Front-end developer and ML enthusiast who loves building things
              </p>
            </div>

          </div>
        </section>
      </main>
    </Layout>
  );
}
