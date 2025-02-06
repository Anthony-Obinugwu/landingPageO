"use client";

import { motion } from "framer-motion";
import type React from "react";

interface AnimatedContactFormProps {
  handleSubmit: (e: React.FormEvent) => void;
}

const AnimatedContactForm: React.FC<AnimatedContactFormProps> = ({ handleSubmit }) => {
  return (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="space-y-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <textarea
        placeholder="Your Message"
        rows={4}
        className="w-full p-2 border border-gray-300 rounded"
        required
      ></textarea>
      <button
        type="submit"
        className="bg-tech-green text-white font-bold py-2 px-4 rounded hover:bg-opacity-90 transition duration-300"
      >
        Send Message
      </button>
    </motion.form>
  );
};

export default AnimatedContactForm;