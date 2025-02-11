"use client";

import { motion } from "framer-motion";

interface AnimatedPositionProps {
  position: string;
  index: number;
  onClick: () => void;
}

const AnimatedPosition: React.FC<AnimatedPositionProps> = ({ position, index, onClick }) => {
  return (
    <motion.li
      className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition-colors duration-300"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
    >
      {position}
    </motion.li>
  );
};

export default AnimatedPosition;