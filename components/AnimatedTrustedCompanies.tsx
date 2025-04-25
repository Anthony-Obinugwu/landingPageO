"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const companies = {
  featured: [
    {
      name: "AREAi",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(80)-z8JiuAz5ajNr0HQpfVlGKX5FlF8vzZ.png",
      tagline: "Learning without barriers",
      url: "https://areai4africa.org/",
    },
    {
      name: "DiNovate",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dnovate%20Logo-LQcAoHD2fMKdxVdVjKrKEpViSnk96L.png",
      tagline: "Innovation solutions",
      url: "https://dinovate.com/",
    },
    {
      name: "GVE",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GVE%20LOGO-IT1eLSq14kTiTBaVDv3L4M9y0rsIy4.png",
      tagline: "Sustainable energy",
      url: "https://gve-group.com/", // Add the corresponding URL
    },
    {
      name: "CARDINAL CARE",
      logo: "/pictures/Cardinal Care.png",
      tagline: "HOSPITAL & MATERNITY",
      url: "https://cardinalcarehospital.com/", // Add the corresponding URL
    },
    {
      name: "Home Mall International Co. LTD",
      logo: "/pictures/Home Mall.jpeg",
      tagline: "Experience Center + Showroom",
      url: "", // Add the corresponding URL
    },
    {
      name: "Eduvacity",
      logo: "/pictures/Eduvacity.jpeg",
      tagline: "Education Hub",
      url: "https://www.instagram.com/eduvacity/p/DDdtyaBiRgt/", // Add the corresponding URL
    },
  ],
  contributed: [
    {
      name: "MTN",
      logo: "/pictures/mtn.png",
      url: "https://www.mtn.ng/", // Add the corresponding URL
    },
    {
      name: "PiggyVest",
      logo: "/pictures/piggyvest.jpeg",
      url: "https://www.piggyvest.com/", // Add the corresponding URL
    },
    {
      name: "PWC Towers",
      logo: "/pictures/pwc.png",
      url: "https://www.pwc.com/my/en", // Add the corresponding URL
    },
    {
      name: "Flutterwave",
      logo: "/pictures/flutterwave.png",
      url: "https://flutterwave.com/ng/", // Add the corresponding URL
    },
    {
      name: "Google",
      logo: "/pictures/google.png",
      url: "https://google.com", // Add the corresponding URL
    },
    {
      name: "Twitter",
      logo: "/pictures/X.png",
      url: "https://twitter.com", // Add the corresponding URL
    },
    {
      name: "FAAN",
      logo: "/pictures/FAAN.jpeg",
      url: "https://faan.gov.ng", // Add the corresponding URL
    },
  ],
};

const AnimatedTrustedCompanies = () => {
  return (
    <section className="py-16 bg-white" id="trusted-companies">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Past and Trusted Clients
        </motion.h2>

        {/* Featured Companies */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {companies.featured.map((company, index) => (
            <motion.a
              key={`featured-${index}`}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -3 }}
              className="flex flex-col items-center p-4 hover:bg-gray-50/50 rounded-lg transition-all cursor-pointer"
            >
              <div className="relative h-16 w-full max-w-[160px] mb-4">
                <Image
                  src={company.logo}
                  alt={company.name}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 100px, 160px"
                  unoptimized={company.logo.startsWith("http")} // For external images
                />
              </div>
              <h3 className="font-bold text-lg mb-1 text-center">{company.name}</h3>
              <p className="text-gray-600 text-sm text-center">{company.tagline}</p>
            </motion.a>
          ))}
        </div>

        {/* Contributed Companies */}
        <div className="text-center">
          <motion.h3
            className="text-xl font-medium mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Our team has also made contributions to:
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {companies.contributed.map((company, index) => (
              <motion.a
                key={`contributed-${index}`}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="relative h-10 w-20 md:h-12 md:w-24 p-1"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  fill
                  className="object-contain hover:drop-shadow-md transition-all"
                  sizes="(max-width: 768px) 80px, 100px"
                  unoptimized={company.logo.startsWith("http")} // For external images
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedTrustedCompanies;