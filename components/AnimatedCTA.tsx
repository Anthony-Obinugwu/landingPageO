"use client";

import { motion } from "framer-motion";

export default function AnimatedCTA() {
  return (
    <section className="bg-deep-blue text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Transform Your Workspace Today
        </motion.h2>
        <motion.p
          className="mb-8 max-w-2xl mx-auto text-base md:text-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Ready to revolutionize your office space? Let Outtabox help you create a workspace that inspires innovation
          and drives success.
        </motion.p>
        <motion.button
          className="bg-tech-green text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition duration-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
}