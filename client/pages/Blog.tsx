import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { blogTopics, getAllCategories, searchBlogs } from '@shared/blogTopics';
import { Search, Filter, BookOpen, TrendingUp } from 'lucide-react';
import Layout from "@/components/Layout";

export default function Blog({ onChatOpen }: { onChatOpen?: () => void }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

  const categories = getAllCategories();

  const filteredBlogs = useMemo(() => {
    let filtered = searchQuery ? searchBlogs(searchQuery) : blogTopics;

    if (selectedCategory) {
      filtered = filtered.filter((blog) => blog.category === selectedCategory);
    }

    if (selectedDifficulty) {
      filtered = filtered.filter((blog) => blog.difficulty === selectedDifficulty);
    }

    return filtered.sort((a, b) => a.id - b.id);
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  const categoryColors: Record<string, string> = {
    'ai': 'bg-blue-100 text-blue-800 hover:bg-blue-200',
    'design': 'bg-purple-100 text-purple-800 hover:bg-purple-200',
    'development': 'bg-green-100 text-green-800 hover:bg-green-200',
    'ux-ui': 'bg-pink-100 text-pink-800 hover:bg-pink-200',
    'web': 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200',
    'mobile': 'bg-slate-100 text-slate-800 hover:bg-slate-200',
    'tools': 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
    'trends': 'bg-cyan-100 text-cyan-800 hover:bg-cyan-200',
  };

  const difficultyColors: Record<string, string> = {
    'beginner': 'text-green-700 bg-green-50',
    'intermediate': 'text-yellow-700 bg-yellow-50',
    'advanced': 'text-red-700 bg-red-50',
  };

  const categoryStats = categories.map((cat) => ({
    category: cat,
    count: blogTopics.filter((b) => b.category === cat).length,
  }));

  return (
    <Layout onChatOpen={onChatOpen}>
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-8 h-8" />
              <span className="text-sm font-semibold uppercase tracking-wider opacity-75">
                Expert Insights & Guides
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Design & Development Mastery
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-8">
              100+ comprehensive guides covering AI, design trends, web development, mobile apps, and emerging technologies. Written for designers and developers who want to stay ahead of the curve.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                to="/contact"
                className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Work With Me
              </Link>
              <Link
                to="/projects"
                className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search blogs by keyword, title, or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-500/20 transition"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Category Filter */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Filter className="w-5 h-5 text-gray-600" />
                <h3 className="font-semibold text-gray-900">Categories</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                    selectedCategory === null
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  All Categories
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition capitalize ${
                      selectedCategory === category
                        ? `${categoryColors[category]} border-2 border-current`
                        : `${categoryColors[category]} opacity-60 hover:opacity-100`
                    }`}
                  >
                    {category.replace('-', ' ')} ({categoryStats.find((s) => s.category === category)?.count || 0})
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Filter */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Filter className="w-5 h-5 text-gray-600" />
                <h3 className="font-semibold text-gray-900">Difficulty Level</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSelectedDifficulty(null)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                    selectedDifficulty === null
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  All Levels
                </button>
                {['beginner', 'intermediate', 'advanced'].map((difficulty) => (
                  <button
                    key={difficulty}
                    onClick={() => setSelectedDifficulty(difficulty)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition capitalize ${
                      selectedDifficulty === difficulty
                        ? `${difficultyColors[difficulty]} border-2 border-current font-semibold`
                        : `${difficultyColors[difficulty]} opacity-60 hover:opacity-100`
                    }`}
                  >
                    {difficulty}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-900 font-medium">
              Showing {filteredBlogs.length} of {blogTopics.length} blogs
              {searchQuery && ` matching "${searchQuery}"`}
              {selectedCategory && ` in ${selectedCategory.replace('-', ' ')}`}
              {selectedDifficulty && ` at ${selectedDifficulty} level`}
            </p>
          </div>

          {/* Blog Grid */}
          {filteredBlogs.length > 0 ? (
            <>
              {/* Featured Section - Show only when viewing all blogs */}
              {!searchQuery && !selectedCategory && !selectedDifficulty && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Blogs</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {filteredBlogs.slice(0, 2).map((blog) => (
                      <Link
                        key={blog.id}
                        to={`/blog/${blog.slug}`}
                        className="group bg-white rounded-lg border-2 border-purple-200 overflow-hidden hover:border-purple-400 transition hover:shadow-xl"
                      >
                        <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-4 gap-2">
                            <span className={`px-3 py-1 rounded-full text-sm font-bold capitalize whitespace-nowrap ${categoryColors[blog.category]}`}>
                              {blog.category.replace('-', ' ')}
                            </span>
                            <span className={`text-sm font-bold capitalize ${difficultyColors[blog.difficulty]}`}>
                              {blog.difficulty}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition line-clamp-2">
                            {blog.title}
                          </h3>

                          {/* Description */}
                          <p className="text-gray-700 mb-4 line-clamp-2">
                            {blog.description}
                          </p>

                          {/* Keywords */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {blog.keywords.slice(0, 4).map((kw, i) => (
                              <span key={i} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded">
                                {kw}
                              </span>
                            ))}
                          </div>

                          {/* Footer */}
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">{blog.estimatedReadTime} min read</span>
                            <span className="text-purple-600 font-bold group-hover:translate-x-1 transition">
                              Read More →
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {searchQuery || selectedCategory || selectedDifficulty ? 'Results' : 'All Blogs'}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogs.map((blog) => (
                  <Link
                    key={blog.id}
                    to={`/blog/${blog.slug}`}
                    className="group bg-white rounded-lg border border-gray-200 hover:border-purple-400 transition overflow-hidden hover:shadow-lg"
                  >
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-3 gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold capitalize whitespace-nowrap ${categoryColors[blog.category]}`}>
                          {blog.category.replace('-', ' ')}
                        </span>
                        <span className={`text-xs font-semibold capitalize ${difficultyColors[blog.difficulty]}`}>
                          {blog.difficulty}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition line-clamp-2">
                        {blog.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {blog.description}
                      </p>

                      {/* Keywords */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {blog.keywords.slice(0, 3).map((kw, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {kw}
                          </span>
                        ))}
                        {blog.keywords.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            +{blog.keywords.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-200">
                        <span>{blog.estimatedReadTime} min read</span>
                        <span className="text-purple-600 font-semibold group-hover:translate-x-1 transition">
                          Read →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
              <p className="text-xl text-gray-600 mb-4">No blogs found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null);
                  setSelectedDifficulty(null);
                }}
                className="px-6 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-black transition"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Statistics Section */}
        <div className="bg-gray-50 py-12 px-4 mt-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Blog Network Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                <p className="text-4xl font-bold text-gray-900">{blogTopics.length}</p>
                <p className="text-gray-600 text-sm mt-2">Total Blogs</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                <p className="text-4xl font-bold text-gray-900">{categories.length}</p>
                <p className="text-gray-600 text-sm mt-2">Categories</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                <p className="text-4xl font-bold text-gray-900">
                  {Math.round(blogTopics.reduce((a, b) => a + b.estimatedReadTime, 0) / blogTopics.length)}
                </p>
                <p className="text-gray-600 text-sm mt-2">Avg Read Time (min)</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                <p className="text-4xl font-bold text-gray-900">
                  {blogTopics.reduce((a, b) => a + b.keywords.length, 0)}
                </p>
                <p className="text-gray-600 text-sm mt-2">Total Keywords</p>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Info Section */}
        <div className="max-w-6xl mx-auto px-4 py-12 mb-12">
          <div className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">SEO Strategy Behind Hidden Blogs</h2>
            <p className="text-gray-700 mb-6">
              These 100 hidden blogs form a comprehensive SEO network designed to rank for high-value keywords across design, development, and tech trends. Each blog is optimized for search engines with proper H1/H2 structure, internal linking, and keyword targeting while maintaining natural, valuable content for readers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-2">Keyword Coverage</h3>
                <p className="text-sm text-gray-600">
                  Targets 300+ relevant keywords across design, development, AI, and emerging tech trends.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-2">Content Quality</h3>
                <p className="text-sm text-gray-600">
                  1,200+ words per blog with structured sections, examples, and actionable insights.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-2">Internal Linking</h3>
                <p className="text-sm text-gray-600">
                  Strategic internal links to portfolio pages and related blogs for improved rankings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
