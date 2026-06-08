import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "PolicyLens: Turning Insurance PDFs Into Structured Truth",
  description:
    "A technical story about building PolicyLens, a document compiler for Indian health insurance PDFs, and the engineering lessons that survived after the product stopped.",
};

const repoLinks = {
  repo: "https://github.com/aviralsharma07/PolicyLens",
  closeout:
    "https://github.com/aviralsharma07/PolicyLens/blob/main/docs/project_closeout.md",
  evaluation:
    "https://github.com/aviralsharma07/PolicyLens/blob/main/docs/evaluation.md",
  tasks: "https://github.com/aviralsharma07/PolicyLens/blob/main/docs/tasks.md",
  bundleCloseout:
    "https://github.com/aviralsharma07/PolicyLens/blob/main/data/reports/dse027_curated_mvp_bundle_closeout_v1.md",
};

const journey = [
  {
    step: "01",
    title: "Buyer frustration",
    body: "Opaque aggregator flows, hidden products, and sales pressure created the original problem statement.",
    tone: "bg-[#f8ece4] border-[#e8cdbf] dark:bg-[#3a2b25] dark:border-[#5c453c]",
  },
  {
    step: "02",
    title: "Naive LLM pass",
    body: "Whole-PDF prompting and markdown conversion both plateaued. The output looked fluent but was not comparison-grade.",
    tone: "bg-[#f7f0e2] border-[#ead9b1] dark:bg-[#3a3324] dark:border-[#5f5337]",
  },
  {
    step: "03",
    title: "Compiler pivot",
    body: "The problem changed from “ask a model” to “compile a legal document into a structured, evidence-linked representation.”",
    tone: "bg-[#edf5ea] border-[#cfe1c7] dark:bg-[#253628] dark:border-[#3f5743]",
  },
  {
    step: "04",
    title: "Prototype truth gap",
    body: "The local prototype showed that a correctly parsed policy can still be a misleading product recommendation.",
    tone: "bg-[#eef2fb] border-[#cfd7f1] dark:bg-[#243042] dark:border-[#3b4d67]",
  },
  {
    step: "05",
    title: "Closeout",
    body: "The engine worked. The broad consumer-product path did not. The repo became a finished open-source artifact.",
    tone: "bg-[#f3eef8] border-[#ddd1ec] dark:bg-[#31283d] dark:border-[#514163]",
  },
];

const approachCards = [
  {
    label: "Direct PDFs",
    summary: "Fastest path to try, weakest path to trust.",
    notes: [
      "High token pressure on long legal documents",
      "Weak structure fidelity on clauses and tables",
      "Difficult to guarantee typed output quality",
    ],
    verdict: "Good for a demo. Bad for a document compiler.",
    tone: "bg-[#f8ece4] border-[#e8cdbf] dark:bg-[#3a2b25] dark:border-[#5c453c]",
  },
  {
    label: "Markdown conversion",
    summary: "Cleaner input, same ceiling.",
    notes: [
      "Text became easier to inspect",
      "Tables still lost operational structure",
      "Model behavior was materially similar to native PDF prompting",
    ],
    verdict: "Changing format did not change the bottleneck.",
    tone: "bg-[#f7f0e2] border-[#ead9b1] dark:bg-[#3a3324] dark:border-[#5f5337]",
  },
  {
    label: "Compiler pipeline",
    summary: "More work up front, but finally testable.",
    notes: [
      "Separate physical, logical, and semantic layers",
      "Store evidence and coordinates",
      "Extract facts with explicit status instead of vibes",
    ],
    verdict: "This is where the project became real engineering.",
    tone: "bg-[#edf5ea] border-[#cfe1c7] dark:bg-[#253628] dark:border-[#3f5743]",
  },
];

const pipelineStages = [
  "Corpus lockdown",
  "UIN reconciliation",
  "Physical layer",
  "Logical layer",
  "Table engine",
  "Clause store",
  "Fact extraction",
  "Compiled export",
];

