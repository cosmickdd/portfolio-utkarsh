import { useState, useEffect } from "react";
import { ExternalLink, Search, Figma, Github, BookOpen, Instagram, Zap, Code2, Loader } from "lucide-react";
import Layout from "@/components/Layout";

type Category = "design" | "development" | "learning";

interface Resource {
  title: string;
  description: string;
  link: string;
  tags: string[];
  type?: "figma" | "instagram" | "repo" | "course" | "article";
  author?: string;
  icon?: React.ReactNode;
}

interface InstagramPost {
  id: string;
  caption: string;
  mediaUrl: string;
  permalink: string;
  timestamp: string;
}

const resources: Record<Category, Resource[]> = {
  design: [
    {
      title: "Component Library - Figma",
      description: "Comprehensive UI component library with design tokens and best practices.",
      link: "https://www.figma.com/community/file/1234567890",
      tags: ["Components", "Systems", "Figma"],
      type: "figma",
      icon: "🎨",
    },
    {
      title: "Mobile Design Patterns",
      description: "Curated mobile UI patterns and interactions for iOS & Android.",
      link: "https://www.figma.com/community",
      tags: ["Mobile", "Patterns", "Figma"],
      type: "figma",
      icon: "📱",
    },
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
      tags: ["Design Systems", "Best Practices"],
    },
    {
      title: "Accessibility Handbook",
      description: "Inclusive design principles for building usable products for everyone.",
      link: "https://www.smashingmagazine.com/2022/04/designing-accessible-color-systems/",
      tags: ["Accessibility", "WCAG", "Inclusive"],
    },
  ],
  development: [
    {
      title: "React Components Repo",
      description: "Production-ready React components with hooks, TypeScript, and Tailwind.",
      link: "https://github.com",
      tags: ["React", "TypeScript", "Components"],
      type: "repo",
      icon: "⚡",
    },
    {
      title: "Full-Stack Template",
      description: "Starter template with React, Express, TypeScript, and PostgreSQL.",
      link: "https://github.com",
      tags: ["Fullstack", "Template", "Vite"],
      type: "repo",
      icon: "🚀",
    },
    {
      title: "UI Utilities Library",
      description: "Collection of reusable utility functions for common web dev tasks.",
      link: "https://github.com",
      tags: ["Utilities", "JavaScript", "npm"],
      type: "repo",
      icon: "🔧",
    },
    {
      title: "React Documentation",
      description: "Official documentation covering modern React patterns and hooks.",
      link: "https://react.dev",
      tags: ["React", "Frontend", "Official"],
    },
    {
      title: "TypeScript Handbook",
      description: "Deep dive into static typing for large-scale JavaScript applications.",
      link: "https://www.typescriptlang.org/docs/",
      tags: ["TypeScript", "Type Safety"],
    },
  ],
  learning: [
    {
      title: "Frontend Masters",
      description: "Advanced courses taught by industry practitioners.",
      link: "https://frontendmasters.com/",
      tags: ["Courses", "Advanced", "Video"],
      type: "course",
    },
    {
      title: "Design for Developers",
      description: "Learn design principles, UI/UX, and how to ship beautiful products.",
      link: "https://www.coursera.org",
      tags: ["Design", "UI/UX", "Fundamentals"],
      type: "course",
    },
    {
      title: "JavaScript Mastery",
      description: "Master modern JavaScript ES6+ with real-world projects.",
      link: "https://www.javascript.info/",
      tags: ["JavaScript", "Interactive", "Free"],
      type: "course",
    },
    {
      title: "Smashing Magazine",
      description: "In-depth articles on design, UX, and frontend development.",
      link: "https://www.smashingmagazine.com/",
      tags: ["Articles", "Professional", "In-Depth"],
      type: "article",
    },
    {
      title: "Dev.to",
      description: "Community-driven writing on modern development practices.",
      link: "https://dev.to/",
      tags: ["Articles", "Community", "Trending"],
      type: "article",
    },
  ],
};

