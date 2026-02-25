import Layout from "@/components/Layout";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AIInterviewAgents({ onChatOpen }: { onChatOpen?: () => void }) {
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
                  AI Interview Agents
                </h1>
                
                <p className="text-[18px] sm:text-[20px] leading-[1.6] text-black font-normal max-w-2xl">
                  An interview prep platform that uses AI to simulate realistic interview scenarios. Designed for rapid growth and launched to 5,000+ users in just 15 days.
                </p>
                
                {/* Metadata Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-4">
                  <div>
                    <div className="text-[14px] uppercase tracking-[0.08em] text-[#666666] mb-2">Role</div>
                    <div className="text-[16px] text-black">Founding Designer</div>
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
              </div>
              
              {/* Right Column - 5 cols */}
              <div className="lg:col-span-5">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&sat=-100"
                  alt="AI Interview Agents platform mockup"
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
                Job seekers struggle with interview preparation. Traditional resources are static and don't provide real-time feedback. Mock interviews with peers are inconsistent, and hiring coaches are expensive.
              </p>
              
              <p className="text-[18px] leading-[1.6] text-black">
                Candidates need realistic practice with immediate feedback, personalized guidance, and confidence-building exercises—all accessible and affordable.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                  <p className="text-[16px] leading-[1.6] text-black">Generic prep courses don't address individual weaknesses</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                  <p className="text-[16px] leading-[1.6] text-black">No immediate feedback on performance or areas to improve</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                  <p className="text-[16px] leading-[1.6] text-black">High anxiety from uncertainty about interview format and expectations</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                  <p className="text-[16px] leading-[1.6] text-black">Difficulty finding realistic, on-demand practice opportunities</p>
                </div>
              </div>
              
              <blockquote className="border-l-2 border-black pl-6 italic text-[24px] sm:text-[28px] leading-[1.3] text-black mt-12">
                "Interview anxiety stems from uncertainty. Confidence comes from repeated, realistic practice with immediate feedback."
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
                  I interviewed 25+ job seekers and analyzed competitor platforms. Key insight: users valued personalization and feedback most. The best candidates wanted to understand not just what they did wrong, but why and how to improve.
                </p>
              </div>
              
              {/* Right - Insight Cards */}
              <div className="space-y-6">
                <div className="border border-[#EAEAEA] bg-white p-6">
                  <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">
                    Feedback Loop
                  </h3>
                  <p className="text-[16px] leading-[1.6] text-black">
                    92% of users said immediate, detailed feedback was essential. They wanted to know specific strengths and concrete areas for improvement.
                  </p>
                </div>
                
                <div className="border border-[#EAEAEA] bg-white p-6">
                  <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">
                    Realistic Scenarios
                  </h3>
                  <p className="text-[16px] leading-[1.6] text-black">
                    Users wanted AI that asked challenging, contextual questions matching their target role and company culture.
                  </p>
                </div>
                
                <div className="border border-[#EAEAEA] bg-white p-6">
                  <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">
                    Progress Tracking
                  </h3>
                  <p className="text-[16px] leading-[1.6] text-black">
                    Seeing improvement over time was crucial for motivation. Visual progress and achievement markers drove continued engagement.
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
                  Rapid Onboarding
                </h3>
                <p className="text-[16px] leading-[1.6] text-black">
                  Design for first-time users to start interviewing within 2 minutes. Minimal setup, maximum clarity so users understand the format immediately.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">
                  Clear Feedback Display
                </h3>
                <p className="text-[16px] leading-[1.6] text-black">
                  Make AI feedback scannable and actionable. Users need to quickly understand what they did well and what to work on next.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">
                  Engagement Loops
                </h3>
                <p className="text-[16px] leading-[1.6] text-black">
                  Visualize progress, celebrate wins, and create motivation to keep practicing. Growth tracking drives retention.
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
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=450&fit=crop&sat=-100"
                  alt="Onboarding flow exploration"
                  className="w-full aspect-[4/3] object-cover grayscale rounded-[16px] border border-[#EAEAEA]"
                />
                <p className="text-[14px] text-[#666666] mt-4">Onboarding — Fast entry to first interview</p>
              </div>
              
              <div>
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=450&fit=crop&sat=-100"
                  alt="Interview interface design"
                  className="w-full aspect-[4/3] object-cover grayscale rounded-[16px] border border-[#EAEAEA]"
                />
                <p className="text-[14px] text-[#666666] mt-4">Interview Screen — Question presentation & recording</p>
              </div>
              
              <div>
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=450&fit=crop&sat=-100"
                  alt="Feedback interface"
                  className="w-full aspect-[4/3] object-cover grayscale rounded-[16px] border border-[#EAEAEA]"
                />
                <p className="text-[14px] text-[#666666] mt-4">Feedback Flow — AI analysis & guidance</p>
              </div>
              
              <div>
                <img
                  src="https://images.unsplash.com/photo-1594627318298-50b3e4dc5ffe?w=600&h=450&fit=crop&sat=-100"
                  alt="Progress dashboard"
                  className="w-full aspect-[4/3] object-cover grayscale rounded-[16px] border border-[#EAEAEA]"
                />
                <p className="text-[14px] text-[#666666] mt-4">Dashboard — Progress tracking & insights</p>
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
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=700&fit=crop&sat=-100"
                alt="Final product overview"
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
                  Complex setup process. Generic feedback. Limited progress visualization. Users had to search for next steps.
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
                  2-minute setup. Personalized AI feedback. Clear progress dashboards. Guided next steps and recommended practice areas.
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
                <div className="text-[60px] sm:text-[72px] leading-[1.1] font-bold text-black mb-2">5,000+</div>
                <div className="text-[16px] text-black mb-2">Signups in 15 Days</div>
                <div className="text-[14px] text-[#666666]">Viral growth from launch</div>
              </div>
              
              <div className="text-center">
                <div className="text-[60px] sm:text-[72px] leading-[1.1] font-bold text-black mb-2">90%+</div>
                <div className="text-[16px] text-black mb-2">User Satisfaction</div>
                <div className="text-[14px] text-[#666666]">Post-session rating average</div>
              </div>
              
              <div className="text-center">
                <div className="text-[60px] sm:text-[72px] leading-[1.1] font-bold text-black mb-2">4.2x</div>
                <div className="text-[16px] text-black mb-2">Session Duration</div>
                <div className="text-[14px] text-[#666666]">Avg weekly engagement</div>
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
                This was my first experience as a founding designer at a hyper-growth startup. The viral adoption surprised us—the product resonated deeply because it solved a real pain point with meaningful, personalized AI feedback.
              </p>
              
              <p className="text-[16px] leading-[1.6] text-black">
                The aggressive timeline (4 weeks to launch) forced clear prioritization. We focused ruthlessly on the core loop: record interview → get AI feedback → see progress. Everything else was secondary.
              </p>
              
              <p className="text-[16px] leading-[1.6] text-black">
                The 5,000+ signups in 15 days taught me that product-market fit trumps pixel-perfect design. Users didn't care about visual polish—they cared that the AI understood their weaknesses and guided improvement.
              </p>
              
              <div className="pt-8 space-y-6">
                <div>
                  <div className="text-[16px] font-semibold text-black mb-3">What Worked</div>
                  <ul className="space-y-2">
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Fast onboarding eliminated friction from day one</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Personalized feedback created strong emotional connection</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Progress visualization drove repeat usage and sharing</p>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="text-[16px] font-semibold text-black mb-3">What I'd Improve</div>
                  <ul className="space-y-2">
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Add more social features for peer comparison and motivation</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Implement role-specific interview variations earlier</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Create premium tier with video review from coaches</p>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="text-[16px] font-semibold text-black mb-3">What I Learned</div>
                  <ul className="space-y-2">
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Speed matters more than perfection in competitive markets</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">AI feedback value depends on perceived personalization</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Word-of-mouth requires genuine utility, not marketing</p>
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
