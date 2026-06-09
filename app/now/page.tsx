import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now | Aviral Sharma",
  description: "What I'm focused on right now.",
};

function NowSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="font-sans text-xs uppercase tracking-widest text-text-faint mb-4 pb-2 border-b border-border">
        {title}
      </h2>
      <div className="prose">{children}</div>
    </section>
  );
}

export default function NowPage() {
  return (
    <div>
      <div className="prose mb-8">
        <h1>Now</h1>
        <p className="text-text-muted">
          What I&apos;m focused on right now. Updated when things change.
        </p>
        <p className="text-text-faint font-sans text-xs">
          Last updated: June 2025
        </p>
      </div>

      <div className="mt-10">
        <NowSection title="Building">
          <p>
            <strong>PolicyLens</strong> &ndash; A 2-week sprint building a
            document compiler for Indian insurance PDFs. Multi-stage pipeline,
            490 passing tests, 647 policies processed. Closed out as a finished
            open-source artifact. The repo chronicles what worked, what
            didn&apos;t, and why.
          </p>
        </NowSection>

        <NowSection title="Learning">
          <p>
            Currently exploring embeddings and retrieval systems. The insurance
            project is the learning vehicle. Everything gets applied to a real,
            hard problem.
          </p>
        </NowSection>

        <NowSection title="Reading">
          <p>
            <em>The Picture of Dorian Gray</em> by Oscar Wilde.
          </p>
        </NowSection>

        <NowSection title="Working">
          <p>
            Software developer at{" "}
            <a
              href="https://busyocto.ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              busyocto.ai
            </a>
            . Full stack, working remotely. Next.js, React, TypeScript.
          </p>
        </NowSection>

        <NowSection title="Elsewhere">
          <ul className="list-none pl-0">
            <li>Playing badminton regularly</li>
            <li>Writing poetry when the mood strikes</li>
          </ul>
        </NowSection>
      </div>
    </div>
  );
}
