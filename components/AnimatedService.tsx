/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AnimatedServiceProps {
  title: string;
  description: string;
  image: string;
  cta: string;
  whatsappMessage: string;
  index: number;
  onClick: () => void;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}

const AnimatedService: React.FC<AnimatedServiceProps> = ({
  title,
  description,
  image,
  cta,
  whatsappMessage,
  index,
  onClick,
  hoveredIndex,
  setHoveredIndex,
}) => {
  return (
    <motion.div
      className="relative h-80 rounded-lg overflow-hidden group cursor-pointer"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-70 flex flex-col justify-center items-center text-center p-6">
        <h3 className="text-xl font-bold text-white mb-2 transition-all duration-300 group-hover:-translate-y-4">
          {title}
        </h3>
        <p className="text-white font-semibold mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          {description}
        </p>
        <button
          className={`bg-tech-green text-white px-6 py-2 rounded-full transition-all duration-300 ${
            hoveredIndex === index ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
          }`}
          onClick={onClick}
        >
          {cta}
        </button>
      </div>
    </motion.div>
  );
};

export default AnimatedService;