const metrics = [
  {
    value: "20",
    label: "reviewed gold policies",
    note: "The manually reviewed benchmark corpus used to keep the pipeline honest.",
  },
  {
    value: "647",
    label: "active policy wordings",
    note: "The full policy-wording corpus processed after document filtering and UIN reconciliation.",
  },
  {
    value: "20/20",
    label: "priority concepts active",
    note: "Deterministic extraction for the core comparison features actually turned on.",
  },
  {
    value: "490/490",
    label: "tests passing",
    note: "The final closeout state of the test suite before the project was formally stopped.",
  },
];

const bundleStats = [
  {
    title: "Draft source-bundle registry",
    body: "507 draft bundles were generated. 504 were still `missing_pbt`, 1 was `acceptable_with_known_gap`, and 2 were `rejected`.",
  },
  {
    title: "Curated MVP corpus",
    body: "30 latest-reviewed products survived the verification gate, backed by 45 current official source documents downloaded and hashed.",
  },
  {
    title: "Curated bundle quality",
    body: "The 30-product set still had visible gaps: 18 `acceptable_with_known_gap`, 6 `missing_cis`, 4 `missing_pbt`, and 2 `stale_version`.",
  },
  {
    title: "Table engine result",
    body: "The table eval eventually passed on the reviewed corpus: 387/387 labels detected, with 100% priority recall, 100% type accuracy, and 100% header lineage.",
  },
];

const projectRecordLinks = [
  { label: "Open-source repo", href: repoLinks.repo },
  { label: "Project closeout", href: repoLinks.closeout },
  { label: "Evaluation gates", href: repoLinks.evaluation },
  { label: "Task ledger", href: repoLinks.tasks },
  { label: "Curated bundle closeout", href: repoLinks.bundleCloseout },
];

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border pt-12">
      <p className="mb-3 font-sans text-xs uppercase tracking-[0.18em] text-text-faint">
        {eyebrow}
      </p>
      <h2 className="mb-6 text-3xl font-semibold leading-tight text-text sm:text-[2rem]">
        {title}
      </h2>
      <div className="space-y-5 text-[1.06rem] leading-8 text-text">
        {children}
      </div>
    </section>
  );
}

function DiagramCard({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-border bg-bg-secondary/70 ${className}`}
    >
      {children}
    </div>
  );
}

function MetricCard({
  value,
  label,
  note,
}: {
  value: string;
  label: string;
  note: string;
}) {
  return (
    <article className="rounded-2xl border border-border bg-bg-secondary/70 p-5">
      <p className="mb-2 font-sans text-3xl font-semibold text-text">{value}</p>
      <p className="mb-2 font-sans text-sm uppercase tracking-[0.12em] text-text-muted">
        {label}
      </p>
      <p className="mb-0 text-sm leading-6 text-text-muted">{note}</p>
    </article>
  );
}

export default function PolicyLensWritingPage() {
  return (
    <article className="mx-auto max-w-[860px] px-5 pb-24 pt-10 sm:px-8">
      <header className="mb-14 border-b border-border pb-12">
        <p className="mb-4 font-sans text-xs uppercase tracking-[0.18em] text-text-faint">
          Writing / Technical Story
        </p>
        <h1 className="max-w-4xl text-4xl font-bold leading-[1.12] text-text sm:text-5xl">
          PolicyLens was my attempt to turn opaque insurance PDFs into
          structured truth.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-text-muted sm:text-xl">
          It started as a practical frustration with insurance-buying UX and
          ended as a document compiler for regulated PDFs: one that could parse
          structure, link facts to evidence, and still tell me where the product
          thesis broke.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 text-sm text-text-muted">
          <span className="rounded-full border border-border px-3 py-1.5">
            2026-06-08
          </span>
          <span className="rounded-full border border-border px-3 py-1.5">
            technical story
          </span>
          <span className="rounded-full border border-border px-3 py-1.5">
            12 min read
          </span>
          <Link
            href={repoLinks.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-3 py-1.5 text-text transition-colors hover:text-accent"
          >
            open-source repo
          </Link>
        </div>
      </header>

      <div className="space-y-16">
        <Section
          id="why"
          eyebrow="Origin"
          title="The project existed because the buying experience felt structurally broken."
        >
          <p>
            The original problem was not academic. While buying health insurance
            for myself and family, I kept running into the same pattern:
            aggregators generated spam calls, hid important products behind
            unclear filters, and often surfaced recommendations that did not
            line up cleanly with what their own UI claimed to support.
          </p>
          <p>
            I wanted one screen where a user could describe their situation and
            get a short, source-backed answer. No call-center theater. No forced
            opacity. No pretending that policy comparison is obvious when the
            underlying documents are dense legal PDFs.
          </p>

          <DiagramCard className="p-6">
            <div className="relative space-y-4 before:absolute before:bottom-6 before:left-[1.1rem] before:top-6 before:w-px before:bg-border">
              {journey.map((item) => (
                <div
                  key={item.step}
                  className="relative grid gap-4 rounded-2xl border border-border bg-bg p-4 md:grid-cols-[auto_1fr]"
                >
                  <div
                    className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full border font-sans text-xs font-semibold tracking-[0.16em] text-text-faint ${item.tone}`}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold">{item.title}</h3>
                    <p className="mb-0 text-sm leading-6 text-text-muted">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </DiagramCard>
        </Section>

        <Section
          id="naive-approach"
          eyebrow="False Start"
          title="The first approaches failed for a simple reason: they never became trustworthy."
        >
          <p>
            The obvious first idea was to let a general model read policy PDFs
            directly. I tried that. Then I tried converting PDFs into markdown
            and plain text first, hoping cleaner input would improve the result.
            It did not.
          </p>
          <p>
            The shape of the failure was revealing. The model could summarize.
            It could sound competent. But the output was still brittle for the
            thing I actually needed: structured, comparison-grade facts with
            reliable grounding in source text.
          </p>

          <DiagramCard className="p-6">
            <div className="grid gap-4 lg:grid-cols-3">
              {approachCards.map((card) => (
                <article
                  key={card.label}
                  className={`rounded-2xl border p-5 ${card.tone}`}
                >
                  <p className="mb-2 font-sans text-xs uppercase tracking-[0.18em] text-text-faint">
                    approach
                  </p>
                  <h3 className="mb-2 text-xl font-semibold">{card.label}</h3>
                  <p className="mb-4 text-sm leading-6 text-text-muted">
                    {card.summary}
                  </p>
                  <ul className="mb-4 space-y-2 pl-5 text-sm leading-6 text-text">
                    {card.notes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                  <p className="mb-0 border-t border-black/10 pt-4 text-sm leading-6 text-text dark:border-white/10">
                    {card.verdict}
                  </p>
                </article>
              ))}
            </div>
          </DiagramCard>

          <blockquote className="border-l-2 border-accent pl-5 text-text-muted">
            The bottleneck was not whether the model saw a PDF, markdown, or
            plain text. The bottleneck was that I still did not have a
            structured representation of the document.
          </blockquote>
        </Section>

        <Section
          id="mental-model"
          eyebrow="Mental Model Shift"
          title="The real shift was understanding that a policy PDF is not just text."
        >
          <p>
            Once I stopped thinking about the problem as “ask an AI about a
            PDF,” the architecture got clearer. A policy document is layered. It
            has layout, headings, clauses, tables, and product-specific
            conditions. Flattening all of that into raw text throws away exactly
            the context that makes the document legally meaningful.
          </p>

          <div className="grid gap-4 lg:grid-cols-3">
            <article className="rounded-2xl border border-border bg-[#f8ece4] p-5 dark:bg-[#3a2b25]">
              <h3 className="mb-2 text-xl">What is a clause?</h3>
              <p className="mb-0 text-sm leading-6 text-text-muted">
                A clause is a self-contained policy statement with legal effect:
                the unit that says what is covered, excluded, conditioned, or
                time-bound.
              </p>
            </article>
            <article className="rounded-2xl border border-border bg-[#edf5ea] p-5 dark:bg-[#253628]">
              <h3 className="mb-2 text-xl">What is a section tree?</h3>
              <p className="mb-0 text-sm leading-6 text-text-muted">
                It is the hierarchy of the document: headings, subheadings,
                sections, and the clauses that live under them. Without it, the
                parser loses context.
              </p>
            </article>
            <article className="rounded-2xl border border-border bg-[#eef2fb] p-5 dark:bg-[#243042]">
              <h3 className="mb-2 text-xl">What is source truth?</h3>
              <p className="mb-0 text-sm leading-6 text-text-muted">
                It means every extracted fact stays traceable to the exact text
                or table row that supports it, instead of becoming detached
                summary.
              </p>
            </article>
          </div>

          <DiagramCard className="p-6">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <p className="mb-3 font-sans text-xs uppercase tracking-[0.18em] text-text-faint">
                  Clause tree explainer
                </p>
                <div className="rounded-2xl border border-border bg-bg p-4">
                  <div className="space-y-3 font-sans text-sm">
                    <div className="rounded-xl border border-border bg-[#f8ece4] px-4 py-3 dark:bg-[#3a2b25]">
                      Policy wording
                    </div>
                    <div className="ml-5 rounded-xl border border-border bg-[#f7f0e2] px-4 py-3 dark:bg-[#3a3324]">
                      4. Waiting Periods
                    </div>
                    <div className="ml-10 rounded-xl border border-border bg-[#edf5ea] px-4 py-3 dark:bg-[#253628]">
                      4.1 Pre-existing disease waiting period
                    </div>
                    <div className="ml-16 rounded-xl border border-border bg-[#eef2fb] px-4 py-3 dark:bg-[#243042]">
                      Clause: coverage begins after 36 months, unless noted
                      otherwise
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="mb-3 font-sans text-xs uppercase tracking-[0.18em] text-text-faint">
                  Architecture view
                </p>
                <div className="space-y-3 rounded-2xl border border-border bg-bg p-4">
                  {[
                    {
                      label: "Physical layer",
                      body: "Pages, blocks, lines, coordinates",
                      tone: "bg-[#f8ece4] dark:bg-[#3a2b25]",
                    },
                    {
                      label: "Logical layer",
                      body: "Headings, sections, clauses, table parents",
                      tone: "bg-[#edf5ea] dark:bg-[#253628]",
                    },
                    {
                      label: "Semantic layer",
                      body: "Facts, statuses, evidence, normalized values",
                      tone: "bg-[#eef2fb] dark:bg-[#243042]",
                    },
                  ].map((layer) => (
                    <div
                      key={layer.label}
                      className={`rounded-xl border border-border p-4 ${layer.tone}`}
                    >
                      <p className="mb-1 font-sans text-sm font-semibold text-text">
                        {layer.label}
                      </p>
                      <p className="mb-0 text-sm leading-6 text-text-muted">
                        {layer.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DiagramCard>
        </Section>

        <Section
          id="pipeline"
          eyebrow="Pipeline"
          title="PolicyLens became a layered document compiler."
        >
          <p>
            The pipeline eventually settled into eight stages. Each stage had a
            different job, a different failure mode, and a different way to
            measure whether it was working.
          </p>

          <DiagramCard className="p-6">
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {pipelineStages.map((stage, index) => (
                <div
                  key={stage}
                  className="rounded-2xl border border-border bg-bg p-4"
                >
                  <p className="mb-2 font-sans text-xs uppercase tracking-[0.18em] text-text-faint">
                    stage {index + 1}
                  </p>
                  <h3 className="mb-0 text-lg">{stage}</h3>
                </div>
              ))}
            </div>
          </DiagramCard>

          <div className="grid gap-4 lg:grid-cols-2">
            <article className="rounded-2xl border border-border bg-bg-secondary/70 p-5">
              <h3 className="mb-3 text-xl">Upstream identity work</h3>
              <p>
                The engine first had to know what each file actually was. That
                meant corpus lockdown, document filtering, insurer-plan
                normalization, and UIN reconciliation before parsing anything.
              </p>
            </article>
            <article className="rounded-2xl border border-border bg-bg-secondary/70 p-5">
              <h3 className="mb-3 text-xl">Downstream fact work</h3>
              <p>
                After structure and tables came clause storage, source spans,
                and deterministic extraction for concrete concepts like waiting
                periods, co-pay, room rent limits, and deductibles.
              </p>
            </article>
          </div>

          <DiagramCard className="p-6">
            <p className="mb-4 font-sans text-xs uppercase tracking-[0.18em] text-text-faint">
              Evidence chain
            </p>
            <div className="grid gap-4 md:grid-cols-4">
              {[
                {
                  title: "Raw text",
                  body: "A line or table row inside the original policy PDF.",
                  tone: "bg-[#f8ece4] dark:bg-[#3a2b25]",
                },
                {
                  title: "Clause",
                  body: "The text is attached to a document section and given context.",
                  tone: "bg-[#f7f0e2] dark:bg-[#3a3324]",
                },
                {
                  title: "Extracted fact",
                  body: "A concept is emitted with value, status, confidence, and evidence.",
                  tone: "bg-[#edf5ea] dark:bg-[#253628]",
                },
                {
                  title: "Compiled output",
                  body: "The result becomes structured JSON instead of a loose answer.",
                  tone: "bg-[#eef2fb] dark:bg-[#243042]",
                },
              ].map((item, index) => (
                <div key={item.title} className="relative">
                  <div
                    className={`h-full rounded-2xl border border-border p-4 ${item.tone}`}
                  >
                    <h3 className="mb-2 text-lg">{item.title}</h3>
                    <p className="mb-0 text-sm leading-6 text-text-muted">
                      {item.body}
                    </p>
                  </div>
                  {index < 3 ? (
                    <div className="pointer-events-none hidden md:block absolute right-[-14px] top-1/2 h-px w-7 -translate-y-1/2 bg-border" />
                  ) : null}
                </div>
              ))}
            </div>
          </DiagramCard>
        </Section>

        <Section
          id="built"
          eyebrow="Outputs"
          title="The project did not just produce ideas. It produced measurable artifacts."
        >
          <p>
            By the end, the repo had moved far past the “interesting prototype”
            stage. It had a real gold corpus, a real parser stack, a real table
            engine, deterministic extractors for the priority concepts, and a
            documented closeout state with a full passing test suite.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </div>

          <DiagramCard className="p-6">
            <div className="grid gap-4 lg:grid-cols-2">
              {bundleStats.map((stat) => (
                <article
                  key={stat.title}
                  className="rounded-2xl border border-border bg-bg p-5"
                >
                  <h3 className="mb-2 text-xl">{stat.title}</h3>
                  <p className="mb-0 text-sm leading-6 text-text-muted">
                    {stat.body}
                  </p>
                </article>
              ))}
            </div>
          </DiagramCard>

          <p>
            Those numbers matter because they separate “I tried some prompts”
            from “I built an evaluated document system.” The system knew how
            many files it had, which documents were in play, how tables were
            performing, and where product-truth gaps still existed.
          </p>
        </Section>

        <Section
          id="prototype"
          eyebrow="Hard Lesson"
          title="The downstream prototype exposed the difference between parsing truth and recommendation truth."
        >
          <p>
            This was the project’s most important reality check. The parser
            could extract a value that was locally defensible, and the product
            could still be wrong in the way that matters to a buyer.
          </p>
          <p>
            The clearest example was co-pay. In one case, the local prototype
            showed a single co-pay value with strong confidence. But the real
            product truth depended on the variant. The policy wording alone was
            not enough. Variant-specific numbers lived in adjacent official
            documents like Product Benefit Tables and Customer Information
            Sheets.
          </p>

          <DiagramCard className="p-6">
            <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
              <article className="rounded-2xl border border-border bg-bg p-5">
                <p className="mb-3 font-sans text-xs uppercase tracking-[0.18em] text-text-faint">
                  Recommendation risk
                </p>
                <h3 className="mb-2 text-xl">
                  Parsed correctly, still misleading
                </h3>
                <p className="mb-0 text-sm leading-6 text-text-muted">
                  A single extracted number can look clean in a UI while still
                  hiding variant-level conditions that matter to the user. That
                  is a product-truth failure, not just a parser bug.
                </p>
              </article>
              <article className="rounded-2xl border border-border bg-bg p-5">
                <p className="mb-3 font-sans text-xs uppercase tracking-[0.18em] text-text-faint">
                  Design response
                </p>
                <h3 className="mb-2 text-xl">
                  Source bundles, not single PDFs
                </h3>
                <p className="mb-0 text-sm leading-6 text-text-muted">
                  The repo had to evolve from “one product equals one wording
                  PDF” to “one product equals a bundle of official documents and
                  version checks.”
                </p>
              </article>
            </div>
          </DiagramCard>

          <DiagramCard className="p-6">
            <p className="mb-4 font-sans text-xs uppercase tracking-[0.18em] text-text-faint">
              Source-bundle explainer
            </p>
            <div className="grid gap-4 md:grid-cols-5">
              {[
                "Policy wording",
                "PBT / benefit table",
                "CIS",
                "Brochure",
                "Version drift check",
              ].map((item, index) => (
                <div key={item} className="relative">
                  <div className="rounded-2xl border border-border bg-bg p-4 text-center">
                    <p className="mb-0 text-sm font-medium text-text">{item}</p>
                  </div>
                  {index < 4 ? (
                    <div className="pointer-events-none hidden md:block absolute right-[-14px] top-1/2 h-px w-7 -translate-y-1/2 bg-border" />
                  ) : null}
                </div>
              ))}
            </div>
          </DiagramCard>
        </Section>

        <Section
          id="stopped"
          eyebrow="Closeout"
          title="The project stopped because the product problem turned out to be operational, not just technical."
        >
          <p>
            The closeout was not a dramatic collapse. It was a sober decision.
            The engine was real. The extraction work was valuable. But building
            a broad, continuously current consumer comparison product from
            public insurer PDFs was not a sane side-project operating model.
          </p>
          <p>
            Once you care about trustworthy recommendations, you are no longer
            just building a parser. You are maintaining product catalogs,
            cross-document precedence, live version drift, and source freshness.
            That is ongoing data operations, not just model quality.
          </p>

          <div className="grid gap-4 lg:grid-cols-3">
            {[
              {
                title: "The engine worked",
                body: "The parser, table stack, and extractor pipeline became robust enough to generate structured outputs with evidence.",
              },
              {
                title: "The market surface was unstable",
                body: "Public insurer documents were fragmented, versioned unevenly, and often split across wording, tables, CIS documents, and brochures.",
              },
              {
                title: "The honest ending was to stop",
                body: "Forcing the broad product thesis would have created a trust problem disguised as product progress.",
              },
            ].map((item, index) => (
              <article
                key={item.title}
                className={`rounded-2xl border border-border p-5 ${
                  index === 0
                    ? "bg-[#edf5ea] dark:bg-[#253628]"
                    : index === 1
                      ? "bg-[#f7f0e2] dark:bg-[#3a3324]"
                      : "bg-[#f3eef8] dark:bg-[#31283d]"
                }`}
              >
                <h3 className="mb-2 text-xl">{item.title}</h3>
                <p className="mb-0 text-sm leading-6 text-text-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="value"
          eyebrow="What Survived"
          title="What remains valuable is the architecture, the discipline, and the record."
        >
          <p>
            Even though the broad consumer product stopped, the repo still holds
            several things worth reusing. It is a practical reference for
            building document pipelines where evidence matters and wrong answers
            are more dangerous than missing ones.
          </p>

          <ul className="space-y-3 pl-6">
            <li>
              <strong>Document-intelligence architecture:</strong> separate
              physical, logical, and semantic layers instead of treating a PDF
              as one blob of text.
            </li>
            <li>
              <strong>Evaluation discipline:</strong> use reviewed corpora and
              hard gates so the system cannot quietly flatter itself.
            </li>
            <li>
              <strong>Evidence-linked extraction:</strong> every user-facing
              fact should stay tied to the source that justifies it.
            </li>
            <li>
              <strong>Source-bundle modeling:</strong> product truth often lives
              across multiple official documents, not one canonical file.
            </li>
          </ul>

          <p>
            That is the part I would carry forward into another domain. Not the
            fantasy of “AI can read everything,” but the more defensible claim
            that complex documents can be compiled into explicit, inspectable
            structures.
          </p>
        </Section>

        <Section id="record" eyebrow="Appendix" title="Project record">
          <p>
            Everything above is traceable to the project’s own repository
            record: the README, the evaluation docs, the task ledger, the bundle
            closeout, and the final project closeout. That paper trail is part
            of the work.
          </p>

          <div className="rounded-2xl border border-border bg-bg-secondary/70 p-6">
            <div className="grid gap-3 sm:grid-cols-2">
              {projectRecordLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </Section>
      </div>
    </article>
  );
}
