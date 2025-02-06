"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    company: "Tech Innovators Inc.",
    quote:
      "Outtabox transformed our outdated office into a modern, collaborative space. Our team productivity has skyrocketed!",
    image: "/testimonial-1.jpg",
  },
  {
    name: "Jane Smith",
    company: "Creative Solutions LLC",
    quote:
      "The smart building features have significantly reduced our energy costs. Outtabox delivered beyond our expectations.",
    image: "/testimonial-2.jpg",
  },
  {
    name: "Mike Johnson",
    company: "Global Enterprises",
    quote:
      "Outtabox's scalable solutions allowed us to easily adapt our office as we expanded. A game-changer for growing businesses.",
    image: "/testimonial-3.jpg",
  },
];

const AnimatedTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="relative">
          <div className="flex items-center justify-center">
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            >
              <ChevronLeft className="w-6 h-6 text-deep-blue" />
            </button>
            <div className="text-center max-w-2xl mx-auto px-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    width={80}
                    height={80}
                    className="rounded-full mx-auto mb-4"
                  />
                  <p className="text-base md:text-lg mb-4 italic">"{testimonials[currentIndex].quote}"</p>
                  <p className="font-bold">{testimonials[currentIndex].name}</p>
                  <p className="text-tech-green">{testimonials[currentIndex].company}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            >
              <ChevronRight className="w-6 h-6 text-deep-blue" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedTestimonials;