"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AnimatedServiceProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const AnimatedService: React.FC<AnimatedServiceProps> = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Icon className="w-12 h-12 text-tech-green mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default AnimatedService;