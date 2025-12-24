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
    <nav className="sticky top-0 z-50 w-full bg-white py-6 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1900px] mx-auto flex items-center justify-center">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center gap-0 bg-[#4A4A4A] rounded-full px-6 py-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 font-catamaran font-medium text-sm lg:text-base transition-all ${
                isActive(link.href)
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden w-full">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-black"
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

          {isMobileMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-[#4A4A4A] rounded-lg mx-4 shadow-lg">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`block px-6 py-3 font-catamaran font-medium text-sm transition-all ${
                    isActive(link.href)
                      ? "text-white bg-gray-600"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
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
