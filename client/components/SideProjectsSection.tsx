import React from 'react';

const sideProjects = [
  {
    id: 'time-odyssey',
    title: 'Praxy AI — your career agent',
    description: 'An AI-powered career agent providing instant, helpful insights and personalized career plans.',
    tags: ['Concept', 'Freelance'],
    image: 'https://res.cloudinary.com/dz4h0eagy/image/upload/v1785267395/ChatGPT_Image_Jul_29_2026_01_05_55_AM_qa95dq.png',
    bgColor: 'bg-[#F4EFE6]', // beige
    titleColor: 'text-gray-900',
    descColor: 'text-gray-600',
    imageClassName: 'w-[100%] h-full object-cover object-top transform transition-transform duration-700 hover:scale-105',
  },
  {
    id: 'whatsapp-redesign',
    title: 'Zive — crowdsourced fashion',
    description: 'A community-driven marketplace where users upvote fashion concepts, turning winning designs into real products with designer commissions.',
    tags: ['Mobile', 'Concept'],
    image: 'https://res.cloudinary.com/dz4h0eagy/image/upload/v1785268621/ChatGPT_Image_Jul_29_2026_01_26_22_AM_dlgley.png',
    bgColor: 'bg-[#EBF1EB]', // light green
    titleColor: 'text-gray-900',
    descColor: 'text-gray-600',
    imageClassName: 'w-[75%] h-full object-contain object-top transform transition-transform duration-700 hover:scale-105 pt-2',
  },
  {
    id: 'rumi-ai',
    title: 'Rumi AI — product management',
    description: 'An AI-powered product management app designed to streamline workflows and enhance team productivity.',
    tags: ['Mobile', 'Concept'],
    image: 'https://res.cloudinary.com/dz4h0eagy/image/upload/v1785270417/ChatGPT_Image_Jul_29_2026_01_56_37_AM_um5bf1.png',
    bgColor: 'bg-[#F0F4F8]', // light blue-gray
    titleColor: 'text-gray-900',
    descColor: 'text-gray-600',
    imageClassName: 'w-[100%] h-full object-cover object-top transform translate-y-5 transition-transform duration-700 hover:scale-105',
  }
];

export default function SideProjectsSection() {
  return (
    <section className="py-20 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Side Projects
          </h2>
          <p className="text-lg text-gray-500">
            Quick redesigns, concepts, and app teardowns I do on the side.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sideProjects.map((project) => {
            const isFullBleed = true; // Apply edge-to-edge styling to all cards
            
            return (
              <div 
                key={project.id}
                className={`relative ${project.bgColor} rounded-[2.5rem] flex flex-col overflow-hidden transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl`}
              >
                {/* Text Content Area */}
                <div className="p-8 pb-0 mb-12 z-10">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-4 py-1.5 bg-white text-gray-800 text-xs font-semibold rounded-full shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className={`text-2xl font-bold mb-4 leading-snug pr-4 ${project.titleColor || 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm leading-relaxed pr-2 ${project.descColor || 'text-gray-600'}`}>
                    {project.description}
                  </p>
                </div>

                {/* Image */}
                <div className="mt-auto flex justify-center w-full overflow-hidden rounded-b-[2.5rem] h-[320px]">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className={project.imageClassName}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
