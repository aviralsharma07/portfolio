"use client";
import { motion } from "framer-motion";
import Header from "@/components/header";
import { Hero } from "@/components/hero";
import Experience from "@/components/experience";
import About from "@/components/about";
import Projects from "@/components/projects";
import LoadingScreen from "@/components/Loading";
import { useEffect, useState } from "react";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Set the loading state to complete after the loading duration
    const loadingDuration = 3000; // 5 seconds for the loading animation
    const timer = setTimeout(() => {
      setLoadingComplete(true); // Mark the loading screen as complete after the duration
    }, loadingDuration);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!loadingComplete ? (
        <LoadingScreen />
      ) : (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="min-h-screen overflow-hidden max-w-screen px-10">
          <Header />
          <Hero />
          <About />
          <Experience />
          <Projects />
        </motion.main>
      )}
    </>
  );
}
