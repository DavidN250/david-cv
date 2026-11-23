import type { Plugin } from "vite";
import { personal, about, experience, education, skills } from "./src/data/resume";

/**
 * Injects a plain-HTML version of the CV into <div id="root"> at build time.
 * Search engines and link previews see real content without running JavaScript;
 * React replaces it as soon as the app mounts.
 */
const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function renderCv(): string {
  const exp = experience
    .map((e) => `<li><h3>${esc(e.role)} — ${esc(e.company)}</h3><p>${esc(e.period)}</p><p>${esc(e.description)}</p></li>`)
    .join("");
  const edu = education
    .map((e) => `<li><h3>${esc(e.degree)} — ${esc(e.school)}</h3><p>${esc(e.period)}</p></li>`)
    .join("");
  const tech = [...skills.technical.map((s) => s.name), ...skills.knowledge].map((s) => `<li>${esc(s)}</li>`).join("");
  const links = Object.entries(personal.social)
    .map(([name, url]) => `<li><a href="${esc(url)}" rel="me">${esc(name)}</a></li>`)
    .join("");

  return `
      <main style="max-width:760px;margin:0 auto;padding:2rem;font-family:system-ui,sans-serif">
        <header>
          <h1>${esc(personal.name)}</h1>
          <p>${esc(personal.titles.join(" · "))}</p>
          <p>${esc(personal.location)} · <a href="mailto:${esc(personal.email)}">${esc(personal.email)}</a></p>
          <p><a href="cv.pdf">Download CV (PDF)</a></p>
        </header>
        <section><h2>About</h2><p>${esc(about.bio)}</p></section>
        <section><h2>Experience</h2><ul>${exp}</ul></section>
        <section><h2>Education</h2><ul>${edu}</ul></section>
        <section><h2>Skills</h2><ul>${tech}</ul></section>
        <section><h2>Links</h2><ul>${links}</ul></section>
      </main>
    `;
}

export default function seoPrerender(): Plugin {
  return {
    name: "seo-prerender",
    apply: "build",
    transformIndexHtml(html) {
      return html.replace('<div id="root"></div>', `<div id="root">${renderCv()}</div>`);
    },
  };
}
