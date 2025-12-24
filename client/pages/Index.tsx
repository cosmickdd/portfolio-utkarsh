import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

export default function Index() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <main className="flex-1 relative pb-32 md:pb-40">
        <div className="max-w-[1900px] mx-auto px-4 md:px-8 lg:px-16">
          {/* Content Container */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-8 md:py-16">
            {/* Left Section - Designer */}
            <div className="w-full lg:w-auto flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
              <h2 className="font-catamaran font-bold text-[#333] text-5xl md:text-7xl lg:text-8xl xl:text-[96px] leading-[140%] tracking-[0.08em] mb-4 md:mb-6">
                designer
              </h2>
              <p className="font-catamaran font-normal text-[#A1A1A1] text-lg md:text-xl lg:text-2xl leading-[128%] tracking-[0.05em] max-w-[400px]">
                Product designer specialising in UI design and design system
              </p>
            </div>

            {/* Center Section - Split Portrait */}
            <div className="w-full lg:w-auto flex-shrink-0 order-1 lg:order-2">
              <div className="flex items-end justify-center gap-0 max-w-[814px] mx-auto">
                {/* Left Half - Designer */}
                <div className="w-1/2 flex items-end">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/7646b1b1029594569dcc800b57c5e2a25f5b40b3?width=814"
                    alt="Designer portrait"
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Right Half - Developer */}
                <div className="w-1/2 flex items-end">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/bc307b97d5ff3599f6373271dcaad9cbc5d11686?width=814"
                    alt="Developer portrait"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Section - Developer */}
            <div className="w-full lg:w-auto flex flex-col items-center lg:items-end text-center lg:text-right order-3">
              <h2 className="font-catamaran font-bold text-[#333] text-5xl md:text-7xl lg:text-8xl xl:text-[96px] leading-[140%] tracking-[0.08em] mb-4 md:mb-6">
                &lt;developer&gt;
              </h2>
              <p className="font-catamaran font-normal text-[#A1A1A1] text-lg md:text-xl lg:text-2xl leading-[128%] tracking-[0.05em] max-w-[494px] pl-0 lg:pl-9">
                Front end developer and ML enthusiast who love building things.
              </p>
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
