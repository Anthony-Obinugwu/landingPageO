"use client";

import { Briefcase, PenTool, Laptop, Zap, Building, Box } from "lucide-react";
import AnimatedService from "./AnimatedService";

const services = [
  {
    icon: Briefcase,
    title: "Workspace Strategy & Consulting",
    description: "Tailored solutions for your unique workspace needs.",
  },
  {
    icon: PenTool,
    title: "Office Interior Design & Fit-Out",
    description: "Creating inspiring and functional office environments.",
  },
  {
    icon: Laptop,
    title: "Hybrid & Remote-Ready Workspaces",
    description: "Designing for the future of flexible work.",
  },
  {
    icon: Zap,
    title: "Smart & Sustainable Office Solutions",
    description: "Eco-friendly and technologically advanced office spaces.",
  },
  {
    icon: Building,
    title: "Corporate & Commercial Space Development",
    description: "Comprehensive solutions for large-scale projects.",
  },
  {
    icon: Box,
    title: "Custom Furniture & Workspace Accessories",
    description: "Bespoke furnishings tailored to your brand and needs.",
  },
];

export default function Services() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedService
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

