"use client";
import { motion } from "framer-motion";
import Header from "@/components/header";
import { Hero } from "@/components/hero";
import Experience from "@/components/experience";
import About from "@/components/about";

export default function Home() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="min-h-screen overflow-hidden max-w-screen px-10">
      <Header />
      <Hero />
      <About />
      <Experience />
    </motion.main>
  );
}
