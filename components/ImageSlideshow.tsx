"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSlideshowProps {
  images: { src: string; alt: string }[];
  interval?: number; // Time in milliseconds between slides
  className?: string;
}

export default function ImageSlideshow({ images, interval = 5000, className }: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [images.length, interval]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          className="object-cover"
          quality={100}
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots for Navigation */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}