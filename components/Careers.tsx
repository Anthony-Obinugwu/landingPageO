"use client";

// import { motion } from "framer-motion";
import AnimatedPosition from "./AnimatedPosition";

const openPositions = [
  "Architect",
  "Project Manager",
  "Site Supervisor",
  "Business Development Executives",
  "Lead Development Specialist"
];

export default function Careers() {
  return (
    <section className="py-16 bg-light-gray" id="careers">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Join Our Team</h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
          We are looking for passionate, innovative minds to help shape the future of work.
        </p>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Open Positions:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {openPositions.map((position, index) => (
              <AnimatedPosition
                key={index}
                position={position}
                index={index}
                onClick={() =>
                  (window.location.href = `mailto:careers@outtabox.work?subject=Application for ${position} Position`)
                }
              />
            ))}
          </ul>
          {/* <motion.div className="mt-8 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <a
              href="careers"
              className="inline-block bg-tech-green text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition duration-300"
            >
              View All Openings
            </a>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}

