import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
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
  "aiinterviewagents": {
    title: "AI Interview Agents",
    headline: "Intelligent interview preparation platform that scaled to 5,000+ signups in its first month through intuitive UX design and rapid iteration.",
    roleScope: "Founding Designer · Product Design · UX Research · Growth Design",
    tags: ["AI", "Founding Designer", "Rapid Growth"],
    category: "designer",
    heroImage: "https://res.cloudinary.com/dz4h0eagy/image/upload/v1781732525/UI_case_study_template_that_lands_you_the_job_e9qrzg.jpg",
    galleryImages: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=700&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=700&fit=crop",
    ],
    metrics: [
      { label: "Signups in First Month", value: "5,000+" },
      { label: "Daily Growth Rate", value: "+333%" },
      { label: "Conversion Rate", value: "24.3%" },
      { label: "User Retention (Day 7)", value: "67%" },
    ],
    overview:
      "AI Interview Agents is an intelligent interview preparation platform powered by conversational AI agents that simulate real interviews. As founding designer, I led the product design from conception through rapid scaling, achieving 5,000+ signups in the first month - an extraordinary growth achievement driven by intuitive UX and product-market fit validation.",
    challenge:
      "Interview anxiety is real, but most prep platforms are outdated and static. We needed to create an experience where users felt like they were having real conversations with expert interviewers, not practicing against rigid templates. The platform had to be intuitive enough for non-technical users while leveraging cutting-edge AI. Time was critical - we had a very short timeframe to validate product-market fit.",
    solution:
      "I designed a conversation-first interface that stripped away unnecessary UI chrome. Users jump directly into interviews with zero friction. Each interview agent has a distinct personality (encouraging, rigorous, technical) that users can choose. Real-time feedback appears naturally in conversation flow. Progress tracking is implicit, not forced. The design language emphasizes confidence - warm colors, encouraging copy, and celebratory micro-interactions for milestone completions. I also designed the onboarding to feel like starting a conversation with a coach, not a form-filling experience.",
    outcome:
      "5,000+ signups in the first month with 24.3% conversion rate (industry average: 3-5%). Day 7 retention of 67%. User interviews revealed 91% of users described the experience as 'natural' and 'less intimidating than traditional prep.' The product achieved strong product-market fit signals, validating the AI-first interview prep category. Word-of-mouth and organic growth drove 40% of new users.",
    keyInsights: [
      "Conversation interfaces must feel natural, not robotic - UI disappears when interaction is genuinely dialog-like",
      "Rapid growth is possible when product design directly addresses core user anxiety, not just features",
      "Onboarding is not a separate flow - it's the first experience, and it should feel like the core product",
      "Micro-interactions and tone matter 10x more in AI products - they build trust in the intelligence layer",
      "Growth through word-of-mouth is the strongest validation that design resonates with users",
    ],
  },
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
      "Mobile users interact with health advice differently than desktop users - different patterns emerge",
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
      "Scientific credibility and user simplicity are not trade-offs - they can reinforce each other",
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
      "Real-time systems need extreme clarity - ambiguity kills adoption",
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
      "Quizaki is a live quiz platform built for competitive events. Participants answer questions in real-time and compete for top positions. The design challenge was creating moments of tension, excitement, and celebration - turning factual knowledge into thrilling competition.",
    challenge:
      "Generic quiz platforms feel flat. We needed to design interactions that make participants feel the pressure of live competition, celebrate correct answers, and keep audiences engaged during events with hundreds of simultaneous players.",
    solution:
      "I designed a series of micro-interactions: countdown timers with visual urgency, real-time leaderboard animations that reward correct answers instantly, confetti and celebration states for personal milestones, and tension-building reveals for final answers. Desktop and mobile experiences diverge intentionally - larger screens show full leaderboards; mobile prioritizes personal score feedback.",
    outcome:
      "Event engagement increased by 58%. Average time-per-question rose by 22% (indicating deliberation, not distraction). Post-event feedback showed 87% of participants found the experience 'exciting' or 'very exciting.'",
    keyInsights: [
      "Gamification without emotional design is just numbers - motion and timing matter",
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
      "Mobile optimization drives conversion - invest heavily in mobile UX",
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
      "API integration complexity explodes non-linearly - abstraction layers are essential",
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
      "Speed and accuracy are often both achievable - requires thoughtful algorithm selection",
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
      "Healthcare accessibility isn't optional - it's a legal and ethical requirement that improves UX for everyone",
      "Clear information hierarchy is more important than visual aesthetics in healthcare contexts",
      "Seamless integration with existing hospital systems is critical for adoption",
    ],
  },
};

