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
      {/* ================= DESKTOP NAV ================= */}
      <nav className="hidden md:flex sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md">
        <div className="max-w-[1900px] mx-auto px-8 py-5 flex justify-center">
          <div className="flex items-center gap-6 px-6 h-12 rounded-2xl bg-[#3f3f3f]/90 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`
                  relative font-catamaran text-sm transition-all whitespace-nowrap
                  ${
                    isActive(link.href)
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }
                  after:absolute after:left-1/2 after:-bottom-1
                  after:h-[2px] after:bg-white after:transition-all
                  after:w-0 hover:after:w-6 hover:after:left-[calc(50%-12px)]
                  ${isActive(link.href) ? "after:w-6 after:left-[calc(50%-12px)]" : ""}
                `}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ================= MOBILE NAV ================= */}
{/* MOBILE NAV — FIXED */}
<nav className="md:hidden fixed bottom-5 left-0 right-0 z-50 flex justify-center">
  <div
    className="
      flex items-center justify-center gap-4
      px-5 py-3
      rounded-full
      bg-[#2f2f2f]/95
      backdrop-blur-xl
      shadow-[0_12px_40px_rgba(0,0,0,0.35)]
    "
  >
    {navLinks.map((link) => {
      const active = isActive(link.href);

      return (
        <a
          key={link.href}
          href={link.href}
          className={`
            relative
            px-2 py-1
            text-[12px] font-medium
            whitespace-nowrap break-keep
            transition-all duration-200
            ${
              active
                ? "text-white"
                : "text-white/60 hover:text-white"
            }
          `}
        >
          {link.label}

          {/* Active dot */}
          {active && (
            <span
              className="
                absolute -bottom-2 left-1/2
                -translate-x-1/2
                w-1.5 h-1.5
                rounded-full bg-white
              "
            />
          )}
        </a>
      );
    })}
  </div>
</nav>

    </>
  );
}
