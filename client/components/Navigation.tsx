import { useLocation } from "react-router-dom";

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
      {/* ================= MOBILE NAV ONLY ================= */}
      {/* Desktop nav is now integrated in Header component */}
      <nav
        className="
          md:hidden
          fixed bottom-5 left-0 right-0
          z-50
          flex justify-center
          pointer-events-none
        "
      >
        <div
          className="
            pointer-events-auto
            bg-[#2f2f2f]/95
            px-5 py-3
            rounded-full
            shadow-xl
            flex gap-4
            backdrop-blur-xl
          "
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`
                relative text-xs transition
                ${
                  isActive(link.href)
                    ? "text-white"
                    : "text-white/60"
                }
              `}
            >
              {link.label}

              {isActive(link.href) && (
                <span
                  className="
                    absolute -bottom-1 left-1/2
                    w-1.5 h-1.5
                    bg-white
                    rounded-full
                    -translate-x-1/2
                  "
                />
              )}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
