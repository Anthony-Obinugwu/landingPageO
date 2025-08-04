import dynamic from "next/dynamic";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Custom Loading Spinner Component
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <img
        src="/favicon.png"
        alt="Loading..."
        className="animate-spin w-16 h-16"
      />
    </div>
  );
}

// Lazy load components with custom loading spinner
const Hero = dynamic(() => import("@/components/Hero"), { loading: () => <LoadingSpinner /> });
const AboutUs = dynamic(() => import("@/components/AboutUs"), { loading: () => <LoadingSpinner /> });
const Services = dynamic(() => import("@/components/Services"), { loading: () => <LoadingSpinner /> });
const TrustedCompanies = dynamic(() => import("@/components/TrustedCompanies"), { loading: () => <LoadingSpinner /> });
const FeaturedProject = dynamic(() => import("@/components/FeaturedProject"), { loading: () => <LoadingSpinner /> });
const IndependentWorkShowcase = dynamic(() => import("@/components/IndependentWorkShowcase"), { loading: () => <LoadingSpinner /> });
const Reviews = dynamic(() => import("@/components/Reviews"), { loading: () => <LoadingSpinner /> });
const BlogInsights = dynamic(() => import("@/components/BlogInsights"), { loading: () => <LoadingSpinner /> });
const GetInTouch = dynamic(() => import("@/components/GetInTouch"), { loading: () => <LoadingSpinner /> });
const Careers = dynamic(() => import("@/components/Careers"), { loading: () => <LoadingSpinner /> });
const ContactUs = dynamic(() => import("@/components/ContactUs"), { loading: () => <LoadingSpinner /> });
const ScheduleCallModal = dynamic(() => import("@/components/ScheduleCallModal"), { loading: () => <LoadingSpinner /> });

export default function Home() {
  return (
    <main className="bg-white">
      <ScheduleCallModal />
      <Hero />
      <AboutUs />
      <Services />
      <TrustedCompanies />
      <FeaturedProject />
      <IndependentWorkShowcase />
      <Reviews />
      <BlogInsights />
      <GetInTouch />
      <Careers />
      <ContactUs />
      <SpeedInsights />
    </main>
  );
}

