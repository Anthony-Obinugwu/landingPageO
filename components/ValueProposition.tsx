import { CheckCircle, Zap, TrendingUp } from "lucide-react";
import AnimatedFeature from "./AnimatedFeature";

const features = [
  {
    icon: CheckCircle,
    title: "Efficient Design",
    description: "Optimize your workspace for maximum productivity and comfort.",
  },
  {
    icon: Zap,
    title: "Smart Technology",
    description: "Integrate cutting-edge tech solutions for a future-ready office.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Adapt your office space as your business grows and evolves.",
  },
];

export default function ValueProposition() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Why Choose Outtabox</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedFeature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

