"use client";

import { motion, useAnimation, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import SectionHeading from "./sectionHeading";
import Link from "next/link";
import { Download, Phone } from "lucide-react";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <section className="min-h-screen" id="about">
      {/* --------------- HEADING ---------- */}
      <SectionHeading number="01" heading="About Me" />

      {/* --------------- CONTENT ---------- */}
      <div className="flex flex-col lg:flex-row items-center">
        {/* ----------- ROTATING IMAGE -------------- */}
        <motion.div className="lg:w-1/2 flex justify-center" style={{ y, scale }}>
          <div className="relative w-[300px] h-[300px]">
            <motion.div ref={imageRef} className="relative w-full h-full" initial={{ opacity: 0, rotate: -10 }} animate={{ opacity: 1, rotate: 0 }} transition={{ duration: 1, delay: 0.5 }}>
              <Image src="/profilePhoto.jpeg" alt="Aviral" layout="fill" objectFit="cover" className="rounded-lg z-10" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* ABOUT ME CONTENT */}
        <motion.div className="flex-1 lg:w-1/2 space-y-6 font-spaceGrotesk" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
          <p className="text-lg text-gray-300">
            Greetings, voyager! Hi, I&apos;m Aviral, a passionate Frontend Developer with a knack for building intuitive and high-performance web applications. Currently, I&apos;m working at DigitiseMyBusiness, where I&apos;ve contributed to projects like Resumemate, a dynamic resume builder platform, honing my expertise in <span className="font-bold">NextJs, React, TavaScript, Tailwind CSS, and RESTful API integration.</span>
          </p>
          <p className="text-lg text-gray-300">
            Beyond code, I&apos;m a 4th-year engineering student driven by curiosity and a love for learning. When I&apos;m not coding, you&apos;ll find me exploring the latest tech trends or collaborating on innovative projects that solve real-world problems. <span className="font-bold">I&apos;m excited to connect and contribute to impactful teams where I can continue growing as a developer and make meaningful contributions.</span>
          </p>
          <motion.div className="flex font-orbitron items-center space-x-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
            <Link href="#contact" className="bg-accent inline-flex gap-2 items-center text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors duration-300">
              Contact Me <Phone size={20} />
            </Link>
            <Link href="/Aviral-Sharma.pdf" className="border inline-flex items-center gap-2 border-accent text-accent px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-500 hover:text-white transition-colors duration-300" target="_blank" download>
              Download CV <Download size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
