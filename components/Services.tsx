"use client";

import { useState } from "react";
import AnimatedService from "./AnimatedService";

const services = [
  {
    title: "Workspace Strategy & Consulting",
    description: "Tailored solutions for your unique workspace needs.",
    image: "/pictures/remote.jpeg",
    whatsappMessage: "I would like to inquire about your Workspace Strategy & Consulting services.",
  },
  {
    title: "Office Interior Design & Fit-Out",
    description: "Creating inspiring and functional office environments.",
    image: "/pictures/Interior.jpeg",
    whatsappMessage: "I'm interested in your Office Interior Design & Fit-Out services.",
  },
  {
    title: "Hybrid & Remote-Ready Workspaces",
    description: "Designing for the future of flexible work.",
    image: "/pictures/remote.jpeg",
    whatsappMessage: "I want to learn more about your Hybrid & Remote-Ready Workspace solutions.",
  },
  {
    title: "Smart & Sustainable Office Solutions",
    description: "Eco-friendly and technologically advanced office spaces.",
    image: "/pictures/smart.jpeg",
    whatsappMessage: "I'm curious about your Smart & Sustainable Office Solutions.",
  },
  {
    title: "Corporate & Commercial Space Development",
    description: "Comprehensive solutions for large-scale projects.",
    image: "/pictures/commercial.jpeg",
    whatsappMessage: "I'd like information on your Corporate & Commercial Space Development services.",
  },
  {
    title: "Custom Furniture & Workspace Accessories",
    description: "Bespoke furnishings tailored to your brand and needs.",
    image: "/pictures/custom.jpeg",
    whatsappMessage: "I'm interested in your Custom Furniture & Workspace Accessories offerings.",
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
    <section className="py-16" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedService
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              whatsappMessage={service.whatsappMessage}
              index={index}
              onClick={() => handleWhatsAppClick(service.whatsappMessage)}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

