"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const companies = {
  featured: [
    {
      name: "AREAi",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(80)-z8JiuAz5ajNr0HQpfVlGKX5FlF8vzZ.png",
      tagline: "Learning without barriers"
    },
    {
      name: "DiNovate",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dnovate%20Logo-LQcAoHD2fMKdxVdVjKrKEpViSnk96L.png",
      tagline: "Innovation solutions"
    },
    {
      name: "GVE",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GVE%20LOGO-IT1eLSq14kTiTBaVDv3L4M9y0rsIy4.png",
      tagline: "Sustainable energy"
    },
    {
      name: "CARDINAL CARE",
      logo: "/pictures/Cardinal Care.png",
      tagline: "HOSPITAL & MATERNITY"
    },
    {
      name: "Home Mall International Co. LTD",
      logo: "/pictures/Home Mall.jpeg",
      tagline: "Experience Center + Showroom"
    },
    {
      name: "Eduvacity",
      logo: "/pictures/Eduvacity.jpeg",
      tagline: "Education Hub"
    }
  ],
  contributed: [
    "MTN",
    "PiggyVest",
    "PWC Towers",
    "Flutterwave",
    "Google",
    "Twitter",
    "FAAN"
  ]
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
          viewport={{ once: true, margin: "-100px" }}
        >
          Our Past and Trusted Clients
        </motion.h2>

        {/* Featured Companies */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {companies.featured.map((company, index) => (
            <motion.div
              key={`featured-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg"
            >
              <div className="h-20 mb-4 flex items-center">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={160}
                  height={80}
                  className="object-contain max-h-full"
                />
              </div>
              <h3 className="font-bold text-lg mb-1">{company.name}</h3>
              <p className="text-gray-600 text-sm">{company.tagline}</p>
            </motion.div>
          ))}
        </div>

        {/* Contributed Companies Section */}
        <div className="text-center">
          <motion.h3
            className="text-xl font-medium mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our team has also made contributions to:
          </motion.h3>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {companies.contributed.map((company, index) => (
              <motion.div
                key={`contributed-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.2 + (index * 0.05),
                  duration: 0.3
                }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all"
              >
                <span className="font-medium text-gray-700">{company}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedTrustedCompanies;