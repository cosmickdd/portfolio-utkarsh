import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
  onChatOpen?: () => void;
}

export default function Layout({ children, onChatOpen }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative w-full">

      {/* Fixed Header */}
      <Header />

      {/* Navigation (below header) */}
      <Navigation onChatOpen={onChatOpen} />

      {/* MAIN CONTENT */}
      <main className="pt-16 sm:pt-24 md:pt-40">
        {children}
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
