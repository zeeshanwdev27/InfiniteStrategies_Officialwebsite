import React, { useRef, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";

function HeroSection() {
  const videoRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const lenisRef = useRef(null);
  const rafIdRef = useRef(null);

  // --- Initialize Lenis (smooth scroll) ---
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: false,
    });
    
    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    };
    rafIdRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      lenis.destroy();
    };
  }, []);

  // --- Load video metadata and preload ---
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => {
      const videoDuration = video.duration || 0;
      setDuration(videoDuration);
      video.currentTime = 0;
      
      // Preload the entire video for fast seeking
      video.preload = "auto";
      console.log("Video duration:", videoDuration);
    };

    const handleCanPlayThrough = () => {
      setIsVideoReady(true);
      console.log("Video is ready for fast seeking");
    };

    video.addEventListener("loadedmetadata", handleLoaded);
    video.addEventListener("canplaythrough", handleCanPlayThrough);
    
    // Force video to load more aggressively
    video.load();

    if (video.readyState >= 1) handleLoaded();

    return () => {
      video.removeEventListener("loadedmetadata", handleLoaded);
      video.removeEventListener("canplaythrough", handleCanPlayThrough);
    };
  }, []);

  // --- Optimized fast scroll video sync ---
  useEffect(() => {
    if (!isVideoReady || !duration) return;

    const video = videoRef.current;
    if (!video) return;

    let animationFrameId;
    let seekTimeout = null;

    const updateVideoTime = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight * 5;
      const progress = Math.min(scrollY / heroHeight, 1);
      
      if (video.readyState >= 2) {
        const targetTime = duration * progress;
        
        // Clear any pending seek
        if (seekTimeout) {
          clearTimeout(seekTimeout);
        }

        // Immediate seek for fast scrolling - don't wait for smooth transitions
        if (Math.abs(targetTime - video.currentTime) > 0.1) {
          video.currentTime = targetTime;
        }
      }
      
      animationFrameId = requestAnimationFrame(updateVideoTime);
    };

    animationFrameId = requestAnimationFrame(updateVideoTime);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (seekTimeout) {
        clearTimeout(seekTimeout);
      }
    };
  }, [isVideoReady, duration]);

  return (
    <>
      {/* Hero Section - Tall section with video that plays as you scroll */}
      <section id='home' className="relative" style={{ height: "500vh" }}>
        {/* Sticky Video Container */}
        <div className="sticky top-0 h-screen overflow-hidden">

          {/* Background Video */}
          <div className="absolute inset-0 z-10">
            <video
              ref={videoRef}
              src="./bgvideo/bg-video.mp4"
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
              style={{
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
              }}
            />
            
            {/* Loading state */}
            {!isVideoReady && (
              <div className="absolute inset-0 bg-black flex items-center justify-center z-20">
                <div className="text-white text-sm sm:text-lg px-4 text-center">
                  Loading video for smooth playback...
                </div>
              </div>
            )}
            
            {/* Video overlay gradient */}
            <div className="absolute inset-0 bg-linear-to-b from-black/80 via-transparent to-black/90 z-15" />
          </div>

          {/* Hero Text */}
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center text-white px-4 sm:px-6">
            <div className="w-full max-w-4xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 font-poppins">
                Infinite Strategies
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90 max-w-2xl mx-auto">
                Creating brands that captivate and convert
              </p>
              <div className="mt-6 sm:mt-8 animate-bounce">
                <div className="text-sm font-bold sm:text-sm opacity-70 px-4">
                  {isVideoReady ? "Scroll fast to see instant video response" : "Loading..."}
                </div>
              </div>
            </div>
          </div>
          
          {/* Mouse Effect - Moved inside sticky container and positioned at bottom */}
          <motion.div
            className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
              <motion.div
                className="w-1 h-2 sm:h-3 bg-white rounded-full mt-1 sm:mt-2"
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;