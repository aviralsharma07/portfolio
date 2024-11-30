import React, { useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

interface SwitchButtonProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const SwitchButton = ({ toggleTheme, isDark }: SwitchButtonProps) => {
  return (
    <motion.div
      className={`relative px-1 py-1 justify-between rounded-full w-18 flex`}
      onClick={toggleTheme}
      //   animate={{
      //     backgroundColor: isDark ? "var(--foreground)" : "var(--accent)", // Background color changes based on theme
      //   }}
      animate={{
        backgroundImage: isDark
          ? "linear-gradient(135deg, var(--secondary-accent) 0%, var(--accent) 100%)" // Dark mode gradient
          : "linear-gradient(135deg, var(--accent) 0%, var(--secondary-accent) 100%)", // Light mode gradient
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="w-8 h-8 rounded-full cursor-pointer flex items-center justify-center"
        animate={{ opacity: isDark ? 0.5 : 1 }} // Sun icon fades out in dark mode
        transition={{ duration: 0.3 }}
      >
        <Sun fill={`${!isDark ? "black" : "#ffbe03"}`} color={`${!isDark ? "black" : "#ffbe03"}`} className="z-20" />
      </motion.div>
      <motion.div
        className="w-8 h-8 rounded-full cursor-pointer flex items-center justify-center"
        animate={{ opacity: isDark ? 1 : 0.5 }} // Moon icon fades out in light mode
        transition={{ duration: 0.3 }}
      >
        <Moon fill={`${isDark ? "black" : "C0C0C0"}`} stroke="0" className="z-20" />
      </motion.div>
      <motion.span
        className="bg-white w-8 h-8 transition-all rounded-full absolute top-1 z-10"
        animate={{
          x: !isDark ? 0 : "100%", // Move left to right based on theme
        }}
        transition={{
          type: "spring",
          stiffness: 1900,
          damping: 10,
        }}
      />
    </motion.div>
  );
};

export default SwitchButton;
