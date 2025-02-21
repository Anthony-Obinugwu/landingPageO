/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import AnimatedArticle from "./AnimatedArticle";

const articles = [
  {
    title: "How Modern Office Spaces Boost Productivity: A Design-First Approach",
    excerpt: "A well-designed office isn’t just about aesthetics; it directly impacts productivity and employee well-being. Discover how modern office layouts enhance focus and collaboration.",
    content:
      "A thoughtfully designed office can make all the difference in employee efficiency and job satisfaction. Today’s workplaces prioritize functionality, comfort, and innovation to foster creativity and seamless collaboration.\n\n### Key Elements of a Productive Office Space\n- **Ergonomics & Comfort:** Adjustable desks, supportive chairs, and optimal lighting reduce strain and enhance productivity.\n- **Biophilic Design:** Incorporating greenery, natural light, and outdoor-inspired elements improves focus and reduces stress.\n- **Flexible Layouts:** Open spaces, breakout zones, and quiet rooms cater to different work styles.\n- **Technology Integration:** Smart offices with automated lighting, noise control, and digital collaboration tools streamline workflows.\n\nBy designing with productivity in mind, businesses can create an environment where employees thrive.",
    image: "/pictures/Level.jpg",
  },
  {
    title: "The Future of Office Spaces: Trends Shaping Work Environments in 2025",
    excerpt: "The office landscape is evolving rapidly. From hybrid workspaces to sustainable designs, here’s what’s shaping the future of work in 2025.",
    content:
      "As businesses adapt to changing work cultures, office spaces must evolve to meet new demands. Here are some key trends defining the future of workplaces.\n\n### Top Office Space Trends for 2025\n- **Hybrid Workspaces:** Offices are shifting towards flexible designs that support both remote and in-person collaboration.\n- **Smart Office Technology:** IoT-powered spaces with AI-driven climate control, lighting, and occupancy sensors are on the rise.\n- **Sustainable Design:** Energy-efficient materials, solar panels, and waste reduction initiatives are becoming standard.\n- **Wellness-Centric Spaces:** More companies are integrating relaxation areas, fitness zones, and mental wellness programs into office design.\n\nStaying ahead of these trends ensures a workplace that enhances efficiency and attracts top talent.",
    image: "/pictures/Level2.jpg",
  },
  {
    title: "Finding the Perfect Office Space: What Businesses Should Consider",
    excerpt: "Choosing the right office space is crucial for business growth. Here’s what to keep in mind when selecting a workspace.",
    content:
      "Selecting an office space isn’t just about location; it’s about ensuring a perfect fit for your team’s needs and future growth. Here are essential factors to consider:\n\n### Key Considerations for Office Selection\n- **Location & Accessibility:** Proximity to clients, public transport, and key business hubs matters.\n- **Scalability:** Ensure the space can accommodate future growth without frequent relocations.\n- **Amenities & Infrastructure:** High-speed internet, meeting rooms, and common areas enhance the work experience.\n- **Budget & Lease Terms:** Factor in costs beyond rent, including utilities, maintenance, and flexible lease options.\n\nA well-chosen office space sets the foundation for success and employee satisfaction.",
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
            <AnimatedArticle key={index} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
