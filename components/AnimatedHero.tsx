"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedHero() {
  // Image optimization specs
  const heroImage = {
    src: "/pictures/hero-image.jpeg", 
    alt: "Modern workspace design by Outtabox",
    width: 2880, // Original width
    height: 1620, // Original height (16:9 ratio)
    quality: 85, // Optimal compression
    priority: true, // Preload for LCP
  };

  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden">
      {/* Background Image with Optimized Settings */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority={heroImage.priority}
          quality={heroImage.quality}
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
      </div>

      {/* Animated Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Future Forward Workspaces <span className="text-tech-green">Workspaces</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-lg md:text-xl text-white/90 mb-8"
            >
              #1 Future Forward Workspaces designer in Abuja, Nigeria
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact-us"
                className="bg-tech-green hover:bg-tech-green/90 text-white font-bold py-3 px-8 rounded-full text-center transition-colors"
              >
                Get Started
              </a>
              <a
                href="#featured-projects"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold py-3 px-8 rounded-full text-center transition-colors"
              >
                View Projects
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center"
        >
          <span className="text-white text-sm mb-2">Scroll</span>
          <div className="w-5 h-8 border-2 border-tech-green rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 5], opacity: [0.5, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
              className="w-1 h-2 bg-tech-green rounded-full mt-1"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
