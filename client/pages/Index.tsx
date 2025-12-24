import Layout from "@/components/Layout";
import SplitImage from "@/components/SplitImage";

export default function Index() {
  return (
    <Layout>
      <main className="flex-1">
        <section className="w-full px-6 md:px-10 lg:px-16 py-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-12 lg:gap-16">

            {/* LEFT — DESIGNER */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <h2 className="font-catamaran font-bold text-[#333] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none tracking-[0.08em] mb-5 whitespace-nowrap">
                designer
              </h2>
              <p className="max-w-xs font-catamaran text-[#A1A1A1] text-sm md:text-base leading-relaxed">
                Product designer specialising in UI design and design system
              </p>
            </div>

            {/* CENTER — IMAGE */}
            <SplitImage />

            {/* RIGHT — DEVELOPER */}
            <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
              <h2 className="font-catamaran font-bold text-[#333] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none tracking-[0.08em] mb-5 whitespace-nowrap">
                &lt;developer&gt;
              </h2>
              <p className="max-w-xs font-catamaran text-[#A1A1A1] text-sm md:text-base leading-relaxed">
                Front end developer and ML enthusiast who love building things.
              </p>
            </div>

          </div>
        </section>
      </main>
    </Layout>
  );
}
