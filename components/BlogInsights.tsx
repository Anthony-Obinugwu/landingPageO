/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedArticle from "./AnimatedArticle";

const articles = [
  {
    title: "The Future of Work: Why Hybrid Offices Are Here to Stay",
    excerpt: "Explore the benefits and challenges of hybrid work models and how they're shaping modern workspaces.",
    content:
      "The concept of hybrid work has gained significant traction in recent years, especially in the wake of global events that have reshaped our understanding of the workplace. This model, which combines remote work with in-office presence, offers a flexible approach that caters to the diverse needs of both employees and employers. As we look towards the future, it's becoming increasingly clear that hybrid offices are not just a temporary solution, but a lasting shift in how we approach work.",
    image: "/pictures/custom.jpeg",
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
    image: "/pictures/remote.jpeg",
  },
];

export default function BlogInsights() {
  return (
    <section className="py-16" id="blog-insights">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Thought Leadership - Blog & Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <AnimatedArticle key={index} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

