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
];

const AnimatedTrustedCompanies: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="trusted-companies">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Trusted by the Top Companies</h2>
        <div className="flex justify-center items-center gap-12 md:gap-24">
          {companies.map((company, index) => (
            <motion.a
              key={index}
              href={company.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="w-1/3 max-w-[200px] min-w-[120px]"
            >
              <div className="relative aspect-[3/2]">
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  fill
                  className="object-contain filter hover:brightness-110 transition-all duration-300"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedTrustedCompanies;