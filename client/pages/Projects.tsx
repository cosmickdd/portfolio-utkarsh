import Layout from "@/components/Layout";
import ProjectsSection from "@/components/ProjectsSection";
import { Helmet } from "react-helmet-async";

export default function Projects({ onChatOpen }: { onChatOpen?: () => void }) {
  return (
    <Layout onChatOpen={onChatOpen}>
      <Helmet>
        <title>Projects | Utkarsh Tiwari — Cosmickdd</title>
        <meta name="description" content="Explore design and development projects by Utkarsh Tiwari (cosmickdd) — including AI products, SaaS platforms, mobile apps, and developer tools." />
        <link rel="canonical" href="https://www.cosmickdd.me/projects" />
      </Helmet>
      <main className="flex-1 relative">
        <ProjectsSection />
      </main>
    </Layout>
  );
}