export default function Resources({ onChatOpen }: { onChatOpen?: () => void }) {
  const [category, setCategory] = useState<Category>("design");
  const [query, setQuery] = useState("");
  const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(false);

  useEffect(() => {
    // Fetch Instagram posts on mount
    fetchInstagramPosts();
  }, []);

  const fetchInstagramPosts = async () => {
    setLoadingPosts(true);
    try {
      const response = await fetch("/api/instagram-posts");
      if (response.ok) {
        const data = await response.json();
        setInstagramPosts(data.posts || []);
      }
    } catch (error) {
      console.error("Failed to fetch Instagram posts:", error);
    } finally {
      setLoadingPosts(false);
    }
  };

  const filtered = resources[category].filter(item => {
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.tags.some(tag => tag.toLowerCase().includes(q))
    );
  });

  const getCategoryIcon = (cat: Category) => {
    switch (cat) {
      case "design": return <Figma className="w-4 h-4" />;
      case "development": return <Code2 className="w-4 h-4" />;
      case "learning": return <BookOpen className="w-4 h-4" />;
    }
  };

  const getTypeIcon = (type?: string) => {
    switch (type) {
      case "figma": return "📐";
      case "instagram": return "📸";
      case "repo": return "→";
      case "course": return "→";
      case "article": return "→";
      default: return "→";
    }
  };

  const getTypeColor = (type?: string) => {
    switch (type) {
      case "figma": return "bg-gray-100 border-gray-200";
      case "instagram": return "bg-gray-100 border-gray-200";
      case "repo": return "bg-gray-100 border-gray-200";
      case "course": return "bg-gray-100 border-gray-200";
      case "article": return "bg-gray-100 border-gray-200";
      default: return "bg-gray-100 border-gray-200";
    }
  };

  return (
    <Layout onChatOpen={onChatOpen}>
      <main className="bg-white">

        {/* HERO */}
        <section className="px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-32 pb-16 sm:pb-24 lg:pb-28">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full bg-gray-100 mb-6 sm:mb-8 border border-gray-200">
              <p className="text-xs uppercase tracking-widest text-gray-700 font-semibold">
                Resources & Inspiration
              </p>
            </div>
            <h1 className="font-catamaran font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:text-7xl tracking-tight mb-4 sm:mb-6 text-black">
              Tools & Learning
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
              Design resources, development tools, and learning materials that shape my work. Explore Figma files, GitHub repositories, and daily inspiration from Instagram.
            </p>
          </div>
        </section>

        {/* FILTERS */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="max-w-5xl mx-auto space-y-6">

            {/* Category Filter */}
            <div className="flex gap-2 sm:gap-3 flex-wrap">
              {(["design", "development", "learning"] as Category[]).map(c => (
                <button
                  key={c}
                  onClick={() => {
                    setCategory(c);
                    setQuery("");
                  }}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition ${
                    category === c
                      ? "bg-black text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                  }`}
                >
                  {getCategoryIcon(c)}
                  {c.charAt(0).toUpperCase() + c.slice(1)}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search resources…"
                className="w-full pl-10 sm:pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black/10 text-sm sm:text-base transition"
              />
            </div>

          </div>
        </section>

        {/* RESOURCES GRID */}
        <section className="px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            {filtered.length > 0 ? (
              filtered.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 sm:p-6 rounded-lg sm:rounded-xl border border-gray-200 bg-white hover:bg-gray-50 hover:border-black hover:shadow-lg transition"
                >
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="flex-1">
                      {item.type && (
                        <div className="inline-block mb-2">
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getTypeColor(item.type)} text-gray-700`}>
                            {item.type}
                          </span>
                        </div>
                      )}
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-black transition pr-2">
                        {item.title}
                      </h3>
                    </div>
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-black flex-shrink-0 mt-1" />
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-5">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 sm:px-3 py-1 rounded-full bg-gray-100 text-gray-600 group-hover:bg-gray-200 transition"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))
            ) : (
              <div className="col-span-1 md:col-span-2 text-center py-12">
                <p className="text-gray-500 text-base sm:text-lg">No resources found matching "{query}"</p>
              </div>
            )}
          </div>
        </section>

        {/* INSTAGRAM SECTION */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 bg-gradient-to-br from-white via-gray-50 to-gray-100 border-t border-gray-200">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-gray-200 mb-6">
                <Instagram className="w-5 h-5 text-black" />
                <span className="text-xs uppercase tracking-widest font-semibold text-gray-600">Inspiration</span>
              </div>
              <h2 className="font-catamaran font-bold text-3xl sm:text-4xl md:text-5xl text-black mb-4">
                Latest from Instagram
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl">
                Check out the latest design insights and inspiration on <span className="font-semibold text-black">@utxuiux</span>. Follow for daily UI/UX tips and creative exploration.
              </p>
            </div>

            {/* Instagram Posts Grid */}
            {loadingPosts ? (
              <div className="flex justify-center items-center py-20">
                <div className="text-center">
                  <Loader className="w-8 h-8 text-gray-400 animate-spin mx-auto mb-3" />
                  <p className="text-gray-500 text-sm">Loading posts...</p>
                </div>
              </div>
            ) : instagramPosts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                {instagramPosts.slice(0, 3).map((post) => (
                  <a
                    key={post.id}
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-xl aspect-square bg-gray-300 border-2 border-gray-200 hover:border-black transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    {/* Image */}
                    <img
                      src={post.mediaUrl}
                      alt={post.caption || "Instagram post"}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                      <p className="text-white text-sm line-clamp-2 font-semibold leading-snug">
                        {post.caption || "Design Inspiration"}
                      </p>
                      <p className="text-gray-300 text-xs mt-3">
                        {new Date(post.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
                <Instagram className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500 text-base sm:text-lg">Instagram posts loading...</p>
                <p className="text-gray-400 text-sm mt-2">Make sure your Instagram account is public</p>
              </div>
            )}

            {/* CTA Button */}
            <div className="flex justify-center pt-4">
              <a
                href="https://instagram.com/utxuiux"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 sm:px-10 py-3 sm:py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition-all duration-300 text-sm sm:text-base shadow-md hover:shadow-lg hover:scale-105"
              >
                <Instagram className="w-5 h-5" />
                Follow @utxuiux on Instagram
              </a>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 bg-gray-50 text-center">
          <h2 className="font-catamaran font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6">
            Found something valuable?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto mb-8 sm:mb-10">
            Know a resource, tool, or design that belongs here? I'd love to hear recommendations.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition text-sm sm:text-base"
          >
            <Zap className="w-4 h-4" />
            Share a Resource
          </a>
        </section>

      </main>
    </Layout>
  );
}
