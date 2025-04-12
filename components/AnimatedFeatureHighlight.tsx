"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { forwardRef } from "react";

interface AnimatedFeatureHighlightProps {
  title: string;
  description: string;
  image: string;
  index: number;
  className?: string;
}

const AnimatedFeatureHighlight = forwardRef<HTMLDivElement, AnimatedFeatureHighlightProps>(
  ({ title, description, image, index, className = "" }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 lg:px-8 flex flex-col ${
          index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-8 md:gap-12 lg:gap-16 mb-16 ${className}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
      >
        <div className="md:w-1/2 w-full aspect-video relative">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="rounded-lg shadow-lg object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            priority={index < 2} // Only prioritize first two images
          />
        </div>
        <div className="md:w-1/2 w-full md:px-4">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
            {title}
          </h3>
          <p className="text-gray-600 mb-6 text-base md:text-lg">{description}</p>
          <div className="w-16 h-1 bg-tech-green"></div>
        </div>
      </motion.div>
    );
  }
);

AnimatedFeatureHighlight.displayName = "AnimatedFeatureHighlight";

export default AnimatedFeatureHighlight;