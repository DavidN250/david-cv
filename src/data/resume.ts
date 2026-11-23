import type {
  ExperienceItem,
  EducationItem,
  Skill,
  Project,
  BlogPost,
  Testimonial,
  PricingTier,
  ServiceItem,
} from "../types";

export const personal = {
  name: "David NIYITEGEKA",
  titles: ["Front-End Developer", "Software Engineer", "React & TypeScript Expert", "Mobile Developer"],
  tagline: "Software Engineer with 5+ years building scalable web & mobile apps for healthcare, government, and international organizations.",
  phone: "+250 783 165 132",
  email: "n.niyitegekadavid@gmail.com",
  location: "Kigali, Rwanda",
  availability: "Available for Freelance",
  cvUrl: "/cv.pdf",
  cvFileName: "David_NIYITEGEKA_CV.pdf",
  photo: "/images/profile.png",
  coverPhoto: "/images/banner.avif",
  social: {
    github:   "https://github.com/DavidN250",
    linkedin: "https://www.linkedin.com/in/niyitegeka-david-88b16b135/",
    twitter:  "https://x.com/DavidKN_",
    whatsapp: "https://wa.me/250783165132",
  },
};

export const about = {
  bio: "Software Engineer with 5+ years of experience building scalable web and mobile applications for healthcare, government, and international organizations. Specialized in React, TypeScript, and Node.js with strong experience in REST API integration, cloud-connected platforms, and Agile development methodologies.",
  details: [
    { label: "Name",       value: "David NIYITEGEKA" },
    { label: "Location",   value: "Kigali, Rwanda" },
    { label: "Email",      value: "n.niyitegekadavid@gmail.com" },
    { label: "Phone",      value: "+250 783 165 132" },
    { label: "GitHub",     value: "github.com/DavidN250" },
    { label: "Languages",  value: "English, Kinyarwanda" },
    { label: "Experience", value: "5+ Years" },
    { label: "Status",     value: "Open to opportunities" },
  ],
};

// icon field maps to a Lucide icon name resolved in AboutSection
export const services: ServiceItem[] = [
  {
    icon: "monitor",
    title: "Front-End Development",
    description: "Responsive, accessible UIs with React, Next.js, and Tailwind CSS — pixel-perfect across all devices.",
  },
  {
    icon: "server",
    title: "Back-End Development",
    description: "Robust REST APIs and services with Node.js, Express, and scalable database architectures.",
  },
  {
    icon: "database",
    title: "Database Design",
    description: "Efficient schemas and queries with PostgreSQL, MongoDB, and Redis for high-performance data layers.",
  },
  {
    icon: "rocket",
    title: "DevOps & Deployment",
    description: "CI/CD pipelines, Docker containers, and cloud platforms like Vercel and AWS.",
  },
];

