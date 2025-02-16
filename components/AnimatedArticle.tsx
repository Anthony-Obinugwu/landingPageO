
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AnimatedArticle = ({ article, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${
        isExpanded ? "fixed inset-0 z-50 overflow-y-auto" : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="relative h-48">
        <Image src={article.image} alt={article.title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
        <p className="text-gray-600 mb-4">{isExpanded ? article.content : article.excerpt}</p>
        <button onClick={() => setIsExpanded(!isExpanded)} className="text-tech-green font-semibold hover:underline">
          {isExpanded ? "Close" : "Read More"}
        </button>
      </div>
    </motion.div>
  );
};

export default AnimatedArticle;