import Layout from "@/components/Layout";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function PranaAI({ onChatOpen }: { onChatOpen?: () => void }) {
  const navigate = useNavigate();

  const handleLiveClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.info("Live project is currently unavailable", {
      description: "The platform is undergoing maintenance. Please check back later.",
      duration: 4000,
    });
  };

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
                  Prana AI
                </h1>
                
                <p className="text-[18px] sm:text-[20px] leading-[1.6] text-black font-normal max-w-2xl">
                  An AI health assistant bringing ancient Ayurvedic wisdom to modern wellness. Designed and launched across iOS and Android with personalized health recommendations.
                </p>
                
                {/* Metadata Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-4">
                  <div>
                    <div className="text-[14px] uppercase tracking-[0.08em] text-[#666666] mb-2">Role</div>
                    <div className="text-[16px] text-black">Product Designer</div>
                  </div>
                  <div>
                    <div className="text-[14px] uppercase tracking-[0.08em] text-[#666666] mb-2">Duration</div>
                    <div className="text-[16px] text-black">6 Weeks</div>
                  </div>
                  <div>
                    <div className="text-[14px] uppercase tracking-[0.08em] text-[#666666] mb-2">Team</div>
                    <div className="text-[16px] text-black">3 Engineers, 1 Designer</div>
                  </div>
                  <div>
                    <div className="text-[14px] uppercase tracking-[0.08em] text-[#666666] mb-2">Platforms</div>
                    <div className="text-[16px] text-black">iOS & Android</div>
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-4 pt-6">
                  <a
                    href="https://prana-ai.vercel.app"
                    onClick={handleLiveClick}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-black text-white text-sm font-medium hover:bg-[#333333] transition-colors rounded-full"
                  >
                    Live Product
                  </a>
                  <a
                    href="https://www.figma.com/design/C1XQkWfRoENS4OabryGznK/Prana-Ai-Ranked-5th-at-prometeo-25-devquest--Community-?node-id=0-1&t=OX2ylfhatjwC8DTS-1"
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
                  src="https://images.unsplash.com/photo-1576091160550-2173fb9c6ded?w=800&h=600&fit=crop&sat=-100"
                  alt="Prana AI app mockup"
                  className="w-full aspect-[4/3] object-cover grayscale rounded-[16px] border border-[#EAEAEA]"
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
                Modern medicine addresses symptoms, but people crave holistic wellness. Ayurvedic wisdom offers personalized health guidance, but it's trapped in dense texts and gatekept by specialists.
              </p>
              
              <p className="text-[18px] leading-[1.6] text-black">
                Users want preventive health advice based on their unique constitution, dietary preferences, and lifestyle - delivered in an accessible, modern format.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                  <p className="text-[16px] leading-[1.6] text-black">Ayurvedic knowledge is scattered and difficult to access</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                  <p className="text-[16px] leading-[1.6] text-black">No personalized recommendations based on individual dosha type</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                  <p className="text-[16px] leading-[1.6] text-black">Generic health apps ignore traditional wisdom systems</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                  <p className="text-[16px] leading-[1.6] text-black">Finding qualified Ayurvedic practitioners is expensive and time-consuming</p>
                </div>
              </div>
              
              <blockquote className="border-l-2 border-black pl-6 italic text-[24px] sm:text-[28px] leading-[1.3] text-black mt-12">
                "Ancient wisdom shouldn't feel ancient. It should be personalized, accessible, and integrated into daily life."
              </blockquote>
            </div>
          </div>
        </section>

        {/* 3. RESEARCH SECTION */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h2 className="text-[36px] sm:text-[40px] leading-[1.2] font-semibold text-black mb-6">
                  Research
                </h2>
                <p className="text-[16px] leading-[1.6] text-black">
                  I worked with Ayurvedic practitioners and interviewed 40+ wellness-conscious users. Users valued personalization above all - they wanted recommendations that felt tailored to their specific dosha, season, and lifestyle.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="border border-[#EAEAEA] bg-white p-6">
                  <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">
                    Dosha-First Design
                  </h3>
                  <p className="text-[16px] leading-[1.6] text-black">
                    Users wanted their Ayurvedic constitution identified upfront and all recommendations filtered through that lens.
                  </p>
                </div>
                
                <div className="border border-[#EAEAEA] bg-white p-6">
                  <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">
                    Seasonal Relevance
                  </h3>
                  <p className="text-[16px] leading-[1.6] text-black">
                    Health advice should shift with seasons and weather. Static recommendations felt incomplete and irrelevant.
                  </p>
                </div>
                
                <div className="border border-[#EAEAEA] bg-white p-6">
                  <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">
                    Educational Value
                  </h3>
                  <p className="text-[16px] leading-[1.6] text-black">
                    Users wanted to understand the why behind recommendations, not just follow orders. Education builds trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. STRATEGY SECTION */}
        <section className="py-20 bg-[#F9F9F9]">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
            <h2 className="text-[36px] sm:text-[40px] leading-[1.2] font-semibold text-black mb-12">
              Design Strategy
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">
                  Guided Assessment
                </h3>
                <p className="text-[16px] leading-[1.6] text-black">
                  Design a simple dosha quiz that educates users about Ayurvedic principles while determining their type.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">
                  Personalized Feeds
                </h3>
                <p className="text-[16px] leading-[1.6] text-black">
                  Every recommendation filtered for the user's dosha and season. Make personalization visible and obvious.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">
                  Learning Moments
                </h3>
                <p className="text-[16px] leading-[1.6] text-black">
                  Include explanations about why recommendations matter. Education converts users into believers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. WIREFRAMES SECTION */}
        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
            <h2 className="text-[36px] sm:text-[40px] leading-[1.2] font-semibold text-black mb-12">
              Exploration
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173fb9c6ded?w=600&h=450&fit=crop&sat=-100"
                  alt="Dosha assessment flow"
                  className="w-full aspect-[4/3] object-cover grayscale rounded-[16px] border border-[#EAEAEA]"
                />
                <p className="text-[14px] text-[#666666] mt-4">Dosha Assessment  -  Educational questionnaire</p>
              </div>
              
              <div>
                <img
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=450&fit=crop&sat=-100"
                  alt="Personalized dashboard"
                  className="w-full aspect-[4/3] object-cover grayscale rounded-[16px] border border-[#EAEAEA]"
                />
                <p className="text-[14px] text-[#666666] mt-4">Dashboard  -  Dosha-filtered recommendations</p>
              </div>
              
              <div>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=450&fit=crop&sat=-100"
                  alt="Wellness tips"
                  className="w-full aspect-[4/3] object-cover grayscale rounded-[16px] border border-[#EAEAEA]"
                />
                <p className="text-[14px] text-[#666666] mt-4">Wellness Tips  -  Daily actionable advice</p>
              </div>
              
              <div>
                <img
                  src="https://images.unsplash.com/photo-1512149213365-4c8b12e83b5f?w=600&h=450&fit=crop&sat=-100"
                  alt="Educational content"
                  className="w-full aspect-[4/3] object-cover grayscale rounded-[16px] border border-[#EAEAEA]"
                />
                <p className="text-[14px] text-[#666666] mt-4">Learning  -  Understanding Ayurvedic principles</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. FINAL SOLUTION */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
            <h2 className="text-[36px] sm:text-[40px] leading-[1.2] font-semibold text-black mb-12">
              Final Solution
            </h2>
            
            <div className="mb-16">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173fb9c6ded?w=1200&h=700&fit=crop&sat=-100"
                alt="Complete app interface"
                className="w-full aspect-[16/9] object-cover grayscale rounded-[16px] border border-[#EAEAEA]"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=450&fit=crop&sat=-100"
                  alt="Before generic app"
                  className="w-full aspect-[4/3] object-cover grayscale rounded-[16px] border border-[#EAEAEA] mb-4"
                />
                <div className="text-[18px] font-semibold text-black mb-2">Before</div>
                <p className="text-[14px] leading-[1.6] text-[#666666]">
                  Generic health app with generic recommendations. No dosha awareness. Users couldn't understand personalization.
                </p>
              </div>
              
              <div>
                <img
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=450&fit=crop&sat=-100"
                  alt="After personalized"
                  className="w-full aspect-[4/3] object-cover grayscale rounded-[16px] border border-[#EAEAEA] mb-4"
                />
                <div className="text-[18px] font-semibold text-black mb-2">After</div>
                <p className="text-[14px] leading-[1.6] text-[#666666]">
                  Personalized AI health assistant. Dosha-aware recommendations. Educational context for every suggestion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. IMPACT SECTION */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[36px] sm:text-[40px] leading-[1.2] font-semibold text-black">
                Outcome
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-16">
              <div className="text-center">
                <div className="text-[60px] sm:text-[72px] leading-[1.1] font-bold text-black mb-2">2 Platforms</div>
                <div className="text-[16px] text-black mb-2">iOS & Android Launch</div>
                <div className="text-[14px] text-[#666666]">Simultaneous release</div>
              </div>
              
              <div className="text-center">
                <div className="text-[60px] sm:text-[72px] leading-[1.1] font-bold text-black mb-2">15K+</div>
                <div className="text-[16px] text-black mb-2">Active Users</div>
                <div className="text-[14px] text-[#666666]">Wellness seekers</div>
              </div>
              
              <div className="text-center">
                <div className="text-[60px] sm:text-[72px] leading-[1.1] font-bold text-black mb-2">4.7★</div>
                <div className="text-[16px] text-black mb-2">App Store Rating</div>
                <div className="text-[14px] text-[#666666]">1000+ reviews</div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. REFLECTION SECTION */}
        <section className="py-20 bg-[#F9F9F9]">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
            <div className="max-w-[800px] mx-auto space-y-8">
              <h2 className="text-[36px] sm:text-[40px] leading-[1.2] font-semibold text-black">
                Reflection
              </h2>
              
              <p className="text-[16px] leading-[1.6] text-black">
                This project taught me that domain expertise matters in design. Working closely with Ayurvedic practitioners deepened my understanding of the philosophy, which made better design decisions possible. I wasn't just creating a UI - I was translating ancient wisdom into modern interfaces.
              </p>
              
              <p className="text-[16px] leading-[1.6] text-black">
                Cross-platform design (iOS and Android simultaneously) required thinking about platform conventions while maintaining brand consistency. The challenges were humbling but valuable.
              </p>
              
              <p className="text-[16px] leading-[1.6] text-black">
                The positive response (4.7 stars) validated that people genuinely crave holistic health approaches. The reviews mentioned feeling "understood" and "personalized" - exactly what we aimed for.
              </p>
              
              <div className="pt-8 space-y-6">
                <div>
                  <div className="text-[16px] font-semibold text-black mb-3">What Worked</div>
                  <ul className="space-y-2">
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Dosha-first personalization felt revolutionary to users</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Educational content built trust and retention</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Seasonal recommendations felt surprisingly relevant</p>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="text-[16px] font-semibold text-black mb-3">What I'd Improve</div>
                  <ul className="space-y-2">
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Add more food database and recipe integration</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Build community features for sharing experiences</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Integrate with wearables for better health tracking</p>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="text-[16px] font-semibold text-black mb-3">What I Learned</div>
                  <ul className="space-y-2">
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Deep domain knowledge enables better design</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Cross-platform design requires more than style guides</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Niche communities reward thoughtful, specialized apps</p>
                    </li>
                  </ul>
                </div>
              </div>
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
