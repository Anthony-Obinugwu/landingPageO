"use client";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Why Abuja’s Top Companies Are Switching to Hybrid Workspaces (#FutureOfWork #AbujaBusiness)",
    excerpt: "The workplace is evolving, and Abuja’s leading enterprises are embracing hybrid workspaces for flexibility, productivity, and cost efficiency. Discover why hybrid models are dominating Nigeria’s capital and how you can leverage the #1 best workspace in Abuja to stay ahead.",
    image: "/pictures/Modern Workspace-2.jpeg",
  },
  {
    id: 2,
    title: "How to Maximize Productivity in a Hybrid Workspace (#WorkSmart #AbujaOffices)",
    excerpt: "Hybrid work is here to stay, but are you optimizing it? Learn proven strategies to boost efficiency in a hybrid setup and why Abuja’s premier workspace is the ideal choice for professionals who demand excellence.",
    image: "/pictures/Modern Workspace.jpeg",
  },
  {
    id: 3,
    title: "The Ultimate Guide to Networking in a Hybrid Workspace (#AbujaNetworking #CoworkingSpace)",
    excerpt: "Networking in a hybrid world requires strategy. Discover how Abuja’s #1 hybrid workspace fosters connections through curated events, community hubs, and digital tools that bridge the gap between remote and in-person collaboration.",
    image: "/pictures/koridor.jpeg",
  },
  {
    id: 4,
    title: "How Abuja's Smartest Startups Use Hybrid Workspaces to Scale Faster (#StartupAbuja #ScaleSmart)",
    excerpt: "Abuja's startup scene is rewriting the rulebook - and hybrid workspaces are their secret weapon. Discover how 83% of the capital's fastest-growing startups are leveraging flexible workspaces to secure funding 40% faster, attract top talent, and scale on demand.",
    image: "/pictures/dark office.jpeg",
  },
  {
    id: 5,
    title: "The Psychology Behind Abuja's Most Effective Hybrid Teams (#TeamSuccess #AbujaOffices)",
    excerpt: "Why do Abuja's hybrid teams report 91% job satisfaction versus just 67% in traditional offices? The answer lies in neuroscience-meets-local-culture. Explore how smart workspace design is helping teams achieve 22% faster project completion.",
    image: "/pictures/finance office.jpeg",
  },
  {
    id: 6,
    title: "Hybrid Workspaces in 2025: How Flexible Design Drives Productivity and Talent Retention",
    excerpt: "Discover how hybrid workspaces are redefining corporate success by balancing remote flexibility with in-office collaboration, backed by data-driven strategies and real-world case studies from Africa’s leading workspace innovator.",
    image: "/pictures/blogimage.jpeg",
  },
  {
    id: 7,
    title: "Smart, Sustainable Workspaces: Merging Eco-Innovation with Cutting-Edge Design",
    excerpt: "Explore how AI, biophilic elements, and circular design principles are transforming offices into eco-friendly productivity hubs, featuring actionable insights from Outtabox.work’s award-winning projects.",
    image: "/pictures/blogimage1.jpeg",
  },
  {
    id: 8,
    title: "Employee Wellness in Hybrid Work Models: Designing Offices That Prioritize Mental and Physical Health",
    excerpt: "Learn how ergonomic layouts, wellness-centric zones, and smart acoustics are becoming non-negotiables for modern offices, with insights from Outtabox.work’s transformative projects.",
    image: "/pictures/blogimage2.jpeg",
  },
  {
    id: 9,
    title: "The Future of Workspaces: AI, Nomadic Hubs, and Self-Healing Buildings",
    excerpt: "Delve into the innovations poised to dominate workspace design by 2030, from AR collaboration tools to ethical tech frameworks, as demonstrated by Outtabox.work’s visionary projects.",
    image: "/pictures/blogimage4.jpeg",
  },
];

export default function Blogs() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-9 md:pt-10">
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-6">Blog & Insights</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Discover the latest trends, strategies, and insights about hybrid workspaces in Abuja.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link 
                  key={article.id} 
                  href={`/blog/${article.id}`}
                  className="group block"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                    {/* Article Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Article Content */}
                    <div className="p-6 flex-grow">
                      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-tech-green transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <span className="inline-flex items-center text-tech-green font-medium group-hover:underline">
                        Read more
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Analytics />
      <Footer />
    </>
  );
}