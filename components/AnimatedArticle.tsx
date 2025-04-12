"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Article {
  id: string; // Ensure the ID is a string
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
  const router = useRouter();

  const handleReadMore = () => {
    router.push(`/blog/${article.id}`); // Navigate to the blog page using the article's ID
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="relative h-48">
        <Image src={article.image || "/placeholder.svg"} alt={article.title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
        <p className="text-gray-600 mb-4">{article.excerpt}</p>
        <button
          onClick={handleReadMore}
          className="text-tech-green font-semibold hover:underline"
        >
          Read More
        </button>
      </div>
    </motion.div>
  );
};

export default AnimatedArticle;