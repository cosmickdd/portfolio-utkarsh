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

  return (
    <Layout onChatOpen={onChatOpen}>
      <Helmet>
        <title>Cosmickdd | Utkarsh Tiwari - Product Designer</title>
        <meta name="description" content="Cosmickdd is Utkarsh Tiwari, a Product Designer and Frontend Developer specializing in AI tools, enterprise software, and seamless user experiences." />
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
        className="-mt-16 sm:-mt-24 md:-mt-40" // Counters the Layout padding precisely
        style={{
          position: "relative",
          width: "100%",
          paddingTop: 230
          , // Increased breathing room below navbar
          background: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end", // Anchor everything to the bottom
          // overflow: "hidden" removed to prevent chopping the head off
        }}
      >


        {/* Faint Background Graphics (Pushed to edges with stronger opacity) */}
        <div style={{
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
        }}>
          <img src="/images/designer_bg.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain", filter: "contrast(1.2)" }} loading="eager" fetchPriority="high" />
        </div>

        <div style={{
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
        }}>
          <img src="/images/developer_bg.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain", filter: "contrast(1.2)" }} loading="eager" fetchPriority="high" />
        </div>

        {/* ── Main Hero Content ───────────────────────── */}
        <div style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          marginTop: "-60px", // Aggressively pull up to close the gap to navbar
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "0px",
        }}>
          
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
              <h1 style={{
                fontFamily: "Catamaran, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(42px, 6vw, 72px)",
                letterSpacing: "-0.04em",
                lineHeight: 1,
                color: "#222",
                margin: "0 0 16px 0",
                whiteSpace: "nowrap",
                textAlign: "center", // Centered like the reference
              }}>
                designer
              </h1>
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
              <h2 style={{
                fontFamily: "Catamaran, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(42px, 6vw, 72px)",
                letterSpacing: "-0.04em",
                lineHeight: 1,
                color: "#222",
                margin: "0 0 16px 0",
                whiteSpace: "nowrap",
                textAlign: "center", // Centered like the reference
              }}>
                &lt;coder&gt;
              </h2>
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
