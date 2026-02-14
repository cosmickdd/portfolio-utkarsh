import { useLocation } from "react-router-dom";
import { Home, User, Zap, Mail } from "lucide-react";

const navIcons: Record<string, any> = {
  "/": Home,
  "/about": User,
  "/resources": Zap,
  "/contact": Mail,
};

export default function Navigation() {
  const location = useLocation();

  const navLinks = [
    { label: "Portfolio", href: "/" },
    { label: "About", href: "/about" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* ================= MOBILE BOTTOM NAV ================= */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-gray-900">
        <div className="flex items-center justify-around py-2 px-2">
          {navLinks.map((link) => {
            const Icon = navIcons[link.href as keyof typeof navIcons];
            const active = isActive(link.href);

            return (
              <a
                key={link.href}
                href={link.href}
                className={`
                  flex flex-col items-center gap-1 transition-all duration-300 group
                  ${active ? "text-red-500" : "text-gray-400 hover:text-gray-300"}
                `}
                aria-label={link.label}
              >
                {/* Icon with glow effect on active */}
                <div className={`relative transition-all duration-300 ${active ? "scale-105" : ""}`}>
                  <Icon size={20} strokeWidth={1.5} />
                  {active && (
                    <div className="absolute inset-0 rounded-lg blur-md bg-red-500/20 opacity-60" />
                  )}
                </div>

                {/* Label - visible on active or hover */}
                <span
                  className={`
                    text-xs transition-all duration-200
                    ${
                      active
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }
                  `}
                >
                  {link.label}
                </span>

                {/* Dot indicator */}
                {active && <div className="w-1 h-1 bg-red-500 rounded-full" />}
              </a>
            );
          })}
        </div>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="md:hidden h-20" />
    </>
  );
}
