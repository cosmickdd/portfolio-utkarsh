import { socialLinks } from "@/components/Header";

interface NavigationProps {
  onChatOpen?: () => void;
}

export default function Navigation({ onChatOpen }: NavigationProps) {
  return (
    <>
      {/* LIQUID MORPHISM FLOATING SOCIAL NAVBAR (Mobile View Only: md:hidden) */}
      <nav
        aria-label="Social profiles"
        className="
          mobile-bottom-dock
          md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-30
          w-auto max-w-[94vw]
          px-3 py-1.5
          rounded-full
          bg-[#0C0C12]/80 backdrop-blur-2xl
          border border-white/20
          shadow-[0_14px_35px_rgba(0,0,0,0.75),inset_0_1px_1px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.06)]
          flex items-center gap-1.5 sm:gap-2
          transition-all duration-300
        "
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.03) 100%)",
        }}
      >
        {socialLinks.map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={label}
            aria-label={label}
            className="
              relative group
              w-9 h-9 sm:w-10 sm:h-10
              rounded-full
              flex items-center justify-center
              text-[#C5C9D3] hover:text-white
              hover:bg-white/15
              active:scale-90 active:bg-white/25
              transition-all duration-200
            "
          >
            <div className="w-4 h-4 transition-transform group-hover:scale-110">
              <Icon />
            </div>
          </a>
        ))}
      </nav>

      {/* Add bottom padding and hide dock when menu is open */}
      <style>{`
        @media (max-width: 767px) {
          body {
            padding-bottom: 74px;
          }
          body.menu-open .mobile-bottom-dock {
            opacity: 0 !important;
            pointer-events: none !important;
            transform: translate(-50%, 25px) !important;
          }
        }
      `}</style>
    </>
  );
}
