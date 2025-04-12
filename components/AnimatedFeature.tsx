"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { forwardRef } from "react";

interface AnimatedFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const AnimatedFeature = forwardRef<HTMLDivElement, AnimatedFeatureProps>(
  ({ icon: Icon, title, description, className = "" }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex items-center gap-4 mb-4">
          <Icon className="w-8 h-8 md:w-10 md:h-10 text-tech-green flex-shrink-0" />
          <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm md:text-base">{description}</p>
      </motion.div>
    );
  }
);

AnimatedFeature.displayName = "AnimatedFeature";

export default AnimatedFeature;