"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AnimatedContactInfoProps {
  icon: LucideIcon;
  text: string;
  href: string;
}

const AnimatedContactInfo: React.FC<AnimatedContactInfoProps> = ({ icon: Icon, text, href }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="flex items-center space-x-4"
    >
      <Icon className="w-6 h-6 text-tech-green" />
      <a href={href} className="hover:underline">
        {text}
      </a>
    </motion.div>
  );
};

export default AnimatedContactInfo;