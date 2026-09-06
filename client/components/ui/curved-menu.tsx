"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { socialLinks } from "@/components/Header";

export interface iNavItem {
  heading: string;
  href: string;
}

export interface iCurvedNavbarProps {
  setIsActive: (isActive: boolean) => void;
  navItems: iNavItem[];
  theme?: "dark" | "light";
}

export interface iHeaderProps {
  navItems?: iNavItem[];
  theme?: "dark" | "light";
  className?: string;
}

const MENU_SLIDE_ANIMATION = {
  initial: { x: "calc(100% + 80px)" },
  enter: { x: "0", transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "calc(100% + 80px)",
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  },
};

const defaultNavItems: iNavItem[] = [
  { heading: "Portfolio", href: "/" },
  { heading: "About", href: "/about" },
  { heading: "Resources", href: "/resources" },
  { heading: "Contact", href: "/contact" },
  { heading: "Blog", href: "/blog" },
];

export const Curve: React.FC = () => {
  const [height, setHeight] = useState(typeof window !== "undefined" ? window.innerHeight : 800);

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const initialPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q-100 ${height / 2} 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q100 ${height / 2} 100 0`;

  const curve = {
    initial: { d: initialPath },
    enter: {
      d: targetPath,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg
      className="absolute top-0 -left-[99px] w-[100px] stroke-none h-full pointer-events-none"
      style={{ fill: "#0B0B10" }}
    >
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      />
    </svg>
  );
};

export const CurvedNavbar: React.FC<iCurvedNavbarProps> = ({ setIsActive, navItems }) => {
  const location = useLocation();

  return (
    <motion.div
      variants={MENU_SLIDE_ANIMATION}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-[100dvh] w-screen max-w-[340px] sm:max-w-sm fixed right-0 top-0 z-[100] flex flex-col justify-between shadow-[0_0_80px_rgba(0,0,0,0.9)] select-none"
      style={{ backgroundColor: "#0B0B10" }}
    >
      {/* Top Section */}
      <div className="pt-7 px-8 flex items-center justify-between border-b border-white/[0.04] pb-4">
        <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-white/30">
          Navigation
        </span>
        <button
          onClick={() => setIsActive(false)}
          className="w-8 h-8 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/10 active:scale-90 transition-all flex items-center justify-center text-white/60 hover:text-white focus:outline-none"
          aria-label="Close menu"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Main Navigation Links - Monochrome, Editorial, Pure Black & White */}
      <div className="px-8 py-6 flex flex-col gap-2 my-auto">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setIsActive(false)}
              className="group flex items-center justify-between py-2.5 transition-all duration-300"
            >
              <div className="flex items-center gap-3.5">
                {isActive ? (
                  <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-white/30 transition-colors" />
                )}
                <span
                  className={`text-3xl font-catamaran tracking-tight transition-all duration-300 ${
                    isActive
                      ? "text-white font-semibold translate-x-1"
                      : "text-white/40 group-hover:text-white group-hover:translate-x-1"
                  }`}
                >
                  {item.heading}
                </span>
              </div>

              <span
                className={`text-xs font-mono transition-colors duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-white/20 group-hover:text-white/50"
                }`}
              >
                0{index + 1}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Bottom Minimalist Socials Only */}
      <div className="px-8 pb-8 pt-4 border-t border-white/[0.06] flex items-center justify-between">
        <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase">
          Socials
        </span>
        <div className="flex items-center gap-4">
          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              className="text-white/40 hover:text-white transition-colors"
            >
              <div className="w-4 h-4">
                <Icon />
              </div>
            </a>
          ))}
        </div>
      </div>

      <Curve />
    </motion.div>
  );
};

const Header: React.FC<iHeaderProps> = ({
  navItems = defaultNavItems,
  className = "",
}) => {
  const [isActive, setIsActive] = useState(false);

  // Lock body scroll and add menu-open class to hide bottom bar
  useEffect(() => {
    if (isActive) {
      document.body.classList.add("menu-open");
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.classList.remove("menu-open");
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.classList.remove("menu-open");
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isActive]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsActive(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={className}>
      {/* Sleek Minimalist Trigger Button - Pure Monochrome */}
      <button
        onClick={() => setIsActive(true)}
        className="h-8 px-3 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 transition-all flex items-center gap-2 text-white focus:outline-none backdrop-blur-md"
        aria-label="Open menu"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-white/70">Menu</span>
        <div className="w-3.5 flex flex-col gap-[3px] items-end">
          <span className="w-3.5 h-[1.5px] bg-white/90 rounded-full block" />
          <span className="w-2 h-[1.5px] bg-white/60 rounded-full block" />
        </div>
      </button>

      {/* Backdrop Dimmer */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsActive(false)}
            className="fixed inset-0 bg-black/75 backdrop-blur-[2px] z-[90]"
          />
        )}
      </AnimatePresence>

      {/* Curved Morphing Drawer */}
      <AnimatePresence mode="wait">
        {isActive && (
          <CurvedNavbar
            setIsActive={setIsActive}
            navItems={navItems}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
