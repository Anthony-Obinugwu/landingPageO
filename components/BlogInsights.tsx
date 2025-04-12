/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import AnimatedArticle from "./AnimatedArticle";

const articles = [
  {
    id: "1",
    title: "Why 72% of Abuja's Leading Firms Now Prefer Hybrid Workspaces (#FutureOfWork)",
    excerpt: "The workplace is evolving, and Abuja’s leading enterprises are embracing hybrid workspaces for flexibility, productivity, and cost efficiency. Discover why hybrid models are dominating Nigeria’s capital and how you can leverage the #1 best workspace in Abuja to stay ahead.",
    content:
      "",
    image: "/pictures/Level.jpg",
  },
  {
    id: "2",
    title: "The Abuja Professional's Guide to Hybrid Work Productivity (#OfficeHacksNG)",
    excerpt: "Hybrid work is here to stay, but are you optimizing it? Learn proven strategies to boost efficiency in a hybrid setup and why Abuja’s premier workspace is the ideal choice for professionals who demand excellence.",
    content:
      "",
    image: "/pictures/Level2.jpg",
  },
  {
    id: "3",
    title: "The Ultimate Guide to Networking in a Hybrid Workspace (#AbujaNetworking #CoworkingSpace)",
    excerpt: "Networking in a hybrid world requires strategy. Discover how Abuja’s #1 hybrid workspace fosters connections through curated events, community hubs, and digital tools that bridge the gap between remote and in-person collaboration.",
    content:
      "",
    image: "/pictures/Level3.jpg",
  },
];

export default function BlogInsights() {
  return (
    <section className="py-16" id="blog-insights">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Thought Leadership - Blog & Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <AnimatedArticle key={article.id} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
