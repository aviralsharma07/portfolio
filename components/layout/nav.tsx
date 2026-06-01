"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "./theme-provider";
import { useState } from "react";
import { Wordmark } from "./wordmark";

const links = [
  { href: "/", label: "Writing" },
  { href: "/projects", label: "Built" },
  { href: "/now", label: "Now" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-border">
      <nav className="page-container flex items-center justify-between h-14">
        <Link href="/" className="no-underline hover:opacity-80 transition-opacity">
          <Wordmark />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link no-underline ${
                pathname === link.href ? "active text-text" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="text-text-muted hover:text-text transition-colors p-1"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="text-text-muted hover:text-text transition-colors p-1"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-text-muted hover:text-text transition-colors p-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border">
          <div className="page-container py-4 flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link no-underline ${
                  pathname === link.href ? "active text-text" : ""
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
