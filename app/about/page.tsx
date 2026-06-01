import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Aviral Sharma",
  description: "A bit about me.",
};

export default function AboutPage() {
  return (
    <div className="prose">
      <h1>About</h1>

      <p>
        I&apos;m Aviral, a 24-year-old software developer. I work at{" "}
        <a
          href="https://busyocto.ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          busyocto.ai
        </a>
        , where I ship features across the full stack. Next.js, React,
        TypeScript are the tools I reach for most.
      </p>

      <p>
        Outside of work I build things that interest me. The biggest one right
        now is a health insurance database for India. It started because I
        couldn&apos;t find a single structured source of policy terms anywhere,
        not from IRDAI, not from PolicyBazaar, not from anyone. That led me to
        building a custom PDF parser, which pulled me into document structure
        problems, which pulled me into AI engineering. One rabbit hole leading
        to another is usually how my projects start.
      </p>

      <p>
        I&apos;m midway through a self-built AI engineering roadmap. No courses,
        just a 3-month plan where everything I learn gets tested against real
        problems. I find I only understand something when I&apos;ve broken it a
        few times.
      </p>

      <p>
        I care about design as much as I care about code. Typography, whitespace,
        how a thing feels to use. These aren&apos;t afterthoughts for me.
        I write poetry sometimes. I play badminton often.
      </p>

      <p>
        The best way to reach me is{" "}
        <a
          href="https://x.com/aviralx07"
          target="_blank"
          rel="noopener noreferrer"
        >
          @aviralx07 on X
        </a>
        . I read every reply. Or email at{" "}
        <a href="mailto:aviralsharma0707@gmail.com">
          aviralsharma0707@gmail.com
        </a>
        .
      </p>
    </div>
  );
}
