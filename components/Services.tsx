"use client";

import { useState } from "react";
import Link from "next/link";
import AnimatedService from "./AnimatedService";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Elite Shared Office in Abuja",
    description: "Office space planning & workspace optimization. Hybrid & remote-work solutions.",
    image: "/pictures/Hybrid-Workspace.webp",
    cta: "Optimize Your Workspace",
    whatsappMessage: "I'm interested in an elite shared office in Abuja with high-speed Wi-Fi and 24/7 access.",
    alt: "Best coworking space in Abuja with 24/7 access, fast Wi-Fi, and comfortable workstations",
  },
  {
    title: "All-Inclusive Business Offices",
    description: "Custom office layouts, furniture & branding. Corporate headquarters, startups & innovation hubs.",
    image: "/pictures/workspace-1.webp",
    cta: "Design Your Office",
    whatsappMessage: "I'd like to know more about all-inclusive business offices in Abuja with modern meeting rooms.",
    alt: "Fully serviced office space in Abuja with conference rooms and virtual office options",
  },
  {
    title: "Intelligent & Eco-Conscious Workspaces",
    description: "AI-powered lighting, smart desks & automation. Eco-friendly & wellness-focused workplace designs.",
    image: "/pictures/workspace-2.webp",
    cta: "Go Smart & Sustainable",
    whatsappMessage: "I'm interested in intelligent and eco-conscious workspaces in Abuja with automated features.",
    alt: "Top-rated business hub in Abuja offering flexible office rentals and networking events",
  },
];


export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleWhatsAppClick = (message: string) => {
    const phoneNumber = "+2347044227870"; // Replace with your actual WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section className="py-16 bg-light-gray" id="services">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedService
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              cta={service.cta}
              whatsappMessage={service.whatsappMessage}
              index={index}
              onClick={() => handleWhatsAppClick(service.whatsappMessage)}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            href="/services" 
            className="inline-flex items-center text-tech-green font-semibold hover:underline transition-colors group"
          >
            View All Workspace Solutions
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

