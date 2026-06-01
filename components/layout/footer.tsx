import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const socialLinks = [
  { href: "https://x.com/aviralx07", label: "X" },
  { href: "https://github.com/aviralsharma07", label: "GitHub" },
  { href: "https://www.linkedin.com/in/aviral07/", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="page-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <p className="text-sm text-text-faint font-sans mb-0">
            Aviral Sharma &middot; {new Date().getFullYear()}
          </p>
          <Link
            href="/uses"
            className="text-sm text-text-faint hover:text-text-muted font-sans no-underline transition-colors"
          >
            /uses
          </Link>
        </div>
        <div className="flex items-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted hover:text-text font-sans inline-flex items-center gap-0.5 no-underline transition-colors"
            >
              {link.label}
              <ArrowUpRight size={12} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
