"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const reviews = [
  {
    text: "Outtabox transformed our office into a creative powerhouse. The team's attention to detail and innovative design solutions have significantly boosted our productivity.",
    author: "Jane Doe",
    company: "Tech Innovators Inc.",
  },
  {
    text: "Working with Outtabox was a game-changer for our startup. They created a flexible, inspiring workspace that grows with us.",
    author: "John Smith",
    company: "Future Ventures",
  },
  {
    text: "The smart office solutions implemented by Outtabox have not only improved our energy efficiency but also enhanced our team's well-being.",
    author: "Emily Johnson",
    company: "Green Solutions Co.",
  },
  {
    text: "Outtabox's design perfectly captured our company culture. Our new office space has become a key factor in attracting top talent.",
    author: "Michael Brown",
    company: "Innovative Designs Ltd.",
  },
];

const AnimatedReviews: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section ref={containerRef} className="py-20 bg-light-gray overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <motion.div
          className="flex space-x-8"
          animate={{
            x: [0, -100 * reviews.length],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-80 bg-white p-6 rounded-lg shadow-md"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-gray-600 mb-4">&ldquo;{review.text}&rdquo;</p>
              <p className="font-semibold">{review.author}</p>
              <p className="text-sm text-gray-500">{review.company}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedReviews;