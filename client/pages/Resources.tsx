import { useState, useEffect } from "react";
import { ExternalLink, Search, Loader, ArrowUpRight, Star, Instagram } from "lucide-react";
import Layout from "@/components/Layout";
import { ResourcesSelector } from "../pages/resources-selector-rewrite";

type Category = "design" | "development" | "learning";

interface Resource {
  title: string;
  description: string;
  link: string;
  tags: string[];
  type?: "figma" | "instagram" | "repo" | "course" | "article";
  author?: string;
  image?: string;
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
      image: "https://images.unsplash.com/photo-1581092580490-1c1a69b1f5f8?w=800&h=600&fit=crop",
      tags: ["Components", "Systems", "Figma"],
      type: "figma",
    },
    {
      title: "Mobile Design Patterns",
      description: "Curated mobile UI patterns and interactions for iOS & Android.",
      link: "https://www.figma.com/community",
      tags: ["Mobile", "Patterns", "Figma"],
      type: "figma",
    },
    {
      title: "The Design of Everyday Things",
      description: "Foundational thinking on usability, affordances, and human-centered design.",
      link: "https://www.nngroup.com/books/design-everyday-things/",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop",
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
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop",
      tags: ["React", "TypeScript", "Components"],
      type: "repo",
    },
    {
      title: "Full-Stack Template",
      description: "Starter template with React, Express, TypeScript, and PostgreSQL.",
      link: "https://github.com",
      tags: ["Fullstack", "Template", "Vite"],
      type: "repo",
    },
    {
      title: "UI Utilities Library",
      description: "Collection of reusable utility functions for common web dev tasks.",
      link: "https://github.com",
      tags: ["Utilities", "JavaScript", "npm"],
      type: "repo",
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
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
      tags: ["TypeScript", "Type Safety"],
    },
  ],
  learning: [
    {
      title: "Frontend Masters",
      description: "Advanced courses taught by industry practitioners.",
      link: "https://frontendmasters.com/",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
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
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=600&fit=crop",
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

const categoryConfig = {
  design: { icon: null, label: "Design", description: "Figma files, design systems, and visual resources" },
  development: { icon: null, label: "Development", description: "Code templates, libraries, and dev tools" },
  learning: { icon: null, label: "Learning", description: "Courses, articles, and educational content" },
};

export default function Resources({ onChatOpen }: { onChatOpen?: () => void }) {
  const [category, setCategory] = useState<Category>("design");
  const [query, setQuery] = useState("");
  const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Fetch Instagram posts on mount
    fetchInstagramPosts();
  }, []);

  const fetchInstagramPosts = async () => {
    setLoadingPosts(true);
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);

      const response = await fetch("/api/instagram-posts", { signal: controller.signal });
      clearTimeout(timeout);

      if (response.ok) {
        const data = await response.json();
        if (data.posts && data.posts.length > 0) {
          setInstagramPosts(data.posts);
        }
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

  // Convert fetched Instagram posts into Resource-like items so they can be shown in the grid
  const postResources: Resource[] = instagramPosts.map(post => ({
    title: (post.caption || "Instagram Post").slice(0, 80),
    description: post.caption || "",
    link: post.permalink,
    tags: ["Instagram"],
    type: "instagram",
    image: post.mediaUrl,
  }));

  // Show instagram posts at the top for design & learning categories
  const combinedResources = (category === "design" || category === "learning")
    ? [...postResources, ...filtered]
    : filtered;

  const getTypeLabel = (type?: string) => {
    switch (type) {
      case "figma": return "Figma";
      case "repo": return "Code";
      case "course": return "Course";
      case "article": return "Article";
      case "instagram": return "Instagram";
      default: return "Link";
    }
  };

  return (
    <Layout onChatOpen={onChatOpen}>
      <main className="bg-white">

        {/* HERO - Premium with illustration */}
        <section className="px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 lg:pt-24 pb-10 sm:pb-14 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-50 via-purple-50/30 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none" />

          <div className="max-w-5xl mx-auto relative">
            <div className={`transition-all duration-700 delay-100 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 mb-5">
                <Star className="w-3 h-3 text-gray-500" />
                <p className="text-xs uppercase tracking-widest text-gray-600 font-semibold">
                  Curated Collection
                </p>
              </div>
            </div>

            <div className={`transition-all duration-700 delay-200 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <h1 className="font-catamaran font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 sm:mb-5 text-black leading-tight">
                Tools & Learning
              </h1>
            </div>

            <div className={`transition-all duration-700 delay-300 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <p className="text-base sm:text-lg text-gray-500 max-w-2xl leading-relaxed font-light">
                Design resources, development tools, and learning materials that shape my work.
              </p>
            </div>
          </div>
        </section>

        {/* CATEGORY SELECTOR  -  Using refactored component */}
        <section className="px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
          <div className="max-w-5xl mx-auto">
            <ResourcesSelector active={category} onChange={(c) => {
              setCategory(c);
              setQuery("");
            }} />
          </div>
        </section>

        {/* SEARCH + COUNT */}
        <section className="px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder={`Search ${categoryConfig[category].label.toLowerCase()}…`}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900/10 text-sm transition bg-gray-50/50 hover:bg-white focus:bg-white"
              />
            </div>
            <p className="text-xs text-gray-400 font-medium">
              {filtered.length} resource{filtered.length !== 1 ? "s" : ""}
            </p>
          </div>
        </section>

        {/* RESOURCES GRID  -  Premium Cards */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
          <div className="max-w-5xl mx-auto mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-gray-400 font-semibold">Selected resources</p>
              <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-black leading-tight">
                {categoryConfig[category].label} picks
              </h2>
            </div>
            <p className="text-sm text-gray-500 max-w-md leading-relaxed">
              Clean, practical references with real examples and fewer filler links.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {combinedResources.length > 0 ? (
              combinedResources.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  {/* Image Area - Takes up most of the card */}
                  <div className="relative flex-grow overflow-hidden bg-gray-100 min-h-[180px]">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:opacity-95 transition-opacity duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-50">
                        <div className="text-center">
                          <div className="w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center text-gray-600 font-bold mx-auto mb-2">
                            {item.title.slice(0, 1)}
                          </div>
                          <p className="text-xs text-gray-400">{getTypeLabel(item.type)}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content Area - Minimal at bottom */}
                  <div className="p-4 sm:p-5 flex-shrink-0">
                    <h3 className="font-semibold text-base text-gray-900 line-clamp-2 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-1">
                      {item.description}
                    </p>
                  </div>
                </a>
              ))
            ) : (
              <div className="col-span-1 md:col-span-2 text-center py-16">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-lg border border-gray-300 bg-white relative">
                    <div className="absolute left-1.5 right-1.5 top-1.5 h-0.5 rounded-full bg-gray-300" />
                    <div className="absolute left-1.5 right-2.5 top-3.5 h-0.5 rounded-full bg-gray-200" />
                    <div className="absolute left-1.5 right-4 top-5.5 h-0.5 rounded-full bg-gray-200" />
                  </div>
                </div>
                <p className="text-gray-500 text-base sm:text-lg font-medium">No resources found matching "{query}"</p>
                <p className="text-gray-400 text-sm mt-1">Try a different search term</p>
              </div>
            )}
          </div>
        </section>

        {/* INSTAGRAM SECTION  -  Premium dark card */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gray-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 mb-5 shadow-sm">
                <Instagram className="w-4 h-4 text-gray-600" />
                <span className="text-xs uppercase tracking-widest font-semibold text-gray-500">Daily Inspiration</span>
              </div>
              <h2 className="font-catamaran font-bold text-2xl sm:text-3xl md:text-4xl text-black mb-3">
                Latest from Instagram
              </h2>
              <p className="text-gray-500 text-sm sm:text-base max-w-xl font-light">
                Design insights and inspiration on <span className="font-semibold text-black">@utxuiux</span>
              </p>
            </div>

            {/* Instagram Posts Grid */}
            {loadingPosts ? (
              <div className="flex justify-center items-center py-16">
                <div className="text-center">
                  <Loader className="w-6 h-6 text-gray-300 animate-spin mx-auto mb-3" />
                  <p className="text-gray-400 text-sm">Loading posts...</p>
                </div>
              </div>
            ) : instagramPosts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-10">
                {instagramPosts.slice(0, 3).map((post) => (
                  <a
                    key={post.id}
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-xl aspect-square bg-gray-100 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
                  >
                    <img
                      src={post.mediaUrl}
                      alt={post.caption || "Instagram post"}
                      className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white text-sm line-clamp-2 font-medium">
                        {post.caption || "Design Inspiration"}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            ) : loadingPosts ? (
              <div className="text-center py-14 bg-white rounded-xl border border-gray-200 shadow-sm-card animate-pulse">
                <div className="w-12 h-12 rounded-xl bg-gray-100 shadow-sm flex items-center justify-center mx-auto mb-4">
                  <Instagram className="w-6 h-6 text-gray-300" />
                </div>
                <p className="text-gray-500 text-base font-medium">Instagram posts loading...</p>
                <p className="text-gray-400 text-sm mt-1">Make sure your Instagram account is public</p>
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
                <p className="text-gray-400 text-sm">Unable to load posts</p>
              </div>
            )}
            <div className="flex justify-center pt-2">
              <a
                href="https://instagram.com/utxuiux"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-900 transition-all duration-300 text-sm shadow-lg shadow-black/10 hover:-translate-y-0.5"
              >
                <Instagram className="w-4 h-4" />
                Follow @utxuiux
                <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center bg-gray-900 border-t border-gray-800">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-white mb-4">
              Found something valuable?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mb-8 font-light leading-relaxed">
              Know a resource, tool, or design that belongs here? I'd love to hear recommendations.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm"
            >
              Share a Resource
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </section>

      </main>
    </Layout>
  );
}
