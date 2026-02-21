import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

interface LayoutProps {
  children: React.ReactNode;
  onChatOpen?: () => void;
}

export default function Layout({ children, onChatOpen }: LayoutProps) {
  return (
    <div className="flex flex-col bg-white min-h-screen">

      {/* Fixed Header */}
      <Header />

      {/* Navigation (below header) */}
      <Navigation onChatOpen={onChatOpen} />

      {/* MAIN CONTENT */}
      <main className="pt-24 sm:pt-32 md:pt-40 flex-1">
        {children}
      </main>

    </div>
  );
}
