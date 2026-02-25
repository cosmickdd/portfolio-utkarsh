import Layout from "@/components/Layout";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Rapidophilia({ onChatOpen }: { onChatOpen?: () => void }) {
  const navigate = useNavigate();

  return (
    <Layout onChatOpen={onChatOpen}>
      <main className="bg-white">
        <div className="border-b border-[#EAEAEA]">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 py-6">
            <button onClick={() => navigate('/projects')} className="inline-flex items-center gap-2 text-black hover:text-[#666666] transition-colors">
              <ArrowLeft size={18} />
              <span className="text-sm font-medium">Back to Projects</span>
            </button>
          </div>
        </div>

        <section className="py-20 sm:py-32">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7 space-y-8">
                <h1 className="text-[40px] sm:text-[56px] lg:text-[64px] leading-[1.125] font-bold text-black tracking-tight">
                  Rapidophilia
                </h1>
                <p className="text-[18px] sm:text-[20px] leading-[1.6] text-black font-normal max-w-2xl">
                  A travel discovery platform powered by AI recommendations. Built with React, Node.js, and machine learning to increase bookings by 45% through intelligent matching.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-4">
                  <div>
                    <div className="text-[14px] uppercase tracking-[0.08em] text-[#666666] mb-2">Role</div>
                    <div className="text-[16px] text-black">Full Stack Developer</div>
                  </div>
                  <div>
                    <div className="text-[14px] uppercase tracking-[0.08em] text-[#666666] mb-2">Duration</div>
                    <div className="text-[16px] text-black">4 Months</div>
                  </div>
                  <div>
                    <div className="text-[14px] uppercase tracking-[0.08em] text-[#666666] mb-2">Tech Stack</div>
                    <div className="text-[16px] text-black">React, Node.js, ML</div>
                  </div>
                  <div>
                    <div className="text-[14px] uppercase tracking-[0.08em] text-[#666666] mb-2">Impact</div>
                    <div className="text-[16px] text-black">+45% bookings</div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop&sat=-100" alt="Travel platform mockup" className="w-full aspect-[4/3] object-cover grayscale rounded-[16px] border border-[#EAEAEA]" />
              </div>
            </div>
            <div className="mt-12 border-b border-[#EAEAEA]"></div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
            <div className="max-w-[800px] mx-auto space-y-8">
              <h2 className="text-[36px] sm:text-[40px] leading-[1.2] font-semibold text-black">The Problem</h2>
              <p className="text-[18px] leading-[1.6] text-black">
                Travel booking platforms overwhelm users with thousands of options. Travelers spend hours comparing destinations without finding what truly matches their style and preferences. Decision paralysis kills conversions.
              </p>
              <p className="text-[18px] leading-[1.6] text-black">
                Existing platforms use generic sorting—price, rating, date. They miss the opportunity to understand what kind of experience each traveler actually wants.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                  <p className="text-[16px] leading-[1.6] text-black">Too many options paralyze decision-making</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                  <p className="text-[16px] leading-[1.6] text-black">Generic recommendations don't match individual style</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                  <p className="text-[16px] leading-[1.6] text-black">No way to discover hidden gems beyond top ratings</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                  <p className="text-[16px] leading-[1.6] text-black">Checkout abandonment due to post-search paralysis</p>
                </div>
              </div>
              <blockquote className="border-l-2 border-black pl-6 italic text-[24px] sm:text-[28px] leading-[1.3] text-black mt-12">
                "Travelers don't want more options. They want the right option."
              </blockquote>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h2 className="text-[36px] sm:text-[40px] leading-[1.2] font-semibold text-black mb-6">Research</h2>
                <p className="text-[16px] leading-[1.6] text-black">
                  Interviewed 30+ travelers and analyzed booking patterns. Key finding: personalization at discovery stage (not just checkout) drives conversions. Early filtering reduces browsing time by 60%.
                </p>
              </div>
              <div className="space-y-6">
                <div className="border border-[#EAEAEA] bg-white p-6">
                  <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">Preference Learning</h3>
                  <p className="text-[16px] leading-[1.6] text-black">
                    Users wanted AI to understand their travel style quickly, not through endless forms.
                  </p>
                </div>
                <div className="border border-[#EAEAEA] bg-white p-6">
                  <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">Curated Discovery</h3>
                  <p className="text-[16px] leading-[1.6] text-black">
                    They valued curation over exhaustive inventory. Quality recommendations beat quantity.
                  </p>
                </div>
                <div className="border border-[#EAEAEA] bg-white p-6">
                  <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">Quick Decisions</h3>
                  <p className="text-[16px] leading-[1.6] text-black">
                    Travelers wanted to decide faster. Less browsing, more booking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#F9F9F9]">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
            <h2 className="text-[36px] sm:text-[40px] leading-[1.2] font-semibold text-black mb-12">Design Strategy</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">Style-Based Discovery</h3>
                <p className="text-[16px] leading-[1.6] text-black">
                  Use travel personality assessment to filter recommendations at the top of the funnel.
                </p>
              </div>
              <div>
                <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">Smart Ranking</h3>
                <p className="text-[16px] leading-[1.6] text-black">
                  ML-powered ranking that learns from every selection and click to improve future recommendations.
                </p>
              </div>
              <div>
                <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">Frictionless Checkout</h3>
                <p className="text-[16px] leading-[1.6] text-black">
                  One-click booking with pre-filled preferences. Reduce friction at the final decision point.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
            <h2 className="text-[36px] sm:text-[40px] leading-[1.2] font-semibold text-black mb-12">Exploration</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=450&fit=crop&sat=-100" alt="Discovery flow" className="w-full aspect-[4/3] object-cover grayscale rounded-[16px] border border-[#EAEAEA]" />
                <p className="text-[14px] text-[#666666] mt-4">Discovery — Style-based filtering</p>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=450&fit=crop&sat=-100" alt="Recommendation engine" className="w-full aspect-[4/3] object-cover grayscale rounded-[16px] border border-[#EAEAEA]" />
                <p className="text-[14px] text-[#666666] mt-4">Recommendations — ML-powered ranking</p>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=450&fit=crop&sat=-100" alt="Detail page" className="w-full aspect-[4/3] object-cover grayscale rounded-[16px] border border-[#EAEAEA]" />
                <p className="text-[14px] text-[#666666] mt-4">Details — Rich content & reviews</p>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1594627318298-50b3e4dc5ffe?w=600&h=450&fit=crop&sat=-100" alt="Checkout" className="w-full aspect-[4/3] object-cover grayscale rounded-[16px] border border-[#EAEAEA]" />
                <p className="text-[14px] text-[#666666] mt-4">Checkout — One-click booking</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
            <h2 className="text-[36px] sm:text-[40px] leading-[1.2] font-semibold text-black mb-12">Final Solution</h2>
            <div className="mb-16">
              <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=700&fit=crop&sat=-100" alt="Complete platform" className="w-full aspect-[16/9] object-cover grayscale rounded-[16px] border border-[#EAEAEA]" />
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <div>
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=450&fit=crop&sat=-100" alt="Before" className="w-full aspect-[4/3] object-cover grayscale rounded-[16px] border border-[#EAEAEA] mb-4" />
                <div className="text-[18px] font-semibold text-black mb-2">Before</div>
                <p className="text-[14px] leading-[1.6] text-[#666666]">
                  Overwhelming search results. Generic sorting. Hours spent comparing. High abandonment.
                </p>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&h=450&fit=crop&sat=-100" alt="After" className="w-full aspect-[4/3] object-cover grayscale rounded-[16px] border border-[#EAEAEA] mb-4" />
                <div className="text-[18px] font-semibold text-black mb-2">After</div>
                <p className="text-[14px] leading-[1.6] text-[#666666]">
                  Personalized recommendations. 10x faster discovery. Curated options. One-click booking.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[36px] sm:text-[40px] leading-[1.2] font-semibold text-black">Outcome</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-16">
              <div className="text-center">
                <div className="text-[60px] sm:text-[72px] leading-[1.1] font-bold text-black mb-2">+45%</div>
                <div className="text-[16px] text-black mb-2">Booking Conversion</div>
                <div className="text-[14px] text-[#666666]">Vs. previous version</div>
              </div>
              <div className="text-center">
                <div className="text-[60px] sm:text-[72px] leading-[1.1] font-bold text-black mb-2">2+ hrs</div>
                <div className="text-[16px] text-black mb-2">Time Saved Per Trip</div>
                <div className="text-[14px] text-[#666666]">Research to booking</div>
              </div>
              <div className="text-center">
                <div className="text-[60px] sm:text-[72px] leading-[1.1] font-bold text-black mb-2">60%</div>
                <div className="text-[16px] text-black mb-2">Lower Abandon Rate</div>
                <div className="text-[14px] text-[#666666]">Before checkout</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#F9F9F9]">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
            <div className="max-w-[800px] mx-auto space-y-8">
              <h2 className="text-[36px] sm:text-[40px] leading-[1.2] font-semibold text-black">Reflection</h2>
              <p className="text-[16px] leading-[1.6] text-black">
                Building ML into travel recommendations was challenging but rewarding. The biggest lesson: good ML in production requires good data and feedback loops, not just clever algorithms.
              </p>
              <p className="text-[16px] leading-[1.6] text-black">
                The 45% conversion increase came from solving real discovery friction, not gimmicks. Every user interaction fed the recommendation engine, making it smarter over time.
              </p>
              <p className="text-[16px] leading-[1.6] text-black">
                This project taught me that technology matters least when solving real problems. The tech enabled a better UX, but UX alone drove adoption.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-20 border-t border-[#EAEAEA]">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 text-center">
            <div className="inline-flex gap-4">
              <button onClick={() => navigate('/')} className="px-8 py-3 bg-black text-white text-[14px] font-medium hover:bg-[#333333] transition-colors">
                View All Projects
              </button>
              <button onClick={() => navigate('/contact')} className="px-8 py-3 border border-black text-black text-[14px] font-medium hover:bg-black hover:text-white transition-all">
                Get in Touch
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
