"use client";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState, useRef } from "react";
import { Zap, Users, Lightbulb, Cpu } from "lucide-react";
import ImageSlideshow from "./ImageSlideshow"; 
import AnimatedFeature from "./AnimatedFeature";
import type { LucideIcon } from "lucide-react";

const homeMallImages = [
  {
    src: "/pictures/Home Mall (1).webp", 
    alt: "Home Mall showroom zone",
  },
  {
    src: "/pictures/Home Mall1.webp", 
    alt: "Home Mall workspace",
  },
  {
    src: "/pictures/Home Mall2.webp", 
    alt: "Home Mall collaboration area",
  },
  {
    src: "/pictures/Home Mall3.webp",
    alt: "Home Mall collaboration area",
  },
  {
    src: "/pictures/Home Mall4.webp",
    alt: "Home Mall collaboration area",
  },
  {
    src: "/pictures/Home Mall5.webp",
    alt: "Home Mall collaboration area",
  },
  {
    src: "/pictures/Home Mall6.webp",
    alt: "Home Mall collaboration area",
  },
  {
    src: "/pictures/Home Mall7.webp",
    alt: "Home Mall collaboration area",
  },
];

const eduvacityImages = [
  {
    src: "/pictures/Eduvacity1.webp",
    alt: "Eduvacity Small Office Space",
  },
  {
    src: "/pictures/Eduvacity2.webp",
    alt: "Eduvacity Small Office Space",
  },
  {
    src: "/pictures/Eduvacity3.webp",
    alt: "Eduvacity Training Center",
  },
  {
    src: "/pictures/Eduvacity4.webp",
    alt: "Eduvacity Front Desk",
  },
];

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const renderProjectSection = (
  images: { src: string; alt: string }[],
  title: string,
  location: string,
  description: string,
  features: FeatureItem[]
) => (
  <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 lg:gap-16 mb-20 md:mb-24">
    <div className="lg:w-1/2 w-full">
      <ImageSlideshow images={images} interval={5000} className="w-full" />
    </div>
    <div className="lg:w-1/2 w-full">
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-lg md:text-xl mb-6 text-gray-600">{location}</p>
      <p className="mb-6 text-gray-700 text-base md:text-lg">{description}</p>
      <ul className="space-y-4 md:space-y-6">
        {features.map((feature, index) => (
          <li key={index}>
            <AnimatedFeature
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function FeaturedProject() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-light-gray" id="featured-projects">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-gray-900">
          Featured Projects
        </h2>

        {renderProjectSection(
          homeMallImages,
          "Home Mall International Co. Ltd",
          "Central Business District, Abuja | Experience Center + Workspace Fit-Out",
          "Outtabox delivered a transformative 900 sqm design for Home Mall International Company that seamlessly merges a cutting-edge experience center with a high-performance workspace. Designed to elevate brand immersion and operational excellence, the layout redefines how retail and corporate functions coexist under one roof. The space was conceptualized to create a fluid customer journey — from curated product display zones and digital interaction pods to agile workstations and private meeting areas. Every square meter was optimized for both client experience and staff productivity.",
          [
            {
              icon: Zap, 
              title: "Immersive showroom zones with interactive displays",
              description: "Curated product displays and digital interaction pods designed to captivate customers and enhance brand immersion.",
            },
            {
              icon: Users, 
              title: "Agile workspace with collaboration zones",
              description: "Open-plan workstations, private focus booths, and team collaboration areas to boost productivity and teamwork.",
            },
            {
              icon: Lightbulb, 
              title: "Smart lighting and zoning for engagement",
              description: "Innovative ceiling lighting and spatial zoning to guide flow and create an inspiring environment.",
            },
          ]
        )}

        {renderProjectSection(
          eduvacityImages,
          "Eduvacity",
          "Global | Education Technology Platform",
          "Eduvacity is an innovative education technology platform that bridges the gap between academia and industry by offering project-based learning, professional certifications, and career acceleration programs. Designed for students and professionals, it combines hands-on training with mentorship to equip learners with in-demand skills (like AI, data science, and cloud computing) while connecting them to real-world opportunities. The platform collaborates with universities, corporations, and governments to create tailored upskilling solutions that address workforce gaps globally.",
          [
            {
              icon: Cpu, 
              title: "Industry-Aligned Certifications",
              description: "Offers accredited programs co-developed with tech leaders (e.g., AWS, Microsoft) to ensure relevance and employability.",
            },
            {
              icon: Lightbulb, 
              title: "Project-Based Learning",
              description: "Learners work on real-world case studies and capstone projects, building portfolios that showcase practical expertise.",
            },
            {
              icon: Users, 
              title: "Career Pipeline",
              description: "Direct partnerships with employers provide job placements, internships, and networking opportunities for graduates.",
            },
          ]
        )}

<div className="text-center mt-12">
  <a
    href="/projects"
    className="inline-block px-8 py-3 md:px-10 md:py-4 text-lg md:text-xl font-semibold rounded-full 
              bg-gradient-to-r from-blue-500 to-green-600 hover:from-green-600 hover:to-blue-500
              text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1
              focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-in-out"
    aria-label="Explore all projects"
  >
    Explore All Projects →
  </a>
</div>
      </div>
    </section>
  );
}