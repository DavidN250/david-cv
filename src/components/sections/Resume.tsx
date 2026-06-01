import { Zap, GraduationCap } from "lucide-react";
import { experience, education, skills } from "../../data/resume";
import SectionHeader from "../ui/SectionHeader";
import Timeline from "../ui/Timeline";
import SkillBar from "../ui/SkillBar";

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-8 bg-secondary">
      <SectionHeader label="My journey" title="Resume" />

      {/* Experience & Education */}
      <div className="mt-14 grid md:grid-cols-2 gap-10 mb-20 max-w-4xl mx-auto">
        <div>
          <h3 className="font-display text-app-white font-bold text-base mb-7 flex items-center gap-2">
            <Zap size={16} className="text-accent" />
            Experience
          </h3>
          {experience.map((item) => (
            <Timeline
              key={item.role}
              title={item.role}
              subtitle={item.company}
              period={item.period}
              description={item.description}
            />
          ))}
        </div>
        <div>
          <h3 className="font-display text-app-white font-bold text-base mb-7 flex items-center gap-2">
            <GraduationCap size={16} className="text-accent" />
            Education
          </h3>
          {education.map((item) => (
            <Timeline
              key={item.degree}
              title={item.degree}
              subtitle={item.school}
              period={item.period}
              description={item.description}
            />
          ))}
        </div>
      </div>

      {/* Skills */}
      <SectionHeader label="What I know" title="Skills" />
      <div className="mt-14 grid md:grid-cols-2 gap-14 max-w-4xl mx-auto">
        <div>
          <h3 className="font-mono text-app-white font-medium text-xs mb-5 uppercase tracking-widest">Technical</h3>
          {skills.technical.map((s) => (
            <SkillBar key={s.name} name={s.name} level={s.level} />
          ))}
        </div>
        <div>
          <h3 className="font-mono text-app-white font-medium text-xs mb-5 uppercase tracking-widest">Knowledge</h3>
          <ul className="grid gap-2.5">
            {skills.knowledge.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-muted text-sm bg-secondary border border-border rounded-lg px-4 py-2.5"
              >
                <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
