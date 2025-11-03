import React, { useEffect, useRef } from "react";
import { X, MapPin, Settings, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Overlay({ isOpen, setIsOpen }) {
  const overlayContentRef = useRef(null);

  // Prevent body scroll when overlay is open
  useEffect(() => {
    const body = document.body;

    if (isOpen) {
      // Prevent background scroll
      body.style.overflow = "hidden";
      body.style.touchAction = "none";
    } else {
      // Restore scroll
      body.style.overflow = "";
      body.style.touchAction = "";
    }

    return () => {
      body.style.overflow = "";
      body.style.touchAction = "";
    };
  }, [isOpen]);

  // Prevent scroll propagation
  const handleScroll = (e) => {
    e.stopPropagation();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-9999 w-full">
          {/* Enhanced backdrop with black and golden gradient */}
          <motion.div
            className="absolute inset-0 backdrop-blur-xl bg-linear-to-br from-black via-gray-900 to-amber-900/20"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />

          {/* Full-width modern panel with black and golden theme */}
          <motion.div
            className="absolute inset-0 w-full h-full bg-linear-to-br from-black via-gray-900 to-amber-900/10 text-white shadow-2xl flex flex-col overflow-hidden border border-amber-500/20"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {/* Header with improved padding for mobile */}
            <div className="px-4 sm:px-6 py-4 sm:py-6 md:py-8 flex justify-end items-center">
              <button
                onClick={() => setIsOpen(false)}
                className="lg:mr-10 cursor-pointer p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-amber-500/10 hover:bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300 group"
              >
                <X
                  className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300 group-hover:text-amber-200 group-hover:scale-110 group-hover:rotate-90 transition-all"
                  strokeWidth={2}
                />
              </button>
            </div>

            {/* Main Content Container */}
            <div
              ref={overlayContentRef}
              className="flex-1 flex flex-col lg:flex-row w-full overflow-auto"
              onScroll={handleScroll}
              onWheel={handleScroll}
              onTouchMove={handleScroll}
            >
              {/* Navigation Section - Improved spacing for mobile */}
              <div className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-amber-500/20">
                <nav className="w-full max-w-2xl">
                  <ul className="flex flex-col items-center lg:items-start gap-3 sm:gap-4 md:gap-6 lg:gap-6">
                    {[
                      "Home",
                      "About",
                      "What We Do",
                      "Portfolio",
                      "Contact",
                    ].map((item, index) => (
                      <li key={index}>
                        <button
                          onClick={() => {
                            const sectionId = item
                              .toLowerCase()
                              .replace(/\s+/g, "");
                            const section = document.getElementById(sectionId);
                            if (section) {
                              section.scrollIntoView({ behavior: "smooth" });
                            }
                            setIsOpen(false); // close overlay after click
                          }}
                          className="cursor-pointer hover:opacity-80 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white hover:text-amber-300 transition-colors duration-300 text-left w-full py-3 sm:py-4 md:py-6"
                        >
                          <span className="bg-linear-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                            {item}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Horizontal Separator - For mobile only */}
              <div className="lg:hidden w-1/2 h-px bg-linear-to-r from-transparent via-amber-500/30 to-transparent mx-4" />

              {/* Info Section - Improved spacing for mobile */}
              <div className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 ">
                <div className="w-full max-w-2xl space-y-6 sm:space-y-8 lg:space-y-12 items-center lg:items-start">
                  {/* Headlines - Responsive text sizes */}
                  <div className="space-y-3 sm:space-y-4 md:space-y-6 px-5 lg:px-0">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-linear-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                      Rule with us
                    </h1>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-amber-100">
                      Get in touch
                    </h2>
                  </div>

                  {/* Contact Info - Improved spacing */}
                  <div className="space-y-4 sm:space-y-6 lg:space-y-8 px-10 lg:px-0">
                    {/* Headquarters */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-amber-400 mt-1 sm:mt-1.5 shrink-0" />
                      <div>
                        <p className="text-base sm:text-lg md:text-xl font-semibold text-amber-200 mb-1">
                          Headquarters:
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-amber-100/80">
                          New York, USA
                        </p>
                      </div>
                    </div>

                    {/* Regional Offices */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <Settings className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-amber-400 mt-1 sm:mt-1.5 shrink-0" />
                      <div>
                        <p className="text-base sm:text-lg md:text-xl font-semibold text-amber-200 mb-1 sm:mb-2">
                          Regional & Operational Offices:
                        </p>
                        <div className="space-y-1 text-sm sm:text-base md:text-lg text-amber-100/80">
                          <p>Delaware USA, Maryland USA,</p>
                          <p>Karachi, PK & Brighton, UK</p>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-amber-400 mt-1 sm:mt-1.5 shrink-0" />
                      <div>
                        <p className="text-base sm:text-lg md:text-xl font-semibold text-amber-200 mb-1">
                          EMAIL:
                        </p>
                        <a
                          href="mailto:hello@canvasdigital.net"
                          className="underline text-sm sm:text-base md:text-lg text-amber-400 hover:text-amber-500 transition-colors duration-300 break-all"
                        >
                          info@infinitestrategies.org
                        </a>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>

            {/* Footer - Adjusted padding */}
            <div className="px-4 sm:px-6 py-3 sm:py-4 lg:py-6">
              {/* Empty footer as per your request */}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Overlay;
