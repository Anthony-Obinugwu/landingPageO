"use client";

import AnimatedFeatureHighlight from "./AnimatedFeatureHighlight";

const features = [
  {
    title: "Custom Office Solutions",
    description: "Tailor-made workspace designs that reflect your brand and boost productivity. Our team works closely with you to create environments that inspire creativity and efficiency while maintaining your unique corporate identity.",
    image: "/feature-1.webp",
  },
  {
    title: "Smart Building Management",
    description: "Integrate IoT and AI for efficient, sustainable building operations. Our smart systems optimize energy usage, security, and space utilization while providing real-time analytics for continuous improvement.",
    image: "/feature-2.webp",
  },
  {
    title: "Flexible Workspace Designs",
    description: "Adaptable layouts that evolve with your business needs. From modular furniture to reconfigurable spaces, we create environments that can transform as your team grows and changes.",
    image: "/pictures/Aeai-1.webp",
  },
];

export default function FeatureHighlights() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-gray-900">
          Our Key Features
        </h2>
        {features.map((feature, index) => (
          <AnimatedFeatureHighlight
            key={index}
            title={feature.title}
            description={feature.description}
            image={feature.image}
            index={index}
            className="last:mb-0"
          />
        ))}
      </div>
    </section>
  );
}