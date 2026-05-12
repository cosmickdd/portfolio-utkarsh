import Layout from "@/components/Layout";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AIOperationsCommandCenter({ onChatOpen }: { onChatOpen?: () => void }) {
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
                  AI Operations Command Center
                </h1>
                <p className="text-[18px] sm:text-[20px] leading-[1.6] text-black font-normal max-w-2xl">
                  Built a unified operations platform that connects Gmail, Slack, Notion, and Google Drive. Smart automation that saves 10+ hours per week for knowledge workers.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-4">
                  <div>
                    <div className="text-[14px] uppercase tracking-[0.08em] text-[#666666] mb-2">Role</div>
                    <div className="text-[16px] text-black">Full Stack Developer</div>
                  </div>
                  <div>
                    <div className="text-[14px] uppercase tracking-[0.08em] text-[#666666] mb-2">Duration</div>
                    <div className="text-[16px] text-black">3 Months</div>
                  </div>
                  <div>
                    <div className="text-[14px] uppercase tracking-[0.08em] text-[#666666] mb-2">Tech Stack</div>
                    <div className="text-[16px] text-black">Python, Composio</div>
                  </div>
                  <div>
                    <div className="text-[14px] uppercase tracking-[0.08em] text-[#666666] mb-2">Impact</div>
                    <div className="text-[16px] text-black">10+ hrs/week saved</div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&sat=-100" alt="Command center mockup" className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-[16px] border border-[#EAEAEA] cursor-pointer" />
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
                Knowledge workers juggle 5+ tools daily. Switching contexts between Gmail, Slack, Notion, and Drive kills productivity. Repetitive tasks that could be automated are handled manually, consuming valuable time.
              </p>
              <p className="text-[18px] leading-[1.6] text-black">
                There's no unified interface or smart automation that connects these tools meaningfully. Data silos prevent insights, and lack of automation leads to error-prone manual work.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                  <p className="text-[16px] leading-[1.6] text-black">Context-switching overhead kills deep work</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                  <p className="text-[16px] leading-[1.6] text-black">No unified search across content tools</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                  <p className="text-[16px] leading-[1.6] text-black">Repetitive workflows aren't automated</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                  <p className="text-[16px] leading-[1.6] text-black">No intelligent task prioritization</p>
                </div>
              </div>
              <blockquote className="border-l-2 border-black pl-6 italic text-[24px] sm:text-[28px] leading-[1.3] text-black mt-12">
                "Automation shouldn't feel like integration hell. It should be intuitive and save real time."
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
                  Interviewed 20+ power users of productivity tools. They unanimously wanted: unified search, smart prioritization, and automation without setup friction.
                </p>
              </div>
              <div className="space-y-6">
                <div className="border border-[#EAEAEA] bg-white p-6">
                  <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">Unified Interface</h3>
                  <p className="text-[16px] leading-[1.6] text-black">
                    Users wanted one place to see and manage across tools instead of constant switching.
                  </p>
                </div>
                <div className="border border-[#EAEAEA] bg-white p-6">
                  <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">Smart Automation</h3>
                  <p className="text-[16px] leading-[1.6] text-black">
                    Workflows without code. Simple rules that save hours on repetitive tasks.
                  </p>
                </div>
                <div className="border border-[#EAEAEA] bg-white p-6">
                  <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">Composio Integration</h3>
                  <p className="text-[16px] leading-[1.6] text-black">
                    Used Composio for seamless tool connections. Made multi-tool workflows possible without custom integrations.
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
                <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">Command Center UX</h3>
                <p className="text-[16px] leading-[1.6] text-black">
                  Inspired by command centers - put the most important information and actions front and center.
                </p>
              </div>
              <div>
                <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">Zero Setup</h3>
                <p className="text-[16px] leading-[1.6] text-black">
                  Use OAuth and tool APIs to connect. No API key fumbling, no complex setup flows.
                </p>
              </div>
              <div>
                <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">Visual Workflows</h3>
                <p className="text-[16px] leading-[1.6] text-black">
                  Drag-and-drop automation. Visual feedback makes complex workflows feel intuitive.
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
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=450&fit=crop&sat=-100" alt="Dashboard" className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-[16px] border border-[#EAEAEA] cursor-pointer" />
                <p className="text-[14px] text-[#666666] mt-4">Dashboard - Unified command center</p>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=450&fit=crop&sat=-100" alt="Workflow builder" className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-[16px] border border-[#EAEAEA] cursor-pointer" />
                <p className="text-[14px] text-[#666666] mt-4">Workflow Builder - Visual automation</p>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=450&fit=crop&sat=-100" alt="Tool connections" className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-[16px] border border-[#EAEAEA] cursor-pointer" />
                <p className="text-[14px] text-[#666666] mt-4">Integrations - Connected tools</p>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1594627318298-50b3e4dc5ffe?w=600&h=450&fit=crop&sat=-100" alt="Activity feed" className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-[16px] border border-[#EAEAEA] cursor-pointer" />
                <p className="text-[14px] text-[#666666] mt-4">Activity Feed - Automation logs</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
            <h2 className="text-[36px] sm:text-[40px] leading-[1.2] font-semibold text-black mb-12">Final Solution</h2>
            <div className="mb-16">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=700&fit=crop&sat=-100" alt="Complete system" className="w-full aspect-[16/9] object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-[16px] border border-[#EAEAEA] cursor-pointer" />
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <div>
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=450&fit=crop&sat=-100" alt="Before" className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-[16px] border border-[#EAEAEA] mb-4 cursor-pointer" />
                <div className="text-[18px] font-semibold text-black mb-2">Before</div>
                <p className="text-[14px] leading-[1.6] text-[#666666]">
                  5 browser tabs. Manual context switching. Repetitive data entry. No unified view.
                </p>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&h=450&fit=crop&sat=-100" alt="After" className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-[16px] border border-[#EAEAEA] mb-4 cursor-pointer" />
                <div className="text-[18px] font-semibold text-black mb-2">After</div>
                <p className="text-[14px] leading-[1.6] text-[#666666]">
                  One dashboard. All tools integrated. Automated workflows. Clear command center.
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
                <div className="text-[60px] sm:text-[72px] leading-[1.1] font-bold text-black mb-2">10+ hrs</div>
                <div className="text-[16px] text-black mb-2">Time Saved Weekly</div>
                <div className="text-[14px] text-[#666666]">Per power user</div>
              </div>
              <div className="text-center">
                <div className="text-[60px] sm:text-[72px] leading-[1.1] font-bold text-black mb-2">5 Tools</div>
                <div className="text-[16px] text-black mb-2">Unified Platform</div>
                <div className="text-[14px] text-[#666666]">Connected seamlessly</div>
              </div>
              <div className="text-center">
                <div className="text-[60px] sm:text-[72px] leading-[1.1] font-bold text-black mb-2">100+</div>
                <div className="text-[16px] text-black mb-2">Automation Templates</div>
                <div className="text-[14px] text-[#666666]">Ready to deploy</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#F9F9F9]">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
            <div className="max-w-[800px] mx-auto space-y-8">
              <h2 className="text-[36px] sm:text-[40px] leading-[1.2] font-semibold text-black">Reflection</h2>
              <p className="text-[16px] leading-[1.6] text-black">
                This project taught me that integration complexity can be abstracted away. By using Composio, I could focus on user experience instead of wrestling with API documentation.
              </p>
              <p className="text-[16px] leading-[1.6] text-black">
                The biggest win was making multi-tool automation feel simple. Users who didn't code could create workflows that saved them serious time. That's real utility.
              </p>
              <p className="text-[16px] leading-[1.6] text-black">
                Building a "command center" framing was strategic. Instead of competing with individual tools, we positioned ourselves as the intelligent hub that coordinates them all.
              </p>
              <div className="pt-8 space-y-6">
                <div>
                  <div className="text-[16px] font-semibold text-black mb-3">What Worked</div>
                  <ul className="space-y-2">
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Visual workflow builder lowered barrier to automation</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Unified dashboard solved real information overload</p>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                      <p className="text-[16px] leading-[1.6] text-black">Template library accelerated user adoption</p>
                    </li>
                  </ul>
                </div>
              </div>
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
