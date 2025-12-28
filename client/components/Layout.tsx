import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">

      {/* Fixed Header */}
      <Header />

      {/* Navigation (below header) */}
      <Navigation />

      {/* MAIN CONTENT */}
      <main className="pt-[64px] sm:pt-[76px] md:pt-[88px]">
        {children}
      </main>

    </div>
  );
}
