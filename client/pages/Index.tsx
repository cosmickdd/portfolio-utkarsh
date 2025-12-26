"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import SplitImage from "@/components/SplitImage";

export default function Index() {
  const [sliderPos, setSliderPos] = useState(50);

  const showDesigner = sliderPos > 10;
  const showDeveloper = sliderPos < 90;

  return (
    <Layout>
      <main className="flex-1">
        <section
          className="
            w-full
            h-[calc(100svh-120px)]
            px-4
            flex items-center
            justify-center
          "
        >
          <div
            className="
              w-full max-w-6xl
              grid grid-cols-1
              lg:grid-cols-[1fr_auto_1fr]
              items-center
              gap-6 lg:gap-16
            "
          >
            {/* DESIGNER */}
            <div
              className={`
                text-center lg:text-left
                transition-all duration-300
                ${
                  showDesigner
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3 pointer-events-none"
                }
              `}
            >
              <h2 className="font-catamaran font-bold text-3xl sm:text-5xl tracking-[0.12em]">
                designer
              </h2>
              <p className="text-sm text-[#8F8F8F] mt-2 max-w-xs mx-auto lg:mx-0">
                Product designer specialising in UI design and systems
              </p>
            </div>

            {/* IMAGE */}
            <SplitImage
              sliderPos={sliderPos}
              setSliderPos={setSliderPos}
            />

            {/* DEVELOPER */}
            <div
              className={`
                text-center lg:text-right
                transition-all duration-300
                ${
                  showDeveloper
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3 pointer-events-none"
                }
              `}
            >
              <h2 className="font-catamaran font-bold text-3xl sm:text-5xl tracking-[0.12em]">
                &lt;developer&gt;
              </h2>
              <p className="text-sm text-[#8F8F8F] mt-2 max-w-xs mx-auto lg:mx-0">
                Front-end developer & ML enthusiast
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
