"use client";

import AnimatedListItem from "./AnimatedListItem";

const coreValues = ["Innovation", "Sustainability", "Collaboration", "Excellence", "Human-Centric Design"];

export default function AboutUs() {
  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6">
            Our Mission: To create world-class, future-forward workspaces that empower businesses and individuals to
            thrive in the evolving world of work.
          </p>
          <p className="text-lg mb-6">
            Our Vision: To be the leading workspace transformation company in Africa and a global benchmark for
            innovation in office design.
          </p>
          <h3 className="text-xl font-semibold mb-4">Core Values:</h3>
          <ul className="grid grid-cols-2 gap-4">
            {coreValues.map((value, index) => (
              <AnimatedListItem key={index} value={value} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

