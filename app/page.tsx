import { BlogList } from "@/components/blog/blog-list";

export default function Home() {
  return (
    <div className="prose">
      <p className="text-lg" style={{ lineHeight: 1.8 }}>
        I&apos;m Aviral. I build things, write about what I learn, and
        sometimes share the wreckage publicly. Right now I&apos;m working on a
        health insurance database, learning AI engineering, and playing too much
        badminton.
      </p>

      <hr className="section-divider" />

      <BlogList />
    </div>
  );
}
