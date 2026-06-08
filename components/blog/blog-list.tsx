import Link from "next/link";

interface BlogPost {
  title: string;
  brief: string;
  url: string;
  date: string;
  external?: boolean;
}

// Hardcoded because Hashnode retired their free GraphQL API (May 2026).
// Update this array when you publish new posts.
const posts: BlogPost[] = [
  {
    title: "PolicyLens: Turning Insurance PDFs Into Structured Truth",
    brief:
      "A technical story about trying to build a source-backed insurance document compiler, what actually worked, what the prototype exposed, and why the broad product stopped.",
    url: "/writing/policylens",
    date: "2026-06-08",
    external: false,
  },
  {
    title: "The Intersection Observer Hook That Actually Handles Conditional Rendering",
    brief:
      "Every Intersection Observer tutorial on the internet has the same bug. They just don't know it yet. The pattern goes like this: create a ref, attach it to your element, set up an IntersectionObserver, and watch it break the moment your component conditionally renders.",
    url: "https://aviralsharma.hashnode.dev/the-intersection-observer-hook-that-actually-handles-conditional-rendering",
    date: "2026-03-23",
    external: true,
  },
  {
    title: "How to Implement a Token Refresh Queue to Prevent Concurrent 401s",
    brief:
      "What happens when 5 API calls fire at the same time and your access token expires mid-flight? They all fail. All 5 get a 401. Your user sees a broken dashboard. Maybe they get logged out. Here's how to fix it with a token refresh queue.",
    url: "https://aviralsharma.hashnode.dev/how-to-implement-a-token-refresh-queue-to-prevent-concurrent-401s",
    date: "2026-03-16",
    external: true,
  },
  {
    title: "Stop Breaking React: Why You Should Compute Values Instead of Storing Everything in State",
    brief:
      "How I fixed infinite re-renders and discovered a simple rule that changed how I write React components. Last week, I spent three hours debugging what seemed like a simple dashboard feature.",
    url: "https://aviralsharma.hashnode.dev/stop-breaking-react-why-you-should-compute-values-instead-of-storing-everything-in-state",
    date: "2025-06-07",
    external: true,
  },
  {
    title: "Building a High-Performance Social Media Intelligence Feed: Lessons from the Trenches",
    brief:
      "Building a social media feed seems straightforward until you actually build one. I recently completed work on a Social Media Intelligence feed that shows users posts from their competitors and aspirational brands. Here's what I learned.",
    url: "https://aviralsharma.hashnode.dev/building-a-high-performance-social-media-intelligence-feed-lessons-from-the-trenches",
    date: "2025-03-18",
    external: true,
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function BlogList({ limit }: { limit?: number }) {
  const displayed = limit ? posts.slice(0, limit) : posts;

  if (displayed.length === 0) {
    return <p className="text-text-muted">No posts yet.</p>;
  }

  return (
    <div className="space-y-10">
      {displayed.map((post) => (
        <article key={post.url}>
          <time className="date block mb-1">{formatDate(post.date)}</time>
          <Link
            href={post.url}
            target={post.external ? "_blank" : undefined}
            rel={post.external ? "noopener noreferrer" : undefined}
            className="group no-underline"
          >
            <h3 className="text-text group-hover:text-accent transition-colors mb-1.5 text-xl">
              {post.title}
            </h3>
          </Link>
          <p className="text-text-muted text-base leading-relaxed mt-0 mb-0">
            {post.brief}
          </p>
        </article>
      ))}
    </div>
  );
}
