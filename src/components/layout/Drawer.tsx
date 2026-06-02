import React from "react";
import {
  X, User, FileText, Eye, BookOpen, Send,
  MapPin, Mail, Briefcase, Code2, Link2, Share2, MessageCircle, Download,
} from "lucide-react";
import { personal } from "../../data/resume";
import { asset } from "../../lib/utils";

const NAV = [
  { id: "about",   label: "About",   Icon: User },
  { id: "resume",  label: "Resume",  Icon: FileText },
  { id: "works",   label: "Works",   Icon: Eye },
  { id: "blog",    label: "Blog",    Icon: BookOpen },
  { id: "contact", label: "Contact", Icon: Send },
];

const SOCIAL_ICONS: Record<string, React.ElementType> = {
  github:   Code2,
  linkedin: Link2,
  twitter:  Share2,
  whatsapp: MessageCircle,
};

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function Drawer({ open, onClose }: Props) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-secondary flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-border shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-accent flex items-center justify-center text-app-white font-extrabold text-sm select-none">
              D
            </span>
            <span className="text-app-white font-bold text-sm tracking-wide">Portfolio</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="text-subtle hover:text-app-white transition-colors p-1.5 rounded-lg hover:bg-surface"
          >
            <X size={17} />
          </button>
        </div>

        {/* Profile summary */}
        <div className="px-5 py-5 border-b border-border shrink-0">
          <p className="text-app-white font-bold text-base">{personal.name}</p>
          <p className="text-accent text-xs mt-0.5 font-medium">{personal.titles[0]}</p>
          <div className="mt-4 space-y-2.5">
            <div className="flex items-center gap-2.5">
              <MapPin size={13} className="text-subtle shrink-0" />
              <span className="text-muted text-xs">{personal.location}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail size={13} className="text-subtle shrink-0" />
              <span className="text-muted text-xs truncate">{personal.email}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Briefcase size={13} className="text-accent shrink-0" />
              <span className="text-accent text-xs font-semibold">{personal.availability}</span>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            {Object.entries(personal.social).map(([key, url]) => {
              const Icon = SOCIAL_ICONS[key];
              if (!Icon) return null;
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={key}
                  className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors"
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          <p className="text-subtle text-[10px] font-bold uppercase tracking-widest px-3 mb-3">
            Navigation
          </p>
          <ul className="space-y-0.5">
            {NAV.map(({ id, label, Icon }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={onClose}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-muted hover:text-app-white hover:bg-surface transition-colors text-sm font-medium"
                >
                  <Icon size={16} strokeWidth={1.5} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer CTA */}
        <div className="border-t border-border p-4 shrink-0">
          <a
            href={asset(personal.cvUrl)}
            download
            className="flex items-center justify-center gap-2 py-2.5 bg-accent text-app-white font-bold text-xs rounded-xl hover:bg-accent-hover transition-colors uppercase tracking-wider"
          >
            <Download size={14} />
            Download CV
          </a>
        </div>
      </aside>
    </>
  );
}
