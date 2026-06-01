import React from "react";
import { MapPin, Mail, Briefcase, Code2, Link2, Share2, MessageCircle, Download, UserCheck, Phone } from "lucide-react";
import { personal } from "../../data/resume";
import { useTypewriter } from "../../hooks/useTypewriter";

const SOCIAL = {
  github:   { Icon: Code2 },
  linkedin: { Icon: Link2 },
  twitter:  { Icon: Share2 },
  whatsapp: { Icon: MessageCircle },
};

export default function ProfileCard() {
  const title = useTypewriter(personal.titles);

  return (
    <div className="hidden md:block relative flex-2 min-w-0 h-full">
      {/* Stacked depth layers — upper-left direction */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{ background: "var(--color-app-black)", transform: "translate(-8px, -8px)" }}
      />
      <div
        className="absolute inset-0 rounded-2xl"
        style={{ background: "var(--color-surface)", transform: "translate(-4px, -4px)" }}
      />

      {/* Main card */}
      <aside className="relative flex flex-col w-full h-full rounded-2xl bg-secondary overflow-hidden">

        {/* ── Banner ── */}
        <div className="relative h-52 shrink-0 overflow-hidden">

          {/* ── Designed fallback banner (always visible beneath photo) ── */}
          {/* Deep gradient base */}
          <div className="absolute inset-0 bg-linear-to-br from-[#001030] via-[#002060] to-[#000818]" />

          {/* Large glow orb — top-right */}
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(77,133,245,0.35) 0%, transparent 70%)" }} />

          {/* Medium glow orb — bottom-left */}
          <div className="absolute bottom-4 -left-8 w-36 h-36 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(77,133,245,0.2) 0%, transparent 70%)" }} />

          {/* Floating code dots grid */}
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
                <circle cx="1.5" cy="1.5" r="1.5" fill="var(--color-accent)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>

          {/* Diagonal accent stripe */}
          <div className="absolute inset-0 opacity-10"
            style={{ background: "repeating-linear-gradient(135deg, var(--color-accent) 0, var(--color-accent) 1px, transparent 1px, transparent 28px)" }} />

          {/* Cover photo — renders on top when loaded */}
          <img
            src={personal.coverPhoto}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />

          {/* Arch wave — same colour as card body */}
          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 400 56"
            preserveAspectRatio="none"
            style={{ height: 56 }}
          >
            <path
              d="M0,56 L0,38 Q200,2 400,38 L400,56 Z"
              style={{ fill: "var(--color-secondary)" }}
            />
          </svg>
        </div>

        {/* ── Circular profile photo — overlaps the arch ── */}
        <div className="flex justify-center shrink-0" style={{ marginTop: -68 }}>
          <div className="relative w-28 h-28 rounded-full border-4 border-secondary overflow-hidden bg-surface shadow-2xl">
            <img
              src={personal.photo}
              alt={personal.name}
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                const img = e.currentTarget;
                img.style.display = "none";
                const fb = img.nextElementSibling as HTMLElement | null;
                if (fb) fb.style.display = "flex";
              }}
            />
            {/* Initials fallback */}
            <span
              style={{ display: "none" }}
              className="absolute inset-0 items-center justify-center bg-surface text-accent font-extrabold text-2xl select-none"
            >
              {personal.name.split(" ").map((n) => n[0]).join("")}
            </span>
          </div>
        </div>

        {/* ── Identity ── */}
        <div className="text-center px-6 mt-3 shrink-0">
          <h2 className="font-display text-app-white font-bold text-xl leading-tight tracking-tight">
            {personal.name}
          </h2>
          <div className="h-6 flex items-center justify-center mt-1">
            <span className="font-mono text-accent text-sm font-medium tracking-wide">
              {title}
              <span className="animate-pulse">|</span>
            </span>
          </div>
        </div>

        {/* ── Social icons ── */}
        <div className="flex justify-center gap-3 mt-4 shrink-0">
          {(Object.entries(personal.social) as [keyof typeof SOCIAL, string][]).map(([key, url]) => {
            const entry = SOCIAL[key];
            if (!entry) return null;
            const { Icon } = entry;
            return (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={key}
                className="w-9 h-9 rounded-full bg-surface border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors"
              >
                <Icon size={15} />
              </a>
            );
          })}
        </div>

        {/* ── Divider ── */}
        <div className="mx-6 mt-5 mb-4 h-px bg-border shrink-0" />

        {/* ── Info rows ── */}
        <div className="px-6 space-y-3 shrink-0">
          <InfoRow Icon={MapPin}    text={personal.location} />
          <InfoRow Icon={Phone}     text={personal.phone} />
          <InfoRow Icon={Mail}      text={personal.email} />
          <InfoRow Icon={Briefcase} text={personal.availability} accent />
        </div>

        <div className="flex-1" />

        {/* ── Bottom CTA ── */}
        <div className="border-t border-border grid grid-cols-2 divide-x divide-border shrink-0">
          <a
            href={personal.cvUrl}
            download
            className="flex items-center justify-center gap-2 py-4 text-muted hover:text-accent hover:bg-surface transition-colors"
          >
            <Download size={14} />
            <span className="text-[10px] font-bold tracking-widest uppercase">Download CV</span>
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 py-4 text-muted hover:text-accent hover:bg-surface transition-colors"
          >
            <UserCheck size={14} />
            <span className="text-[10px] font-bold tracking-widest uppercase">Hire Me</span>
          </a>
        </div>
      </aside>
    </div>
  );
}

function InfoRow({
  Icon,
  text,
  accent,
}: {
  Icon: React.ElementType;
  text: string;
  accent?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 text-xs">
      <div className="w-7 h-7 rounded-lg bg-surface flex items-center justify-center shrink-0">
        <Icon size={13} className={accent ? "text-accent" : "text-muted"} />
      </div>
      <span className={accent ? "text-accent font-semibold" : "text-muted truncate"}>{text}</span>
    </div>
  );
}
