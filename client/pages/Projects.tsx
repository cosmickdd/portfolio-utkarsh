import Layout from "@/components/Layout";
import ProjectsSection from "@/components/ProjectsSection";

export default function Projects({ onChatOpen }: { onChatOpen?: () => void }) {
  return (
    <Layout onChatOpen={onChatOpen}>
      <main className="flex-1 relative">
        <ProjectsSection />
      </main>
    </Layout>
  );
}
