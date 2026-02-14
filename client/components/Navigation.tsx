import { useLocation } from "react-router-dom";
import { Home, User, BookOpen, MessageCircle, Mail } from "lucide-react";

export default function Navigation() {
  const location = useLocation();

  const navLinks = [
    { label: "Portfolio", href: "/", icon: Home },
    { label: "About", href: "/about", icon: User },
    { label: "Learn", href: "/resources", icon: BookOpen },
    { label: "Chat", href: "/chat", icon: MessageCircle },
    { label: "Contact", href: "/contact", icon: Mail },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      <style>{`
        @keyframes tapScale {
          0% { transform: scale(1); }
          50% { transform: scale(0.96); }
          100% { transform: scale(1); }
        }
        
        .nav-link:active {
          animation: tapScale 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
      
      {/* MOBILE NAV - Clean Modern Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 h-[68px] bg-[#0B0B0F] border-t border-t-[rgba(255,255,255,0.04)] rounded-t-[20px] shadow-[0_-6px_25px_rgba(0,0,0,0.6)]">
        <ul className="h-full flex justify-around items-center w-full">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.href);
            return (
              <li key={link.href} className="flex-1 flex justify-center">
                <a
                  href={link.href}
                  className="nav-link flex flex-col items-center gap-1.5 transition-all duration-200 relative"
                  title={link.label}
                >
                  {/* Thin red top indicator for active */}
                  {active && (
                    <div className="absolute -top-3.5 w-5 h-0.5 bg-[#FF3B3B] rounded-sm" />
                  )}
                  
                  {/* Icon */}
                  <Icon 
                    size={22} 
                    strokeWidth={1.5}
                    className={`transition-all duration-200 ${
                      active 
                        ? "text-[#FF3B3B]" 
                        : "text-[#6B7280]"
                    }`}
                  />
                  
                  {/* Label text - prevent wrapping */}
                  <span className={`text-[11px] font-medium transition-all duration-200 whitespace-nowrap ${
                    active 
                      ? "text-[#FF3B3B] font-semibold" 
                      : "text-[#6B7280]"
                  }`}>
                    {link.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      
      {/* Add bottom padding to body to prevent content hiding */}
      <style>{`
        body {
          padding-bottom: 68px;
        }
      `}</style>
    </>
  );
}
