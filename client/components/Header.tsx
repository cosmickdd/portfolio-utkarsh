import { Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-black py-6 px-8 md:px-16 shadow-lg">
      <div className="max-w-[1900px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 relative">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="white"
                strokeWidth="3"
              />
              <circle
                cx="50"
                cy="50"
                r="30"
                fill="none"
                stroke="white"
                strokeWidth="3"
              />
              <circle
                cx="50"
                cy="50"
                r="15"
                fill="none"
                stroke="white"
                strokeWidth="3"
              />
              <line
                x1="50"
                y1="5"
                x2="50"
                y2="25"
                stroke="white"
                strokeWidth="3"
              />
              <line
                x1="50"
                y1="75"
                x2="50"
                y2="95"
                stroke="white"
                strokeWidth="3"
              />
              <line
                x1="5"
                y1="50"
                x2="25"
                y2="50"
                stroke="white"
                strokeWidth="3"
              />
              <line
                x1="75"
                y1="50"
                x2="95"
                y2="50"
                stroke="white"
                strokeWidth="3"
              />
            </svg>
          </div>
          <h1 className="text-white font-inter text-xl md:text-2xl font-semibold tracking-wider">
            COSMICKDD
          </h1>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 md:gap-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>
      </div>
    </header>
  );
}
