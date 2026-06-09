import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Built | Aviral Sharma",
  description: "Things I've built, work and projects, all in one place.",
};

type EntryKind = "role" | "project";

interface Entry {
  title: string;
  subtitle?: string;
  period: string;
  kind: EntryKind;
  description: string;
  tech?: string[];
  links?: { label: string; url: string }[];
}

const entries: Entry[] = [
  {
    title: "busyocto.ai",
    subtitle: "Software Developer",
    period: "2024 – present",
    kind: "role",
    description:
      "Building production features across the full stack. Shipping complex interfaces, handling real-world state at scale, and working async across timezones. This is where I learned what it means to ship things people actually depend on.",
    links: [
      { label: "Website", url: "https://busyocto.ai" },
    ],
  },
  {
    title: "PolicyLens",
    period: "May 2026",
    kind: "project",
    description:
      "A document compiler for Indian health insurance PDFs. Policy wordings are deeply nested legal documents that break every standard tool—RAG loses hierarchy, vector DBs flatten structure, LLMs hallucinate clause relationships. PolicyLens processes them through a multi-stage pipeline: physical layer (PDF structure), logical layer (clause boundaries, hierarchy), and semantic layer (typed fact extraction with evidence coordinates). The engine worked—490/490 tests passing, 647 active policies processed—but the prototype revealed that even perfect parsing can't guarantee accurate product recommendations. The project closed out after 2 weeks as a finished open-source artifact.",
    tech: ["Python", "TypeScript", "LLMs", "SQLite"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/aviralsharma07/PolicyLens",
      },
    ],
  },
  {
    title: "DigitiseMyBusiness",
    subtitle: "Resumemate · Software Developer",
    period: "2023 – 2024",
    kind: "role",
    description:
      "My first professional engineering role. Built Resumemate, a dynamic resume builder platform. Went from writing code that works to writing code that ships. Production React, API integration, working with a team, and learning that building for real users requires a different kind of discipline.",
    links: [
      { label: "Resumemate", url: "https://resumemate.io" },
    ],
  },
  {
    title: "Schedura",
    period: "2024",
    kind: "project",
    description:
      "A scheduling platform with Google Calendar integration, availability management, and automatic Google Meet link generation. Built it because I wanted to understand how OAuth flows, calendar APIs, and complex scheduling logic actually work under the hood, not just use a library.",
    tech: ["Next.js", "Prisma", "NeonDB", "Clerk Auth"],
    links: [
      { label: "Live", url: "https://schedura.vercel.app/" },
      {
        label: "GitHub",
        url: "https://github.com/aviralsharma07/schedura",
      },
    ],
  },
  {
    title: "Sketchlab",
    period: "2024",
    kind: "project",
    description:
      "Collaborative online whiteboard with real-time sketching. Two people drawing on the same canvas, seeing each other's strokes instantly. Built to learn WebSockets and the patterns behind real-time sync.",
    tech: ["Next.js", "Socket.io"],
    links: [
      { label: "Live", url: "https://sketchlab.vercel.app/" },
      {
        label: "GitHub",
        url: "https://github.com/aviralsharma07/sketchlab",
      },
    ],
  },
];

export default function BuiltPage() {
  return (
    <div className="prose">
      <h1>Built</h1>
      <div className="mt-10 space-y-14">
        {entries.map((entry) => (
          <article key={entry.title + entry.period}>
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <div>
                <h2 className="mb-0 text-xl inline">{entry.title}</h2>
                {entry.subtitle && (
                  <span className="text-text-muted text-base">
                    {" "}
                    &middot; {entry.subtitle}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3">
                <span className="font-sans text-xs text-text-faint">
                  {entry.period}
                </span>
                <span className="font-sans text-[10px] uppercase tracking-widest text-text-faint border border-border rounded-sm px-1.5 py-0.5">
                  {entry.kind}
                </span>
              </div>
            </div>

            <p className="mt-2">{entry.description}</p>

            {(entry.tech || entry.links) && (
              <div className="flex items-center gap-4 flex-wrap">
                {entry.tech && (
                  <div className="flex flex-wrap gap-1.5">
                    {entry.tech.map((t, i) => (
                      <span
                        key={t}
                        className="font-sans text-xs text-text-faint"
                      >
                        {t}
                        {entry.tech && i < entry.tech.length - 1 && " ·"}
                      </span>
                    ))}
                  </div>
                )}
                {entry.links && (
                  <div className="flex gap-3">
                    {entry.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-sm inline-flex items-center gap-0.5"
                      >
                        {link.label}
                        <ArrowUpRight size={12} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