export default function ProjectDetail({ onChatOpen }: { onChatOpen?: () => void }) {
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
    <Layout onChatOpen={onChatOpen}>
      <Helmet>
        <title>{project.title} — Utkarsh Tiwari | Cosmickdd</title>
        <meta name="description" content={project.headline} />
        <link rel="canonical" href={`https://www.cosmickdd.me/projects/${slug}`} />
        <meta property="og:title" content={`${project.title} — Utkarsh Tiwari`} />
        <meta property="og:description" content={project.headline} />
        <meta property="og:url" content={`https://www.cosmickdd.me/projects/${slug}`} />
        <meta property="og:image" content={project.heroImage} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": project.title,
            "description": project.headline,
            "url": `https://www.cosmickdd.me/projects/${slug}`,
            "image": project.heroImage,
            "author": {
              "@type": "Person",
              "@id": "https://www.cosmickdd.me/#person",
              "name": "Utkarsh Tiwari",
              "alternateName": "cosmickdd"
            },
            "creator": {
              "@type": "Person",
              "@id": "https://www.cosmickdd.me/#person",
              "name": "Utkarsh Tiwari"
            },
            "about": project.overview,
            "keywords": project.tags.join(", "),
            ...(project.techStack ? { "tool": project.techStack.join(", ") } : {})
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.cosmickdd.me"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Projects",
                "item": "https://www.cosmickdd.me/projects"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": project.title,
                "item": `https://www.cosmickdd.me/projects/${slug}`
              }
            ]
          })}
        </script>
      </Helmet>
      <main className="flex-1 bg-white pb-24">
        {/* TOP HEADER SECTION */}
        <section className="w-full px-6 sm:px-8 lg:px-12 pt-0 pb-12 sm:pb-16 max-w-[1200px] mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate("/projects")}
            className="group inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-12 sm:mb-16 text-sm font-medium"
          >
            <div className="p-2 rounded-full bg-gray-100 group-hover:bg-black group-hover:text-white transition-colors">
              <ArrowLeft size={16} />
            </div>
            Back to projects
          </button>

          <div className="max-w-[800px]">
            {/* Title & Headline */}
            <h1 className="font-catamaran font-black text-5xl sm:text-6xl lg:text-7xl tracking-[-0.02em] leading-[1.1] mb-6 text-black">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 leading-relaxed font-light mb-12 sm:mb-16">
              {project.headline}
            </p>
          </div>

          {/* Meta Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12 border-t border-b border-gray-100 py-10">
            {/* Role & Scope */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-3">
                Role & Scope
              </p>
              <p className="text-sm sm:text-base text-black font-medium leading-relaxed">
                {project.roleScope}
              </p>
            </div>

            {/* Skills */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-3">
                Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-gray-50 text-gray-700 text-xs font-medium border border-gray-200/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Tech Stack (if developer) */}
            {project.techStack && (
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full bg-black text-white text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* HERO IMAGE */}
        <section className="w-full px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto mb-16 sm:mb-24">
          <div className="w-full relative">
            <img
              src={project.heroImage}
              alt={`${project.title} Hero`}
              className="w-full h-auto object-contain"
            />
          </div>
        </section>

        {/* METRICS ROW */}
        {project.metrics && (
          <section className="w-full px-6 sm:px-8 lg:px-12 max-w-[1200px] mx-auto mb-24 sm:mb-32">
            <div className={`grid grid-cols-1 sm:grid-cols-2 ${project.metrics.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6 sm:gap-8`}>
              {project.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-8 sm:p-10 rounded-3xl bg-gray-50 border border-gray-100/50 flex flex-col justify-center items-center text-center transition-all duration-300 hover:shadow-lg hover:bg-white"
                >
                  <p className="text-4xl sm:text-5xl font-black font-catamaran tracking-tight text-black mb-2">
                    {metric.value}
                  </p>
                  <p className="text-[13px] font-semibold uppercase tracking-widest text-gray-500">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* MAIN CONTENT - TWO COLUMN LAYOUT */}
        <section className="w-full px-6 sm:px-8 lg:px-12 max-w-[1000px] mx-auto space-y-20 sm:space-y-32">
          
          {/* Overview */}
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] gap-8 md:gap-16">
            <div className="md:sticky md:top-32 h-fit">
              <h2 className="text-2xl font-bold font-catamaran text-black tracking-tight">Overview</h2>
              <div className="w-8 h-1 bg-black mt-4 rounded-full"></div>
            </div>
            <div className="prose prose-lg prose-gray text-gray-600 leading-relaxed font-light">
              <p>{project.overview}</p>
            </div>
          </div>

          {/* Challenge */}
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] gap-8 md:gap-16">
            <div className="md:sticky md:top-32 h-fit">
              <h2 className="text-2xl font-bold font-catamaran text-black tracking-tight">
                {isDesigner ? "The Challenge" : "Challenge & Requirements"}
              </h2>
              <div className="w-8 h-1 bg-black mt-4 rounded-full"></div>
            </div>
            <div className="prose prose-lg prose-gray text-gray-600 leading-relaxed font-light">
              <p>{project.challenge}</p>
            </div>
          </div>

          {/* Solution */}
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] gap-8 md:gap-16">
            <div className="md:sticky md:top-32 h-fit">
              <h2 className="text-2xl font-bold font-catamaran text-black tracking-tight">
                {isDesigner ? "Solution & Approach" : "Technical Solution"}
              </h2>
              <div className="w-8 h-1 bg-black mt-4 rounded-full"></div>
            </div>
            <div className="prose prose-lg prose-gray text-gray-600 leading-relaxed font-light">
              <p>{project.solution}</p>
            </div>
          </div>

          {/* Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] gap-8 md:gap-16">
            <div className="md:sticky md:top-32 h-fit">
              <h2 className="text-2xl font-bold font-catamaran text-black tracking-tight">
                {isDesigner ? "Outcome & Impact" : "Results & Impact"}
              </h2>
              <div className="w-8 h-1 bg-black mt-4 rounded-full"></div>
            </div>
            <div className="prose prose-lg prose-gray text-gray-600 leading-relaxed font-light">
              <p>{project.outcome}</p>
            </div>
          </div>

          {/* Key Insights */}
          {project.keyInsights && (
            <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] gap-8 md:gap-16">
              <div className="md:sticky md:top-32 h-fit">
                <h2 className="text-2xl font-bold font-catamaran text-black tracking-tight">
                  {isDesigner ? "Key Insights" : "Learnings & Takeaways"}
                </h2>
                <div className="w-8 h-1 bg-black mt-4 rounded-full"></div>
              </div>
              <ul className="space-y-6">
                {project.keyInsights.map((insight, i) => (
                  <li key={i} className="flex gap-4 sm:gap-6 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-black mt-0.5">
                      {isDesigner ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                      ) : (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      )}
                    </div>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light pt-1">
                      {insight}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* GALLERY SECTION */}
        {isDesigner && project.galleryImages && project.galleryImages.length > 0 && (
          <section className="w-full px-6 sm:px-8 lg:px-12 max-w-[1200px] mx-auto mt-24 sm:mt-32">
            <h2 className="text-2xl sm:text-3xl font-bold font-catamaran text-black tracking-tight mb-10 text-center">
              Design Showcase
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {project.galleryImages.map((image, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
                >
                  <img
                    src={image}
                    alt={`${project.title} design ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* BOTTOM CTA */}
        <section className="w-full px-6 sm:px-8 lg:px-12 max-w-[800px] mx-auto mt-32 sm:mt-40 text-center">
          <div className="p-10 sm:p-14 rounded-[32px] bg-gradient-to-b from-gray-50 to-white border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 opacity-50"></div>
            <h2 className="text-3xl sm:text-4xl font-bold font-catamaran text-black tracking-tight mb-4">
              Let's build something great.
            </h2>
            <p className="text-gray-500 mb-8 text-base sm:text-lg font-light max-w-lg mx-auto">
              {isDesigner
                ? "Interested in discussing design challenges or collaboration opportunities?"
                : "Want to discuss architecture, technical decisions, or work together?"}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-xl font-semibold text-sm hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
            >
              Get In Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
