import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";

export default function About({ onChatOpen }: { onChatOpen?: () => void }) {
  const [stats, setStats] = useState([0, 0, 0, 0]);
  const statsRef = useRef<HTMLDivElement>(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

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

        {/* HERO — Refined with entrance animation */}
        <section className="px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 lg:pb-32 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-gray-100 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-gray-50 to-transparent rounded-full blur-3xl opacity-40 pointer-events-none" />
          
          <div className="max-w-4xl mx-auto relative">
            <div className={`transition-all duration-700 delay-100 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 mb-6 sm:mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <p className="text-xs uppercase tracking-widest text-gray-600 font-semibold">
                  About Me
                </p>
              </div>
            </div>

            <div className={`transition-all duration-700 delay-200 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <h1 className="font-catamaran font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-[1.1] text-black mb-6 sm:mb-8">
                I Design & Build Products<br />People Actually Use
              </h1>
            </div>

            <div className={`transition-all duration-700 delay-300 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed font-light mb-8 sm:mb-10">
                I'm both a designer and engineer. I don't just design products—I build them myself. No handoff. No lost translation. I focus on clarity, systems, and creating products that genuinely work and feel right.
              </p>
            </div>

            <div className={`transition-all duration-700 delay-500 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <ul className="flex flex-wrap gap-2 sm:gap-3">
                {["Product Design", "Frontend Dev", "Design Systems", "AI/Automation"].map(label => (
                  <li
                    key={label}
                    className="px-4 sm:px-5 py-2.5 sm:py-3 border border-gray-200 rounded-lg text-xs sm:text-sm font-medium text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 cursor-default"
                  >
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* STORY — Photo + Narrative */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            {/* Two-column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Image */}
              <div className="group relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-gray-100 via-transparent to-gray-100 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-lg shadow-black/5">
                  <img
                    src="/images/me-working.jpg"
                    alt="Building products with design and development"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
                <p className="mt-4 text-xs text-gray-400 font-light text-center">
                  Building at the intersection of design and development.
                </p>
              </div>

              {/* Content */}
              <div className="space-y-10 lg:pt-4">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold">Who I Am</span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mt-3 mb-5 leading-tight">
                    Design meets code.<br />Quality never compromises.
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light mb-6">
                    I grew up solving problems visually and logically. This duality shapes everything I do. When I design, I think about implementation. When I code, I obsess over the experience. The result? Products that work beautifully and feel right.
                  </p>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light">
                    Right now, I'm deep into ML and automation—finding ways to make products smarter, workflows faster, and human effort more intentional.
                  </p>
                </div>

                {/* Philosophy Cards - Simplified */}
                <div className="space-y-3 mt-8">
                  <h4 className="text-sm uppercase tracking-widest text-gray-400 font-semibold mb-4">My philosophy</h4>
                  {[
                    "Great design must work in production, not just in Figma",
                    "Details matter. So does speed. Both can exist together",
                    "Technology should serve people, not the other way around"
                  ].map((belief, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded text-gray-400 text-sm font-semibold mt-0.5">
                        →
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {belief}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS — Horizontal timeline feel */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 bg-gray-50/50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold">Process</span>
              <span className="flex-1 h-px bg-gray-200 max-w-[100px]" />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-12 sm:mb-16 leading-tight">
              How I Work
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {[
                { num: "01", title: "Research", desc: "Understand the problem before designing solutions" },
                { num: "02", title: "Design", desc: "Create clarity before visual polish" },
                { num: "03", title: "Build", desc: "Ship systems that scale without rework" },
                { num: "04", title: "Iterate", desc: "Measure outcomes and refine intentionally" },
              ].map((step) => (
                <div key={step.title} className="p-6 sm:p-8 rounded-xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-md transition-all duration-300">
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-100">
                      {step.num}
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-black mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BEYOND WORK — Personal interests & experiences */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold">Beyond Work</span>
              <span className="flex-1 h-px bg-gray-200 max-w-[100px]" />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-12 sm:mb-16 leading-tight">
              Hobbies & Passions
            </h3>

            {/* Hobbies Grid - Masonry-like */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-16 sm:mb-24">
              {[
                {
                  title: "Mountain Trekking",
                  description: "Adventure seeker. Love exploring high altitudes and connecting with nature.",
                  image: "/images/hobbies/mountains.jpg",
                  emoji: "🏔️"
                },
                {
                  title: "Photography",
                  description: "Capturing moments. Visual storytelling through landscapes and candid shots.",
                  image: "/images/hobbies/photography.jpg",
                },
                {
                  title: "Community Building",
                  description: "Organizing events and workshops. Creating spaces for people to learn and connect.",
                  image: "/images/hobbies/community.jpg",
                }
              ].map((hobby) => (
                <div key={hobby.title} className="group">
                  <div className="relative h-56 sm:h-64 lg:h-72 rounded-2xl overflow-hidden bg-gray-100 mb-4 sm:mb-5 shadow-sm group-hover:shadow-xl group-hover:shadow-black/10 transition-all duration-500">
                    <img
                      src={hobby.image}
                      alt={hobby.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Hover overlay content */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-white text-sm font-medium">{hobby.description}</p>
                    </div>
                    

                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-black group-hover:text-gray-800 transition-colors">
                    {hobby.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-light mt-1 md:hidden">
                    {hobby.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Events Section */}
            <div className="border-t border-gray-100 pt-16 sm:pt-20">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-4 h-4 text-gray-400" />
                <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold">Community</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-10 sm:mb-14 leading-tight">
                Events I've Organized
              </h3>

              <div className="space-y-5 sm:space-y-6">
                {[
                  {
                    title: "Devquest",
                    date: "2024",
                    description: "A 3-hour design-to-development contest bringing together designers and developers. Participants had to go from concept to working prototype, showcasing rapid prototyping skills and cross-functional collaboration.",
                    image: "/images/events/devquest.jpg",
                    impact: "50+ participants",
                    tag: "Competition"
                  },
                  {
                    title: "Nimbus",
                    date: "2024",
                    description: "A comprehensive workshop for junior developers and designers. I led sessions on Machine Learning and Automation, sharing practical approaches to integrating AI into products and automating workflows for better productivity.",
                    image: "/images/events/nimbus.jpg",
                    impact: "80+ attendees",
                    tag: "Workshop"
                  },
                  {
                    title: "Quizaki",
                    date: "2024",
                    description: "An engaging college-wide quiz competition testing knowledge across tech, design, and general topics. Created an inclusive competitive environment that brought together 100+ participants from different departments.",
                    image: "/images/events/quizaki.jpg",
                    impact: "100+ participants",
                    tag: "Event"
                  }
                ].map((event, idx) => (
                  <div key={idx} className="group border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 hover:shadow-lg hover:shadow-black/5 transition-all duration-500 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-0">
                      {/* Image */}
                      <div className="relative h-56 sm:h-64 md:h-full min-h-[200px] overflow-hidden bg-gray-100">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 md:from-transparent md:to-white/10" />
                        
                        {/* Tag badge */}
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-800 shadow-sm">
                          {event.tag}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 sm:p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                            {event.date}
                          </span>
                          <span className="h-px flex-1 bg-gray-100 max-w-[60px]" />
                        </div>
                        <h4 className="text-xl sm:text-2xl font-bold text-black mb-3 group-hover:text-gray-800 transition-colors">
                          {event.title}
                        </h4>
                        <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light mb-5">
                          {event.description}
                        </p>
                        <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          <p className="text-sm text-gray-700 font-semibold">
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

        {/* IMPACT — Premium dark section with animated counters */}
        <section ref={statsRef} className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 lg:py-40 bg-black text-white relative overflow-hidden">
          {/* Animated gradient mesh background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px] -translate-y-1/2 opacity-20" />
            <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-600 rounded-full blur-[120px] opacity-15" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">Impact</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-3">
                Numbers That Matter
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {[
                { label: "Years Experience", value: `${stats[0]}+`, color: "from-blue-500/20 to-blue-600/5" },
                { label: "Products Shipped", value: stats[1], color: "from-emerald-500/20 to-emerald-600/5" },
                { label: "Systems Built", value: stats[2], color: "from-purple-500/20 to-purple-600/5" },
                { label: "Quality Bar", value: `${stats[3]}%`, color: "from-amber-500/20 to-amber-600/5" },
              ].map(({ label, value, color }) => (
                <div 
                  key={label} 
                  className="group relative h-40 sm:h-48 lg:h-52 p-5 sm:p-7 rounded-2xl border border-gray-800/50 bg-gray-900/40 hover:border-gray-700 hover:bg-gray-900/60 transition-all duration-500 backdrop-blur-sm flex flex-col justify-between overflow-hidden"
                >
                  {/* Gradient accent on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative z-10 flex-1 flex flex-col justify-center">
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-none text-white">
                      {value}
                    </p>
                  </div>

                  <p className="relative z-10 text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 font-semibold group-hover:text-gray-400 transition-colors">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 bg-black text-white text-center border-t border-gray-800/50 relative overflow-hidden">
          {/* Radial gradient backdrop */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_70%)]" />
          
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6 leading-tight">
              Let's Build Something Meaningful
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 sm:mb-10 leading-relaxed font-light max-w-xl mx-auto">
              If your product needs both design rigor and engineering depth,
              I'd love to explore whether we're a fit.
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/10 hover:-translate-y-0.5"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>

      </main>
    </Layout>
  );
}
