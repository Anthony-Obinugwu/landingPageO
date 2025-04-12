"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


const AnimatedGetInTouch: React.FC = () => {
  return (
    <section className="py-20 bg-deep-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Let's get in touch
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ready to transform your workspace? Our team is here to help you create an environment that inspires
            innovation and productivity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#contact-us"
              className="inline-flex items-center bg-tech-green text-white font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition duration-300"
            >
              Contact us
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedGetInTouch;