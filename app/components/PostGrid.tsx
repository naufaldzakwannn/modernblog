import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";

const posts = [
  {
    id: 1,
    category: "Design",
    title: "Designing for Uncertainty",
    excerpt: "How the best designers embrace ambiguity as a creative constraint rather than fighting it.",
    author: "Marco Bell",
    date: "May 18",
    readTime: "7",
    color: "#5a7a62",
    tag: "Essay",
  },
  {
    id: 2,
    category: "Technology",
    title: "The Interface Is the Message",
    excerpt: "McLuhan got to media. Now it's time someone applied the same lens to software interfaces.",
    author: "Priya Nair",
    date: "May 12",
    readTime: "9",
    color: "#c0441a",
    tag: "Analysis",
  },
  {
    id: 3,
    category: "Culture",
    title: "On the Ethics of Attention",
    excerpt: "Where you spend your attention is, increasingly, a moral question — not just a personal one.",
    author: "Léa Moreau",
    date: "May 5",
    readTime: "6",
    color: "#3d4a5a",
    tag: "Opinion",
  },
  {
    id: 4,
    category: "Writing",
    title: "Sentences That Earn Their Keep",
    excerpt: "Every sentence should either move the reader forward or it should not exist at all.",
    author: "James Whitfield",
    date: "Apr 28",
    readTime: "5",
    color: "#d4a843",
    tag: "Craft",
  },
  {
    id: 5,
    category: "Philosophy",
    title: "What Silence Actually Teaches",
    excerpt: "The most profound lessons often come wrapped in an absence of words, noise, and opinion.",
    author: "Aiko Tanaka",
    date: "Apr 20",
    readTime: "11",
    color: "#7a5c3d",
    tag: "Reflection",
  },
  {
    id: 6,
    category: "Design",
    title: "Notes on Negative Space",
    excerpt: "What you leave out defines the work as much as what you include. The void has meaning.",
    author: "Marco Bell",
    date: "Apr 14",
    readTime: "8",
    color: "#5a7a62",
    tag: "Essay",
  },
];

function PostCard({ post, featured = false }: { post: typeof posts[0]; featured?: boolean }) {
  return (
    <article className={`group border border-ink/10 overflow-hidden hover:border-ink/30 transition-colors ${featured ? "lg:col-span-2" : ""}`}>
      {/* Color bar */}
      <div className="h-1 w-full" style={{ backgroundColor: post.color }} />

      <div className="p-7">
        <div className="flex items-center justify-between mb-5">
          <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink/40">
            {post.category}
          </span>
          <span className="font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 border border-ink/10 text-ink/40">
            {post.tag}
          </span>
        </div>

        <h3 className={`font-display font-bold leading-tight mb-3 group-hover:text-rust transition-colors ${featured ? "text-3xl md:text-4xl" : "text-xl"}`}>
          {post.title}
        </h3>

        <p className="font-body text-ink/55 leading-relaxed mb-6 text-sm">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between pt-5 border-t border-ink/8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-paper text-[10px] font-bold font-display"
              style={{ backgroundColor: post.color }}>
              {post.author[0]}
            </div>
            <div>
              <p className="font-body text-xs font-semibold text-ink">{post.author}</p>
              <p className="font-mono text-[9px] uppercase tracking-widest text-ink/35">
                {post.date} · {post.readTime} min
              </p>
            </div>
          </div>
          <Link href="#" className="inline-flex items-center gap-1 font-mono text-[10px] tracking-widest uppercase text-ink/40 group-hover:text-rust transition-colors">
            Read
            <ArrowUpRight size={10} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function PostGrid() {
  return (
    <section id="essays" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="hr-ornament mb-12">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-rust">◆ Recent Essays</span>
      </div>

      {/* Asymmetric grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-ink/10">
        {posts.map((post, i) => (
          <div key={post.id} className="border-r border-b border-ink/10">
            <PostCard post={post} />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link
          href="#"
          className="font-mono text-xs tracking-widest uppercase border border-ink/20 px-8 py-4 hover:bg-ink hover:text-paper transition-colors"
        >
          Load More Essays
        </Link>
      </div>
    </section>
  );
}
