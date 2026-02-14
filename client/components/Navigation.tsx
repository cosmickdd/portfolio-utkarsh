import { useLocation } from "react-router-dom";
import { Home, User, BookOpen, MessageCircle, Mail } from "lucide-react";

interface NavigationProps {
  onChatOpen?: () => void;
}

export default function Navigation({ onChatOpen }: NavigationProps) {
  const location = useLocation();

  const navLinks = [
    { label: "Portfolio", href: "/", icon: Home },
    { label: "About", href: "/about", icon: User },
    { label: "Learn", href: "/resources", icon: BookOpen },
    { label: "Chat", href: "#chat", icon: MessageCircle, isChat: true },
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
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 h-[70px] bg-[#0B0B0F] border-t border-t-[rgba(255,255,255,0.04)]">
        <ul className="h-full flex justify-between items-stretch w-full px-1">
          {navLinks.map((link: any) => {
            const Icon = link.icon;
            const active = isActive(link.href);
            
            if (link.isChat) {
              return (
                <li key={link.href} className="flex-1 flex justify-center items-center">
                  <button
                    onClick={onChatOpen}
                    className="nav-link flex flex-col items-center justify-center gap-1 w-full h-full transition-all duration-200 relative cursor-pointer bg-none border-none"
                    title={link.label}
                  >
                    <Icon 
                      size={24} 
                      strokeWidth={1.5}
                      className="transition-all duration-200 text-[#6B7280] hover:text-[#9CA3AF]"
                    />
                    <span className="text-[10px] font-medium transition-all duration-200 whitespace-nowrap text-[#6B7280] leading-none">
                      {link.label}
                    </span>
                  </button>
                </li>
              );
            }
            
            return (
              <li key={link.href} className="flex-1 flex justify-center items-center">
                <a
                  href={link.href}
                  className="nav-link flex flex-col items-center justify-center gap-1 w-full h-full transition-all duration-200 relative"
                  title={link.label}
                >
                  {/* Thin white top indicator for active */}
                  {active && (
                    <div className="absolute top-0 w-6 h-1 bg-white rounded-b-sm" />
                  )}
                  
                  {/* Icon */}
                  <Icon 
                    size={24} 
                    strokeWidth={1.5}
                    className={`transition-all duration-200 ${
                      active 
                        ? "text-white" 
                        : "text-[#6B7280]"
                    }`}
                  />
                  
                  {/* Label text - prevent wrapping */}
                  <span className={`text-[10px] font-medium transition-all duration-200 whitespace-nowrap leading-none ${
                    active 
                      ? "text-white font-semibold" 
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
          padding-bottom: 70px;
        }
      `}</style>
    </>
  );
}
