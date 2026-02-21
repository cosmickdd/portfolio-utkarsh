"use client";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/* ICONS */
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

const BehanceIcon = () => (
  <svg viewBox="0 0 512 512" className="w-full h-full" fill="currentColor">
    <path d="M214.8,233.3c4.3-2.6,6.4-7.3,6.4-13.9c0-7.4-2.8-12.2-8.5-14.6c-4.9-1.6-11.1-2.5-18.7-2.5h-34.4v34.9H198 C204.9,237.3,210.4,236,214.8,233.3z"/>
    <path d="M344.1,244.5c-4.9-4.2-11-6.3-18.2-6.3c-7.8,0-13.9,2.2-18.3,6.7c-4.3,4.5-7,10.5-8.2,18.1h52.7 C351.7,254.9,348.9,248.8,344.1,244.5z"/>
    <path d="M472,0H40C17.9,0,0,17.9,0,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V40C512,17.9,494.1,0,472,0z M291.6,182.3 h67.8V202h-67.8L291.6,182.3L291.6,182.3z M250.7,310.6c-3,4.9-6.7,9.1-11.2,12.4c-5,3.9-11,6.5-17.9,8c-6.9,1.4-14.3,2.1-22.4,2.1 H128V174.9h76.5c19.3,0.3,33,5.9,41,16.9c4.8,6.7,7.2,14.8,7.2,24.2c0,9.6-2.4,17.4-7.3,23.3c-2.7,3.3-6.8,6.3-12.1,9 c8.1,3,14.2,7.6,18.3,14s6.2,14.1,6.2,23.2C257.8,294.7,255.4,303.1,250.7,310.6z M384,283.2h-85.2c0.5,11.7,4.5,20,12.2,24.7 c4.7,2.9,10.3,4.4,16.9,4.4c6.9,0,12.6-1.8,17-5.4c2.4-1.9,4.5-4.6,6.3-8.1h31.2c-0.8,6.9-4.6,14-11.3,21.2 c-10.5,11.4-25.1,17.1-44,17.1c-15.6,0-29.3-4.8-41.2-14.4c-11.9-9.6-17.9-25.2-17.9-46.8c0-20.3,5.4-35.8,16.1-46.6 c10.8-10.8,24.7-16.2,41.8-16.2c10.2,0,19.4,1.8,27.5,5.5c8.2,3.6,14.9,9.4,20.2,17.3c4.8,6.9,7.9,15,9.3,24.2 C383.8,265.4,384.1,273.1,384,283.2z"/>
    <path d="M214.3,266.1c-3.8-1.7-9-2.6-15.8-2.7h-39v42.2H198c6.9,0,12.2-0.9,16-2.8c7-3.5,10.4-10,10.4-19.7 C224.4,274.9,221,269.2,214.3,266.1z"/>
  </svg>
);

const DribbbleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" />
    <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" />
  </svg>
);

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { label: "Portfolio", href: "/" },
    { label: "About", href: "/about" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        bg-black
        backdrop-blur-md
      `}
    >
      <div className="max-w-[1900px] mx-auto flex items-center justify-between px-3 sm:px-5 md:px-10 py-3 sm:py-4 md:py-6">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 sm:gap-3">
          <img src="/logo.svg" alt="COSMICKDD" className="h-5 sm:h-6 md:h-7 lg:h-9 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`
                cursor-target relative text-sm font-medium transition-all duration-300
                ${
                  isActive(link.href)
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }
              `}
            >
              {link.label}

              {isActive(link.href) && (
                <span
                  className="
                    absolute left-1/2 -bottom-1
                    w-4 h-[2px]
                    bg-orange-500
                    -translate-x-1/2
                    transition-all duration-300
                  "
                />
              )}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 md:gap-5 lg:gap-6">
          {[TwitterIcon, LinkedInIcon, BehanceIcon, InstagramIcon].map(
            (Icon, i) => (
              <a
                key={i}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white hover:opacity-70 transition"
              >
                <Icon />
              </a>
            )
          )}
        </div>
      </div>
    </header>
  );
}
