"use client";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const timeline = [
  {
    year: "2023",
    title: "Founded Spicy Code",
    desc: "A passionate team of developers and designers came together to build digital experiences that matter.",
  },
  {
    year: "2024",
    title: "5+ Projects Completed",
    desc: "Delivered web and app projects with modern UI/UX and innovative backend integration.",
  },
  {
    year: "2025",
    title: "Expanded Digital Services",
    desc: "Introduced digital marketing and branding solutions to help businesses grow online.",
  },
];

export default function CompanyTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-transparent p-8 rounded-3xl shadow-lg border-none"
    >
      <h3 className="text-2xl font-semibold text-center mb-6 text-indigo-100">
        Our Journey
      </h3>

      <div className="relative border-l-2 border-indigo-100 pl-6 space-y-8">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative"
          >
            {/* Dot */}
            <div className="absolute -left-[0.9rem] w-4 h-4 bg-indigo-500 rounded-full border-4 border-gray-800"></div>

            {/* Content */}
            <div className="bg-gray-900 p-4 rounded-xl hover:bg-gray-700 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="text-indigo-400 w-5 h-5" />
                <p className="text-sm text-gray-400">{item.year}</p>
              </div>
              <h4 className="text-lg font-semibold text-white">
                {item.title}
              </h4>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
