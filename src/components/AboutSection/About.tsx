// import React from "react";
import { motion } from "framer-motion";
import { ParticleTextEffect } from "../particle-text-effect";

export default function AboutSection() {
  return (
    <section className=" bg-gradient-to-b from-black to-red-900 text-white py-20  px-6 md:px-16 lg:px-28">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left side content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.5,
            ease: "easeOut",
          }}
          className="about_text"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-indigo-500">Spicy Code</span>
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 about_content">
            At Spicy Code, we are a passionate team of developers, designers,
            and digital creators driven by one mission to turn creative ideas
            into powerful digital experiences. Founded by a group of young
            innovators, our startup brings together expertise in web
            development, app development, UI/UX design, and social media
            marketing to deliver smart and stylish digital solutions. We believe
            in consistency, creativity, and collaboration blending design with
            technology to help brands grow and connect with people in meaningful
            ways.
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-indigo-500">Vision</span>
          </h2>
          <p className="about_content">
            To build a creative tech community that transforms businesses
            through innovation, design, and technology.
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Our <span className="text-indigo-500">Mission</span>
          </h2>
          <ul className="space-y-3 text-gray-300 about_content">
            <li className="flex items-center gap-3">
              <span className="text-indigo-500 text-xl">✔</span> Deliver
              high-quality digital solutions that speak for our clients’ goals
            </li>
            <li className="flex items-center gap-3">
              <span className="text-indigo-500 text-xl">✔</span> Encourage
              teamwork, research, and innovation in every project.
            </li>
            <li className="flex items-center gap-3">
              <span className="text-indigo-500 text-xl">✔</span>
              Create digital products that are both functional and visually
              stunning.
            </li>
          </ul>
        </motion.div>

        {/* Right side image mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur-3xl opacity-40"></div> */}
          <div className="relative bg-gradient-to-t from-black to-red-900  rounded-2xl shadow-lg  border-none shadow-indigo-500 ">
            <ParticleTextEffect />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
