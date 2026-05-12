import Layout from "@/components/Layout";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProjectThree({ onChatOpen }: { onChatOpen?: () => void }) {
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
                  Real-Time Sync Platform
                </h1>
                <p className="text-[18px] sm:text-[20px] leading-[1.6] text-black font-normal max-w-2xl">
                  A full-stack collaboration platform with real-time data synchronization. Built with React, Firebase, and WebSocket architecture for sub-millisecond latency and 99.9% uptime.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-4">
                  <div>
                    <div className="text-[14px] uppercase tracking-[0.08em] text-[#666666] mb-2">Role</div>
                    <div className="text-[16px] text-black">Full Stack Engineer</div>
                  </div>
                  <div>
                    <div className="text-[14px] uppercase tracking-[0.08em] text-[#666666] mb-2">Duration</div>
                    <div className="text-[16px] text-black">6 Months</div>
                  </div>
                  <div>
                    <div className="text-[14px] uppercase tracking-[0.08em] text-[#666666] mb-2">Tech Stack</div>
                    <div className="text-[16px] text-black">React, Firebase, WebSocket</div>
                  </div>
                  <div>
                    <div className="text-[14px] uppercase tracking-[0.08em] text-[#666666] mb-2">Scale</div>
                    <div className="text-[16px] text-black">10K+ concurrent users</div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop&sat=-100" alt="Real-time platform mockup" className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-[16px] border border-[#EAEAEA] cursor-pointer" />
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
                Existing collaboration tools suffer from latency and sync inconsistencies. Changes made by one user take seconds to reach others, breaking the flow of real-time collaboration. Data conflicts occur across regions.
              </p>
              <p className="text-[18px] leading-[1.6] text-black">
                Building reliable real-time systems at scale is notoriously difficult. Developers struggle with WebSocket management, conflict resolution, presence tracking, and maintaining state consistency across thousands of concurrent clients.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                  <p className="text-[16px] leading-[1.6] text-black">Network latency breaks collaboration UX</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                  <p className="text-[16px] leading-[1.6] text-black">Conflict resolution is complex at scale</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                  <p className="text-[16px] leading-[1.6] text-black">Presence and awareness features lag</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></div>
                  <p className="text-[16px] leading-[1.6] text-black">Scaling WebSocket connections is expensive</p>
                </div>
              </div>
              <blockquote className="border-l-2 border-black pl-6 italic text-[24px] sm:text-[28px] leading-[1.3] text-black mt-12">
                "Real-time collaboration requires invisible latency. Users feel the difference between 50ms and 500ms."
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
                  Analyzed 15+ existing collaboration platforms and interviewed 40+ teams. Found that most failures stem from poor conflict resolution and presence management, not core latency.
                </p>
              </div>
              <div className="space-y-6">
                <div className="border border-[#EAEAEA] bg-white p-6">
                  <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">Operational Transformation</h3>
                  <p className="text-[16px] leading-[1.6] text-black">
                    CRDT + Operational Transform hybrid for bulletproof conflict resolution.
                  </p>
                </div>
                <div className="border border-[#EAEAEA] bg-white p-6">
                  <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">Edge-First Architecture</h3>
                  <p className="text-[16px] leading-[1.6] text-black">
                    Deploy closer to users for sub-100ms latency globally.
                  </p>
                </div>
                <div className="border border-[#EAEAEA] bg-white p-6">
                  <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">Presence as a Feature</h3>
                  <p className="text-[16px] leading-[1.6] text-black">
                    Make presence tracking lightweight and real-time, not an afterthought.
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
                <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">Conflict-Free Data Types</h3>
                <p className="text-[16px] leading-[1.6] text-black">
                  Use CRDT-based data structures to eliminate sync conflicts and guarantee consistency.
                </p>
              </div>
              <div>
                <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">Multi-Region Sync</h3>
                <p className="text-[16px] leading-[1.6] text-black">
                  Global Firebase replicas with client-side merging for fast reads and eventual consistency.
                </p>
              </div>
              <div>
                <h3 className="text-[20px] sm:text-[24px] leading-[1.3] font-semibold text-black mb-4">Optimistic Updates</h3>
                <p className="text-[16px] leading-[1.6] text-black">
                  Users see changes instantly while sync happens in background, creating perception of zero latency.
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
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=450&fit=crop&sat=-100" alt="Architecture diagram" className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-[16px] border border-[#EAEAEA] cursor-pointer" />
                <p className="text-[14px] text-[#666666] mt-4">Architecture  -  Multi-region sync</p>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=450&fit=crop&sat=-100" alt="Presence UI" className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-[16px] border border-[#EAEAEA] cursor-pointer" />
                <p className="text-[14px] text-[#666666] mt-4">Presence  -  Real-time avatars</p>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&h=450&fit=crop&sat=-100" alt="Conflict resolution" className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-[16px] border border-[#EAEAEA] cursor-pointer" />
                <p className="text-[14px] text-[#666666] mt-4">Conflicts  -  CRDT resolution</p>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=450&fit=crop&sat=-100" alt="Performance monitoring" className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-[16px] border border-[#EAEAEA] cursor-pointer" />
                <p className="text-[14px] text-[#666666] mt-4">Performance  -  Sub-100ms latency</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
            <h2 className="text-[36px] sm:text-[40px] leading-[1.2] font-semibold text-black mb-12">Final Solution</h2>
            <div className="mb-16">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=700&fit=crop&sat=-100" alt="Complete platform" className="w-full aspect-[16/9] object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-[16px] border border-[#EAEAEA] cursor-pointer" />
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <div>
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=450&fit=crop&sat=-100" alt="Before" className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-[16px] border border-[#EAEAEA] mb-4 cursor-pointer" />
                <div className="text-[18px] font-semibold text-black mb-2">Before</div>
                <p className="text-[14px] leading-[1.6] text-[#666666]">
                  Slow sync. Conflict resolution fails. Users see stale data. Complex to scale.
                </p>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=450&fit=crop&sat=-100" alt="After" className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-[16px] border border-[#EAEAEA] mb-4 cursor-pointer" />
                <div className="text-[18px] font-semibold text-black mb-2">After</div>
                <p className="text-[14px] leading-[1.6] text-[#666666]">
                  Instant updates. Self-healing conflicts. Real-time presence. Infinitely scalable.
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
                <div className="text-[60px] sm:text-[72px] leading-[1.1] font-bold text-black mb-2">&lt;50ms</div>
                <div className="text-[16px] text-black mb-2">Global Latency P95</div>
                <div className="text-[14px] text-[#666666]">From user input to sync</div>
              </div>
              <div className="text-center">
                <div className="text-[60px] sm:text-[72px] leading-[1.1] font-bold text-black mb-2">99.9%</div>
                <div className="text-[16px] text-black mb-2">Uptime SLA</div>
                <div className="text-[14px] text-[#666666]">Multi-region redundancy</div>
              </div>
              <div className="text-center">
                <div className="text-[60px] sm:text-[72px] leading-[1.1] font-bold text-black mb-2">10K+</div>
                <div className="text-[16px] text-black mb-2">Concurrent Users</div>
                <div className="text-[14px] text-[#666666]">Per single session</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#F9F9F9]">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
            <div className="max-w-[800px] mx-auto space-y-8">
              <h2 className="text-[36px] sm:text-[40px] leading-[1.2] font-semibold text-black">Reflection</h2>
              <p className="text-[16px] leading-[1.6] text-black">
                Building real-time systems forced me to think deeply about distributed systems, network conditions, and failure modes. The engineering was complex but the payoff was worthwhile.
              </p>
              <p className="text-[16px] leading-[1.6] text-black">
                The biggest insight: invisible infrastructure is the best infrastructure. Users don't care about CRDT algorithms or conflict resolution. They care that their changes appear instantly and stay consistent. We hid the complexity behind a simple UX.
              </p>
              <p className="text-[16px] leading-[1.6] text-black">
                This project taught me that performance isn't a feature - it's part of the product. When latency becomes invisible, it becomes part of the experience itself.
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
