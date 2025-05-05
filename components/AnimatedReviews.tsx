"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const reviews = [
  {
    text: "Outtabox understood our vision from day one. The team delivered a vibrant, functional space that reflects our mission and energizes our staff. Their creativity and professionalism were unmatched.",
    author: "Mr. Gideon Olanrewaju",
    position: "CEO",
    company: "AREAi",
    rating: 5
  },
  {
    text: "We needed a partner who could work fast, stay compliant, and still deliver a world-class space. Outtabox exceeded our expectations — on time, on budget, and with impressive attention to detail.",
    author: "Dr. Monday Solomon",
    position: "CEO",
    company: "Cardinal Care Hospital & Maternity",
    rating: 5
  },
  {
    text: "Outtabox transformed our office into a creative powerhouse. The team's attention to detail and innovative design solutions have significantly boosted our productivity.",
    author: "Musa Ibrahim Abbah",
    position: "CEO",
    company: "Eduvacity",
    rating: 5
  },
  {
    text: "Working with Outtabox was a game-changer for our startup. They created a flexible, inspiring workspace that grows with us.",
    author: "Mr. Ifeanyi Orajaka",
    position: "CEO",
    company: "Green Village ELectricity",
    rating: 5
  },
  {
    text: "The smart office solutions implemented by Outtabox have not only improved our energy efficiency but also enhanced our team's well-being.",
    author: "Mr. Temidayo Ibitoye",
    position: "CEO",
    company: "DiNoavte",
    rating: 5
  },
];

const StarIcon = () => (
  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const TestimonialCarousel = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section ref={containerRef} className="py-20 bg-white flex items-center justify-center" id="reviews">
      <div className="container mx-auto px-4 overflow-hidden text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1 }}
        >
          <span className="text-black">Client Testimonials</span>
        </motion.h2>

        <div className="relative">
          <motion.div
            className="flex gap-8 justify-center"
            animate={{
              x: [0, -1040],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...reviews, ...reviews].map((review, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80"
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{
                  duration: 0.5,
                  delay: (index % reviews.length) * 0.15,
                }}
              >
                <div className="h-full p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all hover:border-primary-500 group">
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-auto text-left">
                    <h3 className="font-bold text-lg text-blue-600">{review.author}</h3>
                    <div className="flex items-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </div>
                    <div className="text-gray-600">
                      <span>{review.position}</span>
                      <span className="mx-2">•</span>
                      <span className="font-medium">{review.company}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;