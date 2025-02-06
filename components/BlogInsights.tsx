"use client";

import AnimatedArticle from "./AnimatedArticle";

const articles = [
  {
    title: "The Future of Work: Why Hybrid Offices Are Here to Stay",
    excerpt: "Explore the benefits and challenges of hybrid work models and how they're shaping modern workspaces.",
  },
  {
    title: "How Smart Offices Improve Productivity & Employee Well-being",
    excerpt: "Discover the latest technologies and design principles that are revolutionizing office environments.",
  },
  {
    title: "Top 5 Trends in Workspace Design for 2025",
    excerpt:
      "Get ahead of the curve with our predictions for the most impactful office design trends in the coming years.",
  },
];

export default function BlogInsights() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Thought Leadership - Blog & Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <AnimatedArticle
              key={index}
              title={article.title}
              excerpt={article.excerpt}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

