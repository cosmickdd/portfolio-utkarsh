import React from "react";

export default function ContactSection() {
  return (
    <section className="w-full bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="px-6 sm:px-8 md:px-16 lg:px-20 relative">
        <div className="max-w-7xl mx-auto py-16 sm:py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 lg:gap-24 items-start">
            {/* LEFT SIDE - HEADING */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-slate-300 font-medium">Available for opportunities</span>
              </div>
              <h2 className="font-catamaran font-bold text-4xl sm:text-5xl md:text-6xl leading-tight text-white">
                Feel free to connect. Let's build impactful products together
              </h2>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
                I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            {/* RIGHT SIDE - CONTACT CARD */}
            <div className="space-y-8">
              {/* Profile Section */}
              <div className="flex items-center gap-4">
                <img
                  src="/images/image.png"
                  alt="Profile"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-white/20 flex-shrink-0 shadow-xl"
                />
                <div>
                  <p className="text-lg sm:text-xl font-bold text-white">Utkarsh</p>
                  <p className="text-sm sm:text-base text-slate-400">
                    Product Designer & Developer
                  </p>
                  <div className="flex gap-2 mt-2">
                    <a
                      href="https://linkedin.com/in/cosmickdd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/cosmickdd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Info - Improved Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="mailto:cosimckdd@gmail.com"
                  className="group relative bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 hover:bg-slate-900/70 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                      <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-slate-500 mb-1 font-medium">EMAIL</p>
                      <p className="text-sm text-white font-medium break-all group-hover:text-blue-400 transition-colors">
                        cosimckdd@gmail.com
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+919455234541"
                  className="group relative bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 hover:bg-slate-900/70 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                      <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-slate-500 mb-1 font-medium">PHONE</p>
                      <p className="text-sm text-white font-medium group-hover:text-blue-400 transition-colors">
                        +91 9455234541
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              {/* CTA Button - Enhanced */}
              <a
                href="/resume.pdf"
                download="Utkarsh_Tiwari_Resume.pdf"
                className="group relative inline-flex items-center gap-3 w-full sm:w-auto px-6 sm:px-8 py-4 bg-white hover:bg-gray-100 text-slate-900 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">Download Resume</span>
                <div className="relative z-10 w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center transition-all duration-300 group-hover:bg-slate-800">
                  <svg
                    className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-y-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-purple-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
