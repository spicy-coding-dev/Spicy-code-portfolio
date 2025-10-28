// import { useState } from 'react'
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import GlareHover from "../GlareHover";


export default function HeroSection() {
  return (
    <div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Turning Ideas <br /> Into Powerful Digital Reality
        </motion.h1>

        <motion.p
          className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          Spicy Code is a modern web solutions company specializing in
          high-performance websites, sleek designs, and cutting-edge web apps.
        </motion.p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <GlareHover
            width="100%"
            height="auto"
            glareColor="#ffffff"
            glareOpacity={0.3}
            background="transparent"
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
            className="rounded-lg"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector(`#about`);
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </GlareHover>
        </div>
      </LampContainer>
    </div>
  );
}
