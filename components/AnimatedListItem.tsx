"use client";

import { motion } from "framer-motion";

interface AnimatedListItemProps {
  value: string;
  index: number;
}

const AnimatedListItem: React.FC<AnimatedListItemProps> = ({ value, index }) => {
  return (
    <motion.li
      className="flex items-center space-x-2"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <span className="text-tech-green">•</span>
      <span>{value}</span>
    </motion.li>
  );
};

export default AnimatedListItem;