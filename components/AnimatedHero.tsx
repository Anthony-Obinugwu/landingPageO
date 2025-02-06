"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedHero: React.FC = () => {
  return (
    <section className="relative h-[70vh] md:h-[80vh] mt-14 mx-2 md:mx-4 rounded-2xl overflow-hidden shadow-2xl">
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="w-full h-full"
      >
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(81)-Zzi7lYpKOLLRWBsuLLa2uWTQxA17x9.png"
            alt="Modern Office Space"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/80 to-transparent" />
        </motion.div>

        <div className="relative h-full">
          <motion.div
            className="container mx-auto h-full flex items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="max-w-2xl space-y-4 md:space-y-6 p-4 md:p-8">
              <motion.h1
                className="text-3xl md:text-4xl lg:text-6xl font-bold text-white drop-shadow-lg"
                variants={itemVariants}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                Future Forward Workspaces
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-white/90 drop-shadow-lg"
                variants={itemVariants}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.7,
                }}
              >
                #1 Future Forward Workspaces designer in Abuja, Nigeria
              </motion.p>
              <motion.button
                className="bg-tech-green text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition duration-300 hover:bg-white hover:text-tech-green hover:border-2 hover:border-tech-green"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                Explore Our Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AnimatedHero;