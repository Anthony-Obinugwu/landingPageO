"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import type React from "react"; // Import React
import AnimatedContactInfo from "./AnimatedContactInfo";
import AnimatedContactForm from "./AnimatedContactForm";

export default function ContactUs() {
  const phoneNumber = "+2348038980470";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent("Hello, I'm interested in Outtabox's services.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="py-16" id="contact-us">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-3xl mx-auto">
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
}

