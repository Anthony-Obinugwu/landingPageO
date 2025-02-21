"use client";

import { useState, useRef } from "react";
import { Sun, Users, Leaf, Zap, Cpu, Lightbulb } from "lucide-react";
import ImageSlideshow from "./ImageSlideshow";
import AnimatedFeature from "./AnimatedFeature";

const gveVideo = "https://www.youtube.com/embed/-vL4HXeWeyg";

const areaiImages = [
  {
    src: "/pictures/Aeai-1.jpeg",
    alt: "Modern coworking space in Abuja with high-speed internet and private offices",
  },
  {
    src: "/pictures/Areai-2.jpeg",
    alt: "Best office space in Abuja for startups, remote workers, and businesses",
  },
  {
    src: "/pictures/Areai-3.jpeg",
    alt: "Premium shared workspace in Abuja with meeting rooms and networking opportunities",
  },
  {
    src: "/pictures/Areai-4.jpeg",
    alt: "Top-rated Abuja office space with flexible desks and corporate amenities",
  },
  {
    src: "/pictures/Areai-5.jpeg",
    alt: "Luxury serviced offices in Abuja with a vibrant work environment",
  },
  {
    src: "/pictures/Areai-6.jpeg",
    alt: "State-of-the-art coworking space in Abuja with premium office facilities and business support",
  },
];

const dnovateImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7%20(7)-f0F6PSLuB64djToNwqEyPt48MRkcnJ.png",
    alt: "DNovate Lounge Area",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7%20(9)-BvJSLhH7KF5Qh9erefN9BXwdXOtrML.png",
    alt: "DNovate Tropical Lounge",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7%20(8)-bbYztz9qTdWgroSMwLxGbSlvEBf63p.png",
    alt: "DNovate World Map Lounge",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7%20(6)-wx8SU1MTDvt45MFRfVWGyuBG59xGHM.png",
    alt: "DNovate Green Space",
  },
];

export default function FeaturedProject() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePlayButtonClick = () => {
    if (iframeRef.current) {
      iframeRef.current.src += "?autoplay=1&mute=1";
      setIsVideoPlaying(true);
    }
  };

  return (
    <section className="py-16 bg-light-gray" id="featured-projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>

        {/* GVE Project */}
        <div className="flex flex-col lg:flex-row items-start gap-12 mb-24">
          <div className="lg:w-1/2 w-full">
            <iframe
              ref={iframeRef}
              src={gveVideo}
              className="w-full rounded-lg"
              allow="autoplay; encrypted-media"
              allowFullScreen
              frameBorder="0"
            ></iframe>
            {!isVideoPlaying && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={handlePlayButtonClick}
                  className="bg-tech-green text-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-500 hover:outline hover:outline-blue-500 transition-colors"
                >
                  Take a 3D Tour of the Workspace
                </button>
              </div>
            )}
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Green Village Electricity (GVE)</h3>
            <p className="text-lg mb-6">Abuja, Nigeria | Smart, Energy-Efficient Workspace</p>
            <p className="mb-6">
              Green Village Electricity (GVE) is a leading renewable energy company in Abuja, providing innovative off-grid 
              and hybrid power solutions to drive sustainable development. Focused on energy access, GVE has delivered 
              clean electricity to thousands of homes and businesses across Nigeria, promoting efficiency and environmental 
              responsibility.
            </p>
            <ul className="space-y-4">
              {[
                { icon: Sun, title: "Solar-powered lighting & smart energy systems", description: "Harnessing the power of the sun to provide sustainable energy solutions." },
                { icon: Users, title: "Collaboration zones & tech-enabled meeting rooms", description: "Spaces designed for teamwork and equipped with the latest technology." },
                { icon: Leaf, title: "Eco-friendly materials & natural ventilation", description: "Using materials that are kind to the environment and promoting natural airflow." },
              ].map((feature, index) => (
                <AnimatedFeature key={index} icon={feature.icon} title={feature.title} description={feature.description} />
              ))}
            </ul>
          </div>
        </div>

        {/* DNovate Project */}
        <div className="flex flex-col lg:flex-row items-start gap-12 mb-24">
          <div className="lg:w-1/2 w-full">
            <ImageSlideshow images={dnovateImages} interval={5000} className="w-full" />
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4">DiNovate</h3>
            <p className="text-lg mb-6">Abuja, Nigeria | Multimedia & Tech Innovation Hub</p>
            <p className="mb-6">
              In partnership with DiNovate Solutions, we developed a cutting-edge tech hub designed to empower creatives 
              through training in AI-powered video editing, cinematography, photography, and animation. This initiative 
              supports skill development and career opportunities in Abuja’s growing multimedia sector.
            </p>
            <ul className="space-y-4">
              {[
                { icon: Zap, title: "State-of-the-art digital infrastructure", description: "Cutting-edge technology to support all your digital needs." },
                { icon: Users, title: "Flexible co-working and private office spaces", description: "Versatile spaces that adapt to your working style." },
                { icon: Leaf, title: "Sustainable design with energy-efficient systems", description: "Designs that prioritize sustainability and energy efficiency." },
              ].map((feature, index) => (
                <AnimatedFeature key={index} icon={feature.icon} title={feature.title} description={feature.description} />
              ))}
            </ul>
          </div>
        </div>

        {/* Areai Project */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/2 w-full">
            <ImageSlideshow images={areaiImages} interval={5000} className="w-full" />
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Areai</h3>
            <p className="text-lg mb-6">Abuja, Nigeria | Educational Innovation Hub</p>
            <p className="mb-6">
              We collaborated with AREAi to create a learning hub that supports underserved communities through offline, 
              self-assisted technology. This initiative aligns with AREAi’s mission to bridge literacy and numeracy gaps, 
              impacting over 25,000 children across 10 refugee camps and earning recognition as a 2024 WISE Prize finalist.
            </p>
            <ul className="space-y-4">
              {[
                { icon: Cpu, title: "Advanced computing labs and data centers", description: "High-tech labs and data centers for cutting-edge research." },
                { icon: Users, title: "Collaborative spaces for interdisciplinary research", description: "Spaces designed to foster collaboration across different fields." },
                { icon: Lightbulb, title: "Innovative lighting and acoustics for optimal work conditions", description: "Lighting and acoustics designed to enhance productivity." },
              ].map((feature, index) => (
                <AnimatedFeature key={index} icon={feature.icon} title={feature.title} description={feature.description} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

