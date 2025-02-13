"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import type React from "react"; // Import React
import AnimatedContactInfo from "./AnimatedContactInfo";
import AnimatedContactForm from "./AnimatedContactForm";
import { motion } from "framer-motion";

const ContactUs: React.FC = () => {
  const phoneNumber = "+2347044227870";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent("Hello, I'm interested in Outtabox's services.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="contact-us" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our
            team is ready to answer all your questions.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <AnimatedContactInfo icon={MapPin} text="Abuja, Nigeria" href="#" />
              <AnimatedContactInfo icon={Mail} text="hello@outtabox.work" href="mailto:hello@outtabox.work" />
              <AnimatedContactInfo icon={Phone} text={phoneNumber} href={`https://wa.me/${phoneNumber}`} />
            </div>
            <AnimatedContactForm handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

