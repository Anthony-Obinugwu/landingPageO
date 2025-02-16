"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Article {
  title: string;
  excerpt: string;
  content: string;
  image: string;
}

interface AnimatedArticleProps {
  article: Article;
  index: number;
}

const AnimatedArticle = ({ article, index }: AnimatedArticleProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isExpanded]);

  return (
    <motion.div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${
        isExpanded ? "fixed inset-0 z-50 overflow-y-auto p-4 md:p-8" : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className={`relative ${isExpanded ? "h-64 md:h-96" : "h-48"}`}>
        <Image src={article.image || "/placeholder.svg"} alt={article.title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <h3 className={`text-xl font-semibold mb-3 ${isExpanded ? "text-2xl" : ""}`}>{article.title}</h3>
        <p className={`text-gray-600 mb-4 ${isExpanded ? "text-lg" : ""}`}>
          {isExpanded ? article.content : article.excerpt}
        </p>
        {isExpanded && (
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 space-y-4 sm:space-y-0">
            <button onClick={() => setIsExpanded(false)} className="text-tech-green font-semibold hover:underline">
              Close
            </button>
            <a
              href={`https://wa.me/2348038980470?text=Hi, I just read the article "${article.title}" on your website and I'm interested in learning more about this topic.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-tech-green text-white font-bold py-2 px-4 rounded-full hover:bg-white hover:text-tech-green border-2 border-tech-green transition-all duration-300 active:scale-95"
            >
              Discuss on WhatsApp
            </a>
          </div>
        )}
        {!isExpanded && (
          <button onClick={() => setIsExpanded(true)} className="text-tech-green font-semibold hover:underline">
            Read More
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default AnimatedArticle;