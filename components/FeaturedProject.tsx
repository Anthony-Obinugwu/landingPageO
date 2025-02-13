"use client";

import { Sun, Users, Leaf, Zap, Cpu, Lightbulb } from "lucide-react";
import ImageSlideshow from "./ImageSlideshow";
import AnimatedFeature from "./AnimatedFeature";

const gveVideo = "/videos/gve-project.mp4"; // Path to the video file in the public directory

const areaiImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7%20(2)-DbzRswJxGLYcDvBiNMx0vmwbIRQI2y.png",
    alt: "AREAi Podcast Studio",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7%20(4)-E0SXzyFyVV00yd5p8sXSpT8oOWCoGJ.png",
    alt: "AREAi Recording Setup",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7%20(3)-voDkf4BWvvmv5jLIwESiqm89y44TQE.png",
    alt: "AREAi Workstation Area",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7%20(5)-KlU2DmSdskMqYDtfsZKzHZARSPk0FP.png",
    alt: "AREAi Conference Room",
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
  return (
    <section className="py-16 bg-light-gray" id="featured-projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>

        {/* GVE Project */}
        <div className="flex flex-col lg:flex-row items-start gap-12 mb-24">
          <div className="lg:w-1/2 w-full">
            <video controls className="w-full rounded-lg">
              <source src={gveVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Green Village Electricity (GVE)</h3>
            <p className="text-lg mb-6">Abuja, Nigeria | Smart, Energy-Efficient Workspace</p>
            <p className="mb-6">
              We partnered with GVE, a leader in renewable energy, to design a workspace that reflects sustainability,
              efficiency, and innovation. This project integrates:
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
            <p className="text-lg mb-6">Lagos, Nigeria | Innovative Tech Hub</p>
            <p className="mb-6">
              A media space in Abuja which wee collaborated with DiNovate to create a cutting-edge tech hub that fosters innovation and collaboration.
              This project showcases:
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
            <p className="text-lg mb-6">Abuja, Nigeria | AI Research Center</p>
            <p className="mb-6">
              For Areai, we designed a futuristic AI research center that combines functionality with inspiration. Key
              features include:
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

