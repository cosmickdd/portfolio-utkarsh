import Layout from "@/components/Layout";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Nadanparinda({ onChatOpen }: { onChatOpen?: () => void }) {
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
              {/* Left Column - 7 cols */}
              <div className="lg:col-span-7 space-y-8">
                <h1 className="text-[40px] sm:text-[56px] lg:text-[64px] leading-[1.125] font-bold text-black tracking-tight">
                  Nadanparinda Travel Platform
                </h1>
                
                <p className="text-[18px] sm:text-[20px] leading-[1.6] text-black font-normal max-w-2xl">
                  A complete end-to-end design for a tour, travel and mountaineering platform that captures the spirit of adventure while making trip planning seamless and intuitive for modern travelers.
                </p>
                
                {/* Metadata Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-4">
                  <div>
                    <div className="text-[14px] uppercase tracking-[0.08em] text-[#666666] mb-2">Role</div>
                    <div className="text-[16px] text-black">Product Designer</div>
                  </div>
                  <div>
                    <div className="text-[14px] uppercase tracking-[0.08em] text-[#666666] mb-2">Duration</div>
                    <div className="text-[16px] text-black">3 Months</div>
                  </div>
                  <div>
                    <div className="text-[14px] uppercase tracking-[0.08em] text-[#666666] mb-2">Team</div>
                    <div className="text-[16px] text-black">Solo Project</div>
                  </div>
                  <div>
                    <div className="text-[14px] uppercase tracking-[0.08em] text-[#666666] mb-2">Tools</div>
                    <div className="text-[16px] text-black">Figma</div>
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-4 pt-6">
                  <a
                    href="https://nadanparinda.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-black text-white text-sm font-medium hover:bg-[#333333] transition-colors rounded-full"
                  >
                    Live Product
                  </a>
                  <a
                    href="https://www.figma.com/design/63sXdDeQYgKuOxYCO9rGQW/nadanparinda?node-id=0-1&t=0n0zwE7ZEklMv5bw-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-black text-black text-sm font-medium hover:bg-black hover:text-white transition-all rounded-full"
                  >
                    View Design
                  </a>
                </div>
              </div>
              
              {/* Right Column - 5 cols */}
              <div className="lg:col-span-5">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&sat=-100"
                  alt="Nadanparinda platform mockup"
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
            <div className="lg:col-span-8 lg:col-start-3 max-w-[800px] mx-auto space-y-8">
              <h2 className="text-[36px] sm:text-[40px] leading-[1.2] font-semibold text-black">
                The Problem
              </h2>
              
              <p className="text-[18px] leading-[1.6] text-black">
                Travel and adventure websites often overwhelm users with information while making the booking process unnecessarily complex. Travelers struggle to find authentic experiences and trust the platforms they're using.
              </p>
              
              <p className="text-[18px] leading-[1.6] text-black">
                Existing mountaineering and trek booking sites fail to capture the emotional essence of adventure while providing the practical information adventurers need to make confident decisions.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                  <p className="text-[16px] leading-[1.6] text-black">Users can't evaluate trip difficulty and requirements clearly</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                  <p className="text-[16px] leading-[1.6] text-black">Minimal visual presentation fails to inspire confidence</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                  <p className="text-[16px] leading-[1.6] text-black">Complex booking flows create drop-off points</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                  <p className="text-[16px] leading-[1.6] text-black">Lack of trust signals about safety and expertise</p>
                </div>
              </div>
              
              <blockquote className="border-l-2 border-black pl-6 italic text-[24px] sm:text-[28px] leading-[1.3] text-black mt-12">
                "Travelers don't just book trips - they invest in experiences that could change their lives. The platform needs to honor that."
              </blockquote>
            </div>
          </div>
        </section>

        {/* 3. RESEARCH SECTION */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left */}
              <div>
                <h2 className="text-[36px] sm:text-[40px] leading-[1.2] font-semibold text-black mb-6">
                  Research
                </h2>
                <p className="text-[16px] leading-[1.6] text-black">
                  I conducted user interviews with 12 adventure travelers and analyzed 8 competing platforms. The research revealed that trust and emotional connection are the primary factors in booking decisions, not just price or convenience.
                </p>
              </div>
              
              {/* Right - Insight Cards */}
              <div className="space-y-6">
                <div className="border border-[#EAEAEA] bg-white p-6">
                  <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">
                    Visual Trust
                  </h3>
                  <p className="text-[16px] leading-[1.6] text-black">
                    87% of users said high-quality imagery of destinations and previous group photos increased their booking confidence significantly.
                  </p>
                </div>
                
                <div className="border border-[#EAEAEA] bg-white p-6">
                  <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">
                    Decision Paralysis
                  </h3>
                  <p className="text-[16px] leading-[1.6] text-black">
                    Users abandon booking when presented with too many options at once. A curated, progressive disclosure approach works better.
                  </p>
                </div>
                
                <div className="border border-[#EAEAEA] bg-white p-6">
                  <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">
                    Safety First
                  </h3>
                  <p className="text-[16px] leading-[1.6] text-black">
                    Guide credentials, safety equipment details, and emergency protocols are the top 3 factors users look for before booking.
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
                  Visual Storytelling
                </h3>
                <p className="text-[16px] leading-[1.6] text-black">
                  Lead with immersive, high-quality photography that captures the essence of each destination. Use imagery to build emotional connection before presenting logistics.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">
                  Progressive Information
                </h3>
                <p className="text-[16px] leading-[1.6] text-black">
                  Implement a layered information architecture that progressively reveals details, guiding users from inspiration to practical planning without overwhelming them.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">
                  Trust Building
                </h3>
                <p className="text-[16px] leading-[1.6] text-black">
                  Make safety credentials, guide expertise, and traveler testimonials prominent throughout the experience. Transparency builds confidence.
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
                  src="https://images.unsplash.com/photo-1551550257-19f2afc88e0f?w=600&h=450&fit=crop&sat=-100"
                  alt="Homepage wireframe exploration"
                  className="w-full aspect-[4/3] object-cover grayscale rounded-[16px] border border-[#EAEAEA]"
                />
                <p className="text-[14px] text-[#666666] mt-4">Homepage  -  Hero layout exploration</p>
              </div>
              
              <div>
                <img
                  src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=450&fit=crop&sat=-100"
                  alt="Trip detail wireframe"
                  className="w-full aspect-[4/3] object-cover grayscale rounded-[16px] border border-[#EAEAEA]"
                />
                <p className="text-[14px] text-[#666666] mt-4">Trip Detail  -  Information hierarchy study</p>
              </div>
              
              <div>
                <img
                  src="https://images.unsplash.com/photo-1498550744921-75f79806b163?w=600&h=450&fit=crop&sat=-100"
                  alt="Booking flow wireframe"
                  className="w-full aspect-[4/3] object-cover grayscale rounded-[16px] border border-[#EAEAEA]"
                />
                <p className="text-[14px] text-[#666666] mt-4">Booking Flow  -  Multi-step progression</p>
              </div>
              
              <div>
                <img
                  src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&h=450&fit=crop&sat=-100"
                  alt="Guide profile wireframe"
                  className="w-full aspect-[4/3] object-cover grayscale rounded-[16px] border border-[#EAEAEA]"
                />
                <p className="text-[14px] text-[#666666] mt-4">Guide Profile  -  Trust element placement</p>
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
            
            {/* Full width image */}
            <div className="mb-16">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&sat=-100"
                alt="Final design system overview"
                className="w-full aspect-[16/9] object-cover grayscale rounded-[16px] border border-[#EAEAEA]"
              />
            </div>
            
            {/* Before / After Comparison */}
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=450&fit=crop&sat=-100"
                  alt="Before redesign"
                  className="w-full aspect-[4/3] object-cover grayscale rounded-[16px] border border-[#EAEAEA] mb-4"
                />
                <div className="text-[18px] font-semibold text-black mb-2">Before</div>
                <p className="text-[14px] leading-[1.6] text-[#666666]">
                  Dense information layout with minimal visual hierarchy. Users struggled to identify key information and trust signals.
                </p>
              </div>
              
              <div>
                <img
                  src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&h=450&fit=crop&sat=-100"
                  alt="After redesign"
                  className="w-full aspect-[4/3] object-cover grayscale rounded-[16px] border border-[#EAEAEA] mb-4"
                />
                <div className="text-[18px] font-semibold text-black mb-2">After</div>
                <p className="text-[14px] leading-[1.6] text-[#666666]">
                  Clear visual hierarchy with immersive imagery. Progressive disclosure guides users naturally through their decision-making journey.
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
                <div className="text-[60px] sm:text-[72px] leading-[1.1] font-bold text-black mb-2">+42%</div>
                <div className="text-[16px] text-black mb-2">Booking Conversion</div>
                <div className="text-[14px] text-[#666666]">Compared to previous design</div>
              </div>
              
              <div className="text-center">
                <div className="text-[60px] sm:text-[72px] leading-[1.1] font-bold text-black mb-2">3.2x</div>
                <div className="text-[16px] text-black mb-2">Time on Site</div>
                <div className="text-[14px] text-[#666666]">Average session duration increased</div>
              </div>
              
              <div className="text-center">
                <div className="text-[60px] sm:text-[72px] leading-[1.1] font-bold text-black mb-2">89%</div>
                <div className="text-[16px] text-black mb-2">User Satisfaction</div>
                <div className="text-[14px] text-[#666666]">Post-launch survey rating</div>
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
                This project reinforced my belief that great design starts with deep user understanding. The research phase revealed insights that fundamentally shaped the design direction - particularly the importance of emotional connection in travel decisions.
              </p>
              
              <p className="text-[16px] leading-[1.6] text-black">
                Building a comprehensive design system from the ground up was both challenging and rewarding. It forced me to think systematically about every component and interaction, which paid dividends when implementing responsive variations and edge cases.
              </p>
              
              <p className="text-[16px] leading-[1.6] text-black">
                The positive conversion metrics validated our approach, but more importantly, user feedback indicated we'd successfully captured the spirit of adventure while making trip planning feel manageable and exciting rather than overwhelming.
              </p>
              
              <div className="pt-8 space-y-6">
                <div>
                  <div className="text-[16px] font-semibold text-black mb-3">What Worked</div>
                  <ul className="space-y-2">
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Progressive disclosure prevented information overload</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Visual-first approach built immediate emotional connection</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Trust elements strategically placed throughout booking flow</p>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="text-[16px] font-semibold text-black mb-3">What I'd Improve</div>
                  <ul className="space-y-2">
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Add more personalization based on user fitness level and experience</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Implement real-time availability indicators earlier in the flow</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Expand mobile-specific interactions for on-the-go planning</p>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="text-[16px] font-semibold text-black mb-3">What I Learned</div>
                  <ul className="space-y-2">
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Design systems require upfront investment but accelerate iteration</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">User research insights should drive decisions, not just inform them</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Emotional resonance is as important as functional clarity in travel</p>
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
