import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uses | Aviral Sharma",
  description: "Tools, tech, and setup I use daily.",
};

export default function UsesPage() {
  return (
    <div className="prose">
      <h1>Uses</h1>
      <p className="text-text-muted">
        Tools I use and why. Updated as things change.
      </p>

      <hr className="section-divider" />

      <h2>Editor &amp; Terminal</h2>
      <ul>
        <li>
          <strong>VS Code</strong> for all projects
        </li>
        <li>
          <strong>OpenCode</strong> as an AI development companion
        </li>
        <li>
          <strong>iTerm2</strong> as terminal
        </li>
      </ul>

      <h2>Development</h2>
      <ul>
        <li>
          <strong>Next.js</strong> as the framework of choice, both at work and
          for side projects
        </li>
        <li>
          <strong>TypeScript</strong> everywhere, no plain JS
        </li>
        <li>
          <strong>Python</strong> for data processing and AI work
        </li>
        <li>
          <strong>Tailwind CSS</strong> for styling
        </li>
        <li>
          <strong>Vercel</strong> for deployment
        </li>
        <li>
          <strong>Supabase</strong> and <strong>SQLite</strong> for data storage
        </li>
      </ul>

      <h2>Design</h2>
      <ul>
        <li>
          <strong>Figma</strong> for UI design and prototyping
        </li>
      </ul>

      <h2>This Site</h2>
      <ul>
        <li>
          <strong>Framework:</strong> Next.js 15
        </li>
        <li>
          <strong>Styling:</strong> Tailwind CSS with custom CSS variables
        </li>
        <li>
          <strong>Fonts:</strong> Source Serif 4 (body), Inter (UI), JetBrains
          Mono (code)
        </li>
        <li>
          <strong>Hosting:</strong> Vercel
        </li>
        <li>
          <strong>Design philosophy:</strong> Text-first. Warm typography. No
          hero sections. The writing starts immediately. Inspired by
          lucumr.pocoo.org, leerob.io, and havn.blog
        </li>
      </ul>
    </div>
  );
}
