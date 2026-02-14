import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

interface LayoutProps {
  children: React.ReactNode;
  onChatOpen?: () => void;
}

export default function Layout({ children, onChatOpen }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">

      {/* Fixed Header */}
      <Header />

      {/* Navigation (below header) */}
      <Navigation onChatOpen={onChatOpen} />

      {/* MAIN CONTENT */}
      <main className="pt-[64px] sm:pt-[76px] md:pt-[88px]">
        {children}
      </main>

    </div>
  );
}
