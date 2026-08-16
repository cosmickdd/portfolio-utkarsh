import React from 'react';

const experiences = [
  {
    id: "greenpista",
    date: "AUG 2026 — PRESENT",
    company: "Greenpista",
    logo: "/images/companies/greenpista.png",
    roles: [
      { title: "UI/UX Designer", duration: "" }
    ],
    description: "",
    tags: ["User Interface Design", "User Experience (UX)"]
  },
  {
    id: "abhyaz",
    date: "JUL 2026 — AUG 2026",
    company: "Abhyaz | Authorized Zoho Implementation Partner",
    logo: "/images/companies/abhyaz.png",
    roles: [
      { title: "UI/UX designer Intern", duration: "" }
    ],
    description: "",
    tags: ["User Interface Design", "User Experience (UX)", "+3 skills"]
  },
  {
    id: "nudgity-labs",
    date: "JUN 2026 — JUL 2026",
    company: "Nudgity Labs",
    logo: "/images/companies/nudgity.png",
    roles: [
      { title: "UI/UX Designer Intern", duration: "" }
    ],
    description: "",
    tags: ["User Experience (UX)", "User Interface Design"]
  },
  {
    id: "ai-interview-agent",
    date: "NOV 2025 — APR 2026",
    company: "AI Interview Agent",
    logo: "/images/companies/aiinterviewagents.png",
    roles: [
      { title: "Product Designer", duration: "" }
    ],
    description: "I craft user-centered digital experiences that balance aesthetics, usability, and business goals. I collaborate with cross-functional teams to turn ideas into intuitive designs and seamless interfaces.",
    tags: ["User Interface Design", "UX Research", "+4 skills"]
  },
  {
    id: "akgec",
    date: "NOV 2024 — PRESENT",
    company: "Cloud Computing Cell AKGEC",
    logo: "/images/companies/akgec.png",
    roles: [
      { title: "Product Designer", duration: "Nov 2024 - Present · 1 yr 9 mos" },
      { title: "Trainee", duration: "Nov 2024 - Nov 2025 · 1 yr 1 mo" }
    ],
    description: "Drove UX strategy and interface design for digital platforms, technical events, and internal tools, enhancing user satisfaction.",
    tags: ["Product & UX Design", "User Experience Design (UED)", "+1 skill"]
  }
];

export default function ExperienceSection() {
  return (
    <section className="py-20 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">

          {/* Left Column: Timeline */}
          <div className="relative pt-8">
            {/* Stick to the very top, using padding to push the text down. This naturally creates a solid white block that covers the entire gap! */}
            <div className="sticky top-0 z-40 bg-white pt-24 pb-6 -mt-24 mb-4 -mx-6 px-6">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                Work Experience
              </h2>

              {/* Fade out gradient to smoothly mask timeline items below */}
              <div className="absolute top-full -left-6 -right-6 h-20 bg-gradient-to-b from-white to-transparent pointer-events-none" />
            </div>

            <div className="relative z-0 border-l border-gray-200 ml-3 mt-16">
              {experiences.map((exp, index) => (
                <div key={exp.id} className={`relative pl-8 sm:pl-10 ${index !== experiences.length - 1 ? 'pb-16' : ''}`}>
                  {/* Timeline Logo */}
                  <div className="absolute w-10 h-10 bg-white rounded-full -left-[21px] top-0 ring-4 ring-white shadow-sm overflow-hidden border border-gray-100 flex items-center justify-center">
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                  </div>

                  {/* Date & Line */}
                  <div className="flex items-center gap-4 mb-3 pt-2">
                    <span className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
                      {exp.date}
                    </span>
                    <div className="h-px bg-gray-200 flex-grow" />
                  </div>

                  {/* Company Name */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {exp.company}
                  </h3>

                  {/* Roles */}
                  {exp.roles.length > 0 && (
                    <div className="mb-4 space-y-2">
                      {exp.roles.map((role, i) => (
                        <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                            <span className="font-bold text-gray-800 text-sm">{role.title}</span>
                          </div>
                          {role.duration && (
                            <span className="text-xs text-gray-400 font-medium tracking-wide hidden sm:inline-block ml-1">
                              {role.duration}
                            </span>
                          )}
                          {role.duration && (
                            <span className="text-xs text-gray-400 font-medium tracking-wide sm:hidden pl-3.5">
                              {role.duration}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-gray-500 leading-relaxed mb-5 text-sm sm:text-base">
                    {exp.description}
                  </p>

                  {/* Tags */}
                  {exp.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 bg-gray-50 border border-gray-100 text-gray-700 text-xs font-semibold rounded-full shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Photo Collage (Sticky) */}
          <div className="hidden lg:flex sticky top-32 self-start items-center justify-center h-[700px] w-full">

            {/* Top Polaroid */}
            <div className="absolute top-16 left-12 w-[340px] transform -rotate-[5deg] z-10 transition-transform hover:scale-105 duration-500 hover:z-30">
              <div className="bg-white p-4 pb-16 rounded-sm shadow-2xl relative border border-gray-100">
                <img
                  src="https://res.cloudinary.com/dz4h0eagy/image/upload/v1785265840/2b7b7bff-77bb-48f2-a3ea-e23399d9ee09_uyfd3t.png"
                  alt="Team"
                  className="w-full h-auto rounded-sm object-cover aspect-[4/3]"
                />

                {/* Decoration: User's unified Safety Pin + Starburst PNG */}
                <div className="absolute -top-16 -right-16 w-56 h-40 z-30 pointer-events-none drop-shadow-xl transform rotate-12">
                  <img
                    src="/images/projects/safetypin.png"
                    alt="Safety Pin and Star"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Polaroid */}
            <div className="absolute top-64 right-12 w-[340px] transform rotate-[4deg] z-20 transition-transform hover:scale-105 duration-500 hover:z-30">
              <div className="bg-white p-4 pb-16 rounded-sm shadow-2xl relative border border-gray-100">
                <img
                  src="https://res.cloudinary.com/dz4h0eagy/image/upload/v1785260138/z_vd6gyq.jpg"
                  alt="Desk setup"
                  className="w-full h-auto rounded-sm object-cover aspect-[4/3]"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
