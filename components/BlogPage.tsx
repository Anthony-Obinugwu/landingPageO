"use client";

import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Work: Why Hybrid Offices Are Here to Stay",
    content: "Explore the benefits and challenges of hybrid work models and how they're shaping modern workspaces...",
    image: "/images/hybrid-offices.jpg",
  },
  {
    id: 2,
    title: "How Smart Offices Improve Productivity & Employee Well-being",
    content: "Discover the latest technologies and design principles that are revolutionizing office environments...",
    image: "/images/smart-offices.jpg",
  },
  {
    id: 3,
    title: "Top 5 Trends in Workspace Design for 2025",
    content: "Get ahead of the curve with our predictions for the most impactful office design trends in the coming years...",
    image: "/images/workspace-trends.jpg",
  },
  // Add more blog posts as needed
];

const BlogPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const blogPost = blogPosts.find((post) => post.id === parseInt(id as string));

  if (!blogPost) {
    return <p>Blog post not found</p>;
  }

  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={blogPost.image}
            alt={blogPost.title}
            width={800}
            height={400}
            className="w-full h-auto rounded-lg mb-8"
          />
          <h1 className="text-4xl font-bold text-deep-blue mb-4">{blogPost.title}</h1>
          <p className="text-lg text-gray-700">{blogPost.content}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPage;