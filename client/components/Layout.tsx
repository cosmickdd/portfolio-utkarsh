import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <Navigation />
      {children}
    </div>
  );
}
