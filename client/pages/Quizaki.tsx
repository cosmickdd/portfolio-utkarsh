import Layout from "@/components/Layout";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Quizaki({ onChatOpen }: { onChatOpen?: () => void }) {
  const navigate = useNavigate();

  return (
    <Layout onChatOpen={onChatOpen}>
      <main className="bg-white">
        {/* Back Navigation */}
        <div className="border-b border-[#EAEAEA]">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 py-6">
            <button
              onClick={() => navigate('/projects')}
              className="inline-flex items-center gap-2 text-black hover:text-[#666666] transition-colors"
            >
              <ArrowLeft size={18} />
              <span className="text-sm font-medium">Back to Projects</span>
            </button>
          </div>
        </div>

        {/* 1. HERO SECTION */}
        <section className="py-20 sm:py-32">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-8">
                <h1 className="text-[40px] sm:text-[56px] lg:text-[64px] leading-[1.125] font-bold text-black tracking-tight">
                  Quizaki
                </h1>
                
                <p className="text-[18px] sm:text-[20px] leading-[1.6] text-black font-normal max-w-2xl">
                  An interactive quiz competition platform designed to bring excitement and gamification to learning. Built with real-time leaderboards and engaging user experiences.
                </p>
                
                {/* Metadata Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-4">
                  <div>
                    <div className="text-[14px] uppercase tracking-[0.08em] text-[#666666] mb-2">Role</div>
                    <div className="text-[16px] text-black">Lead Designer</div>
                  </div>
                  <div>
                    <div className="text-[14px] uppercase tracking-[0.08em] text-[#666666] mb-2">Duration</div>
                    <div className="text-[16px] text-black">4 Weeks</div>
                  </div>
                  <div>
                    <div className="text-[14px] uppercase tracking-[0.08em] text-[#666666] mb-2">Team</div>
                    <div className="text-[16px] text-black">2 Engineers, 1 Designer</div>
                  </div>
                  <div>
                    <div className="text-[14px] uppercase tracking-[0.08em] text-[#666666] mb-2">Tools</div>
                    <div className="text-[16px] text-black">Figma, React</div>
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-4 pt-6">
                  <a
                    href="https://quizaki.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-black text-white text-sm font-medium hover:bg-[#333333] transition-colors rounded-full"
                  >
                    Live Product
                  </a>
                  <a
                    href="https://www.figma.com/design/kE8K8mlmQSxq7cir3cHVEL/quizaki--Community-?node-id=91-98&t=u3bpyWuaX5cK3WWm-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-black text-black text-sm font-medium hover:bg-black hover:text-white transition-all rounded-full"
                  >
                    View Design
                  </a>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="lg:col-span-5">
                <img
                  src="https://res.cloudinary.com/dz4h0eagy/image/upload/v1778701764/thumbnail_flbxrx.png"
                  alt="Quizaki platform mockup"
                  className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-[16px] border border-[#EAEAEA] cursor-pointer"
                />
              </div>
            </div>
            
            {/* Divider */}
            <div className="mt-12 border-b border-[#EAEAEA]"></div>
          </div>
        </section>

        {/* 2. PROBLEM SECTION */}
        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
            <div className="max-w-[800px] mx-auto space-y-8">
              <h2 className="text-[36px] sm:text-[40px] leading-[1.2] font-semibold text-black">
                The Problem
              </h2>
              
              <p className="text-[18px] leading-[1.6] text-black">
                Educational platforms often lack the engagement and excitement needed to keep students motivated. Learning can feel like a chore rather than an interactive experience.
              </p>
              
              <p className="text-[18px] leading-[1.6] text-black">
                Quizaki aims to solve this by introducing gamification, real-time competition, and rewarding feedback loops that make learning addictive and fun.
              </p>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-20 border-t border-[#EAEAEA]">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 text-center">
            <div className="inline-flex gap-4">
              <button
                onClick={() => navigate('/')}
                className="px-8 py-3 bg-black text-white text-[14px] font-medium hover:bg-[#333333] transition-colors"
              >
                View All Projects
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-3 border border-black text-black text-[14px] font-medium hover:bg-black hover:text-white transition-all"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
