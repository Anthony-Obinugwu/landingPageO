"use client";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState, useRef, useCallback } from "react";
import { Sun, Users, Leaf, Zap, Cpu, Lightbulb } from "lucide-react";
import ImageSlideshow from "./ImageSlideshow"; // Import the slideshow component
import AnimatedFeature from "./AnimatedFeature";
import type { LucideIcon } from "lucide-react";


const gveVideo = "https://www.youtube.com/embed/-vL4HXeWeyg";
const gveThumbnail = "/pictures/GVE-pic.jpeg";

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

  const handlePlayButtonClick = useCallback(() => {
    console.log("Button clicked"); // Debugging log
    if (iframeRef.current && !isVideoPlaying) {
      console.log("Playing video..."); // Debugging log
      iframeRef.current.src = `${gveVideo}?autoplay=1&mute=1`;
      setIsVideoPlaying(true);
    }
  }, [isVideoPlaying]);

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
      </div>
    </section>
  );
}