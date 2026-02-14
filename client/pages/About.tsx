import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

export default function About({ onChatOpen }: { onChatOpen?: () => void }) {
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
    <Layout onChatOpen={onChatOpen}>
      <main className="bg-white">

        {/* HERO — Clear, confident, restrained */}
        <section className="px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32 lg:pt-40 pb-20 sm:pb-32 lg:pb-40">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-6 sm:mb-8 letter-spacing-wide">
              About
            </p>

            <h1 className="font-catamaran font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-[1.1] text-black mb-8 sm:mb-10 lg:mb-12">
              I Design & Build Products<br />People Actually Use
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl leading-relaxed font-light mb-10 sm:mb-12 lg:mb-16">
              Designer + Engineer focused on clarity, systems, and long-term product quality.
            </p>

            <ul className="flex flex-wrap gap-2 sm:gap-4">
              {[
                "Product Design",
                "Frontend Engineering",
                "Design Systems",
                "AI Products",
              ].map(skill => (
                <li
                  key={skill}
                  className="px-4 sm:px-5 py-2 sm:py-3 border border-gray-300 rounded-lg text-xs sm:text-sm font-medium text-gray-700 hover:border-gray-500 hover:bg-gray-50 transition-all duration-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* STORY — Purposeful image + earned credibility */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-28 lg:py-40 border-t border-gray-200">
          <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 lg:space-y-20">
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
              <figcaption className="mt-4 sm:mt-5 lg:mt-6 text-xs text-gray-600 font-light text-center">
                Building products at the intersection of design and development.
              </figcaption>
            </figure>

            {/* Content Section */}
            <div className="max-w-3xl mx-auto space-y-12 sm:space-y-14 lg:space-y-16">
              <section>
                <h2 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4 sm:mb-5 lg:mb-6 letter-spacing-wide">
                  Who I Am
                </h2>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 sm:mb-7 lg:mb-8 leading-tight">
                  Designer. Developer. Builder.
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed font-light">
                  I design beautiful products and code them myself. No handoff. No translation loss. I love building things that work well and feel right. Right now, I'm diving deep into ML and automation — finding ways to make products smarter and workflows faster.
                </p>

                {/* Philosophy — Integrated seamlessly */}
                <div className="mt-16 sm:mt-20 lg:mt-24 pt-12 sm:pt-16 lg:pt-20 border-t border-gray-300">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6 sm:mb-8">What guides my work:</h3>
                  <div className="space-y-4 sm:space-y-5">
                    {[
                      "Great design must be built, not just designed",
                      "Details matter. Speed matters. Both can happen together",
                      "The best products are built by people who care about both craft and users",
                      "Technology should serve people, not the other way around"
                    ].map((belief, idx) => (
                      <div key={idx} className="flex gap-4 sm:gap-5 group">
                        <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black text-white flex items-center justify-center text-xs sm:text-sm font-semibold group-hover:bg-blue-600 transition-colors duration-300">
                          ✓
                        </div>
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light pt-1 group-hover:text-gray-900 transition-colors">
                          {belief}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* PROCESS — Decision-oriented */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-28 lg:py-40 border-t border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4 sm:mb-5 lg:mb-6 letter-spacing-wide">
              Process
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-12 sm:mb-20 lg:mb-28 leading-tight">
              How I Work
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                ["Research", "Clarify what not to build before defining solutions"],
                ["Design", "Reduce cognitive load before visual polish"],
                ["Engineer", "Build systems that scale without rewrites"],
                ["Iterate", "Measure outcomes and refine intentionally"],
              ].map(([title, desc]) => (
                <div key={title} className="group p-6 sm:p-8 lg:p-10 lg:p-12 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-md transition-all duration-300 bg-white">
                  <h4 className="text-base sm:text-lg lg:text-xl font-bold text-black mb-4 sm:mb-5">
                    {title}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed font-light">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BEYOND WORK — Personal interests & experiences */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-28 lg:py-40 border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4 sm:mb-5 lg:mb-6 letter-spacing-wide">
              Beyond Work
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-16 sm:mb-24 lg:mb-32 leading-tight">
              Hobbies & Passions
            </h3>

            {/* Hobbies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-24 lg:mb-32">
              {[
                {
                  title: "Mountain Trekking",
                  description: "Adventure seeker. Love exploring high altitudes and connecting with nature.",
                  image: "/images/hobbies/mountains.jpg"
                },
                {
                  title: "Photography",
                  description: "Capturing moments. Visual storytelling through landscapes and candid shots.",
                  image: "/images/hobbies/photography.jpg"
                },
                {
                  title: "Community Building",
                  description: "Organizing events and workshops. Creating spaces for people to learn and connect.",
                  image: "/images/hobbies/community.jpg"
                }
              ].map((hobby) => (
                <div key={hobby.title} className="group">
                  <div className="relative h-56 sm:h-64 lg:h-72 rounded-2xl overflow-hidden bg-gray-200 mb-4 sm:mb-6">
                    <img
                      src={hobby.image}
                      alt={hobby.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-black mb-2">
                    {hobby.title}
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
                    {hobby.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Events Section */}
            <div className="border-t border-gray-200 pt-16 sm:pt-24 lg:pt-32">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-12 sm:mb-16 lg:mb-20 leading-tight">
                Events I've Organized
              </h3>

              <div className="space-y-8 sm:space-y-12">
                {[
                  {
                    title: "Devquest",
                    date: "2024",
                    description: "A 3-hour design-to-development contest bringing together designers and developers. Participants had to go from concept to working prototype, showcasing rapid prototyping skills and cross-functional collaboration.",
                    image: "/images/events/devquest.jpg",
                    impact: "50+ participants | Real-time competition"
                  },
                  {
                    title: "Nimbus",
                    date: "2024",
                    description: "A comprehensive workshop for junior developers and designers. I led sessions on Machine Learning and Automation, sharing practical approaches to integrating AI into products and automating workflows for better productivity.",
                    image: "/images/events/nimbus.jpg",
                    impact: "80+ juniors trained | Focus on ML & Automation"
                  },
                  {
                    title: "Quizaki",
                    date: "2024",
                    description: "An engaging college-wide quiz competition testing knowledge across tech, design, and general topics. Created an inclusive competitive environment that brought together 100+ participants from different departments.",
                    image: "/images/events/quizaki.jpg",
                    impact: "100+ participants | College-wide event"
                  }
                ].map((event, idx) => (
                  <div key={idx} className="group border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-400 hover:shadow-lg transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden bg-gray-200">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2 sm:mb-3">
                            {event.date}
                          </p>
                          <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-3 sm:mb-4">
                            {event.title}
                          </h4>
                          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-6">
                            {event.description}
                          </p>
                        </div>
                        <div className="pt-4 border-t border-gray-200">
                          <p className="text-sm text-gray-600 font-medium">
                            {event.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* IMPACT — Proof, not claims */}
        <section ref={statsRef} className="px-4 sm:px-6 lg:px-8 py-24 sm:py-40 lg:py-56 bg-black text-white border-t border-gray-800 relative overflow-hidden">
          {/* Subtle animated background glow */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-xs uppercase tracking-widest text-gray-600 font-semibold letter-spacing-wide">
                Impact
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {[
                { label: "Years Experience", value: `${stats[0]}+` },
                { label: "Products Shipped", value: stats[1] },
                { label: "Systems Built", value: stats[2] },
                { label: "Quality Bar", value: `${stats[3]}%` },
              ].map(({ label, value }) => (
                <div 
                  key={label} 
                  className="group relative h-40 sm:h-48 lg:h-56 p-6 sm:p-8 lg:p-10 rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900/60 to-gray-950/60 hover:border-blue-600/50 hover:from-gray-900 hover:to-gray-900 hover:shadow-2xl hover:shadow-blue-600/20 transition-all duration-500 backdrop-blur-sm flex flex-col justify-between"
                >
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>

                  {/* Main content */}
                  <div className="flex-1 flex flex-col justify-center space-y-2 sm:space-y-3">
                    <p className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-none text-white group-hover:text-blue-200 transition-colors duration-300">
                      {value}
                    </p>
                  </div>

                  {/* Label */}
                  <p className="text-xs sm:text-xs lg:text-sm uppercase tracking-widest text-gray-500 font-semibold group-hover:text-gray-300 transition-colors duration-300">
                    {label}
                  </p>

                  {/* Bottom glow on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-b-2xl"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative corner accents */}
          <div className="absolute top-20 left-10 w-20 h-20 border border-gray-800 rounded-lg opacity-20"></div>
          <div className="absolute bottom-32 right-10 w-32 h-32 border border-gray-800 rounded-lg opacity-10"></div>
        </section>

        {/* FINAL CTA — Earned */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 lg:py-48 bg-black text-white text-center border-t border-gray-800">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-tight">
              Let's Build Something Meaningful
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-10 md:mb-12 lg:mb-16 leading-relaxed font-light">
              If your product needs both design rigor and engineering depth,
              I'd love to explore whether we're a fit.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 lg:px-12 py-2.5 sm:py-3 md:py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-xs sm:text-sm md:text-base"
            >
              Start a Conversation
              <ArrowRight className="w-3.5 sm:w-4 md:w-5 h-3.5 sm:h-4 md:h-5" />
            </a>
          </div>
        </section>

      </main>
    </Layout>
  );
}
