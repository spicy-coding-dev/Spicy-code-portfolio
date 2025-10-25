"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FiFileText,
  FiSettings,
  FiPenTool,
  FiCode,
  FiCheckCircle,
  FiCloud,
  FiTool,
} from "react-icons/fi";

const steps = [
  {
    title: "Requirement Analysis",
    description:
      "Understanding your needs to craft the perfect project foundation.",
    icon: <FiFileText />,
    color: "#22d3ee", // cyan
  },
  {
    title: "Planning & Strategy",
    description:
      "Defining roadmap, milestones, and goals for smooth execution.",
    icon: <FiSettings />,
    color: "#b45309", // yellow tone
  },
  {
    title: "UI/UX & System Design",
    description:
      "Designing intuitive layouts with user-focused system structure.",
    icon: <FiPenTool />,
    color: "#60a5fa", // blue
  },
  {
    title: "Development",
    description: "Turning ideas into reality through clean and scalable code.",
    icon: <FiCode />,
    color: "#8b5cf6", // violet
  },
  {
    title: "Testing & QA",
    description:
      "Ensuring reliability, performance, and a flawless user experience.",
    icon: <FiCheckCircle />,
    color: "#e879f9", // pink
  },
  {
    title: "Deployment",
    description: "Seamless deployment, ensuring stability and performance.",
    icon: <FiCloud />,
    color: "#fb7185", // rose
  },
  {
    title: "Support & Maintenance",
    description: "Continuous support to keep your system updated and secure.",
    icon: <FiTool />,
    color: "#818cf8", // indigo
  },
];

export default function WorkProcess() {
  return (
    <div className="bg-black text-white py-10 px-4 overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold mb-3 text-center">
        Our <span className="text-indigo-500"> Work Process</span>
      </h2>
      <p className="text-center text-gray-400 mb-16 text-sm sm:text-base">
        Transforming Vision into Reality – Seamlessly with SPICY CODE.
      </p>
      {/* ✅ Responsive Grid Layout */}
      <div
        className="
          relative
          grid
          gap-15
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          justify-items-center
          px-5
        "
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="
              relative flex flex-col cursor-pointer items-center text-center 
              rounded-2xl p-6 w-full sm:w-[16rem]
              transition-all duration-300
            "
            style={{
              border: `2px solid ${step.color}`,
              boxShadow: `0 0 15px ${step.color}40`,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 0 25px ${step.color}`,
            }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              default: { duration: 0.3, ease: "easeInOut" },
              boxShadow: { duration: 0.5, ease: "easeInOut" },
            }}
          >
            {/* ✅ Icon Circle */}
            <div
              className="absolute -top-8 bg-black w-16 h-16 flex items-center justify-center rounded-full text-3xl shadow-lg transition-all duration-300"
              style={{
                border: `4px solid ${step.color}`,
                color: step.color,
                boxShadow: `0 0 10px ${step.color}`,
              }}
            >
              {step.icon}
            </div>

            <h3
              className="font-bold mt-10 mb-2 text-lg transition-colors duration-300"
              style={{ color: step.color }}
            >
              {step.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {step.description}
            </p>

            {/* ✅ Horizontal Connector for large screens */}
            {index < steps.length - 1 && (
              <div
                className="hidden lg:block absolute top-1/2 right-[-6.8rem]  w-25 h-[2px]"
                style={{
                  background: `linear-gradient(to right, ${step.color}, ${
                    steps[index + 1].color
                  })`,
                }}
              ></div>
            )}
          </motion.div>
        ))}
      </div>

      {/* ✅ Optional subtle fade gradient for edges */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black"></div>
    </div>
  );
}