export const pricing: PricingTier[] = [
  {
    name: "Part Time",
    description: "Ideal for startups or teams needing a reliable developer a few days a week without full commitment.",
    price: "$800",
    unit: "/month",
    features: [
      "20 hours per week",
      "Flexible schedule",
      "Weekly progress reports",
      "Code reviews included",
      "Slack & email support",
    ],
    highlighted: false,
  },
  {
    name: "Full Time",
    description: "Best for growing companies that need a dedicated developer fully integrated into their team.",
    price: "$2,500",
    unit: "/month",
    features: [
      "40 hours per week",
      "Daily standups",
      "Full task priority",
      "Code reviews & QA",
      "Sprint planning",
      "Direct communication",
    ],
    highlighted: true,
  },
  {
    name: "Project",
    description: "Perfect for businesses with a well-defined scope looking for end-to-end delivery on a fixed budget.",
    price: "From $1000",
    unit: "",
    features: [
      "Fixed scope & timeline",
      "Milestone-based payments",
      "Full project delivery",
      "Post-launch support",
      "Source code ownership",
    ],
    highlighted: false,
  },
  {
    name: "Custom",
    description: "For unique needs that don't fit a standard package, let's design something that works for both of us.",
    price: "Let's Talk",
    unit: "",
    features: [
      "Tailored to your needs",
      "Non-disclosure agreement",
      "Flexible engagement",
      "Dedicated support",
      "Custom billing terms",
    ],
    highlighted: false,
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Front-End Developer",
    company: "World Health Organization (WHO)",
    period: "Jun 2022 – Present",
    description: "Built the MPOX Monitoring & Analytics Tool with React & TypeScript for real-time outbreak tracking across Africa. Integrated RESTful APIs and delivered interactive data dashboards using ApexCharts for global health teams.",
  },
  {
    role: "Mobile Developer (Remote)",
    company: "Devinterface — Italy",
    period: "Aug 2023 – Aug 2024",
    description: "Developed and shipped mobile applications (Move Payment, Everylog, Dravet Daily) with secure auth, push notifications, and REST API integration. Collaborated with international Agile teams for production-ready releases.",
  },
  {
    role: "Front-End Developer (Remote)",
    company: "Palladium International — Washington D.C., USA",
    period: "Mar 2022 – Aug 2024",
    description: "Built responsive dashboards and reporting interfaces for the National Child Development Agency Partner Reporting System. Translated complex stakeholder requirements into scalable technical solutions.",
  },
  {
    role: "Assistant Claim Analyst (Part-time)",
    company: "Old Mutual Insurance Rwanda Plc — Kigali",
    period: "Dec 2021 – Jan 2022 · May 2022 – Mar 2023",
    description: "Supported the claims team on-site in Nyarugenge, Kigali, assisting with the review and processing of insurance claims, verification of supporting documentation, and keeping the claims database accurate and up to date.",
  },
  {
    role: "Software Developer",
    company: "Ministry of Gender & Family Promotion (MIGEPROF)",
    period: "Mar 2021 – Mar 2022",
    description: "Developed a mobile e-Book platform for national gender equality publications and integrated DHIS2 data systems to support government analytics and multi-system reporting.",
  },
  {
    role: "Software Developer",
    company: "COSEKE Rwanda Ltd",
    period: "Jan 2021 – Sep 2021",
    description: "Contributed to e-Meet, an enterprise digital platform for board meetings, document sharing, and attendance management deployed across East Africa.",
  },
  {
    role: "Web Developer (Project-based)",
    company: "Boldev Ltd",
    period: "2020",
    description: "Delivered two client projects on a project basis: a Point of Sale (POS) system for managing sales, and an HR management system with fingerprint-based attendance tracking.",
  },
];

export const education: EducationItem[] = [
  {
    degree: "BSc. with Honours in Software Engineering",
    school: "University of Rwanda, College of Science and Technology",
    period: "Sep 2016 – Jul 2021",
    description: "Graduated with honors. Specialized in software engineering, distributed systems, and cloud-connected application development.",
  },
  {
    degree: "Mathematics-Physics & Computer Science",
    school: "EFOTEC-KANOMBE High School",
    period: "2013 – 2015",
    description: "Strong foundations in mathematics, physics, and introductory computer science.",
  },
];

export const skills = {
  technical: [
    { name: "React / TypeScript",     level: 95 },
    { name: "TailwindCSS",            level: 90 },
    { name: "Node.js / Express",      level: 85 },
    { name: "RESTful API Integration",level: 90 },
    { name: "Python / Django",        level: 80 },
    { name: "Laravel / PHP",          level: 85 },
    { name: "Flutter",                level: 95 },
    { name: "Firebase / AWS",         level: 85 },
    { name: "Android / Mobile Dev",   level: 92 },
  ] satisfies Skill[],
  knowledge: [
    "Data Visualization (ApexCharts)",
    "DHIS2 Integration",
    "Agile / Scrum",
    "CI/CD Concepts",
    "Authentication Systems",
    "Microservices Architecture",
    "Cloud Platforms (AWS, Firebase)",
    "Git & Version Control",
    "Performance Optimization",
  ],
};

