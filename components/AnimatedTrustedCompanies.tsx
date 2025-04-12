"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const companies = [
  {
    name: "GVE",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GVE%20LOGO-IT1eLSq14kTiTBaVDv3L4M9y0rsIy4.png",
    href: "#",
  },
  {
    name: "Dnovate",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dnovate%20Logo-LQcAoHD2fMKdxVdVjKrKEpViSnk96L.png",
    href: "#",
  },
  {
    name: "AREAi",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(80)-z8JiuAz5ajNr0HQpfVlGKX5FlF8vzZ.png",
    href: "#",
  },
  // Add more companies as needed
];

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
          Trusted by Industry Leaders
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="w-full max-w-[180px] md:max-w-[200px] aspect-[3/2]"
            >
              <a
                href={company.href}
                className="block relative w-full h-full p-2 hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 200px"
                  quality={85}
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedTrustedCompanies;