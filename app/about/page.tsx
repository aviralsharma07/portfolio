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
        <a href="https://busyocto.ai" target="_blank" rel="noopener noreferrer">
          busyocto.ai
        </a>
        , where I ship features across the full stack. Next.js, React,
        TypeScript are the tools I reach for most.
      </p>

      <p>
        Outside of work I build things that interest me. The most recent one is
        PolicyLens, a document compiler for Indian health insurance PDFs. It
        started because I couldn&apos;t find a single structured source of
        policy terms anywhere. Two weeks of building a multi-stage pipeline
        later, the engine worked &mdash; 490 tests passing, 647 policies
        processed &mdash; but I learned that even perfect parsing doesn&apos;t
        guarantee accurate recommendations. The repo is a finished open-source
        artifact.
      </p>

      <p>
        I&apos;m constantly trying to upskill and stay current. At the moment,
        that means doubling down on becoming a complete AI-enabled and applied
        engineer &mdash; someone who can use tools well and solve problems that
        matter.
      </p>

      <p>
        I care about design as much as I care about code. Typography,
        whitespace, how a thing feels to use. These aren&apos;t afterthoughts
        for me. I write poetry sometimes. I play badminton often.
      </p>

      <p>
        Reach me:{" "}
        <a
          href="https://x.com/aviralx07"
          target="_blank"
          rel="noopener noreferrer"
        >
          @aviralx07 on X
        </a>
        . Or email at{" "}
        <a href="mailto:aviralsharma723@gmail.com">aviralsharma723@gmail.com</a>
        .
      </p>
    </div>
  );
}