export const portfolio: Project[] = [
  {
    slug: "mpox-monitoring-analytics-tool",
    title: "MPOX Monitoring & Analytics Tool",
    category: "frontend",
    description: "World Health Organization (WHO) — outbreak tracking and data analysis across multiple African countries.",
    fullDescription: "Built at the World Health Organization (WHO), the MPOX Monitoring & Analytics Tool enables outbreak tracking and data analysis across multiple African countries. I built interactive dashboards, charts, and mapping interfaces for real-time public health monitoring, and implemented scalable UI components and responsive interfaces for data-heavy healthcare systems. I worked closely with epidemiologists, analysts, and global health teams to translate public health needs into functional software, and continuously improved usability and performance through debugging, testing, and UI optimization.",
    tech: ["React", "TypeScript", "ApexCharts", "REST APIs", "Data Visualization", "Mapping"],
    link: "#",
  },
  {
    slug: "ncda-partner-reporting-system",
    title: "NCDA Partner Reporting System",
    category: "frontend",
    description: "Palladium International — partner reporting and performance monitoring for the National Child Development Agency.",
    fullDescription: "Working remotely for Palladium International (Washington D.C.), I contributed to the National Child Development Agency Partner Reporting System, improving partner reporting and performance monitoring workflows. I designed and implemented responsive dashboards and reporting interfaces, worked with global stakeholders to align product features with organizational objectives, and improved reliability and user experience through refactoring and performance enhancements.",
    tech: ["Dashboards", "Reporting Interfaces", "Responsive Design"],
    link: "#",
  },
  {
    slug: "move-payment",
    title: "Move Payment",
    category: "mobile",
    description: "Devinterface (Italy) — production mobile app with secure authentication and push notifications.",
    fullDescription: "Developed and deployed at Devinterface (Italy), working remotely with an international team. I implemented secure authentication, push notifications, and responsive user interfaces, and integrated APIs and backend services to support real-time data synchronization — delivering a stable, production-ready mobile application for European users.",
    tech: ["Mobile", "Authentication", "Push Notifications", "REST APIs"],
    link: "#",
  },
  {
    slug: "everylog",
    title: "Everylog",
    category: "mobile",
    description: "Devinterface (Italy) — production mobile app with real-time data sync.",
    fullDescription: "Developed and deployed at Devinterface (Italy) as part of an international remote team. I implemented secure authentication, push notifications, and responsive user interfaces, and integrated APIs and backend services for real-time data synchronization, shipping a stable production release for European users.",
    tech: ["Mobile", "Authentication", "Push Notifications", "REST APIs"],
    link: "#",
  },
  {
    slug: "dravet-daily",
    title: "Dravet Daily",
    category: "mobile",
    description: "Devinterface (Italy) — production mobile app for European users.",
    fullDescription: "Developed and deployed at Devinterface (Italy). I implemented secure authentication, push notifications, and responsive user interfaces, and integrated APIs and backend services for real-time data synchronization, collaborating with an international team to deliver a stable, production-ready app for European users.",
    tech: ["Mobile", "Authentication", "Push Notifications", "REST APIs"],
    link: "#",
  },
  {
    slug: "migeprof-ebook-platform",
    title: "MIGEPROF e-Book Platform",
    category: "mobile",
    description: "Ministry of Gender & Family Promotion — mobile e-Book platform for national gender equality publications.",
    fullDescription: "At Rwanda's Ministry of Gender & Family Promotion (MIGEPROF), I built a mobile e-Book platform for national gender equality publications. I also integrated DHIS2 data systems to support analytics and reporting, and collaborated with ministry teams to develop digital tools supporting national programs.",
    tech: ["Android", "Mobile", "DHIS2", "Analytics"],
    link: "#",
  },
  {
    slug: "boldev-pos-system",
    title: "Point of Sale (POS) System",
    category: "fullstack",
    description: "Boldev Ltd (2020) — point of sale system for managing sales.",
    fullDescription: "Developed as a project-based web developer at Boldev Ltd in 2020, a Point of Sale (POS) system for recording and managing sales transactions.",
    tech: ["POS", "Sales Management"],
    link: "#",
  },
  {
    slug: "boldev-hr-management",
    title: "HR Management System with Fingerprint Attendance",
    category: "fullstack",
    description: "Boldev Ltd (2020) — HR management with biometric fingerprint attendance tracking.",
    fullDescription: "Developed as a project-based web developer at Boldev Ltd in 2020, an HR management system with fingerprint-based attendance, allowing employee attendance to be recorded biometrically and managed alongside HR records.",
    tech: ["HR Management", "Fingerprint Biometrics", "Attendance Tracking"],
    link: "#",
  },
  {
    slug: "e-meet",
    title: "e-Meet",
    category: "fullstack",
    description: "COSEKE Rwanda — digital platform for board meetings, document sharing, and attendance.",
    fullDescription: "At COSEKE Rwanda Ltd, I contributed to e-Meet, a digital platform for board meetings, document sharing, and attendance management. I implemented features improving collaboration and meeting documentation workflows, and supported the deployment of enterprise document management systems across East Africa.",
    tech: ["Web", "Document Management", "Enterprise"],
    link: "#",
  },
  {
    slug: "environment-awareness-app",
    title: "Environment Awareness App",
    category: "mobile",
    description: "2nd place — International Environment Day Innovation Competition (REMA & UNDP).",
    fullDescription: "An Android and USSD application promoting environmental conservation awareness, which won 2nd place at the International Environment Day Innovation Competition organized by REMA and the United Nations Development Programme (UNDP). The USSD channel made the content reachable on basic phones without internet access.",
    tech: ["Android", "USSD"],
    link: "#",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "building-scalable-apis-nodejs-postgresql",
    title: "Building Scalable APIs with Node.js and PostgreSQL",
    category: "Backend",
    date: "May 2025",
    excerpt: "A deep dive into designing RESTful APIs that scale — connection pooling, query optimization, and caching patterns.",
    readTime: "6 min read",
    tags: ["Node.js", "PostgreSQL", "API Design", "Backend"],
    content: `
<p>After years of building APIs for WHO, government systems, and international clients, I've distilled the patterns that make Node.js + PostgreSQL backends truly production-ready. This isn't theory — every technique here came from real-world production failures and the fixes that followed.</p>

<h2>1. Connection Pooling is Non-Negotiable</h2>
<p>The biggest mistake I see junior developers make is creating a new database connection per request. With PostgreSQL, each connection is a separate OS process costing ~5MB of memory. Under load, this kills your server fast.</p>
<pre><code>import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,          // max connections in pool
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Reuse the same pool across your entire app
export default pool;</code></pre>
<p>Set <code>max</code> based on your PostgreSQL <code>max_connections</code> setting divided by the number of Node.js instances you run. A safe rule: keep it under 100 total connections across all instances.</p>

<h2>2. Use Parameterized Queries — Always</h2>
<p>Beyond the obvious SQL injection prevention, parameterized queries allow PostgreSQL to cache the query plan, which speeds up repeated queries significantly.</p>
<pre><code>// Bad — string interpolation
const result = await pool.query(
  \`SELECT * FROM users WHERE id = \${userId}\`
);

// Good — parameterized
const result = await pool.query(
  'SELECT * FROM users WHERE id = $1',
  [userId]
);</code></pre>

<h2>3. Index What You Query, Not Everything</h2>
<p>At WHO, our outbreak tracking queries were doing full table scans on a 2M-row dataset. Adding a composite index on the columns we filtered by most frequently reduced query time from 800ms to 12ms.</p>
<pre><code>-- Add index on frequently filtered columns
CREATE INDEX CONCURRENTLY idx_reports_country_date
  ON outbreak_reports (country_code, reported_at DESC);

-- Check if index is being used
EXPLAIN ANALYZE
  SELECT * FROM outbreak_reports
  WHERE country_code = 'RW'
  ORDER BY reported_at DESC
  LIMIT 100;</code></pre>
<p>Use <code>CONCURRENTLY</code> so the index builds without locking the table in production.</p>

<h2>4. Cache at the Right Layer</h2>
<p>Not everything needs Redis. My rule: if the data is queried more than 10x per second and changes less than once per minute, cache it.</p>
<pre><code>import redis from './redis';

async function getCountrySummary(code: string) {
  const cached = await redis.get(\`country:\${code}\`);
  if (cached) return JSON.parse(cached);

  const data = await pool.query(
    'SELECT * FROM country_summaries WHERE code = $1', [code]
  );
  await redis.setEx(\`country:\${code}\`, 60, JSON.stringify(data.rows[0]));
  return data.rows[0];
}</code></pre>

<h2>5. Rate Limit Early</h2>
<p>Every public API I've built got hit by scrapers within 48 hours of launch. Add rate limiting at the middleware level, not the route level, so it covers everything including routes you forgot.</p>
<pre><code>import rateLimit from 'express-rate-limit';
import RedisStore from 'rate-limit-redis';

app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  standardHeaders: true,
  store: new RedisStore({ client: redis }),
}));</code></pre>

<h2>Conclusion</h2>
<p>These five patterns — connection pooling, parameterized queries, smart indexing, targeted caching, and rate limiting — are the foundation of every scalable Node.js API I build. They're not exotic; they're fundamentals that compound over time. Get them right from the start and you'll spend less time firefighting and more time shipping features.</p>
    `,
  },
  {
    slug: "react-19-whats-new",
    title: "React 19: What's New and Why It Matters",
    category: "Frontend",
    date: "Apr 2025",
    excerpt: "Exploring the new compiler, server components, and actions in React 19 with practical examples.",
    readTime: "8 min read",
    tags: ["React", "JavaScript", "Frontend", "Performance"],
    content: `
<p>React 19 is the most significant release since hooks in React 16.8. After shipping several React projects and upgrading production apps to v19, here's what I think every developer needs to understand — and what's actually worth using today.</p>

<h2>The React Compiler</h2>
<p>The biggest change isn't a new API — it's that React can now automatically memoize your components and hooks. No more manually wrapping everything in <code>useMemo</code> and <code>useCallback</code>.</p>
<pre><code>// Before React 19 — manual memoization
const ExpensiveList = memo(({ items }) => {
  const sorted = useMemo(() =>
    items.sort((a, b) => a.name.localeCompare(b.name)),
    [items]
  );
  return &lt;ul&gt;{sorted.map(i => &lt;li key={i.id}&gt;{i.name}&lt;/li&gt;)}&lt;/ul&gt;;
});

// React 19 — compiler handles this automatically
function ExpensiveList({ items }) {
  const sorted = items.sort((a, b) => a.name.localeCompare(b.name));
  return &lt;ul&gt;{sorted.map(i => &lt;li key={i.id}&gt;{i.name}&lt;/li&gt;)}&lt;/ul&gt;;
}</code></pre>
<p>I've tested this on a data-heavy dashboard at work — render times dropped by ~30% just by enabling the compiler with zero code changes.</p>

<h2>Actions: Server-Side Mutations Made Simple</h2>
<p>Actions replace the boilerplate pattern of <code>useState</code> + <code>fetch</code> + loading/error state. They work on both client and server (with Next.js).</p>
<pre><code>// Old pattern
function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await submitForm(new FormData(e.target));
    } catch(err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
}

// React 19 with useActionState
function ContactForm() {
  const [state, action, isPending] = useActionState(submitForm, null);

  return (
    &lt;form action={action}&gt;
      {state?.error &amp;&amp; &lt;p&gt;{state.error}&lt;/p&gt;}
      &lt;button disabled={isPending}&gt;
        {isPending ? 'Sending...' : 'Send'}
      &lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>

<h2>use() — Reading Promises in Render</h2>
<p>The new <code>use()</code> hook lets you read a promise or context directly in a component, suspended until it resolves. Combined with <code>&lt;Suspense&gt;</code>, this simplifies async data patterns considerably.</p>
<pre><code>import { use, Suspense } from 'react';

function UserProfile({ userPromise }) {
  const user = use(userPromise); // suspends until resolved
  return &lt;div&gt;{user.name}&lt;/div&gt;;
}

// Wrap in Suspense
&lt;Suspense fallback={&lt;Skeleton /&gt;}&gt;
  &lt;UserProfile userPromise={fetchUser(id)} /&gt;
&lt;/Suspense&gt;</code></pre>

<h2>What Should You Actually Use Today?</h2>
<p>My practical recommendation: enable the compiler immediately in any new project — it's a free performance win with zero API changes. Use <code>useActionState</code> for any form that calls an API. Hold off on <code>use()</code> until your team is comfortable with Suspense boundaries.</p>
<p>React 19 doesn't reinvent the framework — it removes the friction that slowed us down. That's the best kind of upgrade.</p>
    `,
  },
  {
    slug: "tailwind-css-v4-css-first",
    title: "Tailwind CSS v4: A CSS-First Revolution",
    category: "CSS",
    date: "Mar 2025",
    excerpt: "How Tailwind v4's CSS-first configuration and new engine change the way we write utility-first styles.",
    readTime: "5 min read",
    tags: ["TailwindCSS", "CSS", "Frontend", "Tooling"],
    content: `
<p>I've been using Tailwind CSS since v2, and v4 is the most exciting release yet. The shift from a JavaScript config file to a CSS-first approach isn't just cosmetic — it fundamentally changes how you think about design tokens in your codebase. This very portfolio is built with Tailwind v4, and here's what I've learned.</p>

<h2>No More tailwind.config.js</h2>
<p>In v4, your entire theme lives in CSS using the <code>@theme</code> block. This means your design tokens are just CSS custom properties — readable by any tool, shareable across frameworks, and inspectable in DevTools.</p>
<pre><code>/* Before — tailwind.config.js */
module.exports = {
  theme: {
    extend: {
      colors: {
        accent: '#818cf8',
        primary: '#1c1c1e',
      }
    }
  }
}

/* After — in your CSS file */
@import "tailwindcss";

@theme {
  --color-accent:  #818cf8;
  --color-primary: #1c1c1e;
  --font-display:  "Space Grotesk", sans-serif;
}</code></pre>
<p>The moment I defined <code>--color-accent</code>, I could use <code>bg-accent</code>, <code>text-accent</code>, <code>border-accent</code> — every variant generated automatically.</p>

<h2>Theming Without the Headache</h2>
<p>Dark mode / light mode used to require JavaScript or class toggles with separate config. In v4, you override CSS variables in a class and every utility that references them updates automatically.</p>
<pre><code>.light {
  --color-primary:   #ffffff;
  --color-app-white: #1d1d1f;  /* text flips to dark */
  --color-accent:    #002F6C;  /* deeper navy on light bg */
}</code></pre>
<p>Toggle the <code>.light</code> class on your root element and the entire palette swaps — no <code>dark:</code> prefixes scattered across 50 components.</p>

<h2>Performance: The New Engine</h2>
<p>Tailwind v4 uses a Rust-based engine via the Vite plugin. My build time for this portfolio dropped from ~900ms to ~180ms. Incremental rebuilds are effectively instant — I stopped noticing them entirely.</p>

<h2>Canonical Class Names</h2>
<p>One gotcha: v4 enforces canonical class names. <code>bg-gradient-to-r</code> is now <code>bg-linear-to-r</code>. Arbitrary pixel values like <code>w-[72px]</code> should be <code>w-18</code>. The linter catches these and suggests the correct form — a small learning curve that leads to more consistent code.</p>

<h2>Should You Upgrade?</h2>
<p>For new projects: absolutely start with v4. For existing projects: the migration guide is thorough and the codemods handle most of the work automatically. The CSS-first approach alone makes the upgrade worthwhile — your design tokens finally live where they belong.</p>
    `,
  },
  {
    slug: "monolith-to-microservices-lessons",
    title: "From Monolith to Microservices: Lessons Learned",
    category: "Architecture",
    date: "Feb 2025",
    excerpt: "Practical takeaways from migrating a production monolith to microservices — what worked and what didn't.",
    readTime: "10 min read",
    tags: ["Architecture", "Microservices", "Node.js", "DevOps"],
    content: `
<p>I've been part of two microservices migrations — one successful, one that we eventually partially reversed. Here's the honest account of both, and the framework I now use to decide whether microservices are the right call.</p>

<h2>Why We Migrated (and Why That Reasoning Was Partly Wrong)</h2>
<p>The first migration was driven by the belief that "microservices are more scalable." That's true in a narrow sense, but scalability problems weren't what we had. We had a team communication problem and a deployment bottleneck — and we tried to solve organisational problems with infrastructure.</p>
<p>The second migration, at a later employer, was driven by a genuine need: different modules had wildly different scaling requirements. The analytics engine needed 10x more compute than the authentication service. That's a legitimate microservices use case.</p>

<h2>The Strangler Fig Pattern: What Actually Works</h2>
<p>The "big bang" rewrite is almost always a mistake. The Strangler Fig pattern — gradually replacing pieces of the monolith with services while the monolith keeps running — is slower but far less risky.</p>
<pre><code>// Step 1: Extract the interface first
// notifications.ts (still in the monolith)
export interface NotificationService {
  send(userId: string, message: string): Promise<void>;
}

// Step 2: Implement against the interface
// Later, swap the implementation to call an external service
class ExternalNotificationService implements NotificationService {
  async send(userId: string, message: string) {
    await fetch('https://notifications-service/send', {
      method: 'POST',
      body: JSON.stringify({ userId, message }),
    });
  }
}</code></pre>

<h2>The Hidden Costs Nobody Warns You About</h2>
<p>Network calls fail. Databases become inconsistent across services. Debugging a request that spans five services is genuinely hard. Before migrating, make sure you have:</p>
<ul>
  <li>Distributed tracing (OpenTelemetry + Jaeger or Tempo)</li>
  <li>Centralised logging (Loki, Datadog, or CloudWatch)</li>
  <li>Circuit breakers (opossum for Node.js)</li>
  <li>A clear data ownership model — which service owns which tables</li>
</ul>

<h2>The Test: Should YOU Migrate?</h2>
<p>Ask yourself these three questions before starting:</p>
<ol>
  <li>Do different parts of my system have genuinely different scaling requirements?</li>
  <li>Do I have independent teams that are blocked by a shared codebase?</li>
  <li>Do I have the operational maturity (monitoring, CI/CD, on-call rotation) to manage distributed systems?</li>
</ol>
<p>If the answer to all three is yes — migrate. If not, optimise the monolith first. A well-structured monolith beats a poorly-run microservices system every single time.</p>
    `,
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah K.",
    role: "CTO, TechStartup",
    quote: "David delivered a production-ready platform in record time. His code quality and attention to detail are exceptional.",
  },
  {
    name: "James M.",
    role: "Product Manager, Digital Co.",
    quote: "Working with David was seamless. He asks the right questions, communicates clearly, and ships on time.",
  },
  {
    name: "Aline U.",
    role: "Founder, EduTech Rwanda",
    quote: "The application David built has helped thousands of students. Professional, reliable, and highly skilled.",
  },
];

export const funFacts = [
  { value: "30+", label: "Projects Delivered" },
  { value: "15+", label: "Happy Clients" },
  { value: "50k+", label: "Lines of Code" },
  { value: "5+",  label: "Years of Experience" },
];
