import React, { useState, useMemo, useCallback } from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [containerRef, containerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Memoized portfolio data
  const cards = useMemo(() => [
    {
      image: './portfolio/website.png',
      title: 'Agency Website',
      category: 'Web Development',
      description: 'A modern agency website solution with seamless user experience',
      tags: 'React, Framer Motion, Tailwind CSS',
    },
    {
      image: './portfolio/website.png',
      title: 'Agency Website',
      category: 'UI/UX Design',
      description: 'A modern agency website solution with seamless user experience',
      tags: 'Figma, Adobe XD, Prototyping',
    },
    {
      image: './portfolio/website.png',
      title: 'Agency Website',
      category: 'Web Development',
      description: 'A modern agency website solution with seamless user experience',
      tags: 'React, Framer Motion, Tailwind CSS',
    },
    {
      image: './portfolio/website.png',
      title: 'Agency Website',
      category: 'Branding',
      description: 'A modern agency website solution with seamless user experience',
      tags: 'Logo Design, Brand Identity, Style Guide',
    },
    {
      image: './portfolio/website.png',
      title: 'Agency Website',
      category: 'Branding',
      description: 'A modern agency website solution with seamless user experience',
      tags: 'Logo Design, Brand Identity, Style Guide',
    },
    {
      image: './portfolio/website.png',
      title: 'Agency Website',
      category: 'App Development',
      description: 'A modern agency website solution with seamless user experience',
      tags: 'React Native, Firebase, Mobile App',
    },
    // Additional cards beyond 6
    {
      image: './portfolio/website.png',
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'A modern e-commerce solution with seamless user experience',
      tags: 'React, Node.js, MongoDB',
    },
    {
      image: './portfolio/website.png',
      title: 'Mobile Banking App',
      category: 'App Development',
      description: 'A secure mobile banking application',
      tags: 'React Native, Firebase, Security',
    },
    {
      image: './portfolio/website.png',
      title: 'Mobile Banking App',
      category: 'App Development',
      description: 'A secure mobile banking application',
      tags: 'React Native, Firebase, Security',
    },
    {
      image: './portfolio/website.png',
      title: 'Mobile Banking App',
      category: 'App Development',
      description: 'A secure mobile banking application',
      tags: 'React Native, Firebase, Security',
    },
  ], []);

  // Memoized categories
  const categories = useMemo(() => 
    ["All", "Web Development", "Branding", "App Development", "UI/UX Design"], 
    []
  );

  // Custom hook for responsive card limit
  const useResponsiveLimit = () => {
    const [cardLimit, setCardLimit] = useState(6);

    React.useEffect(() => {
      const checkScreenSize = () => {
        if (window.innerWidth < 640) { // Mobile
          setCardLimit(3);
        } else if (window.innerWidth < 1024) { // Tablet
          setCardLimit(4);
        } else { // Desktop
          setCardLimit(6);
        }
      };

      // Initial check
      checkScreenSize();

      // Add event listener
      window.addEventListener('resize', checkScreenSize);

      // Cleanup
      return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return cardLimit;
  };

  const cardLimit = useResponsiveLimit();

  // Optimized filter function with responsive card limit
  const filteredCards = useMemo(() => {
    const filtered = activeCategory === 'All' 
      ? cards 
      : cards.filter(card => 
          card.category.toLowerCase() === activeCategory.toLowerCase()
        );
    
    // Apply responsive card limit
    return filtered.slice(0, cardLimit);
  }, [activeCategory, cards, cardLimit]);

  // Memoized category handler
  const handleCategoryChange = useCallback((category) => {
    setActiveCategory(category);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingIcons = [
    {
      src: "./float_icons/icon2.png",
      className: "absolute top-50 right-20 w-100 h-100",
      delay: 0.5,
    },
  ];

  return (
    <section id='portfolio' className="min-h-screen bg-linear-to-br from-amber-300 via-orange-200 to-yellow-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 sm:opacity-10"></div>

      {/* Floating icons */}
      {floatingIcons.map((icon, index) => (
        <motion.img
          key={index}
          src={icon.src}
          alt="Floating icon"
          className={`${icon.className} z-10 hidden lg:block`}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            delay: icon.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        ref={containerRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 xl:py-24"
        variants={containerVariants}
        initial="hidden"
        animate={containerInView ? "visible" : "hidden"}
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6"
            variants={itemVariants}
          >
            Our <span className="bg-linear-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Golden</span> Portfolio
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-gray-800 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
            variants={itemVariants}
          >
            Showcasing premium projects that shine with excellence and innovation. Each piece 
            represents our commitment to quality and creative excellence.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20 px-2 sm:px-0"
          variants={itemVariants}
        >
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleCategoryChange(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-full font-medium transition-all duration-300 
                  border-2 text-xs sm:text-sm lg:text-base whitespace-nowrap backdrop-blur-sm
                  ${
                    activeCategory === category
                      ? "bg-linear-to-r from-orange-600 to-amber-600 border-transparent text-white shadow-lg shadow-amber-200/50"
                      : "border-amber-400 text-amber-700 bg-white/80 hover:bg-amber-50 hover:border-amber-500 hover:text-amber-800"
                  }
                `}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 xl:gap-8">
            {filteredCards.map((card, index) => (
              <PortfolioCard 
                key={`${card.category}-${index}`} 
                card={card} 
                index={index}
              />
            ))}
          </div>
          
          {/* Empty State */}
          {filteredCards.length === 0 && (
            <motion.div 
              className="text-center py-12 sm:py-16"
              variants={itemVariants}
            >
              <p className="text-lg sm:text-xl text-amber-700/70">
                No projects found in this category.
              </p>
            </motion.div>
          )}

          {/* Load More Indicator */}
          {filteredCards.length > 0 && activeCategory === 'All' && cards.length > cardLimit && (
            <motion.div 
              className="text-center mt-8 sm:mt-12"
              variants={itemVariants}
            >
              <p className="text-amber-700/70 text-sm sm:text-base">
                Showing {cardLimit} of {cards.length} projects
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}

// Separate component for individual portfolio cards
const PortfolioCard = React.memo(({ card, index }) => {
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.article 
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={cardInView ? "visible" : "hidden"}
      whileHover={{ 
        y: -6,
        transition: { type: "spring", stiffness: 300 }
      }}
      className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-amber-200/50"
    >
      {/* Image Container with Zoom Effect */}
      <div className="relative overflow-hidden">
        <motion.div
          className="overflow-hidden"
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.4 }
          }}
        >
          <motion.img
            src={card.image}
            alt={card.title}
            loading="lazy"
            className="w-full h-40 sm:h-48 md:h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
        </motion.div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-amber-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <motion.div 
          className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10"
          whileHover={{ scale: 1.05 }}
        >
          <span className="inline-block py-1.5 px-3 sm:py-2 sm:px-4 bg-linear-to-r from-amber-600 to-orange-600 text-white text-xs font-semibold rounded-full shadow-lg">
            {card.category}
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 lg:p-8 bg-white/80">
        <motion.h3 
          className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-amber-600 transition-colors duration-300 line-clamp-1"
          whileHover={{ x: 3 }}
        >
          {card.title}
        </motion.h3>
        
        <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed line-clamp-2">
          {card.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
          {card.tags.split(",").map((tag, tagIndex) => (
            <motion.span
              key={tagIndex}
              className="inline-block bg-amber-100 text-amber-700 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium border border-amber-200/50 line-clamp-1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {tag.trim()}
            </motion.span>
          ))}
        </div>

        {/* Action Button */}
        <motion.button 
          className="w-full bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 shadow-lg hover:shadow-amber-200/50 text-sm sm:text-base"
          whileHover={{ 
            scale: 1.02,
          }}
          whileTap={{ scale: 0.98 }}
        >
          View Project
        </motion.button>
      </div>
    </motion.article>
  );
});

export default Portfolio;