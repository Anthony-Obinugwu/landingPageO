import Hero from "@/components/Hero"
import AboutUs from "@/components/AboutUs"
import Services from "@/components/Services"
import TrustedCompanies from "@/components/TrustedCompanies"
import FeaturedProject from "@/components/FeaturedProject"
import Reviews from "@/components/Reviews"
import BlogInsights from "@/components/BlogInsights"
import GetInTouch from "@/components/GetInTouch"
import Careers from "@/components/Careers"
import ContactUs from "@/components/ContactUs"
import SectionConnector from "@/components/SectionConnector"

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <SectionConnector>
        <AboutUs />
        <Services />
        <TrustedCompanies />
        <FeaturedProject />
        <Reviews />
        <BlogInsights />
        <GetInTouch />
        <Careers />
        <ContactUs />
      </SectionConnector>
    </main>
  )
}

