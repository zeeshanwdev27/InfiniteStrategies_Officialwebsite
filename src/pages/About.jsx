import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {

  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingIcons = [
    {
      src: "./float_icons/icon1.png",
      className:
        "absolute top-4 left-4 w-16 h-16 md:top-8 md:left-8 md:w-24 md:h-24 lg:top-10 lg:left-10 lg:w-40 lg:h-40",
      delay: 0,
    },
    {
      src: "./float_icons/icon2.png",
      className:
        "absolute top-32 right-4 w-16 h-16 md:top-48 md:right-8 md:w-20 md:h-20 lg:top-40 lg:right-20 lg:w-100 lg:h-100",
      delay: 0.5,
    },
  ];

  return (
    <section
      id="about"
      className="min-h-[80vh] lg:h-[80vh] bg-linear-to-br from-amber-300 via-orange-200 to-yellow-100 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Floating icons */}
      {floatingIcons.map((icon, index) => (
        <motion.img
          key={index}
          src={icon.src}
          alt="Floating icon"
          className={`${icon.className} z-10`}
          animate={{
            y: [0, -20, 0],
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
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Content */}
        <motion.div
          ref={textRef}
          className="flex-1 max-w-2xl order-2 lg:order-1"
          variants={textVariants}
          animate={textInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold font-poppins mb-4 sm:mb-6 lg:mb-8 leading-tight"
            variants={textVariants}
          >
            Creating a brand that{" "}
            <span className="bg-linear-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              sells for you.
            </span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed mb-4 sm:mb-6"
            variants={textVariants}
          >
            Infinite Strategies is a dedicated business division offering
            comprehensive business solutions. With a team of industry-leading
            experts, we empower companies to achieve growth, expand their reach,
            and drive success across multiple domains.
          </motion.p>

          <motion.p
            className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed font-semibold mb-6 sm:mb-8"
            variants={textVariants}
          >
            We guarantee top-notch quality and uphold a zero-compromise standard
            in everything we do.
          </motion.p>

          {/* CTA Button */}
          <motion.div className="mt-6 sm:mt-8 lg:mt-12" variants={textVariants}>
            <motion.button
              className="cursor-pointer relative bg-linear-to-br from-gray-900 via-black to-gray-800 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg overflow-hidden group shadow-lg hover:shadow-xl w-full sm:w-auto"
              whileHover={{
                scale: 1.05,
                background:
                  "linear-gradient(135deg, #1f2937 0%, #000 50%, #374151 100%)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => {
                  const section = document.getElementById("contact");
                  section.scrollIntoView({ behavior: "smooth" });
                }}
                className="relative z-10 flex items-center justify-center gap-3 cursor-pointer"
              >
                Get In Touch
              </button>

              {/* Subtle gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-amber-500/20 to-orange-500/20 z-0 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          ref={imageRef}
          className="flex-1 flex justify-center lg:justify-end relative order-1 lg:order-2 mb-6 sm:mb-8 lg:mb-0"
          variants={imageVariants}
          animate={imageInView ? "visible" : "hidden"}
        >
          <div className="relative">
            {/* Glow effect behind laptop */}
            <div className="absolute inset-0 bg-linear-to-r from-amber-400 to-orange-400 rounded-full blur-3xl opacity-30 -z-10 scale-110"></div>

            <motion.img
              src="./float_icons/laptop.png"
              alt="Laptop showcasing our work"
              className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl z-1000 drop-shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />

            {/* Floating elements around laptop */}
            <motion.div
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-2xl p-3 sm:p-4 shadow-2xl z-30"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-amber-500 rounded-full"></div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
