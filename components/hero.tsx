"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [randomPositions, setRandomPositions] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize window size when the component mounts
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

      // Generate random positions for the elements
      const randomPositionsArray = Array.from({ length: 100 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }));
      setRandomPositions(randomPositionsArray);
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
          {randomPositions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-500 rounded-full"
              initial={{
                x: pos.x,
                y: pos.y,
                opacity: Math.random(),
              }}
              animate={{
                y: [0, windowSize.height],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </motion.div>
      </div>
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <motion.h1 className="text-6xl sm:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary-accent" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
          AVIRAL SHARMA
        </motion.h1>
        <motion.div className="text-2xl sm:text-4xl mb-8" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}>
          <TypeAnimation sequence={["SOFTWARE ENGINEER, FRONTEND DEVELOPER", 2000, "ENGINEERING THE WEB", 2000, "RESPONSIVE BY DESIGN", 2000]} wrapper="span" speed={50} repeat={Infinity} />
        </motion.div>
        <motion.div className="flex justify-center space-x-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.5 }}>
          <a href="#projects" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            Explore My Work
          </a>
          <a href="#contact" className="bg-transparent border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105">
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};
