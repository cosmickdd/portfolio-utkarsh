import { Mail, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Utkarsh Tiwari</h3>
            <p className="text-gray-400 text-sm max-w-xs">
              Designer + Engineer crafting digital experiences with clarity and purpose.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">Links</h4>
            <ul className="space-y-2">
              <li><a href="/projects" className="text-gray-400 hover:text-white text-sm transition-colors">Projects</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/utkarshtiwari1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:portfolio@example.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/utxuiux" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <p className="text-gray-400 text-sm">© 2026 Utkarsh Tiwari. Built with React, TypeScript, and Tailwind CSS.</p>
          <div className="flex items-center gap-6 md:justify-self-end">
            <a href="https://twitter.com/cosmickdd" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">Twitter</a>
            <a href="https://linkedin.com/in/cosmickdd" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/cosmickdd" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}