"use client"

import { useState } from "react"
import Image from "next/image"

const works = [
  {
    type: "video",
    src: "https://www.youtube.com/watch?v=0laDnTgzWmE",
    description: "Virtual tour of an innovative co-working space",
  },
  {
    type: "image",
    src: "/pictures/workspace-1.jpeg",
    description: "Creative workspace design",
  },
  {
    type: "image",
    src: "/pictures/workspace-2.jpeg",
    description: "Team collaboration in action",
  },
  {
    type: "image",
    src: "/pictures/workspace-3.jpeg",
    description: "Modern office setup",
  },
  {
    type: "image",
    src: "/pictures/workspace-4.jpeg",
    description: "Innovative brainstorming session",
  },
  {
    type: "image",
    src: "/pictures/workspace-5.jpg",
    description: "Relaxation area for employees",
  },
  {
    type: "image",
    src: "/pictures/workspace-1.jpeg",
    description: "High-tech meeting room",
  },
]

const convertToEmbedLink = (url: string) => {
  const urlObj = new URL(url)
  if (urlObj.hostname === "www.youtube.com" && urlObj.pathname === "/watch") {
    return `https://www.youtube.com/embed/${urlObj.searchParams.get("v")}`
  } else if (urlObj.hostname === "www.youtube.com" && urlObj.pathname.startsWith("/shorts")) {
    return `https://www.youtube.com/embed${urlObj.pathname}`
  }
  return url
}

export default function IndependentWorkShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % works.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + works.length) % works.length)
  }

  return (
    <section className="py-16 bg-deep-blue" id="independent-work">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Independent Work & Products Showcase</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 bg-white rounded-lg shadow-lg overflow-hidden">
            {works[currentIndex].type === "image" ? (
              <Image
                src={works[currentIndex].src || "/placeholder.svg"}
                alt="Independent work showcase"
                layout="fill"
                objectFit="cover"
              />
            ) : (
              <iframe
                src={convertToEmbedLink(works[currentIndex].src)}
                title={works[currentIndex].description}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            )}
          </div>
          <div className="mt-4 text-center">
            <p className="text-lg text-gray-300">{works[currentIndex].description}</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handlePrev}
              className="text-green-500 text-3xl hover:text-green-400"
              aria-label="Previous"
            >
              &#8592; {/* Left arrow */}
            </button>
            <button
              onClick={handleNext}
              className="text-green-500 text-3xl hover:text-green-400"
              aria-label="Next"
            >
              &#8594; {/* Right arrow */}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}