import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import SwitchButton from "./SwitchButton";

const ToggleThemeButton = () => {
  const [theme, setTheme] = useState("light");

  // Sync theme state with localStorage and HTML class
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "dark");

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    // <button onClick={toggleTheme} className="p-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-accent hover:bg-accent hover:text-white transition">
    //   {/* {theme === "light" ? "Dark Mode" : "Light Mode"} */}
    //   {theme === "light" ? "🌙" : "☀️"}
    // </button>
    <SwitchButton toggleTheme={toggleTheme} isDark={theme === "dark"} />
  );
};

export default ToggleThemeButton;
