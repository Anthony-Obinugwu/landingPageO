"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AnimatedFooterLogo: React.FC = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      className="w-10 h-10 mr-2"
    >
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Outtabox%20Logo-mc6A00B0tjgc93UfWxOs4TOFKrwLEC.png"
        alt="Outtabox Logo"
        width={40}
        height={40}
        className="w-full h-full"
      />
    </motion.div>
  );
};

export default AnimatedFooterLogo;