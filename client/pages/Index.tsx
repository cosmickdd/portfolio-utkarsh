import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

export default function Index() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <main className="flex-1 relative pb-32 md:pb-40 lg:pb-48">
        <div className="max-w-[1900px] mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
          {/* Content Container */}
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 md:gap-12 lg:gap-8 xl:gap-16 py-8 md:py-12 lg:py-16">
            {/* Left Section - Designer */}
            <div className="w-full lg:w-auto lg:max-w-[425px] flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 flex-shrink-0">
              <h2 className="font-catamaran font-bold text-[#333] text-5xl md:text-6xl lg:text-7xl xl:text-[96px] leading-[140%] tracking-[0.08em] mb-4 md:mb-5 lg:mb-6">
                designer
              </h2>
              <p className="font-catamaran font-normal text-[#A1A1A1] text-base md:text-lg lg:text-xl xl:text-2xl leading-[128%] tracking-[0.05em] max-w-[402px]">
                Product designer specialising in UI design and design system
              </p>
            </div>

            {/* Center Section - Split Portrait */}
            <div className="w-full lg:w-auto flex-shrink-0 order-1 lg:order-2">
              <div className="flex items-end justify-center gap-0 max-w-[300px] md:max-w-[500px] lg:max-w-[650px] xl:max-w-[814px] mx-auto">
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
            <div className="w-full lg:w-auto lg:max-w-[565px] flex flex-col items-center lg:items-end text-center lg:text-right order-3 flex-shrink-0">
              <h2 className="font-catamaran font-bold text-[#333] text-5xl md:text-6xl lg:text-7xl xl:text-[96px] leading-[140%] tracking-[0.08em] mb-4 md:mb-5 lg:mb-6">
                &lt;developer&gt;
              </h2>
              <p className="font-catamaran font-normal text-[#A1A1A1] text-base md:text-lg lg:text-xl xl:text-2xl leading-[128%] tracking-[0.05em] max-w-[494px] px-4 lg:px-0 lg:pl-9">
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
