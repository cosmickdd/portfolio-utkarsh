import { Link, useLocation } from "react-router-dom";
import { Home, User, BookOpen, Mail, MessageCircle } from "lucide-react";

export default function BottomNav() {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "Portfolio" },
    { path: "/about", icon: User, label: "About" },
    { path: "/resources", icon: BookOpen, label: "Resources" },
    { path: "/contact", icon: Mail, label: "Contact" },
    { path: "/chat", icon: MessageCircle, label: "Chat" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="hidden md:fixed md:bottom-6 md:left-1/2 md:-translate-x-1/2 md:z-50 md:w-fit">
      <div className="bg-black rounded-full px-2 py-2 shadow-2xl hover:shadow-3xl transition-shadow backdrop-blur-xl">
        <ul className="flex items-center justify-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center justify-center p-3 rounded-full transition-all duration-300 group ${
                    active
                      ? "bg-orange-500 text-white"
                      : "text-white/60 hover:text-white hover:bg-white/10"
                  }`}
                  title={item.label}
                >
                  <Icon size={20} strokeWidth={2} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
