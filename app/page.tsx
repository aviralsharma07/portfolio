"use client";
import { motion } from "framer-motion";
import Header from "@/components/header";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="min-h-screen w-screen px-10">
      <Header />
      <Hero />
    </motion.main>
  );
}
