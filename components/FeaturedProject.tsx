"use client";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState, useRef, useCallback } from "react";
import { Sun, Users, Leaf, Zap, Cpu, Lightbulb, PlugZap2 } from "lucide-react";
import ImageSlideshow from "./ImageSlideshow"; 
import AnimatedFeature from "./AnimatedFeature";
import type { LucideIcon } from "lucide-react";


const gveVideo = "https://www.youtube.com/embed/-vL4HXeWeyg";

const areaiImages = [
  {
    src: "/pictures/Aeai-1.jpg",
    alt: "Areai coworking space",
  },
  {
    src: "/pictures/Areai-2.jpeg",
    alt: "Areai office space",
  },
  {
    src: "/pictures/Areai-3.jpeg",
    alt: "Areai meeting rooms",
  },
  {
    src: "/pictures/Areai-4.jpeg",
    alt: "Areai workspace",
  },
  {
    src: "/pictures/Areai-5.jpeg",
    alt: "Areai facilities",
  },
  {
    src: "/pictures/Areai-6.jpeg",
    alt: "Areai business center",
  },
];

const dnovateImages = [
  {
    src: "/pictures/DiNovate3.jpeg",
    alt: "DNovate lounge area",
  },
  {
    src: "/pictures/DiNovate2.jpeg",
    alt: "DNovate workspace",
  },
  {
    src: "/pictures/DiNovate1.jpeg",
    alt: "DNovate meeting area",
  },
];

const homeMallImages = [
  {
    src: "/pictures/Home Mall.png", 
    alt: "Home Mall showroom zone",
  },
  {
    src: "/pictures/Home Mall1.png", 
    alt: "Home Mall workspace",
  },
  {
    src: "/pictures/Home Mall2.png", 
    alt: "Home Mall collaboration area",
  },
  {
    src: "/pictures/Home Mall3.png",
    alt: "Home Mall collaboration area",
  },
  {
    src: "/pictures/Home Mall4.png",
    alt: "Home Mall collaboration area",
  },
  {
    src: "/pictures/Home Mall5.png",
    alt: "Home Mall collaboration area",
  },
  {
    src: "/pictures/Home Mall6.png",
    alt: "Home Mall collaboration area",
  },
  {
    src: "/pictures/Home Mall7.png",
    alt: "Home Mall collaboration area",
  },
];

const eduvacityImages = [
  {
    src: "/pictures/Eduvacity1.jpeg", // Replace with the actual image path
    alt: "Eduvacity Small Office Space",
  },
  {
    src: "/pictures/Eduvacity2.jpeg", // Replace with the actual image path
    alt: "Eduvacity Small Office Space",
  },
  {
    src: "/pictures/Eduvacity3.jpeg", // Replace with the actual image path
    alt: "Eduvacity Training Center",
  },
  {
    src: "/pictures/Eduvacity4.jpeg", // Replace with the actual image path
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
  features: FeatureItem[],
  isVideo = false
) => (
  <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 lg:gap-16 mb-20 md:mb-24">
    <div className="lg:w-1/2 w-full">
      {isVideo ? (
        <div className="relative aspect-video rounded-lg shadow-lg overflow-hidden bg-gray-100 min-h-[300px]">
          <iframe
            src={`${gveVideo}?autoplay=0`} // Autoplay is disabled initially
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Take a 3D Tour"
          />
        </div>
      ) : (
        <ImageSlideshow images={images} interval={5000} className="w-full" />
      )}
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
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-light-gray" id="featured-projects">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-gray-900">
          Featured Projects
        </h2>

        {renderProjectSection(
          [],
          "Green Village Electricity (GVE)",
          "Abuja, Nigeria | Smart, Energy-Efficient Workspace",
          "Green Village Electricity (GVE) is a leading renewable energy company in Abuja, providing innovative off-grid and hybrid power solutions to drive sustainable development.",
          [
            { icon: Sun, title: "Solar-powered lighting & smart energy systems", description: "Harnessing the power of the sun to provide sustainable energy solutions." },
            { icon: Users, title: "Collaboration zones & tech-enabled meeting rooms", description: "Spaces designed for teamwork and equipped with the latest technology." },
            { icon: Leaf, title: "Eco-friendly materials & natural ventilation", description: "Using materials that are kind to the environment and promoting natural airflow." },
          ],
          true
        )}

        {renderProjectSection(
          dnovateImages,
          "DiNovate",
          "Abuja, Nigeria | Multimedia & Tech Innovation Hub",
          "In partnership with DiNovate Solutions, we developed a cutting-edge tech hub designed to empower creatives through training in AI-powered video editing, cinematography, photography, and animation.",
          [
            { icon: Zap, title: "State-of-the-art digital infrastructure", description: "Cutting-edge technology to support all your digital needs." },
            { icon: Users, title: "Flexible co-working and private office spaces", description: "Versatile spaces that adapt to your working style." },
            { icon: Leaf, title: "Sustainable design with energy-efficient systems", description: "Designs that prioritize sustainability and energy efficiency." },
          ]
        )}

        {renderProjectSection(
          areaiImages,
          "Areai",
          "Abuja, Nigeria | Educational Innovation Hub",
          "We collaborated with AREAi to create a learning hub that supports underserved communities through offline, self-assisted technology.",
          [
            { icon: Cpu, title: "Advanced computing labs and data centers", description: "High-tech labs and data centers for cutting-edge research." },
            { icon: Users, title: "Collaborative spaces for interdisciplinary research", description: "Spaces designed to foster collaboration across different fields." },
            { icon: Lightbulb, title: "Innovative lighting and acoustics for optimal work conditions", description: "Lighting and acoustics designed to enhance productivity." },
          ]
        )}

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
      </div>
    </section>
  );
}