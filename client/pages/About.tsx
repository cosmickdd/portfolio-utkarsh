import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <main className="flex-1 relative py-12 md:py-16 lg:py-20">
        <div className="w-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="text-center">
            <h1 className="font-catamaran font-bold text-4xl md:text-5xl lg:text-6xl mb-4">Coming Soon</h1>
            <p className="font-catamaran text-gray-400">About page content coming soon...</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
