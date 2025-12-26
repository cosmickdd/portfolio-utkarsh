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
        <section className="w-full px-5 md:px-10 lg:px-16 pt-20 pb-28 min-h-[85vh] flex items-center">
          <div
            className="
              max-w-7xl mx-auto w-full
              grid grid-cols-1
              lg:grid-cols-[1fr_auto_1fr]
              items-center
              gap-16 sm:gap-20 lg:gap-20
            "
          >
            {/* LEFT — DESIGNER */}
            <div
              className={`
                flex flex-col items-center lg:items-start
                text-center lg:text-left
                transition-all duration-300
                ${
                  showDesigner
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }
              `}
            >
              <h2
                className="
                  font-catamaran font-bold text-[#2E2E2E]
                  text-4xl sm:text-5xl md:text-6xl lg:text-[5.2rem]
                  leading-none tracking-[0.12em] mb-4
                "
              >
                designer
              </h2>

              <p className="max-w-[22rem] text-[#8F8F8F] text-sm sm:text-base leading-relaxed">
                Product designer specialising in UI design and design systems
              </p>
            </div>

            {/* CENTER — IMAGE */}
            <SplitImage
              sliderPos={sliderPos}
              setSliderPos={setSliderPos}
              className="justify-self-center mt-4 sm:mt-6 lg:mt-0"
            />

            {/* RIGHT — DEVELOPER */}
            <div
              className={`
                flex flex-col items-center lg:items-end
                text-center lg:text-right
                transition-all duration-300
                ${
                  showDeveloper
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }
              `}
            >
              <h2
                className="
                  font-catamaran font-bold text-[#2E2E2E]
                  text-4xl sm:text-5xl md:text-6xl lg:text-[5.2rem]
                  leading-none tracking-[0.12em] mb-4
                "
              >
                &lt;developer&gt;
              </h2>

              <p className="max-w-[22rem] text-[#8F8F8F] text-sm sm:text-base leading-relaxed">
                Front-end developer and ML enthusiast who loves building things
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
