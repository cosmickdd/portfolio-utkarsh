"use client";

import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import SplitImage from "@/components/SplitImage";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SideProjectsSection from "@/components/SideProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Index({ onChatOpen }: { onChatOpen?: () => void }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [ready, setReady] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const showDesigner = sliderPos > 10;
  const showDeveloper = sliderPos < 90;

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  const animateToPos = (target: number) => {
    const start = sliderPos;
    const change = target - start;
    const duration = 350;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setSliderPos(Math.round(start + change * ease));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <Layout onChatOpen={onChatOpen}>
      <Helmet>
        <title>Cosmickdd | Utkarsh Tiwari - Product Designer</title>
        <meta name="description" content="Utkarsh Tiwari (cosmickdd) is a UI/UX Designer currently at GreenPista. He specializes in product design, frontend development, AI products, SaaS, and enterprise software." />
        <link rel="canonical" href="https://www.cosmickdd.me/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://www.cosmickdd.me/#person",
              "name": "Utkarsh Tiwari",
              "alternateName": "cosmickdd",
              "url": "https://www.cosmickdd.me",
              "image": "https://res.cloudinary.com/dq72obe1o/image/upload/f_auto,q_auto/912087b0-6ac2-4116-b6df-0eb374f64df5_bjw56v",
              "jobTitle": "UI/UX Designer",
              "description": "Utkarsh Tiwari, known online as cosmickdd, is a UI/UX Designer at GreenPista. He specializes in product design, frontend development, AI products, SaaS, and enterprise software.",
              "worksFor": {
                "@type": "Organization",
                "name": "GreenPista"
              },
              "hasOccupation": {
                "@type": "Occupation",
                "name": "UI/UX Designer"
              },
              "knowsAbout": [
                "Product Design",
                "User Interface Design",
                "User Experience (UX)",
                "Frontend Development",
                "React",
                "TypeScript",
                "Figma",
                "Design Systems",
                "AI Products",
                "SaaS",
                "TailwindCSS",
                "React Native"
              ],
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "AKGEC"
              },
              "sameAs": [
                "https://github.com/cosmickdd",
                "https://linkedin.com/in/cosmickdd",
                "https://twitter.com/cosmickdd",
                "https://www.figma.com/@cosmickdd",
                "https://instagram.com/cosmickdd",
                "https://behance.net/cosmickdd"
              ]
            }
          `}
        </script>
      </Helmet>
      {/* 
        ══════════════════════════════════════════════════════════
        HERO — Match Adham Dannaway style (black header + huge white hero)
        ══════════════════════════════════════════════════════════ 
      */}
      <section
        onPointerMove={(e) => {
          if (e.pointerType === "mouse") {
            setIsHovering(true);
            const percent = Math.min(100, Math.max(0, (e.clientX / window.innerWidth) * 100));
            setSliderPos(percent);
          }
        }}
        onPointerLeave={(e) => {
          if (e.pointerType === "mouse") {
            setIsHovering(false);
            setSliderPos(50);
          }
        }}
        className="-mt-16 sm:-mt-24 md:-mt-40 pt-20 sm:pt-28 md:pt-[230px]" // Counters the Layout padding precisely
        style={{
          position: "relative",
          width: "100%",
          background: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end", // Anchor everything to the bottom
        }}
      >

        {/* Faint Background Graphics for DESKTOP (Pushed to edges with stronger opacity) */}
        <div 
          className="hidden md:block"
          style={{
            position: "absolute",
            top: "60%", left: "5%",
            transform: "translate(-50%, -50%)",
            width: "45vw",
            maxWidth: "400px",
            height: "auto",
            aspectRatio: "1/1",
            opacity: ready && showDesigner ? 0.6 : 0,
            transition: "opacity 0.6s ease",
            pointerEvents: "none",
            mixBlendMode: "multiply",
            zIndex: 0
          }}
        >
          <img src="/images/designer_bg.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain", filter: "contrast(1.2)" }} loading="eager" fetchPriority="high" />
        </div>

        <div 
          className="hidden md:block"
          style={{
            position: "absolute",
            top: "60%", right: "5%",
            transform: "translate(50%, -50%)",
            width: "45vw",
            maxWidth: "400px",
            height: "auto",
            aspectRatio: "1/1",
            opacity: ready && showDeveloper ? 0.6 : 0,
            transition: "opacity 0.6s ease",
            pointerEvents: "none",
            mixBlendMode: "multiply",
            zIndex: 0
          }}
        >
          <img src="/images/developer_bg.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain", filter: "contrast(1.2)" }} loading="eager" fetchPriority="high" />
        </div>

        {/* Visually hidden H1 for SEO — establishes page identity for search engines */}
        <h1 style={{ position: "absolute", width: "1px", height: "1px", padding: 0, margin: "-1px", overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", borderWidth: 0 }}>
          Utkarsh Tiwari (cosmickdd) — UI/UX Designer &amp; Frontend Developer
        </h1>

        {/* ── DESKTOP Main Hero Content (100% UNTOUCHED down to each style property) ── */}
        <div 
          className="hidden md:flex"
          style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            maxWidth: "1100px",
            margin: "0 auto",
            marginTop: "-60px", // Aggressively pull up to close the gap to navbar
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "0px",
          }}
        >
          
          {/* LEFT — Designer */}
          <div style={{
            flex: 1,
            display: "flex",
            justifyContent: "center", // Horizontally center the block in the left empty space
            paddingRight: "10px",
            opacity: ready && showDesigner ? 1 : 0,
            pointerEvents: showDesigner ? "auto" : "none",
            transform: ready && showDesigner ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}>
            <div style={{ width: "100%", maxWidth: "340px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span aria-hidden="true" style={{
                display: "block",
                fontFamily: "Catamaran, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(42px, 6vw, 72px)",
                letterSpacing: "-0.04em",
                lineHeight: 1,
                color: "#222",
                margin: "0 0 16px 0",
                whiteSpace: "nowrap",
                textAlign: "center",
              }}>
                designer
              </span>
              <p style={{
                fontSize: "15px",
                lineHeight: 1.6,
                color: "#888",
                fontWeight: 400,
                margin: 0,
                textAlign: "center", // Centered like the reference
              }}>
                Product designer specialising in UI design and design systems.
              </p>
            </div>
          </div>

          {/* CENTER — Huge Split Image */}
          <div style={{
            position: "relative",
            flexShrink: 0,
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease",
            marginBottom: "-4px",
          }}>
            <SplitImage sliderPos={sliderPos} setSliderPos={setSliderPos} isHovering={isHovering} />
          </div>

          {/* RIGHT — Developer */}
          <div style={{
            flex: 1,
            display: "flex",
            justifyContent: "center", // Horizontally center the block in the right empty space
            paddingLeft: "10px",
            opacity: ready && showDeveloper ? 1 : 0,
            pointerEvents: showDeveloper ? "auto" : "none",
            transform: ready && showDeveloper ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}>
            <div style={{ width: "100%", maxWidth: "340px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span aria-hidden="true" style={{
                display: "block",
                fontFamily: "Catamaran, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(42px, 6vw, 72px)",
                letterSpacing: "-0.04em",
                lineHeight: 1,
                color: "#222",
                margin: "0 0 16px 0",
                whiteSpace: "nowrap",
                textAlign: "center",
              }}>
                &lt;coder&gt;
              </span>
              <p style={{
                fontSize: "16px",
                lineHeight: 1.6,
                color: "#777",
                fontWeight: 400,
                margin: 0,
                textAlign: "center", // Centered like the reference
              }}>
                Front end developer who writes clean, elegant and efficient code.
              </p>
            </div>
          </div>

        </div>

        {/* ── MOBILE Main Hero Content (md:hidden) ── */}
        <div className="md:hidden relative z-10 w-full px-4 flex flex-col items-center">
          
          {/* Mobile Interactive Role Selector Pill */}
          <div className="mb-4 inline-flex items-center bg-gray-100/90 backdrop-blur-sm p-1 rounded-full border border-gray-200 shadow-sm">
            <button
              onClick={() => animateToPos(100)}
              className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                sliderPos >= 50
                  ? "bg-[#111] text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              designer
            </button>
            <button
              onClick={() => animateToPos(0)}
              className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                sliderPos < 50
                  ? "bg-[#111] text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              &lt;coder&gt;
            </button>
          </div>

          {/* Mobile Centerpiece: Split Image with Centered Ambient Art */}
          <div className="relative flex justify-center items-center w-full mb-4">
            {/* Centered ambient artistic splash (Never clips outside screen) */}
            <div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10"
              style={{
                opacity: ready ? 0.4 : 0,
                transition: "opacity 0.6s ease",
              }}
            >
              <img
                src={sliderPos >= 50 ? "/images/designer_bg.png" : "/images/developer_bg.png"}
                alt=""
                className="w-[260px] h-[260px] object-contain transition-all duration-500"
              />
            </div>

            {/* Split Image */}
            <div className="relative">
              <SplitImage sliderPos={sliderPos} setSliderPos={setSliderPos} isHovering={isHovering} />
            </div>
          </div>

          {/* Mobile Dynamic Role Subtitle & Headline */}
          <div className="text-center px-4 max-w-sm mx-auto min-h-[96px] flex flex-col items-center justify-start">
            {sliderPos >= 50 ? (
              <div className="animate-in fade-in zoom-in-95 duration-300 flex flex-col items-center">
                <span className="font-catamaran font-extrabold text-3xl sm:text-4xl text-[#222] tracking-tight mb-1">
                  designer
                </span>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[280px]">
                  Product designer specialising in UI design and design systems.
                </p>
              </div>
            ) : (
              <div className="animate-in fade-in zoom-in-95 duration-300 flex flex-col items-center">
                <span className="font-catamaran font-extrabold text-3xl sm:text-4xl text-[#222] tracking-tight mb-1">
                  &lt;coder&gt;
                </span>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[280px]">
                  Front end developer who writes clean, elegant and efficient code.
                </p>
              </div>
            )}

            {/* Swipe hint */}
            <div className="mt-3 flex items-center gap-1.5 text-[11px] font-medium text-gray-400">
              <span>⟵</span>
              <span>swipe photo to compare</span>
              <span>⟶</span>
            </div>
          </div>

        </div>

      </section>

      {/* Projects Section Separator */}
      <div style={{ background: "#f9f9f9", borderTop: "1px solid #eaeaea", paddingTop: 80 }}>
        <ProjectsSection />
      </div>

      {/* Experience Section */}
      <ExperienceSection />

      {/* Side Projects Section */}
      <SideProjectsSection />

      {/* CTA Footer Section */}
      <ContactSection />
    </Layout>
  );
}
