import Hero from "@/components/Hero"
import AboutUs from "@/components/AboutUs"
import Services from "@/components/Services"
import TrustedCompanies from "@/components/TrustedCompanies"
import FeaturedProject from "@/components/FeaturedProject"
import IndependentWorkShowcase from "@/components/IndependentWorkShowcase"
import Reviews from "@/components/Reviews"
import BlogInsights from "@/components/BlogInsights"
import GetInTouch from "@/components/GetInTouch"
import Careers from "@/components/Careers"
import ContactUs from "@/components/ContactUs"
import ScheduleCallModal from "@/components/ScheduleCallModal"

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
    </main>
  )
}

