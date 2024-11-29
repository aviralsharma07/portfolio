import React from "react";
import ToggleThemeButton from "./ToggleThemeButton";
import Link from "next/link";

const navItems = [
  { number: "01", name: "about", href: "#about" },
  { number: "02", name: "experience", href: "#experience" },
  { number: "03", name: "projects", href: "#projects" },
  { number: "04", name: "contact", href: "#contact" },
];

const Header = () => {
  return (
    <header>
      <nav className="fixed flex justify-between py-7 top-0 left-0 w-full px-10 bg-opacity-50 backdrop-blur-md z-50">
        <div className="font-spaceGrotesk">
          <span className="text-4xl font-semibold text-accent mr-[2px]">Avi</span>
          <span className="text-4xl font-semibold text-foreground mr-[2px]">.</span>
          <span className="text-4xl font-semibold text-secondary-accent">_</span>
        </div>
        <ul className="flex justify-center items-center space-x-14">
          {navItems.map((item) => (
            <li key={item.number}>
              <Link href={item.href} className="text-xl font-orbitron cursor-pointer relative">
                <span className="text-xs absolute top-0 text-accent left-0 -translate-x-5 -translate-y-2">{item.number}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ToggleThemeButton />
      </nav>
    </header>
  );
};

export default Header;
