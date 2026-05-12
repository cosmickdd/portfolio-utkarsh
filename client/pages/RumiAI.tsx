import Layout from "@/components/Layout";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RumiAI({ onChatOpen }: { onChatOpen?: () => void }) {
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
                  RUMI AI
                </h1>

                <p className="text-[18px] sm:text-[20px] leading-[1.6] text-black font-normal max-w-2xl">
                  A team management dashboard that transforms complex data into actionable intelligence. Designed to help managers see what matters instantly and act with clarity.
                </p>

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-4">
                  <div>
                    <div className="text-[14px] uppercase tracking-[0.08em] text-[#666666] mb-2">Role</div>
                    <div className="text-[16px] text-black">Senior Product Designer</div>
                  </div>
                  <div>
                    <div className="text-[14px] uppercase tracking-[0.08em] text-[#666666] mb-2">Duration</div>
                    <div className="text-[16px] text-black">8 Weeks</div>
                  </div>
                  <div>
                    <div className="text-[14px] uppercase tracking-[0.08em] text-[#666666] mb-2">Team</div>
                    <div className="text-[16px] text-black">4 Engineers, 1 Designer, 1 PM</div>
                  </div>
                  <div>
                    <div className="text-[14px] uppercase tracking-[0.08em] text-[#666666] mb-2">Tools</div>
                    <div className="text-[16px] text-black">Figma, React, Python</div>
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-4 pt-6">
                  <a
                    href="https://rumi-ai.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-black text-white text-sm font-medium hover:bg-[#333333] transition-colors rounded-full"
                  >
                    Live Product
                  </a>
                  <a
                    href="https://www.figma.com"
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
                  src="https://res.cloudinary.com/dq72obe1o/image/upload/f_auto,q_auto/rumi_d5hgao"
                  alt="RUMI AI dashboard mockup"
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
                Managers are drowning in data. Spreadsheets, dashboards, Slack updates, and emails create noise. By the time they synthesize information to make a decision, context is stale and priorities have shifted.
              </p>

              <p className="text-[18px] leading-[1.6] text-black">
                Teams need managers who can see what matters instantly—not after hours of investigation. The real challenge isn't having data; it's surfacing the right insights at the right time.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                  <p className="text-[16px] leading-[1.6] text-black">Information fragmentation across multiple tools and platforms</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                  <p className="text-[16px] leading-[1.6] text-black">No clear visual hierarchy—all metrics feel equally important</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                  <p className="text-[16px] leading-[1.6] text-black">Lack of context on why data matters—buried in complexity</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                  <p className="text-[16px] leading-[1.6] text-black">Decision-making delays while managers hunt for answers</p>
                </div>
              </div>

              <blockquote className="border-l-2 border-black pl-6 italic text-[24px] sm:text-[28px] leading-[1.3] text-black mt-12">
                "Clarity comes from knowing what to focus on. Not from having more data."
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
                  I conducted extensive interviews with 20+ engineering and product managers. The insights were stark: managers spend 40% of their time gathering data, 30% synthesizing it, and only 30% making actual decisions. They craved a single source of truth—not more tools.
                </p>
              </div>

              {/* Right - Insight Cards */}
              <div className="space-y-6">
                <div className="border border-[#EAEAEA] bg-white p-6">
                  <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">
                    Speed Over Perfection
                  </h3>
                  <p className="text-[16px] leading-[1.6] text-black">
                    Managers need answers in seconds, not minutes. They're willing to accept 80% accuracy if it saves them 80% of their time.
                  </p>
                </div>

                <div className="border border-[#EAEAEA] bg-white p-6">
                  <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">
                    AI as a Copilot, Not Replacement
                  </h3>
                  <p className="text-[16px] leading-[1.6] text-black">
                    Managers don't want AI making decisions. They want AI surfacing what matters and explaining why—so they can decide with confidence.
                  </p>
                </div>

                <div className="border border-[#EAEAEA] bg-white p-6">
                  <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">
                    Context is Everything
                  </h3>
                  <p className="text-[16px] leading-[1.6] text-black">
                    Raw numbers are meaningless. Managers need to understand the story—trend, comparison, and relationship to goals.
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
                  Intelligent Hierarchy
                </h3>
                <p className="text-[16px] leading-[1.6] text-black">
                  Not all metrics are equal. Surface risks, opportunities, and active work first. Bury the routine. Use color and scale to guide attention.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">
                  AI-Powered Summaries
                </h3>
                <p className="text-[16px] leading-[1.6] text-black">
                  Reduce noise with smart summaries that highlight risks and priorities in context. AI explains the why, so managers act with confidence.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">
                  Calm, Dark Interface
                </h3>
                <p className="text-[16px] leading-[1.6] text-black">
                  A serene, high-contrast dark theme reduces cognitive load. Subtle motion adds feedback without distraction. Clarity comes from simplicity.
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
                  alt="Dashboard layout exploration"
                  className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-[16px] border border-[#EAEAEA] cursor-pointer"
                />
                <p className="text-[14px] text-[#666666] mt-4">Dashboard  -  Intelligent information architecture</p>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=450&fit=crop&sat=-100"
                  alt="Analytics visualization"
                  className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-[16px] border border-[#EAEAEA] cursor-pointer"
                />
                <p className="text-[14px] text-[#666666] mt-4">Analytics  -  Context-driven data visualization</p>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=450&fit=crop&sat=-100"
                  alt="AI insights panel"
                  className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-[16px] border border-[#EAEAEA] cursor-pointer"
                />
                <p className="text-[14px] text-[#666666] mt-4">AI Insights  -  Prioritized recommendations</p>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1594627318298-50b3e4dc5ffe?w=600&h=450&fit=crop&sat=-100"
                  alt="Team performance metrics"
                  className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-[16px] border border-[#EAEAEA] cursor-pointer"
                />
                <p className="text-[14px] text-[#666666] mt-4">Team Performance  -  Workload and efficiency at a glance</p>
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
                alt="RUMI AI complete interface"
                className="w-full aspect-[16/9] object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-[16px] border border-[#EAEAEA] cursor-pointer"
              />
            </div>

            {/* Before / After Comparison */}
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=450&fit=crop&sat=-100"
                  alt="Before fragmented dashboards"
                  className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-[16px] border border-[#EAEAEA] mb-4 cursor-pointer"
                />
                <div className="text-[18px] font-semibold text-black mb-2">Before</div>
                <p className="text-[14px] leading-[1.6] text-[#666666]">
                  Fragmented dashboards across tools. Information scattered. Equal weight to all metrics. Requires manual synthesis to spot trends or risks.
                </p>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&h=450&fit=crop&sat=-100"
                  alt="After unified dashboard"
                  className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-[16px] border border-[#EAEAEA] mb-4 cursor-pointer"
                />
                <div className="text-[18px] font-semibold text-black mb-2">After</div>
                <p className="text-[14px] leading-[1.6] text-[#666666]">
                  Unified dashboard. Intelligent prioritization. AI summaries surface risks and opportunities. Context-rich metrics. Decisions made in seconds, not hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. KEY FEATURES */}
        <section className="py-20 bg-[#F9F9F9]">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
            <h2 className="text-[36px] sm:text-[40px] leading-[1.2] font-semibold text-black mb-12">
              Core Experience
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-[24px] font-semibold text-black">Dashboard</h3>
                <p className="text-[16px] leading-[1.6] text-black mb-6">
                  The dashboard brings focus to active work, team progress, and smart AI summaries. Everything is scanned quickly, understood instantly. A calm, dark interface with clear hierarchy removes noise while subtle motion adds feedback and flow.
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2"></div>
                    <span className="text-[16px] text-black">Active work flagged at the top with status and blockers</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2"></div>
                    <span className="text-[16px] text-black">Team health snapshot with drill-down capability</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2"></div>
                    <span className="text-[16px] text-black">AI-generated summary highlighting risks and priorities</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-[24px] font-semibold text-black">Analytics</h3>
                <p className="text-[16px] leading-[1.6] text-black mb-6">
                  The analytics experience turns complex data into simple, readable visuals. Task trends, efficiency, and workload become obvious—decisions feel natural, not overwhelming. Everything is designed for the real rhythm of team work.
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2"></div>
                    <span className="text-[16px] text-black">Custom charts built for pattern recognition at a glance</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2"></div>
                    <span className="text-[16px] text-black">Trend comparison: current week vs. average baseline</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2"></div>
                    <span className="text-[16px] text-black">Workload distribution with burndown predictions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 8. AI RECOMMENDATIONS */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
            <h2 className="text-[36px] sm:text-[40px] leading-[1.2] font-semibold text-black mb-12">
              AI-Guided Decisions
            </h2>

            <div className="max-w-[800px] mx-auto space-y-8">
              <p className="text-[18px] leading-[1.6] text-black">
                AI doesn't just report; it guides. The system surfaces meaningful recommendations like resource shifts, project updates, and team interventions. Every insight includes context: why it matters, what changed, and suggested actions.
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-[20px] font-semibold text-black mb-3">Risk Detection</h3>
                  <p className="text-[16px] text-black">Identifies at-risk projects before they miss deadlines. Highlights team burnout signals early.</p>
                </div>

                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-[20px] font-semibold text-black mb-3">Resource Optimization</h3>
                  <p className="text-[16px] text-black">Recommends rebalancing when workload distribution becomes uneven or bottlenecks emerge.</p>
                </div>

                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-[20px] font-semibold text-black mb-3">Priority Surfacing</h3>
                  <p className="text-[16px] text-black">Highlights what needs attention now vs. what can wait. Based on impact, urgency, and dependencies.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. IMPACT SECTION */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[36px] sm:text-[40px] leading-[1.2] font-semibold text-black">
                Outcome
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-16">
              <div className="text-center">
                <div className="text-[60px] sm:text-[72px] leading-[1.1] font-bold text-black mb-2">50%</div>
                <div className="text-[16px] text-black mb-2">Faster Decisions</div>
                <div className="text-[14px] text-[#666666]">From data gathering to action</div>
              </div>

              <div className="text-center">
                <div className="text-[60px] sm:text-[72px] leading-[1.1] font-bold text-black mb-2">40%</div>
                <div className="text-[16px] text-black mb-2">Reduced Context Switching</div>
                <div className="text-[14px] text-[#666666]">Single dashboard replaces 5+ tools</div>
              </div>

              <div className="text-center">
                <div className="text-[60px] sm:text-[72px] leading-[1.1] font-bold text-black mb-2">85%</div>
                <div className="text-[16px] text-black mb-2">Manager Satisfaction</div>
                <div className="text-[14px] text-[#666666]">Felt empowered to lead effectively</div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. REFLECTION SECTION */}
        <section className="py-20 bg-[#F9F9F9]">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
            <div className="max-w-[800px] mx-auto space-y-8">
              <h2 className="text-[36px] sm:text-[40px] leading-[1.2] font-semibold text-black">
                Reflection
              </h2>

              <p className="text-[16px] leading-[1.6] text-black">
                This project taught me that complexity isn't solved by adding more features—it's solved by better prioritization. Managers don't need more data; they need clarity on what matters. The calm, dark interface with intelligent hierarchy became the solution's backbone.
              </p>

              <p className="text-[16px] leading-[1.6] text-black">
                Working with AI recommendations required close collaboration with the ML team. The design challenge wasn't showing predictions—it was explaining them in a way that built trust and confidence. Every AI insight needed context, not just an answer.
              </p>

              <p className="text-[16px] leading-[1.6] text-black">
                The real win was reducing cognitive load. Managers reported feeling less overwhelmed and more decisive. That's when I knew the design succeeded: not from visual polish, but from genuine usefulness.
              </p>

              <div className="pt-8 space-y-6">
                <div>
                  <div className="text-[16px] font-semibold text-black mb-3">What Worked</div>
                  <ul className="space-y-2">
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Dark theme with high contrast reduced cognitive overload</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">AI summaries that explain why—not just what—drove adoption</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Intelligent hierarchy ensured critical information was always visible</p>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="text-[16px] font-semibold text-black mb-3">What I'd Improve</div>
                  <ul className="space-y-2">
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Add customizable alert thresholds for team-specific priorities</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Build mobile companion app for decisions on-the-go</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Develop predictive models for capacity planning further out</p>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="text-[16px] font-semibold text-black mb-3">What I Learned</div>
                  <ul className="space-y-2">
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">AI trust is built through explainability, not confidence</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Design for cognitive load, not just information density</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Context beats perfection in real-world decision-making</p>
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
