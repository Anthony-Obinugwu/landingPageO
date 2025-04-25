"use client";

import { motion } from "framer-motion";

interface AnimatedPositionProps {
  position: string;
  description: string;
  index: number;
  onClick: () => void;
}

const AnimatedPosition: React.FC<AnimatedPositionProps> = ({ 
  position, 
  description,
  index, 
  onClick 
}) => {
  return (
    <motion.li
      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      onClick={onClick}
    >
      <h3 className="font-bold text-lg text-gray-900 mb-2">{position}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.li>
  );
};

export default AnimatedPosition;