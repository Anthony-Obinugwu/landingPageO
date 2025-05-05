"use client";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import "@/app/globals.css";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Sun, Users, Leaf, Zap, Cpu, Lightbulb, Play } from "lucide-react";
import ImageSlideshow from "@/components/ImageSlideshow";
import AnimatedFeature from "@/components/AnimatedFeature";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

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

interface ProjectData {
  id: string;
  images: Array<{ src: string; alt: string }>;
  title: string;
  location: string;
  description: string;
  features: FeatureItem[];
  isVideo?: boolean;
}

const projects: ProjectData[] = [
  {
    id: "gve",
    images: [],
    title: "Green Village Electricity (GVE)",
    location: "Abuja, Nigeria | Smart, Energy-Efficient Workspace",
    description: "Green Village Electricity (GVE) is a leading renewable energy company in Abuja, providing innovative off-grid and hybrid power solutions to drive sustainable development.",
    features: [
            { icon: Sun, title: "Solar-powered lighting & smart energy systems", description: "Harnessing the power of the sun to provide sustainable energy solutions." },
            { icon: Users, title: "Collaboration zones & tech-enabled meeting rooms", description: "Spaces designed for teamwork and equipped with the latest technology." },
            { icon: Leaf, title: "Eco-friendly materials & natural ventilation", description: "Using materials that are kind to the environment and promoting natural airflow." },
    ],
    isVideo: true
  },
  {
    id: "DiNovate",
    images: dnovateImages,
    title: "DiNovate",
    location: "Abuja, Nigeria | Multimedia & Tech Innovation Hub",
    description: "In partnership with DiNovate Solutions, we developed a cutting-edge tech hub designed to empower creatives through training in AI-powered video editing, cinematography, photography, and animation.",
    features: [
        { icon: Zap, title: "State-of-the-art digital infrastructure", description: "Cutting-edge technology to support all your digital needs." },
        { icon: Users, title: "Flexible co-working and private office spaces", description: "Versatile spaces that adapt to your working style." },
        { icon: Leaf, title: "Sustainable design with energy-efficient systems", description: "Designs that prioritize sustainability and energy efficiency." },
      ],
  },
  {
    id: "Areai",
    images: areaiImages,
    title: "Areai",
    location: "Abuja, Nigeria | Educational Innovation Hub",
    description: "We collaborated with AREAi to create a learning hub that supports underserved communities through offline, self-assisted technology.",
    features: [
        { icon: Cpu, title: "Advanced computing labs and data centers", description: "High-tech labs and data centers for cutting-edge research." },
        { icon: Users, title: "Collaborative spaces for interdisciplinary research", description: "Spaces designed to foster collaboration across different fields." },
        { icon: Lightbulb, title: "Innovative lighting and acoustics for optimal work conditions", description: "Lighting and acoustics designed to enhance productivity." },
      ],
  },
  {
    id: "Home Mall International Co. Ltd",
    images: homeMallImages,
    title: "Home Mall International Co. Ltd",
    location: "Central Business District, Abuja | Experience Center + Workspace Fit-Out",
    description: "Outtabox delivered a transformative 900 sqm design for Home Mall International Company that seamlessly merges a cutting-edge experience center with a high-performance workspace. Designed to elevate brand immersion and operational excellence, the layout redefines how retail and corporate functions coexist under one roof. The space was conceptualized to create a fluid customer journey — from curated product display zones and digital interaction pods to agile workstations and private meeting areas. Every square meter was optimized for both client experience and staff productivity.",
    features: [
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
      ],
  },
  {
    id: "Eduvacity",
    images: eduvacityImages,
    title: "Eduvacity",
    location: "Global | Education Technology Platform",
    description: "Eduvacity is an innovative education technology platform that bridges the gap between academia and industry by offering project-based learning, professional certifications, and career acceleration programs. Designed for students and professionals, it combines hands-on training with mentorship to equip learners with in-demand skills (like AI, data science, and cloud computing) while connecting them to real-world opportunities. The platform collaborates with universities, corporations, and governments to create tailored upskilling solutions that address workforce gaps globally.",
    features: [
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
      ],
  },
];

import { useState } from "react";

export default function ProjectsPage() {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const handlePlayClick = (id: string) => {
    setPlayingVideoId(id);
  };
    return (
      <div className="min-h-screen flex flex-col pt-14">
        <Header />
  
        <main className="flex-1 bg-light-gray">
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16 xl:py-20"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-center mb-8 md:mb-12 lg:mb-16"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 md:mb-4">
                Our Projects
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600">
                Where innovation meets execution
              </p>
            </motion.div>
  
            <div className="grid gap-8 md:gap-12 lg:gap-16">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Media Container */}
                  <div className="aspect-video bg-gray-100 relative">
                {project.isVideo ? (
                  playingVideoId === project.id ? (
                    <iframe
                      src={`${gveVideo}?autoplay=1`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={project.title}
                    />
                  ) : (
                    <div className="w-full h-full relative">
                      <img
                        src="/pictures/GVE-pic.jpeg" // Your video thumbnail
                        alt={`${project.title} thumbnail`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => handlePlayClick(project.id)}
                        className="absolute inset-0 flex items-center justify-center group"
                        aria-label="Play video"
                      >
                        <div className="bg-white/90 rounded-full p-3 md:p-4 group-hover:scale-110 transition-transform duration-200">
                          <Play className="h-6 w-6 text-gray-900" />
                        </div>
                      </button>
                    </div>
                  )
                ) : (
                  <ImageSlideshow 
                    images={project.images} 
                    interval={5000}
                    className="w-full h-full"
                  />
                )}
              </div>
  
                  {/* Content Container */}
                  <div className="p-5 md:p-6 lg:p-8 xl:p-10 space-y-4 md:space-y-5 lg:space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
                        {project.title}
                      </h2>
                      <p className="text-base md:text-lg lg:text-xl text-gray-600">
                        {project.location}
                      </p>
                    </div>
  
                    <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                      {project.description}
                    </p>
  
                    <div className="grid gap-3 md:gap-4 lg:gap-5 md:grid-cols-2 lg:grid-cols-3">
                      {project.features.map((feature, index) => (
                        <AnimatedFeature
                          key={index}
                          icon={feature.icon}
                          title={feature.title}
                          description={feature.description}
                          className="h-full text-sm md:text-base"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </main>
        
        <Analytics />
        <Footer />
      </div>
    );
  }