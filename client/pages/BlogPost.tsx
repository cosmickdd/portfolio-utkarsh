import { useParams, Link } from 'react-router-dom';
import { getBlogBySlug } from '@shared/blogTopics';
import { AlertCircle, ArrowRight, Share2, Bookmark, ExternalLink, Lightbulb } from 'lucide-react';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const blog = slug ? getBlogBySlug(slug) : null;

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg border border-red-200 p-8">
            <div className="flex gap-3">
              <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Blog Post Not Found
                </h2>
                <p className="text-gray-600">
                  The blog post you're looking for doesn't exist. Check the URL and try again.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const categoryColors: Record<string, string> = {
    'ai': 'bg-blue-100 text-blue-800',
    'design': 'bg-purple-100 text-purple-800',
    'development': 'bg-green-100 text-green-800',
    'ux-ui': 'bg-pink-100 text-pink-800',
    'web': 'bg-indigo-100 text-indigo-800',
    'mobile': 'bg-orange-100 text-orange-800',
    'tools': 'bg-yellow-100 text-yellow-800',
    'trends': 'bg-cyan-100 text-cyan-800',
  };

  const difficultyColors: Record<string, string> = {
    'beginner': 'bg-green-50 text-green-700 border-green-200',
    'intermediate': 'bg-yellow-50 text-yellow-700 border-yellow-200',
    'advanced': 'bg-red-50 text-red-700 border-red-200',
  };

  return (
    <article className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-3 mb-6 flex-wrap">
            <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${categoryColors[blog.category]}`}>
              {blog.category.replace('-', ' ')}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium border capitalize ${difficultyColors[blog.difficulty]}`}>
              {blog.difficulty}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-700">
              {blog.estimatedReadTime} min read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {blog.h1}
          </h1>

          <p className="text-lg text-gray-300 mb-6">
            {blog.description}
          </p>

          <div className="flex gap-4 pt-6 border-t border-gray-700">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-gray-900 font-medium hover:bg-gray-100 transition">
              <Bookmark className="w-5 h-5" />
              Save
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white text-white hover:bg-white/10 transition">
              <Share2 className="w-5 h-5" />
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto py-16 px-4">
        {/* Engaging Introduction */}
        {blog.engagingIntro && (
          <div className="mb-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
            <p className="text-lg text-gray-800 leading-relaxed font-medium">
              {blog.engagingIntro}
            </p>
          </div>
        )}

        {/* Meta Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 pb-12 border-b">
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Category</h3>
            <p className="text-lg font-medium text-gray-900 capitalize">
              {blog.category.replace('-', ' ')}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Reading Level</h3>
            <p className="text-lg font-medium text-gray-900 capitalize">
              {blog.difficulty}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Estimated Time</h3>
            <p className="text-lg font-medium text-gray-900">
              {blog.estimatedReadTime} minutes
            </p>
          </div>
        </div>

        {/* Portfolio CTA - Featured Section */}
        {blog.portfolioCTA && (
          <div className="mb-12 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-2 border-purple-200">
            <div className="flex gap-3 mb-3">
              <Lightbulb className="w-6 h-6 text-purple-600 flex-shrink-0" />
              <h3 className="text-lg font-bold text-gray-900">See This in Action</h3>
            </div>
            <p className="text-gray-700 mb-4">
              {blog.portfolioCTA.description}
            </p>
            <Link
              to={blog.portfolioCTA.link}
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              {blog.portfolioCTA.text}
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        )}

        {/* Key Topics */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Topics Covered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {blog.sections.map((section, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition hover:shadow-md">
                <h3 className="font-semibold text-gray-900 mb-3">{section.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {section.keywords.slice(0, 3).map((kw, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded">
                      {kw}
                    </span>
                  ))}
                  {section.keywords.length > 3 && (
                    <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded">
                      +{section.keywords.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Keywords */}
        <div className="mb-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Keywords & Topics</h3>
          <div className="flex flex-wrap gap-2">
            {blog.keywords.map((kw, index) => (
              <span key={index} className="px-3 py-1 bg-white border border-blue-200 text-blue-800 text-sm rounded-full hover:bg-blue-100 transition cursor-pointer">
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Meta Description */}
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 mb-12">
          <h3 className="font-semibold text-gray-900 mb-2">Meta Description</h3>
          <p className="text-gray-700 italic">
            "{blog.metaDescription}"
          </p>
          <p className="text-xs text-gray-500 mt-2">
            {blog.metaDescription.length}/160 characters
          </p>
        </div>

        {/* CTA Section */}
        <div className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to Go Deeper?</h3>
          <p className="text-gray-700 mb-6">
            This comprehensive guide covers everything you need to know about {blog.title.toLowerCase()}.
            Ready to implement these strategies in your next project?
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-black transition"
            >
              Let's Collaborate
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/blog"
              className="px-6 py-3 border border-gray-300 text-gray-900 rounded-lg font-medium hover:bg-white transition"
            >
              Back to All Blogs
            </Link>
          </div>
        </div>

        {/* Portfolio Showcase */}
        <div className="p-8 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-lg border border-purple-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">My Work</h3>
          <p className="text-gray-700 mb-6">
            Explore my portfolio to see real-world applications of these design and development concepts in production.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              to="/projects"
              className="p-4 bg-white rounded-lg border border-gray-200 hover:border-purple-400 hover:shadow-md transition group"
            >
              <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600">View All Projects</h4>
              <p className="text-sm text-gray-600">See case studies and live implementations</p>
            </Link>
            <Link
              to="/about"
              className="p-4 bg-white rounded-lg border border-gray-200 hover:border-purple-400 hover:shadow-md transition group"
            >
              <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600">About Me</h4>
              <p className="text-sm text-gray-600">Learn about my design philosophy and approach</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Related Topics */}
      <div className="bg-gray-50 py-16 px-4 mt-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Explore More</h2>
          <p className="text-gray-600 mb-6">
            Discover more articles in the {blog.category.replace('-', ' ')} category and learn related concepts.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-black transition"
          >
            Browse All Blogs
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
