import React from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function WhatWeDo() {
  const content = [
    {
      image: "./Services/crm.png",
      title: "CRM Solutions",
      description:
        "Our CRM solutions are designed to help you build lasting relationships with your customers. We streamline communication, automate key processes, and provide real-time insights into customer behavior. By integrating powerful tools and analytics, we make customer management seamless. Strengthen engagement and boost productivity with a system that works for you.",
    },
    {
      image: "./Services/amazon.png",
      title: "Amazon Marketing",
      description:
        "We help your brand stand out on Amazon through smart, data-driven marketing strategies. Our team focuses on optimizing your listings, managing ads, and driving organic growth. By improving visibility and conversions, we ensure your products reach the right audience. Let us turn your Amazon presence into a consistent sales engine.",
    },
    {
      image: "./Services/digitalmarketing.png",
      title: "Digital Marketing",
      description:
        "We craft digital marketing strategies that elevate your brand and drive measurable results. From paid campaigns to audience targeting, every step is built around your goals. Our creative approach blends innovation with performance to deliver impact. Let us help you grow your digital presence and reach new heights online.",
    },
    {
      image: "./Services/seo.png",
      title: "SEO Optimization",
      description:
        "Our SEO strategies help your business achieve higher visibility and long-term growth. We analyze your website, optimize content, and improve technical performance for top rankings. By understanding your audience and competition, we position your brand for success. Watch your organic traffic rise as your business gains authority online.",
    },
    {
      image: "./Services/contentwriting.png",
      title: "Content Writing",
      description:
        "We create engaging and SEO-friendly content that connects with your audience and reflects your brand voice. Every piece is crafted to inform, inspire, and convert readers into customers. From website copy to blogs, we write content that performs. Let your story shine through words that build trust and credibility.",
    },
    {
      image: "./Services/ssm.png",
      title: "Social Media Marketing",
      description:
        "Our social media strategies help you engage audiences and grow meaningful connections online. We design content that captures attention, tells stories, and drives action. By analyzing trends and behaviors, we maximize your reach and impact. Build a strong online community that truly represents your brand.",
    },
    {
      image: "./Services/website.png",
      title: "Website Design & Development",
      description:
        "We design and develop modern, responsive websites that bring your vision to life. Our focus is on user experience, speed, and functionality for maximum performance. Each site is crafted to align with your brand and business goals. Impress your visitors with a professional website that converts.",
    },
  ];

  return (
    <section id="whatwedo" className="min-h-screen bg-linear-to-br from-slate-50 to-slate-200 relative overflow-hidden py-16">
      {/* Animated Header */}
      <motion.div
        className="flex whitespace-nowrap mb-16"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...Array(8)].map((_, index) => (
          <h1
            key={index}
            className="inline-block text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-500 opacity-80 px-8"
          >
            What we do •
          </h1>
        ))}
      </motion.div>

      {/* Enhanced Carousel Section */}
      <div className="px-4 md:px-8 lg:px-16 mt-30">
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
              loop: true
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {content.map((data, index) => (
              <CarouselItem key={index} className="lg:basis-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8 p-6 bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-amber-200/30 mx-2">
                    {/* Content Section */}
                    <div className="content flex flex-col justify-center gap-6 order-2 lg:order-1">
                      <motion.h1
                        className="text-3xl lg:text-5xl font-bold bg-linear-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {data.title}
                      </motion.h1>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        {data.description}
                      </p>
                    </div>

                    {/* Image Section */}
                    <div className="image flex justify-center items-center order-1 lg:order-2">
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.05, rotateY: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="absolute inset-0 bg-linear-to-br from-amber-400/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                        <img
                          className="relative w-full h-auto max-w-xs lg:max-w-md drop-shadow-2xl z-10"
                          src={data.image}
                          alt={data.title}
                          loading="lazy"
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-72 h-72 bg-amber-300/10 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    </section>
  );
}

export default WhatWeDo;