import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { X, UserCheck, Send } from "lucide-react";
import { personal, pricing } from "../../data/resume";
import Button from "./Button";

interface HireMeContextValue {
  /** Open the hire-me form, optionally preselecting an engagement type (pricing tier name). */
  openHireMe: (engagement?: string) => void;
}

const HireMeContext = createContext<HireMeContextValue | null>(null);

export function useHireMe() {
  const ctx = useContext(HireMeContext);
  if (!ctx) throw new Error("useHireMe must be used inside <HireMeProvider>");
  return ctx;
}

export function HireMeProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [engagement, setEngagement] = useState<string>(pricing[0]?.name ?? "");

  const openHireMe = useCallback((tier?: string) => {
    if (tier) setEngagement(tier);
    setOpen(true);
  }, []);

  return (
    <HireMeContext.Provider value={{ openHireMe }}>
      {children}
      {open && (
        <HireMeModal
          engagement={engagement}
          onEngagementChange={setEngagement}
          onClose={() => setOpen(false)}
        />
      )}
    </HireMeContext.Provider>
  );
}

function HireMeModal({
  engagement,
  onEngagementChange,
  onClose,
}: {
  engagement: string;
  onEngagementChange: (v: string) => void;
  onClose: () => void;
}) {
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const [sent, setSent] = useState(false);

  // Focus first field, close on Escape, lock background scroll
  useEffect(() => {
    firstFieldRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const subject = `Hire request — ${get("engagement")}${get("company") ? ` (${get("company")})` : ""}`;
    const body = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      get("company") && `Company: ${get("company")}`,
      `Engagement: ${get("engagement")}`,
      get("budget") && `Budget: ${get("budget")}`,
      get("start") && `Desired start: ${get("start")}`,
      "",
      get("message"),
    ].filter((l, i) => l || i === 6).join("\n"); // keep the blank line (index 6) before the message

    window.location.href =
      `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="hire-me-title"
    >
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-secondary border border-border shadow-2xl p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-muted hover:text-accent hover:bg-surface transition-colors"
        >
          <X size={16} />
        </button>

        <div className="flex items-center gap-3 mb-1">
          <div className="w-9 h-9 rounded-lg bg-accent-soft flex items-center justify-center">
            <UserCheck size={16} className="text-accent" />
          </div>
          <h2 id="hire-me-title" className="font-display text-app-white font-bold text-xl">Hire Me</h2>
        </div>
        <p className="text-muted text-sm mb-6">
          Tell me about your project and I&apos;ll get back to you within 24 hours.
        </p>

        {sent ? (
          <div className="text-center py-8">
            <p className="text-app-white font-semibold mb-2">Your email app should now be open.</p>
            <p className="text-muted text-sm mb-6">
              If it didn&apos;t open, email me directly at{" "}
              <a href={`mailto:${personal.email}`} className="text-accent hover:underline">{personal.email}</a>.
            </p>
            <Button type="button" variant="outline" onClick={onClose}>Close</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid sm:grid-cols-2 gap-3">
              <input ref={firstFieldRef} name="name" type="text" placeholder="Your Name *" required className="input-field w-full" />
              <input name="email" type="email" placeholder="Your Email *" required className="input-field w-full" />
            </div>
            <input name="company" type="text" placeholder="Company / Organization" className="input-field w-full" />
            <div className="grid sm:grid-cols-2 gap-3">
              <select
                name="engagement"
                value={engagement}
                onChange={(e) => onEngagementChange(e.target.value)}
                className="input-field w-full"
              >
                {pricing.map((t) => (
                  <option key={t.name} value={t.name}>{t.name}</option>
                ))}
              </select>
              <input name="budget" type="text" placeholder="Budget (optional)" className="input-field w-full" />
            </div>
            <input name="start" type="text" placeholder="Desired start date (optional)" className="input-field w-full" />
            <textarea
              name="message"
              rows={4}
              placeholder="Project details *"
              required
              className="input-field w-full resize-none"
            />
            <Button type="submit" variant="primary" className="w-full rounded-lg">
              <Send size={14} /> Send Request
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
