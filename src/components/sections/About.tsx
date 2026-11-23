import { useState } from "react";
import {
  Monitor, Server, Database, Rocket, Check, Star,
  MapPin, Mail, Phone, Code2, Globe, Briefcase, Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { about, services, pricing } from "../../data/resume";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { useHireMe } from "../ui/HireMeModal";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  monitor:  Monitor,
  server:   Server,
  database: Database,
  rocket:   Rocket,
};

const DETAIL_ICONS: Record<string, LucideIcon> = {
  location:   MapPin,
  email:      Mail,
  phone:      Phone,
  github:     Code2,
  languages:  Globe,
  experience: Briefcase,
  status:     Zap,
};

export default function About() {
  const defaultSelected = pricing.findIndex((t) => t.highlighted);
  const [selected, setSelected] = useState(defaultSelected);
  const { openHireMe } = useHireMe();

  return (
    <>
      {/* About Me */}
      <section id="about" className="py-20 px-8">
        <SectionHeader label="Get to know me" title="About Me" />
        <div className="mt-14 max-w-3xl mx-auto">
          <p className="text-muted text-base leading-relaxed mb-8">{about.bio}</p>

          {/* Business card */}
          <div className="rounded-2xl overflow-hidden border border-border shadow-xl bg-secondary mb-8">
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {about.details
                .filter(({ label }) => label.toLowerCase() !== "name")
                .map(({ label, value }) => {
                  const Icon = DETAIL_ICONS[label.toLowerCase()] ?? Zap;
                  return (
                    <div key={label} className="flex items-start gap-3 min-w-0">
                      <div className="w-7 h-7 rounded-lg bg-accent-soft flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={13} className="text-accent" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-mono text-[10px] text-subtle uppercase tracking-wider">{label}</p>
                        <p className="text-app-white text-sm font-medium mt-0.5 truncate">{value}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          <Button href="#contact" variant="primary">Let&apos;s Talk</Button>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-8 bg-secondary">
        <SectionHeader label="What I offer" title="Services" />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {services.map((s) => {
            const Icon = SERVICE_ICONS[s.icon] ?? Monitor;
            return (
              <Card key={s.title} className="p-6 group">
                <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center mb-4">
                  <Icon size={20} className="text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-app-white font-bold text-sm mb-2 group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <p className="text-muted text-xs leading-relaxed">{s.description}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-8">
        <SectionHeader label="Investment" title="Pricing" />
        <div className="mt-14 grid grid-cols-2 gap-5 max-w-2xl mx-auto">
          {pricing.map((tier, i) => {
            const isSelected = selected === i;
            return (
              <Card
                key={tier.name}
                hover={false}
                onClick={() => setSelected(i)}
                className={`p-7 text-center cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? "border-accent bg-surface ring-2 ring-accent"
                    : "hover:border-border"
                }`}
              >
                {/* Star + badge row */}
                <div className="flex items-center justify-center gap-2 mb-3 min-h-7">
                  {tier.highlighted && (
                    <Star
                      size={15}
                      className="text-accent"
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  )}
                  {tier.highlighted && (
                    <Badge>Most Popular</Badge>
                  )}
                </div>

                <h3 className="font-display text-app-white font-bold text-lg mb-2">{tier.name}</h3>
                <p className="text-subtle text-xs leading-relaxed mb-4 px-1">{tier.description}</p>

                <div className="mb-5">
                  <span className="text-3xl font-extrabold text-accent">{tier.price}</span>
                  {tier.unit && <span className="text-muted text-sm">{tier.unit}</span>}
                </div>

                <ul className="space-y-2.5 mb-7 text-left">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-muted text-xs">
                      <Check size={13} className="text-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); openHireMe(tier.name); }}
                  variant={isSelected ? "primary" : "outline"}
                  className="w-full mt-auto"
                >
                  {tier.name === "Custom" ? "Let's Talk" : "Hire Me"}
                </Button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
}
