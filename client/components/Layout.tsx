import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
  onChatOpen?: () => void;
}

export default function Layout({ children, onChatOpen }: LayoutProps) {
  return (
    <div className="bg-white">

      {/* Fixed Header */}
      <Header />

      {/* Navigation (below header) */}
      <Navigation onChatOpen={onChatOpen} />

      {/* MAIN CONTENT */}
      <main className="pt-12 sm:pt-20 md:pt-40">
        {children}
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
