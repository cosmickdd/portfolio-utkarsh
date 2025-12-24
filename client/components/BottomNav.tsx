import { Link } from "react-router-dom";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[1091px]">
      <div className="bg-black/70 backdrop-blur-sm border border-black rounded-[60px] px-8 md:px-16 py-4 md:py-8 shadow-xl">
        <ul className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12 flex-wrap">
          <li>
            <Link
              to="/projects"
              className="text-white font-inter text-xl md:text-3xl lg:text-4xl hover:text-gray-300 transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white font-inter text-xl md:text-3xl lg:text-4xl hover:text-gray-300 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/resources"
              className="text-white font-inter text-xl md:text-3xl lg:text-4xl hover:text-gray-300 transition-colors"
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white font-inter text-xl md:text-3xl lg:text-4xl hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="text-white font-inter text-xl md:text-3xl lg:text-4xl hover:text-gray-300 transition-colors"
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
