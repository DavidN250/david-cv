import React, { useRef } from "react";
import { MapPin, Mail, Briefcase } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { personal, testimonials, funFacts } from "../../data/resume";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import Button from "../ui/Button";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent! I'll get back to you soon.");
    formRef.current?.reset();
  };

  return (
    <>
      {/* Fun Facts strip */}
      <section className="py-16 px-8 bg-accent-soft border-y border-border">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {funFacts.map((f) => (
            <div key={f.label}>
              <p className="text-4xl font-extrabold text-app-white mb-1">{f.value}</p>
              <p className="text-muted font-semibold text-xs uppercase tracking-widest">{f.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-8 bg-secondary">
        <SectionHeader label="Kind words" title="Testimonials" />
        <div className="mt-14 grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <Card key={t.name} className="p-5">
              <p className="text-accent text-2xl leading-none mb-3 font-serif">&ldquo;</p>
              <p className="text-muted text-sm leading-relaxed mb-5">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border bg-accent-soft flex items-center justify-center font-bold text-accent text-sm shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-app-white font-semibold text-sm">{t.name}</p>
                  <p className="text-subtle text-xs">{t.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="py-20 px-8">
        <SectionHeader label="Get in touch" title="Contact Me" />
        <div className="mt-14 grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Info */}
          <div>
            <p className="text-muted text-sm leading-relaxed mb-7">
              Have a project in mind or want to discuss an opportunity? Feel free to reach out — I&apos;d love to hear from you.
            </p>
            <div className="space-y-4 mb-7">
              <InfoRow Icon={MapPin}    label="Location" value={personal.location} />
              <InfoRow Icon={Mail}      label="Email"    value={personal.email} href={`mailto:${personal.email}`} />
              <InfoRow Icon={Briefcase} label="Status"   value={personal.availability} accent />
            </div>
            <div className="flex gap-3">
              {Object.entries(personal.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-surface text-muted hover:text-accent hover:bg-border rounded-lg text-xs font-medium capitalize transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
            <div className="grid sm:grid-cols-2 gap-3">
              <input type="text"  placeholder="Your Name"  required className="input-field" />
              <input type="email" placeholder="Your Email" required className="input-field" />
            </div>
            <input type="text" placeholder="Subject" className="input-field w-full" />
            <textarea rows={5} placeholder="Your message..." required className="input-field w-full resize-none" />
            <Button variant="primary" className="w-full rounded-lg">Send Message</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6 px-8">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-subtle">
          <p>&copy; {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <div className="flex gap-4">
            {Object.entries(personal.social).map(([p, url]) => (
              <a key={p} href={url} target="_blank" rel="noopener noreferrer" className="capitalize hover:text-accent transition-colors">{p}</a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

function InfoRow({
  Icon, label, value, href, accent,
}: {
  Icon: LucideIcon; label: string; value: string; href?: string; accent?: boolean;
}) {
  const inner = (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-accent-soft flex items-center justify-center shrink-0">
        <Icon size={14} className="text-accent" />
      </div>
      <div>
        <p className="text-xs text-subtle uppercase tracking-wider">{label}</p>
        <p className={`text-sm font-medium ${accent ? "text-accent" : "text-app-white"}`}>{value}</p>
      </div>
    </div>
  );
  return href
    ? <a href={href} className="block hover:opacity-80 transition-opacity">{inner}</a>
    : <div>{inner}</div>;
}
