"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedListItem from "./AnimatedListItem";

const coreValues = ["Innovation", "Sustainability", "Collaboration", "Excellence", "Human-Centric Design"];
const services = [
  {
    title: "Workspace Strategy & Consulting",
    description: "Office space planning & workspace optimization. Hybrid & remote-work solutions.",
    image: "/pictures/Hybrid-Workspace.jpg",
    cta: "Optimize Your Workspace",
    whatsappMessage: "I'm interested in Workspace Strategy & Consulting services.",
  },
  {
    title: "Corporate Office Interior Design & Fit-Out",
    description: "Custom office layouts, furniture & branding. Corporate headquarters, startups & innovation hubs.",
    image: "/pictures/smart.jpeg",
    cta: "Design Your Office",
    whatsappMessage: "I'd like to know more about Corporate Office Interior Design & Fit-Out services.",
  },
  {
    title: "Smart & Sustainable Workspaces",
    description: "AI-powered lighting, smart desks & automation. Eco-friendly & wellness-focused workplace designs.",
    image: "/pictures/Smart-Workspace.jpg",
    cta: "Go Smart & Sustainable",
    whatsappMessage: "I'm interested in Smart & Sustainable Workspace solutions.",
  },
  {
    title: "Custom-Built Executive Spaces",
    description: "Private offices, meeting hubs & co-working spaces. Future-forward designs for C-Suite executives.",
    image: "/pictures/custom.jpeg",
    cta: "Elevate Your Executive Space",
    whatsappMessage: "I want to learn about Custom-Built Executive Spaces.",
  },
  {
    title: "Green Village Electricity HQ (GVE)",
    description: "Future-ready hybrid workspace built for energy innovation.",
    image: "/pictures/GVE-pic.jpeg",
    cta: "Explore GVE Project",
    whatsappMessage: "I'd like more information about the Green Village Electricity HQ project.",
  },
  {
    title: "DiNovate Solutions HQ",
    description: "Agile, modern workspace built for Nigeria's top tech innovators.",
    image: "/pictures/DiNovate-pic.jpeg",
    cta: "Explore DiNovate Project",
    whatsappMessage: "Can you tell me more about the DiNovate Solutions HQ project?",
  },
];

export default function AboutUs() {
  const handleWhatsAppClick = (message: string) => {
    const phoneNumber = "+2347044227870";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  const handleCalendlyClick = () => {
    window.open("https://calendly.com/sonia-outtabox", "_blank", "noopener noreferrer");
  };

  return (
    <section className="py-16 bg-light-gray" id="about-us">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-tech-green">About</span> <span className="text-deep-blue">Us</span>
        </motion.h2>

        {/* Intro Content */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We Design Workspaces That Drive Productivity & Innovation - Transforming Offices into Future-Ready,
            High-Performance Workspaces for Corporations, Startups & Enterprises.
          </motion.p>
          
          <motion.p
            className="text-lg font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="text-tech-green">Abuja</span> | <span className="text-deep-blue">Nigeria</span> |{" "}
            <span className="text-tech-green">Africa-wide</span>
          </motion.p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <motion.button
              onClick={handleCalendlyClick}
              className="bg-tech-green text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Schedule a Free Workspace Strategy Call
            </motion.button>
            
            <motion.a
              href="#featured-projects"
              className="bg-deep-blue text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors text-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Explore Our Designs
            </motion.a>
          </div>

          <motion.h3
            className="text-2xl font-bold text-tech-green mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Why Choose Us...
          </motion.h3>
        </div>

        {/* Services Grid - Now with optimized images */}
        <div className="max-w-6xl mx-auto mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((item, index) => (
            <motion.div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300 flex flex-col justify-between p-6">
                <motion.h3
                  className="text-xl font-semibold text-white mb-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {item.title}
                </motion.h3>
                <div className="text-center">
                  <motion.p
                    className="text-white/90 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {item.description}
                  </motion.p>
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsAppClick(item.whatsappMessage);
                    }}
                    className="bg-tech-green text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-all opacity-0 group-hover:opacity-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    {item.cta}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission/Vision/Values */}
        <div className="max-w-3xl mx-auto mt-12">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-tech-green">Our Mission</h3>
            <p className="text-lg">
              To create world-class, future-forward workspaces that empower businesses and individuals to thrive in the
              evolving world of work.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-deep-blue">Our Vision</h3>
            <p className="text-lg">
              To be the leading workspace transformation company in Africa and a global benchmark for innovation in
              office design.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-tech-green">Core Values</h3>
            <ul className="list-disc list-inside text-lg">
              {coreValues.map((value, index) => (
                <AnimatedListItem key={index} value={value} index={index} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


