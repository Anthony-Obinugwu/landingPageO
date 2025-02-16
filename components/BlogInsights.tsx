"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const articles = [
  {
    title: "The Future of Work: Why Hybrid Offices Are Here to Stay",
    excerpt: "Explore the benefits and challenges of hybrid work models and how they're shaping modern workspaces.",
    content:
      "The concept of hybrid work has gained significant traction in recent years, especially in the wake of global events that have reshaped our understanding of the workplace. This model, which combines remote work with in-office presence, offers a flexible approach that caters to the diverse needs of both employees and employers. As we look towards the future, it's becoming increasingly clear that hybrid offices are not just a temporary solution, but a lasting shift in how we approach work.",
    image: "/pictures/Hybrid-Workspace.jpg",
  },
  {
    title: "How Smart Offices Improve Productivity & Employee Well-being",
    excerpt: "Discover the latest technologies and design principles that are revolutionizing office environments.",
    content:
      "Smart offices are at the forefront of workplace innovation, leveraging cutting-edge technologies to create environments that boost productivity and enhance employee well-being. From IoT-enabled devices that optimize energy usage to AI-powered systems that personalize workspace conditions, smart offices are transforming how we interact with our work environments. This article explores the various technologies and design strategies employed in smart offices and examines their impact on productivity, employee satisfaction, and overall organizational success.",
    image: "/pictures/smart.jpeg",
  },
  {
    title: "Top 5 Trends in Workspace Design for 2025",
    excerpt:
      "Get ahead of the curve with our predictions for the most impactful office design trends in the coming years.",
    content:
      "As we approach 2025, the landscape of workspace design continues to evolve at a rapid pace. Influenced by technological advancements, changing work cultures, and a growing emphasis on employee well-being, the offices of the near future are set to look and function quite differently from those of today. This article presents our top 5 predictions for workspace design trends that we believe will dominate by 2025, including biophilic design elements, adaptive spaces, and technology-integrated environments.",
    image: "/pictures/Smart-Workspace.jpg",
  },
];

function BlogPost({ article }) {
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
      transition={{ delay: 0.1 }}
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
              href={`https://wa.me/2347044227870?text=Hi, I just read the article "${article.title}" on your website and I'm interested in learning more about this topic.`}
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
}

export default function BlogInsights() {
  return (
    <section className="py-16" id="blog-insights">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Thought Leadership - Blog & Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <BlogPost key={index} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}

