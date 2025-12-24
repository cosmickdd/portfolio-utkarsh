import Header from "./Header";
import BottomNav from "./BottomNav";

interface PlaceholderProps {
  pageName: string;
}

export default function Placeholder({ pageName }: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center pb-32 md:pb-40">
        <div className="text-center px-4">
          <h1 className="font-catamaran font-bold text-[#333] text-4xl md:text-6xl lg:text-7xl mb-6">
            {pageName}
          </h1>
          <p className="font-catamaran text-[#A1A1A1] text-xl md:text-2xl max-w-2xl mx-auto">
            This page is coming soon. Continue prompting to add content here!
          </p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
