"use client";

import { useState } from "react";
import AnimatedService from "./AnimatedService";

const services = [
  {
    title: "Elite Shared Office in Abuja",
    description: "Office space planning & workspace optimization. Hybrid & remote-work solutions.",
    image: "/pictures/Hybrid-Workspace.jpg",
    cta: "Optimize Your Workspace",
    whatsappMessage: "I'm interested in an elite shared office in Abuja with high-speed Wi-Fi and 24/7 access.",
    alt: "Best coworking space in Abuja with 24/7 access, fast Wi-Fi, and comfortable workstations",
  },
  {
    title: "All-Inclusive Business Offices",
    description: "Custom office layouts, furniture & branding. Corporate headquarters, startups & innovation hubs.",
    image: "/pictures/workspace-1.jpeg",
    cta: "Design Your Office",
    whatsappMessage: "I'd like to know more about all-inclusive business offices in Abuja with modern meeting rooms.",
    alt: "Fully serviced office space in Abuja with conference rooms and virtual office options",
  },
  {
    title: "Intelligent & Eco-Conscious Workspaces",
    description: "AI-powered lighting, smart desks & automation. Eco-friendly & wellness-focused workplace designs.",
    image: "/pictures/workspace-2.jpeg",
    cta: "Go Smart & Sustainable",
    whatsappMessage: "I'm interested in intelligent and eco-conscious workspaces in Abuja with automated features.",
    alt: "Top-rated business hub in Abuja offering flexible office rentals and networking events",
  },
  {
    title: "Private Suites & Corporate Lounges",
    description: "Private offices, meeting hubs & co-working spaces. Future-forward designs for C-Suite executives.",
    image: "/pictures/workspace-3.jpeg",
    cta: "Elevate Your Executive Space",
    whatsappMessage: "I want to learn about private office suites and corporate lounges in Abuja.",
    alt: "Professional shared workspace in Abuja with ergonomic seating and private meeting rooms",
  },
  {
    title: "Budget-Friendly & Trendy Offices",
    description: "Future-ready hybrid workspace built for energy innovation.",
    image: "/pictures/workspace-4.jpeg",
    cta: "Innnovate Your Workspace",
    whatsappMessage: "I'm looking for budget-friendly and trendy offices in Abuja for freelancers and startups.",
    alt: "Affordable and stylish office space in Abuja for freelancers, startups, and corporate teams",
  },
  {
    title: "Cutting-Edge Innovation Hubs",
    description: "Agile, modern workspace built for Nigeria's top tech innovators.",
    image: "/pictures/workspace-5.jpg",
    cta: "Give your workspace a tech upgrade",
    whatsappMessage: "Can you tell me more about cutting-edge innovation hubs in Abuja for entrepreneurs?",
    alt: "Innovative tech workspace in Abuja for creative professionals and entrepreneurs",
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
      </div>
    </section>
  );
}

