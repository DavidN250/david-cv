import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { blogPosts } from "../data/resume";
import AppShell from "../components/layout/AppShell";
import Badge from "../components/ui/Badge";
import CommentSection from "../components/ui/CommentSection";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate  = useNavigate();
  const post      = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <AppShell>
        <div className="py-20 px-8 text-center">
          <p className="text-muted text-lg">Post not found.</p>
          <button onClick={() => navigate(-1)} className="mt-4 text-accent hover:underline text-sm">
            ← Go back
          </button>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <article className="py-12 px-8 max-w-3xl mx-auto">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted hover:text-accent transition-colors text-sm mb-10 font-medium"
        >
          <ArrowLeft size={15} />
          Back to Blog
        </button>

        {/* Header */}
        <header className="mb-10">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="font-display text-3xl font-bold text-app-white leading-snug mb-4">
            {post.title}
          </h1>
          <p className="text-muted text-base leading-relaxed mb-6">{post.excerpt}</p>

          <div className="flex flex-wrap items-center gap-5 text-xs text-subtle font-mono border-y border-border py-4">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} className="text-accent" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-accent" />
              {post.readTime}
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              <Tag size={13} className="text-accent" />
              {post.tags.map((t) => (
                <span key={t} className="px-2 py-0.5 bg-surface rounded-full text-muted">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Content */}
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Comments */}
        <CommentSection slug={post.slug} />
      </article>
    </AppShell>
  );
}
