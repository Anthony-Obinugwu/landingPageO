"use client";

import { motion } from "framer-motion";

interface AnimatedPositionProps {
  position: string;
  index: number;
}

const AnimatedPosition: React.FC<AnimatedPositionProps> = ({ position, index }) => {
  return (
    <motion.li
      className="bg-white p-4 rounded-lg shadow-md"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      {position}
    </motion.li>
  );
};

export default AnimatedPosition;