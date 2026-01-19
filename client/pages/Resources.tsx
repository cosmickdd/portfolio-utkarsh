import { useState } from "react";
import { ExternalLink, Search } from "lucide-react";
import Layout from "@/components/Layout";

type Category = "design" | "development" | "learning";

const resources: Record<Category, {
  title: string;
  description: string;
  link: string;
  tags: string[];
}[]> = {
  design: [
    {
      title: "The Design of Everyday Things",
      description: "Foundational thinking on usability, affordances, and human-centered design.",
      link: "https://www.nngroup.com/books/design-everyday-things/",
      tags: ["UX", "Fundamentals", "Psychology"],
    },
    {
      title: "Design Systems by Figma",
      description: "Practical guidance on building scalable, component-driven systems.",
      link: "https://www.figma.com/design-systems/",
      tags: ["Design Systems", "Figma"],
    },
    {
      title: "Accessibility Handbook",
      description: "Inclusive design principles for building usable products for everyone.",
      link: "https://www.smashingmagazine.com/2022/04/designing-accessible-color-systems/",
      tags: ["Accessibility", "WCAG"],
    },
  ],
  development: [
    {
      title: "React Documentation",
      description: "Official documentation covering modern React patterns and hooks.",
      link: "https://react.dev",
      tags: ["React", "Frontend"],
    },
    {
      title: "TypeScript Handbook",
      description: "Deep dive into static typing for large-scale JavaScript applications.",
      link: "https://www.typescriptlang.org/docs/",
      tags: ["TypeScript"],
    },
    {
      title: "Web Performance Guide",
      description: "Techniques for building fast, resilient web applications.",
      link: "https://web.dev/performance/",
      tags: ["Performance", "Web"],
    },
  ],
  learning: [
    {
      title: "Frontend Masters",
      description: "Advanced courses taught by industry practitioners.",
      link: "https://frontendmasters.com/",
      tags: ["Courses", "Advanced"],
    },
    {
      title: "Smashing Magazine",
      description: "In-depth articles on design, UX, and frontend development.",
      link: "https://www.smashingmagazine.com/",
      tags: ["Articles", "Professional"],
    },
    {
      title: "Dev.to",
      description: "Community-driven writing on modern development practices.",
      link: "https://dev.to/",
      tags: ["Community"],
    },
  ],
};

export default function Resources() {
  const [category, setCategory] = useState<Category>("design");
  const [query, setQuery] = useState("");

  const filtered = resources[category].filter(item => {
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.tags.some(tag => tag.toLowerCase().includes(q))
    );
  });

  return (
    <Layout>
      <main className="bg-white">

        {/* HERO */}
        <section className="px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-32 pb-20 sm:pb-28 lg:pb-32">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full bg-gray-100 mb-6 sm:mb-8 border border-gray-200">
              <p className="text-xs uppercase tracking-widest text-gray-700 font-semibold">
                Resources
              </p>
            </div>
            <h1 className="font-catamaran font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:text-7xl tracking-tight mb-4 sm:mb-6 text-black">
              Tools & Learning
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
              A curated set of resources that have influenced how I design,
              build, and think about digital products.
            </p>
          </div>
        </section>

        {/* FILTERS */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-0 sm:flex sm:flex-col md:flex-row md:gap-6 md:items-center md:justify-between">

            <div className="flex gap-2 sm:gap-3 flex-wrap">
              {(["design", "development", "learning"] as Category[]).map(c => (
                <button
                  key={c}
                  onClick={() => {
                    setCategory(c);
                    setQuery("");
                  }}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition ${
                    category === c
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {c.charAt(0).toUpperCase() + c.slice(1)}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search resources…"
                className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black text-sm sm:text-base"
              />
            </div>

          </div>
        </section>

        {/* LIST */}
        <section className="px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32">
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {filtered.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 sm:p-6 lg:p-7 rounded-lg sm:rounded-xl border border-gray-200 hover:border-black hover:shadow-lg transition bg-white"
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-black transition pr-2">
                    {item.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-black flex-shrink-0" />
                </div>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-5">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 sm:px-3 py-1 rounded-full bg-gray-100 text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 bg-gray-50 text-center">
          <h2 className="font-catamaran font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6">
            Have a resource to recommend?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto mb-8 sm:mb-10">
            I'm always refining this list. If something has shaped how you think,
            I'd love to see it.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition text-sm sm:text-base"
          >
            Share a Resource
          </a>
        </section>

      </main>
    </Layout>
  );
}
