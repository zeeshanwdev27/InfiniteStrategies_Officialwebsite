import React from 'react';

function Portfolio() {

  const cards = [
    {
      image: './portfolio/agendrix.jpg',
      title: 'Dashboard Application',
      description: 'A modern, professional plumbing website designed for a seamless user experience.',
    },
    {
      image: './portfolio/calendly_saaswebsite.png',
      title: 'Saas Application',
      description: 'A modern agency website solution with seamless user experience',
    },
    {
      image: './portfolio/consulting_website.jpg',
      title: 'Consulting Services',
      description: 'A modern agency website solution with seamless user experience',
    },
    {
      image: './portfolio/ghost_saaswebsite.jpeg',
      title: 'Agency Website',
      description: 'A modern agency website solution with seamless user experience',
    },
    {
      image: './portfolio/ikebanavase_eccomerce.jpg',
      title: 'Eccomerce Website',
      description: 'A modern agency website solution with seamless user experience',
    },
    {
      image: './portfolio/interio_eccomerce.png',
      title: 'Eccomerce Website',
      description: 'A modern agency website solution with seamless user experience',
    },
     {
      image: './portfolio/pipe_saaswebsite.jpeg',
      title: 'Saas Application',
      description: 'A modern agency website solution with seamless user experience',
    },
      {
      image: './portfolio/saaso_saaswebsite.jpg',
      title: 'Saas Application',
      description: 'A modern agency website solution with seamless user experience',
    },
      {
      image: './portfolio/sales_dashboard.png',
      title: 'Saas Dashboard',
      description: 'A modern agency website solution with seamless user experience',
    },
  ];

  return (
    <section id='portfolio' className="h-full bg-linear-to-br from-amber-300 via-orange-200 to-yellow-100 relative overflow-hidden py-8 sm:py-12 lg:py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 sm:opacity-10"></div>

      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-24">
          <h1 className="text-2xl sm:text-3xl md:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
            Our <span className="bg-linear-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Golden</span> Portfolio
          </h1>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700 max-w-xs sm:max-w-md lg:max-w-2xl xl:max-w-3xl mx-auto leading-relaxed px-2">
            Showcasing premium projects that shine with excellence and innovation.
          </p>
        </div>

        {/* Infinite Scrolling Cards Container */}
        <div className="relative overflow-hidden py-4 sm:py-6 lg:py-8">
          {/* Gradient fade effects on sides - Responsive widths */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 lg:w-20 xl:w-32 bg-linear-to-r from-amber-400/30 to-transparent z-20"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 lg:w-20 xl:w-32 bg-linear-to-l from-amber-400/30 to-transparent z-20"></div>
          
          {/* First scrolling row */}
          <div className="scrolling-row mb-4 sm:mb-6 lg:mb-8">
            <div className="scrolling-content h-[40vh] lg:h-[45vh]">
              {[...cards, ...cards].map((card, index) => (
                <div
                  key={index}
                  className="card-item"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-[25vh] lg:h-[30vh] object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Content - Responsive padding */}
                  <div className="p-3 sm:p-4 lg:p-6 bg-white/90">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-amber-600 mb-2 sm:mb-3">
                      {card.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 leading-relaxed line-clamp-2">
                      {card.description}
                    </p>

                    {/* Tags - Responsive sizing */}
                    {/* <div className="flex flex-wrap gap-1 sm:gap-2">
                      {card.tags.split(",").map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-block bg-amber-100 text-amber-800 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-medium border border-amber-200/50"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div> */}

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second scrolling row */}
          <div className="scrolling-row-reverse">
            <div className="scrolling-content h-[40vh] lg:h-[45vh]">
              {[...cards, ...cards].map((card, index) => (
                <div
                  key={index}
                  className="card-item"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-[25vh] lg:h-[30vh] "
                      loading="lazy"
                    />
                  </div>

                  {/* Content - Responsive padding */}
                  <div className="p-3 sm:p-4 lg:p-6 bg-white/90">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-amber-600 mb-2 sm:mb-3">
                      {card.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 leading-relaxed line-clamp-2">
                      {card.description}
                    </p>

                    {/* Tags - Responsive sizing */}
                    {/* <div className="flex flex-wrap gap-1 sm:gap-2">
                      {card.tags.split(",").map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-block bg-amber-100 text-amber-800 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-medium border border-amber-200/50"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div> */}
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section - Responsive */}
        {/* <div className="text-center mt-8 sm:mt-12 lg:mt-16 xl:mt-24">
          <button className="bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-12 py-2 sm:py-3 lg:py-4 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-amber-300/50 transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </div> */}


      </div>

      <style jsx>{`
        .scrolling-row {
          overflow: hidden;
          position: relative;
        }

        .scrolling-row-reverse {
          overflow: hidden;
          position: relative;
        }

        .scrolling-content {
          display: flex;
          gap: 0.75rem; /* sm:gap-3 */
          width: max-content;
          animation: scroll 60s linear infinite;
        }

        .scrolling-row-reverse .scrolling-content {
          animation: scrollReverse 50s linear infinite;
        }

        .card-item {
          flex-shrink: 0;
          width: 16rem; /* Default for mobile */
          background: rgba(255, 255, 255, 0.95);
          border-radius: 1rem; /* sm:rounded-2xl */
          overflow: hidden;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(251, 191, 36, 0.3);
          transition: all 0.3s ease;
        }

        /* Small screens (sm: 640px+) */
        @media (min-width: 640px) {
          .scrolling-content {
            gap: 1rem;
          }
          .card-item {
            width: 18rem;
            border-radius: 1.25rem;
            box-shadow: 0 15px 35px -10px rgba(0, 0, 0, 0.15);
          }
        }

        /* Medium screens (md: 768px+) */
        @media (min-width: 768px) {
          .scrolling-content {
            gap: 1.25rem;
          }
          .card-item {
            width: 20rem;
          }
          .scrolling-content {
            animation-duration: 50s;
          }
          .scrolling-row-reverse .scrolling-content {
            animation-duration: 45s;
          }
        }

        /* Large screens (lg: 1024px+) */
        @media (min-width: 1024px) {
          .scrolling-content {
            gap: 1.5rem;
          }
          .card-item {
            width: 22rem;
            border-radius: 1.5rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }
          .scrolling-content {
            animation-duration: 40s;
          }
          .scrolling-row-reverse .scrolling-content {
            animation-duration: 35s;
          }
        }

        /* Extra large screens (xl: 1280px+) */
        @media (min-width: 1280px) {
          .card-item {
            width: 24rem;
          }
        }

        /* 2XL screens (2xl: 1536px+) */
        @media (min-width: 1536px) {
          .card-item {
            width: 26rem;
          }
        }

        .card-item:hover {
          transform: translateY(-0.5rem);
          box-shadow: 0 35px 60px -12px rgba(251, 191, 36, 0.3);
          border-color: rgba(251, 191, 36, 0.5);
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-16rem * ${cards.length} - 0.75rem * ${cards.length}));
          }
        }

        @keyframes scrollReverse {
          0% {
            transform: translateX(calc(-16rem * ${cards.length} - 0.75rem * ${cards.length}));
          }
          100% {
            transform: translateX(0);
          }
        }

        /* Responsive animation distances */
        @media (min-width: 640px) {
          @keyframes scroll {
            100% {
              transform: translateX(calc(-18rem * ${cards.length} - 1rem * ${cards.length}));
            }
          }
          @keyframes scrollReverse {
            0% {
              transform: translateX(calc(-18rem * ${cards.length} - 1rem * ${cards.length}));
            }
          }
        }

        @media (min-width: 768px) {
          @keyframes scroll {
            100% {
              transform: translateX(calc(-20rem * ${cards.length} - 1.25rem * ${cards.length}));
            }
          }
          @keyframes scrollReverse {
            0% {
              transform: translateX(calc(-20rem * ${cards.length} - 1.25rem * ${cards.length}));
            }
          }
        }

        @media (min-width: 1024px) {
          @keyframes scroll {
            100% {
              transform: translateX(calc(-22rem * ${cards.length} - 1.5rem * ${cards.length}));
            }
          }
          @keyframes scrollReverse {
            0% {
              transform: translateX(calc(-22rem * ${cards.length} - 1.5rem * ${cards.length}));
            }
          }
        }

        @media (min-width: 1280px) {
          @keyframes scroll {
            100% {
              transform: translateX(calc(-24rem * ${cards.length} - 1.5rem * ${cards.length}));
            }
          }
          @keyframes scrollReverse {
            0% {
              transform: translateX(calc(-24rem * ${cards.length} - 1.5rem * ${cards.length}));
            }
          }
        }

        @media (min-width: 1536px) {
          @keyframes scroll {
            100% {
              transform: translateX(calc(-26rem * ${cards.length} - 1.5rem * ${cards.length}));
            }
          }
          @keyframes scrollReverse {
            0% {
              transform: translateX(calc(-26rem * ${cards.length} - 1.5rem * ${cards.length}));
            }
          }
        }

        /* Pause animation on hover */
        .scrolling-row:hover .scrolling-content {
          animation-play-state: paused;
        }

        .scrolling-row-reverse:hover .scrolling-content {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

export default Portfolio;