import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowLeft } from "lucide-react";

interface ProjectContent {
  title: string;
  headline: string;
  roleScope: string;
  tags: string[];
  category: "designer" | "developer";
  overview: string;
  challenge: string;
  solution: string;
  outcome: string;
  keyInsights?: string[];
  heroImage: string;
  galleryImages?: string[];
  metrics?: { label: string; value: string }[];
  techStack?: string[];
  description?: string;
}

const PROJECT_DATA: Record<string, ProjectContent> = {
  "prana-ai": {
    title: "Prana AI",
    headline: "AI-powered Ayurvedic health assistant for personalized wellness guidance across web and mobile.",
    roleScope: "Product Design · UX Research · Interaction Design",
    tags: ["AI", "Healthcare", "UX Systems"],
    category: "designer",
    heroImage: "https://images.unsplash.com/photo-1576091160550-112173faf246?w=1200&h=700&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1576091160550-112173faf246?w=1200&h=700&fit=crop",
      "https://images.unsplash.com/photo-1576091160550-112173faf246?w=1200&h=700&fit=crop",
    ],
    metrics: [
      { label: "User Engagement", value: "+65%" },
      { label: "Session Duration", value: "+40%" },
      { label: "Trust Score", value: "+58%" },
    ],
    overview:
      "Prana AI is an AI-powered health companion that delivers personalized Ayurvedic wellness advice. The challenge was building a trust-first interface that demystifies complex health guidance while maintaining accuracy and accessibility across both web and mobile platforms.",
    challenge:
      "Users lacked confidence in AI-generated health advice. We needed to design interactions that show reasoning, build credibility through transparency, and allow users to make informed wellness decisions without feeling overwhelmed by data.",
    solution:
      "I designed a progressive disclosure system where users control information density. The interface reveals AI reasoning step-by-step, includes citations from traditional Ayurvedic principles, and provides reassuring micro-interactions that reinforce the assistant's supportive tone. Mobile and desktop experiences are unified through adaptive components.",
    outcome:
      "65% increase in user engagement with health recommendations. Session duration increased by 40%. Qualitative feedback showed improved trust in AI-generated guidance, with users describing the interface as 'transparent' and 'non-intimidating.'",
    keyInsights: [
      "Trust is built through clarity, not through minimalism",
      "Mobile users interact with health advice differently than desktop users—different patterns emerge",
      "Progressive disclosure reduces cognitive load while maintaining expert credibility",
    ],
  },
  carbonsetu: {
    title: "CarbonSetu",
    headline: "Climate-tech platform enabling MRV workflows and carbon credit management for enterprises.",
    roleScope: "Brand Strategy · Product Design · Dashboard UX",
    tags: ["Climate-Tech", "SaaS", "Data Visualization"],
    category: "designer",
    heroImage: "https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=1200&h=700&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=1200&h=700&fit=crop",
      "https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=1200&h=700&fit=crop",
    ],
    metrics: [
      { label: "Data Entry Time", value: "-35%" },
      { label: "Onboarding Rate", value: "+36pts" },
      { label: "Dashboard Adoption", value: "+60%" },
    ],
    overview:
      "CarbonSetu is a B2B SaaS platform that simplifies carbon credit MRV (Measurement, Reporting, Verification) workflows for enterprises. The design had to balance scientific rigor with usability, making complex climate data accessible to non-experts while remaining credible to sustainability professionals.",
    challenge:
      "Enterprise climate workflows are highly technical. We needed to reduce friction in data entry, make carbon calculations transparent, and create dashboards that tell a story to both internal teams and external auditors.",
    solution:
      "I developed a cohesive brand identity (logo, color system, typography) that conveyed both scientific precision and environmental values. On the product side, I designed guided workflows that scaffold complex MRV processes, interactive dashboards that make carbon reduction visible, and audit-ready reports that automatically generate from input data.",
    outcome:
      "Reduced data entry time by 35%. Onboarding completion rate improved from 42% to 78%. Dashboard adoption increased by 60% after redesign. Brand perception shifted to 'trusted partner' rather than 'compliance tool.'",
    keyInsights: [
      "Brand and product design are inseparable in B2B SaaS",
      "Workflow guidance is a design problem, not just a training problem",
      "Scientific credibility and user simplicity are not trade-offs—they can reinforce each other",
    ],
  },
  tvic: {
    title: "TVIC",
    headline: "AI-based semiconductor inspection system with real-time verification and defect classification dashboards.",
    roleScope: "Enterprise UX · Data Clarity · Workflow Design",
    tags: ["Enterprise", "AI", "Dashboards"],
    category: "designer",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=700&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=700&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=700&fit=crop",
    ],
    metrics: [
      { label: "False Positives", value: "-42%" },
      { label: "Decision Time", value: "-28%" },
      { label: "System Adoption", value: "+29pts" },
    ],
    overview:
      "TVIC is an AI-powered system for semiconductor inspection that enables manufacturers to detect and classify defects in real-time. The UX challenge was helping operators make rapid decisions based on AI outputs while maintaining trust in the system's recommendations.",
    challenge:
      "Manufacturing operators work under time pressure. They need confidence in AI-flagged defects without slowing down production. Previous interfaces were cluttered with false positives, causing operator fatigue and distrust.",
    solution:
      "I redesigned the inspection dashboard to prioritize signal over noise. High-confidence defects appear prominently with clear visual hierarchies. Operators can drill into AI reasoning (which features led to classification), compare defect images side-by-side, and quickly approve/reject flagged items. The system learns from operator corrections, building trust over time.",
    outcome:
      "False positive rate reduced by 42%. Operator decision time decreased by 28%. System adoption improved to 91% (from 62%). AI confidence scores now correlate with actual defect accuracy, indicating improved calibration.",
    keyInsights: [
      "Enterprise trust is earned through transparency, not through hiding uncertainty",
      "Real-time systems need extreme clarity—ambiguity kills adoption",
      "Operator feedback loops should be first-class features, not afterthoughts",
    ],
  },
  quizaki: {
    title: "Quizaki",
    headline: "Gamified quiz platform designed for live competitive events with real-time leaderboards and event flows.",
    roleScope: "Interaction Design · Motion Design · Event Flows",
    tags: ["Gamification", "Real-time", "Engagement"],
    category: "designer",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=700&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=700&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=700&fit=crop",
    ],
    metrics: [
      { label: "Event Engagement", value: "+58%" },
      { label: "Time per Question", value: "+22%" },
      { label: "Excitement Score", value: "87%" },
    ],
    overview:
      "Quizaki is a live quiz platform built for competitive events. Participants answer questions in real-time and compete for top positions. The design challenge was creating moments of tension, excitement, and celebration—turning factual knowledge into thrilling competition.",
    challenge:
      "Generic quiz platforms feel flat. We needed to design interactions that make participants feel the pressure of live competition, celebrate correct answers, and keep audiences engaged during events with hundreds of simultaneous players.",
    solution:
      "I designed a series of micro-interactions: countdown timers with visual urgency, real-time leaderboard animations that reward correct answers instantly, confetti and celebration states for personal milestones, and tension-building reveals for final answers. Desktop and mobile experiences diverge intentionally—larger screens show full leaderboards; mobile prioritizes personal score feedback.",
    outcome:
      "Event engagement increased by 58%. Average time-per-question rose by 22% (indicating deliberation, not distraction). Post-event feedback showed 87% of participants found the experience 'exciting' or 'very exciting.'",
    keyInsights: [
      "Gamification without emotional design is just numbers—motion and timing matter",
      "Responsive interaction design should adapt interaction *type*, not just layout",
      "Real-time feedback is more powerful than post-event rankings",
    ],
  },
  rapidophilia: {
    title: "Rapidophilia",
    headline: "Full-stack travel discovery platform with AI-powered recommendations and seamless booking integration.",
    roleScope: "Full-stack Development · API Design · Database Architecture",
    tags: ["React", "Node.js", "AI/ML"],
    category: "developer",
    heroImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=700&fit=crop",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "OpenAI API", "Stripe"],
    metrics: [
      { label: "Recommendations", value: "98% Accuracy" },
      { label: "Search Speed", value: "<500ms" },
      { label: "Uptime", value: "99.9%" },
    ],
    overview:
      "Rapidophilia is a sophisticated travel discovery platform that combines AI-powered destination recommendations with real-time booking capabilities. Built with modern full-stack technologies, it enables users to discover personalized travel experiences and complete bookings seamlessly.",
    challenge:
      "Travel recommendation systems require balancing massive datasets, real-time availability, and personalization. We needed to create a system fast enough for interactive exploration while maintaining data accuracy across multiple booking providers.",
    solution:
      "Implemented a microservices architecture with Redis caching for rapid recommendations. Built custom ML models trained on travel patterns. Integrated with multiple booking APIs through a unified middleware layer. Optimized database queries to return results in <500ms even with millions of records.",
    outcome:
      "System processes 100K+ recommendations daily with 98% accuracy. Average page load time: 1.2s. Conversion rate from discovery to booking: 18% (industry average: 3.2%). Mobile-first responsive design serves 60% of traffic on mobile devices.",
    keyInsights: [
      "Real-time personalization at scale requires intelligent caching strategies",
      "Third-party API reliability is as important as your own system design",
      "Mobile optimization drives conversion—invest heavily in mobile UX",
    ],
  },
  aiocc: {
    title: "AI Operations Command Center",
    headline: "Intelligent, lightweight operations command center for SMBs unifying Gmail, Slack, Notion, and Google Drive.",
    roleScope: "Backend Architecture · Integration Engineering · DevOps",
    tags: ["Python", "Composio", "Automation", "API Integration"],
    category: "developer",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=700&fit=crop",
    techStack: ["Python", "FastAPI", "Composio ToolRouter", "PostgreSQL", "Redis", "Docker"],
    metrics: [
      { label: "Tasks Automated", value: "87%" },
      { label: "Time Saved/User", value: "12hrs/week" },
      { label: "Integration Coverage", value: "40+ Apps" },
    ],
    overview:
      "AIOCC is a lightweight operations hub designed for SMBs that integrates Gmail, Slack, Notion, and Google Drive through an intelligent command layer powered by Composio ToolRouter. It reduces context switching and automates repetitive operational tasks.",
    challenge:
      "SMBs struggle with fragmented tools and manual workflows. Building a system that centralizes operations without becoming bloated or difficult to maintain required careful architectural decisions and API integration expertise.",
    solution:
      "Built a modular Python backend using FastAPI with Composio ToolRouter as the integration backbone. Created natural language command interface that translates user intent to multi-app actions. Implemented task queuing for long-running operations and webhook handlers for real-time sync across platforms.",
    outcome:
      "Reduces average user operational time by 12 hours/week. Automation covers 87% of common SMB workflows. Lightweight Docker deployment enables quick onboarding. Enterprise customers report 40% reduction in communication overhead.",
    keyInsights: [
      "API integration complexity explodes non-linearly—abstraction layers are essential",
      "Lightweight architecture beats feature-rich bloat for SMB adoption",
      "Natural language interfaces require careful intent disambiguation",
    ],
  },
  "ic-marking-detector": {
    title: "IC Marking Detector",
    headline: "FastAPI application for detecting and OCR-ing printed text on semiconductor IC images with labeling workflow.",
    roleScope: "ML Engineering · Backend Development · Tool Design",
    tags: ["FastAPI", "OpenCV", "Tesseract OCR", "Python"],
    category: "developer",
    heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=700&fit=crop",
    techStack: ["Python", "FastAPI", "OpenCV", "Tesseract OCR", "PostgreSQL", "Redis"],
    metrics: [
      { label: "Detection Accuracy", value: "94.2%" },
      { label: "OCR Accuracy", value: "91.7%" },
      { label: "Processing Speed", value: "2.3s/image" },
    ],
    overview:
      "IC Marking Detector is a specialized tool for semiconductor manufacturing that identifies printed marking text on IC images, performs OCR, and provides an intuitive labeler/override workflow. Built with FastAPI, OpenCV, and Tesseract, it streamlines quality control processes.",
    challenge:
      "Detecting text on IC images is challenging due to low contrast, varying lighting, and small text sizes. The system needed high accuracy while maintaining speed for production workflows. Manual labeling overhead had to be minimized through intelligent UI.",
    solution:
      "Implemented multi-stage detection pipeline using OpenCV for region segmentation and Tesseract for OCR. Built confidence scoring to flag uncertain detections for manual review. Created streamlined web UI for rapid labeling that learns from corrections to improve future detections.",
    outcome:
      "Achieves 94.2% detection accuracy and 91.7% OCR accuracy on test datasets. Processing time: 2.3 seconds per image. Reduces manual inspection time by 45%. Labeling workflow enables continuous model improvement through user feedback.",
    keyInsights: [
      "Computer vision pipelines benefit from multi-model ensembles rather than single models",
      "User feedback loops in production tools are force multipliers for ML accuracy",
      "Speed and accuracy are often both achievable—requires thoughtful algorithm selection",
    ],
  },
  "hospital-landing-page": {
    title: "Hospital Landing Page",
    headline: "Modern, accessible landing page for healthcare provider with patient portal integration and appointment scheduling.",
    roleScope: "Frontend Development · UX Implementation · Accessibility",
    tags: ["React", "TypeScript", "Healthcare", "Responsive Design"],
    category: "developer",
    heroImage: "https://images.unsplash.com/photo-1576091160565-2173dba999ef?w=1200&h=700&fit=crop",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Stripe", "SendGrid"],
    metrics: [
      { label: "Accessibility Score", value: "98/100" },
      { label: "Lighthouse Performance", value: "96" },
      { label: "Page Load Time", value: "1.1s" },
    ],
    overview:
      "Modern healthcare landing page designed for a hospital system with integrated patient portal, appointment scheduling, and insurance verification. Built with accessibility-first principles to serve diverse patient populations.",
    challenge:
      "Healthcare sites must balance visual appeal with accessibility (WCAG 2.1 AA compliance), provide clear information architecture for patients with varying technical literacy, and ensure HIPAA compliance for sensitive features.",
    solution:
      "Built responsive React frontend with semantic HTML, ARIA labels, and keyboard navigation throughout. Integrated appointment scheduling with calendar and insurance verification system. Designed clear patient pathways: Find Doctor → Check Insurance → Schedule → Portal Access. Implemented secure data handling for sensitive patient information.",
    outcome:
      "Achieved 98/100 accessibility score and WCAG 2.1 AA compliance. Lighthouse Performance score: 96. Online appointment bookings increased 220% post-launch. Patient portal login rate: 62% (industry average: 35%). Average session duration: 4.2 minutes.",
    keyInsights: [
      "Healthcare accessibility isn't optional—it's a legal and ethical requirement that improves UX for everyone",
      "Clear information hierarchy is more important than visual aesthetics in healthcare contexts",
      "Seamless integration with existing hospital systems is critical for adoption",
    ],
  },
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = slug ? PROJECT_DATA[slug] : null;

  if (!project) {
    return (
      <Layout>
        <main className="flex-1 flex items-center justify-center min-h-screen bg-white">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Project not found
            </h1>
            <button
              onClick={() => navigate("/projects")}
              className="inline-flex items-center gap-2 text-black hover:text-gray-700 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to projects
            </button>
          </div>
        </main>
      </Layout>
    );
  }

  const isDesigner = project.category === "designer";

  return (
    <Layout>
      <main className="flex-1 bg-white">
        {/* HERO SECTION */}
        <section className="relative w-full h-96 sm:h-[500px] lg:h-[600px] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </section>

        {/* CONTENT */}
        <section className="w-full px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <button
              onClick={() => navigate("/projects")}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8 text-sm"
            >
              <ArrowLeft size={16} />
              Back to projects
            </button>

            {/* Header Section */}
            <div className="mb-12 sm:mb-16">
              <h1 className="font-catamaran font-bold text-4xl sm:text-5xl lg:text-6xl tracking-[0.08em] mb-4 text-black">
                {project.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
                {project.headline}
              </p>

              {/* Meta Grid - Responsive for Designer vs Developer */}
              <div
                className={`grid gap-6 sm:gap-8 mb-10 ${
                  isDesigner ? "sm:grid-cols-2" : "sm:grid-cols-3"
                }`}
              >
                {/* Role & Scope */}
                <div className="pb-6 sm:pb-8 border-b sm:border-b-0 sm:border-r border-gray-200">
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                    Role & Scope
                  </p>
                  <p className="text-sm sm:text-base text-gray-900 font-medium leading-relaxed">
                    {project.roleScope}
                  </p>
                </div>

                {/* Tags */}
                <div className="pb-6 sm:pb-0">
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                    Skills
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs font-medium border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack (Developer) */}
                {project.techStack && (
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-gray-900 text-white text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-xs font-medium">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Metrics Cards - More visual for Designer projects */}
            {project.metrics && (
              <div
                className={`grid gap-4 sm:gap-6 mb-16 sm:mb-20 ${
                  isDesigner
                    ? "grid-cols-1 sm:grid-cols-3"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {project.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                      isDesigner
                        ? "bg-gradient-to-br from-gray-50 to-white border-gray-200"
                        : "bg-white border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-600 mb-2">
                      {metric.label}
                    </p>
                    <p className="text-3xl sm:text-4xl font-bold text-black">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Content Sections */}
            <div className="space-y-12 sm:space-y-16 mb-16 sm:mb-20">
              {/* Overview */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                  Overview
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* Challenge */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                  {isDesigner ? "The Challenge" : "Challenge & Requirements"}
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                  {isDesigner
                    ? "Solution & Design Approach"
                    : "Technical Solution"}
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Outcome */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                  {isDesigner ? "Outcome & Impact" : "Results & Impact"}
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {project.outcome}
                </p>
              </div>

              {/* Key Insights */}
              {project.keyInsights && (
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">
                    {isDesigner ? "Key Insights" : "Learnings & Takeaways"}
                  </h2>
                  <ul className="space-y-4">
                    {project.keyInsights.map((insight, i) => (
                      <li
                        key={i}
                        className="flex gap-4 text-base sm:text-lg text-gray-700"
                      >
                        <span className="text-black font-bold flex-shrink-0">
                          {isDesigner ? "→" : "•"}
                        </span>
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Gallery Section - For Designer Projects */}
            {isDesigner && project.galleryImages && project.galleryImages.length > 0 && (
              <div className="mb-16 sm:mb-20">
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-8">
                  Design Showcase
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  {project.galleryImages.map((image, i) => (
                    <div
                      key={i}
                      className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden bg-gray-100 hover:shadow-lg transition-shadow duration-300"
                    >
                      <img
                        src={image}
                        alt={`${project.title} design ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Section */}
            <div className="pt-12 sm:pt-16 border-t border-gray-200">
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                {isDesigner
                  ? "Interested in discussing design challenges or collaboration opportunities?"
                  : "Want to discuss architecture, technical decisions, or work together?"}
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 bg-black text-white rounded-lg font-medium text-sm hover:bg-gray-900 transition-all duration-300 hover:shadow-lg"
              >
                Get In Touch
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
