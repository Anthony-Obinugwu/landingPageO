"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface AnimatedArticleProps {
  id: number;
  title: string;
  excerpt: string;
  index: number;
}

const AnimatedArticle: React.FC<AnimatedArticleProps> = ({ id, title, excerpt, index }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <Link href={`/blog/${id}`} legacyBehavior>
        <a className="text-tech-green font-semibold hover:underline">Read More</a>
      </Link>
    </motion.div>
  );
};

export default AnimatedArticle;