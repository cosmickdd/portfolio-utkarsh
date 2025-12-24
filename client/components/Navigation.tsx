import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Portfolio", href: "/" },
    { label: "About", href: "/about" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md">
      <div className="max-w-[1900px] mx-auto px-4 md:px-8 lg:px-16 py-6 flex justify-center">
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 h-12 px-6 rounded-2xl bg-[#3f3f3f]/90 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`
                relative font-catamaran font-medium text-sm
                transition-all duration-200 ease-out
                ${
                  isActive(link.href)
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }
                after:absolute after:left-1/2 after:-bottom-1
                after:h-[2px] after:w-0 after:bg-white
                after:transition-all after:duration-200
                hover:after:w-6 hover:after:left-[calc(50%-12px)]
                ${isActive(link.href) ? "after:w-6 after:left-[calc(50%-12px)]" : ""}
              `}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden w-full flex justify-end relative">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-black transition"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {isMobileMenuOpen && (
            <div className="absolute top-14 right-0 left-0 mx-4 rounded-xl bg-[#3f3f3f]/95 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.2)] overflow-hidden">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    block px-6 py-4 font-catamaran font-medium text-sm
                    transition-all
                    ${
                      isActive(link.href)
                        ? "text-white bg-white/10"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }
                  `}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
