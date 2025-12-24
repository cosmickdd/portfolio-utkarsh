import { Link } from "react-router-dom";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-[1091px]">
      <div className="bg-black/70 backdrop-blur-sm border border-black rounded-[50px] md:rounded-[60px] px-6 md:px-12 lg:px-16 py-3 md:py-6 lg:py-8 shadow-xl">
        <ul className="flex items-center justify-center gap-3 md:gap-6 lg:gap-10 xl:gap-12 flex-wrap">
          <li>
            <Link
              to="/projects"
              className="text-white font-inter text-lg md:text-2xl lg:text-3xl xl:text-4xl hover:text-gray-300 transition-colors whitespace-nowrap"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white font-inter text-lg md:text-2xl lg:text-3xl xl:text-4xl hover:text-gray-300 transition-colors whitespace-nowrap"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/resources"
              className="text-white font-inter text-lg md:text-2xl lg:text-3xl xl:text-4xl hover:text-gray-300 transition-colors whitespace-nowrap"
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white font-inter text-lg md:text-2xl lg:text-3xl xl:text-4xl hover:text-gray-300 transition-colors whitespace-nowrap"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="text-white font-inter text-lg md:text-2xl lg:text-3xl xl:text-4xl hover:text-gray-300 transition-colors whitespace-nowrap"
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
