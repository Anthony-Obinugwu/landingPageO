"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AnimatedFeatureHighlightProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const AnimatedFeatureHighlight: React.FC<AnimatedFeatureHighlightProps> = ({ title, description, image, index }) => {
  return (
    <motion.div
      className={`container mx-auto px-4 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-center mb-16`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="md:w-1/2 mb-8 md:mb-0">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>
      <div className="md:w-1/2 md:px-8">
        <h3 className="text-xl md:text-2xl font-bold mb-4">{title}</h3>
        <p className="text-dark-gray mb-4">{description}</p>
        <div className="w-16 h-1 bg-tech-green"></div>
      </div>
    </motion.div>
  );
};

export default AnimatedFeatureHighlight;