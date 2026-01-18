import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

export default function About() {
  const [stats, setStats] = useState([0, 0, 0, 0]);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const targets = [6, 3, 20, 100];
        const start = performance.now();
        const duration = 1800;

        const animate = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setStats(targets.map(v => Math.floor(v * progress)));
          if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <main className="bg-white">

        {/* HERO — Clear, confident, restrained */}
        <section className="px-6 lg:px-8 pt-40 pb-40">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-8 letter-spacing-wide">
              About
            </p>

            <h1 className="font-catamaran font-bold text-6xl lg:text-8xl leading-[1.1] text-black mb-12">
              I Design & Build Products<br />People Actually Use
            </h1>

            <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl leading-relaxed font-light mb-16">
              Designer + Engineer focused on clarity, systems, and long-term product quality.
            </p>

            <ul className="flex flex-wrap gap-4">
              {[
                "Product Design",
                "Frontend Engineering",
                "Design Systems",
                "AI Products",
              ].map(skill => (
                <li
                  key={skill}
                  className="px-5 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:border-gray-500 hover:bg-gray-50 transition-all duration-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SNAPSHOT — Fast comprehension */}
        <section className="px-6 lg:px-8 py-32 border-t border-gray-200">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
            {[
              ["Focus", "AI systems, data-heavy products, scalable UX"],
              ["Strength", "Bridging design intent with engineering reality"],
              ["Impact", "Products that scale without losing clarity"],
            ].map(([title, desc]) => (
              <div key={title} className="space-y-4">
                <h3 className="text-xs uppercase tracking-widest text-gray-500 font-semibold letter-spacing-wide">
                  {title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed font-light">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* STORY — Purposeful image + earned credibility */}
        <section className="px-6 lg:px-8 py-40 border-t border-gray-200">
          <div className="max-w-7xl mx-auto space-y-20">
            {/* Image Section — Horizontal with minimal frame */}
            <figure>
              <div className="aspect-[16/9] rounded-lg overflow-hidden border-2 border-gray-300 bg-gray-100 p-1">
                <div className="w-full h-full rounded-sm overflow-hidden border border-gray-200">
                  <img
                    src="/images/me-working.jpg"
                    alt="Building products with design and development"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <figcaption className="mt-6 text-xs text-gray-600 font-light text-center">
                Building products at the intersection of design and development.
              </figcaption>
            </figure>

            {/* Content Section */}
            <div className="max-w-3xl mx-auto space-y-16">
              <section>
                <h2 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-6 letter-spacing-wide">
                  Who I Am
                </h2>
                <h3 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
                  Designer. Developer. Builder.
                </h3>
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-light">
                  I design beautiful products and code them myself. No handoff. No translation loss. I love building things that work well and feel right. Right now, I'm diving deep into ML and automation — finding ways to make products smarter and workflows faster.
                </p>
              </section>

              <section className="pt-8 border-t border-gray-200">
                <h3 className="text-3xl lg:text-4xl font-bold text-black mb-6 leading-tight">
                  What I Believe
                </h3>
                <ul className="space-y-4 text-lg text-gray-700 font-light">
                  <li className="flex gap-4">
                    <span className="text-black font-semibold flex-shrink-0">→</span>
                    <span>Great design must be built, not just designed</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-black font-semibold flex-shrink-0">→</span>
                    <span>Details matter. Speed matters. Both can happen together</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-black font-semibold flex-shrink-0">→</span>
                    <span>The best products are built by people who care about both craft and users</span>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </section>

        {/* IMPACT — Proof, not claims */}
        <section ref={statsRef} className="px-6 lg:px-8 py-40 bg-black text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-32 letter-spacing-wide">
              Impact
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
              {[
                ["Years Experience", `${stats[0]}+`],
                ["Products Shipped", stats[1]],
                ["Systems Built", stats[2]],
                ["Quality Bar", `${stats[3]}%`],
              ].map(([label, value], idx) => (
                <div key={label} className={`space-y-5 ${idx < 3 && 'lg:border-r lg:border-gray-700 lg:pr-8'}`}>
                  <p className="text-6xl lg:text-8xl font-bold tracking-tight leading-none">
                    {value}
                  </p>
                  <p className="text-xs lg:text-sm uppercase tracking-widest text-gray-500 font-medium">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS — Decision-oriented */}
        <section className="px-6 lg:px-8 py-40 border-t border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-6 letter-spacing-wide">
              Process
            </h2>
            <h3 className="text-5xl lg:text-6xl font-bold text-black mb-28 leading-tight">
              How I Work
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                ["Research", "Clarify what not to build before defining solutions"],
                ["Design", "Reduce cognitive load before visual polish"],
                ["Engineer", "Build systems that scale without rewrites"],
                ["Iterate", "Measure outcomes and refine intentionally"],
              ].map(([title, desc]) => (
                <div key={title} className="group p-10 lg:p-12 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-md transition-all duration-300 bg-white">
                  <h4 className="text-lg lg:text-xl font-bold text-black mb-5">
                    {title}
                  </h4>
                  <p className="text-gray-700 text-sm lg:text-base leading-relaxed font-light">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRINCIPLES — Signals, not slogans */}
        <section className="px-6 lg:px-8 py-40 bg-white border-t border-gray-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-6 letter-spacing-wide">
              Philosophy
            </h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-black mb-12 leading-tight">
              What I Believe
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  num: "01",
                  belief: "Great design must be built, not just designed"
                },
                {
                  num: "02",
                  belief: "Details matter. Speed matters. Both can happen together"
                },
                {
                  num: "03",
                  belief: "The best products are built by people who care about both craft and users"
                },
                {
                  num: "04",
                  belief: "Technology should serve people, not the other way around"
                }
              ].map((principle) => (
                <div
                  key={principle.num}
                  className="p-8 lg:p-10 bg-white border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-md transition-all duration-300"
                >
                  <span className="block text-5xl lg:text-6xl font-bold text-gray-100 mb-4">
                    {principle.num}
                  </span>
                  <p className="text-lg lg:text-xl text-black font-light leading-relaxed">
                    {principle.belief}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA — Earned */}
        <section className="px-6 lg:px-8 py-48 bg-black text-white text-center border-t border-gray-800">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-bold mb-12 leading-tight">
              Let's Build Something Meaningful
            </h2>
            <p className="text-xl text-gray-300 mb-16 leading-relaxed font-light">
              If your product needs both design rigor and engineering depth,
              I'd love to explore whether we're a fit.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-12 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

      </main>
    </Layout>
  );
}
