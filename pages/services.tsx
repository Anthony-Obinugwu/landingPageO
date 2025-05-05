"use client";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import "@/app/globals.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";


const services = [
  {
    title: "Elite Shared Office in Abuja",
    description: "Transform your work experience with Abuja's most sophisticated shared office solutions, combining intelligent space design with cutting-edge workplace technology. Our elite offices offer meticulously planned layouts that balance collaborative open areas with private focus zones, all enhanced by ergonomic furniture and natural light optimization.",
    image: "/pictures/serviceImage1.jpeg",
    cta: "Optimize Your Workspace",
    whatsappMessage: "I'm interested in an elite shared office in Abuja with high-speed Wi-Fi and 24/7 access.",
    alt: "Best coworking space in Abuja with 24/7 access, fast Wi-Fi, and comfortable workstations",
  },
  {
    title: "All-Inclusive Business Offices",
    description: "From concept to completion, we craft fully customized office environments that embody your company's vision and culture. Our turnkey solutions combine intelligent space planning with branded interior design, delivering workspaces that inspire productivity and reflect your corporate identity. We specialize in creating functional yet innovative layouts tailored to your specific operational needs - whether configuring executive suites for corporate headquarters, designing collaborative hubs for growing startups, or building specialized environments for innovation teams. Every detail is considered, from ergonomic furniture selection and strategic workstation placement to integrated branding elements and wayfinding systems.",
    image: "/pictures/serviceImage2.jpeg",
    cta: "Design Your Office",
    whatsappMessage: "I'd like to know more about all-inclusive business offices in Abuja with modern meeting rooms.",
    alt: "Fully serviced office space in Abuja with conference rooms and virtual office options",
  },
  {
    title: "Intelligent & Eco-Conscious Workspaces",
    description: "We pioneer next-generation work environments where artificial intelligence and sustainable design converge to create self-regulating offices that optimize both human performance and planetary health. Our intelligent workspaces harness machine learning to dynamically adjust lighting, temperature, and spatial configurations in real-time, responding to occupancy patterns and individual work rhythms. The ecosystem integrates responsive work surfaces with built-in wellness monitoring, air purification systems, and noise-canceling acoustics—all powered by renewable energy microgrids. By blending biophilic design principles with IoT automation, we create environments that reduce operational carbon footprints while actively enhancing cognitive function, employee wellbeing, and collaborative potential.",
    image: "/pictures/serviceImage3.jpeg",
    cta: "Go Smart & Sustainable",
    whatsappMessage: "I'm interested in intelligent and eco-conscious workspaces in Abuja with automated features.",
    alt: "Top-rated business hub in Abuja offering flexible office rentals and networking events",
  },
  {
    title: "Private Suites & Corporate Lounges",
    description: "We craft exclusive private offices and executive workspaces that blend prestige with cutting-edge functionality, designed specifically for C-Suite leaders and discerning professionals. Our premium suites combine soundproofed private offices with luxurious meeting hubs and access to curated co-working areas, all featuring future-forward designs that anticipate the evolving needs of modern leadership. Each space is engineered with executive-grade acoustics, integrated smart conference technology, and bespoke interior detailing that projects corporate stature while enhancing decision-making efficiency.",
    image: "/pictures/serviceImage4.jpeg",
    cta: "Elevate Your Executive Space",
    whatsappMessage: "I want to learn about private office suites and corporate lounges in Abuja.",
    alt: "Professional shared workspace in Abuja with ergonomic seating and private meeting rooms",
  },
  {
    title: "Budget-Friendly & Trendy Offices",
    description: "Designed for forward-thinking teams and entrepreneurs, our budget-conscious workspaces prove sustainability and innovation needn’t come at a premium. These energy-optimized environments feature smart power management systems, upcycled designer furnishings, and modular layouts that adapt to your team’s evolving needs. The spaces harness natural ventilation strategies, LED lighting grids with motion sensors, and shared resource hubs to minimize operational costs while maximizing creative potential. Perfect for startups and agile teams, these offices deliver a vibrant, professional atmosphere with collaborative zones, soundproof focus pods, and tech-enabled meeting nooks—all powered by renewable energy solutions that keep overheads low.",
    image: "/pictures/serviceImage5.jpeg",
    cta: "Innnovate Your Workspace",
    whatsappMessage: "I'm looking for budget-friendly and trendy offices in Abuja for freelancers and startups.",
    alt: "Affordable and stylish office space in Abuja for freelancers, startups, and corporate teams",
  },
  {
    title: "Cutting-Edge Innovation Hubs",
    description: "We engineer dynamic workspaces that fuel technological breakthroughs, designed specifically for Nigeria’s most ambitious tech pioneers. These innovation hubs combine laboratory-grade infrastructure with collaborative maker spaces, featuring modular clean rooms, high-density computing zones, and rapid prototyping facilities—all powered by enterprise-grade fiber optics and backup systems. The environment stimulates cross-pollination between disciplines, with augmented reality whiteboards, AI-assisted design stations, and immersive demo rooms that transform conceptual ideas into market-ready solutions.",
    image: "/pictures/serviceImage6.jpeg",
    cta: "Give your workspace a tech upgrade",
    whatsappMessage: "Can you tell me more about cutting-edge innovation hubs in Abuja for entrepreneurs?",
    alt: "Innovative tech workspace in Abuja for creative professionals and entrepreneurs",
  },
];

export default function ServicesPage() {
  const handleWhatsAppClick = (message: string) => {
    const phoneNumber = "+2347044227870";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-light-gray pt-11 md:pt-20"> 
        <section className="py-12 md:py-20 container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 md:mb-16 scroll-mt-16" 
          >
            <h1 className="text-3xl md:text-5xl font-bold text-dark-gray mb-3 md:mb-4">
            Redefining Workspaces for the Modern Workforce
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Crafting Intelligent, Flexible & Sustainable Work Environments That Power Productivity and Collaboration
            </p>
          </motion.div>

          <div className="space-y-12 md:space-y-20">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ margin: "-100px 0px 0px 0px" }}
                className={`flex flex-col gap-4 md:gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Image Container */}
                <div className="md:w-1/2 h-64 md:h-80 relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 428px) 90vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    priority={index < 2} // Prioritize first two images
                  />
                </div>

                {/* Content Container */}
                <div className="md:w-1/2 flex flex-col justify-center space-y-3 md:space-y-4 px-2 md:px-0">
                  <h2 className="text-2xl md:text-3xl font-bold text-dark-gray leading-snug">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <button
                    onClick={() => handleWhatsAppClick(service.whatsappMessage)}
                    className={`mt-3 md:mt-4 bg-tech-green text-white px-6 py-2 md:px-8 md:py-3 rounded-full hover:bg-green-600 transition-colors text-sm md:text-base ${
                      index % 2 === 0 ? 'self-start' : 'md:self-center w-full md:w-auto text-center'
                    }`}
                  >
                    {service.cta}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Analytics />
      <Footer />
    </>
  );
}