"use client";

import { motion } from "framer-motion";

const openPositions = [
  {
    title: "Associate Interior Designer",
    description: "Design innovative workspaces with a focus on functional aesthetics"
  },
  {
    title: "Junior Interior Designer", 
    description: "Support design projects and learn emerging workspace trends"
  }
];

const qualifications = [
  "Understanding of agile workspace layouts",
  "Knowledge of hybrid collaboration design",
  "Experience with wellness-driven design principles", 
  "Focus on user experience in workspace design"
];

export default function Careers() {
  return (
    <section className="py-16 bg-light-gray" id="careers">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Join the Team Designing the Future of Work
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            At Outtabox, we don't just design offices — we craft Future Forward Workspaces that inspire productivity, flexibility, and innovation.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Open Roles:
            </h3>
            <ul className="space-y-4">
              {openPositions.map((position, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -3 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <a 
                    href={`mailto:hiring@outtabox.work?subject=Application for ${encodeURIComponent(position.title)} Position`}
                    className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100"
                  >
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{position.title}</h3>
                    <p className="text-gray-600 text-sm">{position.description}</p>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Rest of the component remains the same */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              What We're Looking For:
            </h3>
            <p className="mb-6 text-gray-700">
              Architects and designers who understand emerging trends in workspace culture:
            </p>
            <ul className="space-y-3">
              {qualifications.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-tech-green mt-1">•</span>
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="font-semibold mb-3 text-gray-800">How to Apply:</h4>
              <p className="mb-4 text-gray-700">
                Send your CV and design portfolio to{" "}
                <a href="mailto:hiring@outtabox.work" className="text-tech-green hover:underline">
                  hiring@outtabox.work
                </a>
              </p>
              <p className="text-gray-600 text-sm">
                Deadline: 30th April 2025
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-lg italic text-gray-600 max-w-2xl mx-auto">
            "Be part of a team where creativity meets strategy. Let's build workspaces that truly work."
          </p>
        </motion.div>
      </div>
    </section>
  );
}