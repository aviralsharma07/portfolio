"use client";

import { motion } from "framer-motion";

const SpaceFooter = () => {
  const currentYear = new Date().getFullYear();

  // Generate random positions for stars
  const stars = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 2 + 2,
  }));

  return (
    <footer className="relative bg-transparent shadow-xl py-8 overflow-hidden border-t border-blue-500/20">
      {/* Background stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-blue-400 rounded-full"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <div className="inline-block">
              <h2 className="text-xl font-mono bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">ENGINE_</h2>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-center">
            <p className="text-sm font-mono text-gray-400">© {currentYear} AVIRAL SHARMA | ALL RIGHTS RESERVED</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default SpaceFooter;
