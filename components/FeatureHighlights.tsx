import AnimatedFeatureHighlight from "./AnimatedFeatureHighlight";

const features = [
  {
    title: "Custom Office Solutions",
    description: "Tailor-made workspace designs that reflect your brand and boost productivity.",
    image: "/feature-1.jpg",
  },
  {
    title: "Smart Building Management",
    description: "Integrate IoT and AI for efficient, sustainable building operations.",
    image: "/feature-2.jpg",
  },
];

export default function FeatureHighlights() {
  return (
    <section className="py-16">
      {features.map((feature, index) => (
        <AnimatedFeatureHighlight
          key={index}
          title={feature.title}
          description={feature.description}
          image={feature.image}
          index={index}
        />
      ))}
    </section>
  );
}

