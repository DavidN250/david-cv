import React, { useState, useEffect } from "react";
import { MessageSquare, Send, User } from "lucide-react";
import type { Comment } from "../../types";

interface Props {
  slug: string;
}

export default function CommentSection({ slug }: Props) {
  const storageKey = `cv-comments-${slug}`;
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName]       = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) setComments(JSON.parse(stored));
    } catch { /* ignore */ }
  }, [storageKey]);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
    };

    const updated = [...comments, newComment];
    setComments(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));
    setName("");
    setMessage("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="mt-12 pt-8 border-t border-border">
      <h2 className="font-display text-app-white font-bold text-xl mb-8 flex items-center gap-2">
        <MessageSquare size={20} className="text-accent" />
        Comments
        {comments.length > 0 && (
          <span className="font-mono text-sm text-muted font-normal">({comments.length})</span>
        )}
      </h2>

      {/* Comment list */}
      {comments.length > 0 ? (
        <ul className="space-y-5 mb-10">
          {comments.map((c) => (
            <li key={c.id} className="flex gap-4">
              <div className="w-9 h-9 rounded-full bg-accent-soft flex items-center justify-center shrink-0 text-accent font-bold text-sm">
                {c.name[0].toUpperCase()}
              </div>
              <div className="flex-1 bg-secondary rounded-xl px-4 py-3 border border-border">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-app-white font-semibold text-sm">{c.name}</span>
                  <span className="font-mono text-xs text-subtle">{c.date}</span>
                </div>
                <p className="text-muted text-sm leading-relaxed">{c.message}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center gap-3 py-10 mb-8 text-subtle">
          <User size={32} strokeWidth={1} />
          <p className="text-sm">No comments yet — be the first!</p>
        </div>
      )}

      {/* Comment form */}
      <form onSubmit={handleSubmit} className="space-y-3 bg-secondary rounded-2xl p-6 border border-border">
        <h3 className="font-display text-app-white font-semibold text-base mb-4">Leave a comment</h3>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="input-field"
        />
        <textarea
          rows={4}
          placeholder="Share your thoughts..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="input-field resize-none"
        />
        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="flex items-center gap-2 px-5 py-2.5 bg-accent text-white font-semibold text-sm rounded-full hover:bg-accent-hover transition-colors"
          >
            <Send size={14} />
            Post Comment
          </button>
          {submitted && (
            <span className="text-accent text-sm font-mono animate-pulse">
              ✓ Comment posted!
            </span>
          )}
        </div>
      </form>
    </section>
  );
}
