import { Link } from "react-router-dom";
import { blogPosts } from "../../data/resume";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import Badge from "../ui/Badge";

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-primary">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader label="My writing" title="Blog" />

        <div className="mt-16 grid sm:grid-cols-2 gap-5">
          {blogPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="block group">
              <Card className="p-6 h-full cursor-pointer">
                <div className="flex items-center justify-between mb-3">
                  <Badge>{post.category}</Badge>
                  <span className="text-xs text-subtle">{post.readTime}</span>
                </div>
                <h3 className="font-display text-app-white font-bold text-lg mb-2 group-hover:text-accent transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-subtle">{post.date}</span>
                  <span className="text-accent text-sm font-medium group-hover:underline">Read more →</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
