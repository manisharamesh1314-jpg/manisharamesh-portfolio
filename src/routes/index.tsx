import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowRight,
  Calendar,
  Rocket,
  TrendingUp,
  Shield,
  BrainCircuit,
  Cloud,
  Code2,
  Sparkles,
  GraduationCap,
  Lock,
  Fingerprint,
  KeyRound,
  Eye,
  Trophy,
  Award,
  ExternalLink,
  MapPin,
  Send,
  CheckCircle2,
  Briefcase,
  FileCode2,
} from "lucide-react";
import profileAsset from "@/assets/profile.jpeg.asset.json";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manisha Rameshbabu — Cybersecurity Engineer & Software Developer" },
      {
        name: "description",
        content:
          "Portfolio of Manisha Rameshbabu — Cybersecurity Engineering student and software developer building secure, scalable full-stack applications.",
      },
      { name: "keywords", content: "Manisha Rameshbabu, Cybersecurity, Software Developer, Full Stack, Java, Python, Portfolio" },
      { property: "og:title", content: "Manisha Rameshbabu — Cybersecurity Engineer & Software Developer" },
      { property: "og:description", content: "Secure, scalable, user-focused software. Available for internships." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },

    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap",
      },
    ],
  }),
  component: Portfolio,
});

const EMAIL = "manisharamesh1314@gmail.com";
const GITHUB = "https://github.com/manisharamesh1314-jpg";
const LINKEDIN = "https://www.linkedin.com/in/manisha-rameshbabu/";

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-foreground">
      <AuroraBackdrop />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Backdrop ---------- */
function AuroraBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-[oklch(0.55_0.25_270/0.35)] blur-3xl animate-aurora" />
      <div className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full bg-[oklch(0.6_0.22_230/0.3)] blur-3xl animate-aurora" style={{ animationDelay: "-6s" }} />
      <div className="absolute -bottom-40 left-1/4 h-[40rem] w-[40rem] rounded-full bg-[oklch(0.55_0.28_305/0.3)] blur-3xl animate-aurora" style={{ animationDelay: "-12s" }} />
      <div className="absolute inset-0 grid-bg opacity-60" />
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Home", "#top"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Achievements", "#achievements"],
    ["Certifications", "#certifications"],
    ["Contact", "#contact"],
  ];
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`mx-auto flex max-w-6xl items-center justify-between px-5 ${scrolled ? "glass-strong rounded-2xl" : ""}`} style={scrolled ? { padding: "0.6rem 1rem" } : undefined}>
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] text-background">M</span>
          <span className="neon-text">Manisha Rameshbabu</span>

        </a>
        <nav className="hidden items-center gap-0.5 lg:flex">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground">
              {l}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-4 py-2 text-sm font-medium text-background transition hover:opacity-90">
          Hire me <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative px-5 pt-36 pb-20 md:pt-44">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="animate-fade-up">
          <span className="chip">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            Available for Internship · Tamil Nadu, India
          </span>
          <h1 className="mt-6 font-display font-bold leading-[1.05] tracking-tight text-[clamp(2.5rem,10vw,5.5rem)]">
            <span className="block text-white">MANISHA</span>
            <span className="block neon-text bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--neon-cyan)] bg-clip-text text-transparent">
              RAMESHBABU
            </span>
          </h1>
          <p className="mt-6 max-w-xl font-mono text-[0.7rem] sm:text-sm uppercase tracking-[0.14em] sm:tracking-[0.18em] leading-relaxed text-muted-foreground text-balance">
            Cybersecurity Engineer <span className="text-[var(--neon-cyan)]">·</span> Software Developer <span className="text-[var(--neon-cyan)]">·</span> Full-Stack Developer
          </p>
          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            Engineering secure, scalable, and user-focused software solutions by combining full-stack development,
            cybersecurity principles, and modern backend technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90 glow-purple"
            >
              View Projects <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-white/10"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
            <a
              href={resumeAsset.url}
              download="Manisha_Rameshbabu_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-white/30 hover:bg-white/5"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <SocialIcon href={GITHUB} label="GitHub"><Github className="h-4 w-4" /></SocialIcon>
            <SocialIcon href={LINKEDIN} label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialIcon>
            <SocialIcon href={`mailto:${EMAIL}`} label="Email"><Mail className="h-4 w-4" /></SocialIcon>
          </div>
        </div>

        <ProfileCard />
      </div>
    </section>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full glass text-foreground transition hover:scale-110 hover:text-[var(--neon-cyan)]"
    >
      {children}
    </a>
  );
}

function ProfileCard() {
  // Orbiting skill icons — deterministic positions around the avatar
  const orbits = [
    { label: "Java", icon: <FileCode2 className="h-3.5 w-3.5" />, angle: -90 },
    { label: "Security", icon: <Shield className="h-3.5 w-3.5" />, angle: -30 },
    { label: "Python", icon: <BrainCircuit className="h-3.5 w-3.5" />, angle: 30 },
    { label: "React", icon: <Code2 className="h-3.5 w-3.5" />, angle: 90 },
    { label: "SQL", icon: <Cloud className="h-3.5 w-3.5" />, angle: 150 },
    { label: "Git", icon: <Github className="h-3.5 w-3.5" />, angle: 210 },
  ];
  const stats = [
    { k: "CGPA", v: "8.53" },
    { k: "Focus", v: "Secure Software" },
    { k: "Domain", v: "Cybersecurity" },
    { k: "Status", v: "Open to Internships" },
  ];
  return (
    <div className="relative mx-auto w-full max-w-md animate-fade-up" style={{ animationDelay: "0.15s" }}>
      <div className="relative glass-strong rounded-3xl p-6">
        {/* Avatar + orbit ring */}
        <div className="relative mx-auto h-64 w-64 sm:h-72 sm:w-72">
          {/* Faint orbit ring */}
          <div className="pointer-events-none absolute inset-3 rounded-full border border-dashed border-white/10" />

          {/* Glowing animated ring around avatar */}
          <div className="absolute inset-7 sm:inset-8">
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,var(--neon-blue),var(--neon-purple),var(--neon-cyan),var(--neon-blue))] animate-spin-slow blur-[2px] opacity-90" />
            <div className="absolute inset-[6px] rounded-full bg-background" />
            <div className="absolute inset-[10px] overflow-hidden rounded-full animate-pulse-ring">
              <img
                src={profileAsset.url}
                alt="Manisha Rameshbabu — Cybersecurity Engineer & Software Developer"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>

          {/* Evenly orbiting skill chips */}
          {orbits.map((o, i) => {
            const rad = (o.angle * Math.PI) / 180;
            // Radius as % of container so it scales with the avatar
            const r = 46;
            const x = 50 + r * Math.cos(rad);
            const y = 50 + r * Math.sin(rad);
            return (
              <div
                key={o.label}
                className="absolute -translate-x-1/2 -translate-y-1/2 animate-float"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  animationDelay: `${-i * 0.6}s`,
                }}
              >
                <div className="flex items-center gap-1 rounded-full glass px-1.5 py-0.5 sm:px-2 sm:py-1 text-[0.6rem] sm:text-[0.65rem] font-medium text-foreground/90 shadow-[0_4px_20px_-6px_var(--neon-blue)] whitespace-nowrap">
                  <span className="text-[var(--neon-cyan)]">{o.icon}</span>
                  <span>{o.label}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 text-center">
          <h3 className="font-display text-xl font-semibold">Manisha Rameshbabu</h3>
          <p className="mt-1 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" /> Salem, Tamil Nadu, India
          </p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {stats.map((s) => (
            <div key={s.k} className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-[0.65rem] uppercase tracking-widest text-muted-foreground">{s.k}</p>
              <p className="mt-1 font-display text-sm font-semibold text-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- About ---------- */
function About() {
  const cards = [
    {
      icon: <GraduationCap className="h-5 w-5" />,
      title: "Cybersecurity Engineering Student",
      body: "Strong foundation in cybersecurity, software engineering principles, secure development, and problem-solving.",
    },
    {
      icon: <Code2 className="h-5 w-5" />,
      title: "Software & Full-Stack Developer",
      body: "Building applications using Java, Python, JavaScript, React, FastAPI, REST APIs, SQL, and PostgreSQL.",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Security-Focused Development",
      body: "Interested in secure authentication, access control, encryption, Zero Trust principles, and AI-driven security solutions.",
    },
  ];
  return (
    <Section id="about" eyebrow="01 — Profile" title="About Me">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div className="glass-strong rounded-3xl p-7">
          <p className="text-base sm:text-lg leading-relaxed text-foreground/90">
            I'm a <span className="neon-text font-semibold">Cybersecurity Engineering</span> student (CGPA{" "}
            <span className="font-display font-semibold text-foreground">8.53 / 10</span>) with a strong foundation in
            software development, cybersecurity, and modern web technologies. I enjoy building reliable, secure, and
            user-focused applications that solve practical problems.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            My development experience spans Java, Python, JavaScript, React, FastAPI, REST APIs, SQL, and PostgreSQL.
            I also apply cybersecurity concepts such as secure authentication, access control, encryption, and Zero
            Trust principles when designing applications.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            I'm particularly interested in software engineering, secure application development, and AI-powered
            security solutions.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Secure Development", "Java", "Python", "React", "FastAPI", "PostgreSQL", "Zero Trust"].map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}

          </div>
        </div>
        <div className="grid gap-4">
          {cards.map((c) => (
            <div key={c.title} className="group glass rounded-2xl p-5 transition hover:-translate-y-1 hover:border-white/25">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] text-background">
                  {c.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Skills ---------- */
function Skills() {
  const groups: { title: string; icon: React.ReactNode; items: string[] }[] = [
    { title: "Programming", icon: <Code2 className="h-4 w-4" />, items: ["Java", "Python", "JavaScript"] },
    { title: "Web Development", icon: <FileCode2 className="h-4 w-4" />, items: ["HTML5", "CSS3", "React", "Tailwind CSS"] },
    { title: "Backend & APIs", icon: <Cloud className="h-4 w-4" />, items: ["FastAPI", "REST APIs"] },
    { title: "Databases", icon: <Shield className="h-4 w-4" />, items: ["SQL", "PostgreSQL", "SQLAlchemy"] },
    { title: "Tools", icon: <Github className="h-4 w-4" />, items: ["Git", "GitHub"] },
    { title: "Core Concepts", icon: <BrainCircuit className="h-4 w-4" />, items: ["OOP", "SDLC", "Debugging", "Testing", "DSA (Basic)"] },
    {
      title: "Professional Skills",
      icon: <Sparkles className="h-4 w-4" />,
      items: [
        "Problem Solving",
        "Critical Thinking",
        "Team Collaboration",
        "Communication",
        "Time Management",
        "Adaptability",
        "Analytical Thinking",
        "Quick Learning",
      ],
    },
  ];
  return (
    <Section id="skills" eyebrow="02 — Toolkit" title="Skills & Technologies">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <div key={g.title} className="group glass rounded-2xl p-5 transition hover:-translate-y-1">
            <div className="flex items-center gap-2 text-[var(--neon-cyan)]">
              {g.icon}
              <h3 className="font-display text-sm uppercase tracking-widest">{g.title}</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span
                  key={i}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-foreground/90 transition group-hover:border-white/20 hover:bg-gradient-to-r hover:from-[var(--neon-blue)]/20 hover:to-[var(--neon-purple)]/20"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Experience ---------- */
function Experience() {
  const highlights = [
    "Worked on an AI-enabled security solution involving facial recognition, anomaly detection, and predictive security alerts.",
    "Applied Zero Trust principles to strengthen application security.",
    "Implemented security measures involving authentication and encryption.",
    "Worked with role-based workflows and access control for different application users.",
    "Contributed to security-focused application development and logging/monitoring concepts.",
  ];
  return (
    <Section id="experience" eyebrow="03 — Journey" title="Experience">
      <div className="mx-auto max-w-3xl">
        <article className="glass-strong overflow-hidden rounded-3xl p-6 sm:p-8 transition hover:border-white/25">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-[var(--neon-cyan)]">
                <Briefcase className="h-3.5 w-3.5" /> Internship
              </div>
              <h3 className="mt-3 font-display text-xl sm:text-2xl font-semibold leading-snug">
                Software Development Intern
              </h3>
              <a
                href="https://www.linkedin.com/company/yugayatra-retail-opc-private-ltd/posts/"
                target="_blank"
                rel="noreferrer"
                className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--neon-cyan)] transition hover:text-foreground"
              >
                Yuga Yatra Retail (OPC) Pvt. Ltd.
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
            <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
              Secure Application Development
            </span>
          </div>

          <div className="mt-6 h-px w-full bg-gradient-to-r from-[var(--neon-blue)]/40 via-[var(--neon-purple)]/30 to-transparent" />

          <ul className="mt-6 space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--neon-cyan)]" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>

    </Section>
  );
}

/* ---------- Projects ---------- */
function Projects() {
  return (
    <Section id="projects" eyebrow="04 — Selected Work" title="Featured Projects">
      <div className="grid gap-6 lg:grid-cols-2">
        <ProjectCard
          featured
          tag="Flagship Project"
          title="MedMind — AI-Powered Healthcare Management System"
          subtitle="Full-Stack Healthcare Management Platform"
          description="Developed a full-stack healthcare management platform designed to securely manage users' medical information. The system includes user registration, authentication, medical-data management, REST APIs, and database operations with a focus on secure and reliable application development."
          features={[
            "React",
            "Vite",
            "Tailwind CSS",
            "Python",
            "FastAPI",
            "SQLAlchemy",
            "PostgreSQL",
          ]}
          accent="from-[var(--neon-blue)] to-[var(--neon-purple)]"
          icon={<Shield className="h-6 w-6" />}
          liveUrl="https://med-mind-black.vercel.app"
        />
        <ProjectCard
          tag="Cybersecurity Web Tool"
          title="Password Strength Evaluator"
          subtitle="Cybersecurity Web Tool"
          description="Developing a web-based cybersecurity tool that evaluates password strength based on password length, character diversity, and common security weaknesses, with the goal of improving password security awareness."
          features={["HTML5", "CSS3", "JavaScript"]}
          accent="from-[var(--neon-cyan)] to-[var(--neon-blue)]"
          icon={<KeyRound className="h-6 w-6" />}
          status="Under Development"
        />

      </div>
    </Section>
  );
}

function ProjectCard({
  tag, title, subtitle, description, features, accent, icon, status, liveUrl, githubUrl, featured,
}: {
  tag: string; title: string; subtitle: string; description: string; features: string[]; accent: string; icon: React.ReactNode;
  status?: string; liveUrl?: string; githubUrl?: string; featured?: boolean;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl glass-strong p-6 sm:p-8 transition duration-300 hover:-translate-y-1 hover:border-white/25 ${
        featured ? "lg:col-span-2 border-white/20" : ""
      }`}
    >
      <div className={`pointer-events-none absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gradient-to-br ${accent} opacity-20 blur-3xl transition group-hover:opacity-40`} />
      <div className="flex items-start justify-between gap-4">
        <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${accent} text-background`}>
          {icon}
        </div>
        <span className="chip">{tag}</span>
      </div>
      <h3 className={`mt-5 font-display font-semibold leading-tight ${featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>{title}</h3>
      <p className="mt-1.5 text-sm text-[var(--neon-cyan)]">{subtitle}</p>

      {status && (
        <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-[var(--neon-purple)]/40 bg-[var(--neon-purple)]/10 px-3 py-1 text-xs font-medium text-[var(--neon-cyan)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--neon-cyan)] opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--neon-cyan)]" />
          </span>
          {status}
        </div>
      )}
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {features.map((f) => (
          <span key={f} className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-foreground/90">
            {f}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${accent} px-4 py-2 font-medium text-background transition hover:opacity-90`}
          >
            <ExternalLink className="h-4 w-4" /> Live Demo
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 font-medium text-foreground/90 transition hover:bg-white/10"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        )}
        {!liveUrl && !githubUrl && (
          <div className="flex items-center gap-2 text-foreground/70">
            <ExternalLink className="h-4 w-4" />
            <span className="font-mono">Case study available on request</span>
          </div>
        )}
      </div>
    </article>
  );
}


/* ---------- Achievements ---------- */
function Achievements() {
  const items: {
    icon: React.ReactNode;
    title: string;
    date: string;
    location: string;
    description: string;
    badge: string;
    accent: "blue" | "purple" | "cyan";
    highlight?: boolean;
  }[] = [
    {
      icon: <Trophy className="h-5 w-5" />,
      title: "Smart India Hackathon (SIH) 2026 — Round 2",
      date: "September 2026",
      location: "Dhanalakshmi Srinivasan Engineering College",
      description:
        "Advanced to Round 2 of Smart India Hackathon 2026 as part of a shortlisted team, competing among 45 selected teams.",
      badge: "Round 2 · Top 45 Teams",
      accent: "purple",
      highlight: true,
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "First Prize — Paper Presentation",
      date: "2025",
      location: "Sengunthar Engineering College, Tamil Nadu",
      description:
        "Secured First Prize in a technical paper presentation, demonstrating strong technical knowledge, research ability, and presentation skills.",
      badge: "Winner",
      accent: "blue",
    },
    {
      icon: <BrainCircuit className="h-5 w-5" />,
      title: "Generative AI Paper Presentation — SARAYU-2K25",
      date: "September 2025",
      location: "National Level Technical Symposium",
      description:
        "Presented a technical paper on Generative AI at the national level technical symposium SARAYU-2K25.",
      badge: "National Symposium",
      accent: "cyan",
    },
    {
      icon: <Rocket className="h-5 w-5" />,
      title: "3-Hour Hackathon",
      date: "September 2025",
      location: "Nandha College of Technology, Tamil Nadu",
      description:
        "Built a password strength evaluation web tool within a 3-hour hackathon, focusing on password security awareness.",
      badge: "Hackathon",
      accent: "blue",
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "Cyberia-2K25 National Level Technical Symposium",
      date: "2025",
      location: "Participated in TecScribe, BrandHunt and MemeCraft",
      description:
        "Competed in technical and creative events including TecScribe, BrandHunt, and MemeCraft.",
      badge: "Participant",
      accent: "purple",
    },
  ];


  const accentMap = {
    blue: "from-[var(--neon-blue)] to-[var(--neon-cyan)]",
    purple: "from-[var(--neon-purple)] to-[var(--neon-blue)]",
    cyan: "from-[var(--neon-cyan)] to-[var(--neon-purple)]",
  } as const;
  const glowMap = {
    blue: "bg-[var(--neon-blue)]/25",
    purple: "bg-[var(--neon-purple)]/25",
    cyan: "bg-[var(--neon-cyan)]/25",
  } as const;

  return (
    <Section id="achievements" eyebrow="05 — Recognition" title="Achievements & Activities">
      <div className="relative mx-auto max-w-5xl">
        {/* Vertical timeline rail */}
        <div className="pointer-events-none absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--neon-blue)] via-[var(--neon-purple)] to-transparent md:left-1/2 md:-translate-x-1/2" />

        <ol className="space-y-8">
          {items.map((it, i) => {
            const onRight = i % 2 === 1;
            return (
              <li
                key={it.title}
                className="relative grid md:grid-cols-2 md:gap-10"
              >
                {/* Timeline node */}
                <span
                  className={`absolute left-5 top-6 z-10 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-br ${accentMap[it.accent]} shadow-[0_0_14px_var(--neon-purple)] md:left-1/2`}
                >
                  <span className="absolute h-3 w-3 animate-ping rounded-full bg-white/30" />
                </span>

                <div className={`${onRight ? "md:col-start-2" : "md:col-start-1"} pl-12 md:pl-0`}>
                  <article
                    className={`group relative overflow-hidden rounded-2xl glass p-5 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_20px_60px_-20px_var(--neon-purple)] ${onRight ? "md:ml-6" : "md:mr-6"}`}
                  >
                    {/* Hover glow */}
                    <div
                      className={`pointer-events-none absolute -top-16 ${onRight ? "-left-16" : "-right-16"} h-44 w-44 rounded-full ${glowMap[it.accent]} blur-3xl opacity-0 transition duration-500 group-hover:opacity-100`}
                    />

                    <div className="flex items-start justify-between gap-3">
                      <div
                        className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${accentMap[it.accent]} text-background shadow-[0_8px_24px_-8px_var(--neon-purple)] transition group-hover:scale-110`}
                      >
                        {it.icon}
                      </div>
                      <span className="rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-[var(--neon-cyan)]">
                        {it.badge}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-foreground">
                      {it.title}
                    </h3>

                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-[var(--neon-cyan)]" />
                        {it.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-[var(--neon-purple)]" />
                        {it.location}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                      {it.description}
                    </p>
                  </article>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}

/* ---------- Certifications ---------- */
function Certifications() {
  const items = [
    { title: "NPTEL", body: "Introduction to Internet of Things" },
    { title: "SAWIT AI", body: "AI Learnathon" },
    { title: "Workshops", body: "Technical Workshops & Symposium Participation" },
  ];
  return (
    <Section id="certifications" eyebrow="06 — Credentials" title="Certifications">
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((c) => (
          <div key={c.title} className="glass rounded-2xl p-5 transition hover:-translate-y-1">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-white/5 text-[var(--neon-cyan)]">
                <Lock className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section id="contact" eyebrow="07 — Get in touch" title="Let's build something secure.">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-strong rounded-3xl p-7">
          <p className="text-foreground/85">
            Open to internships, collaborations, and conversations on secure software, Java development, and AI-driven security.
          </p>
          <div className="mt-6 space-y-3">
            <ContactRow icon={<Mail className="h-4 w-4" />} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
            <ContactRow icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" value="manisha-rameshbabu" href={LINKEDIN} />
            <ContactRow icon={<Github className="h-4 w-4" />} label="GitHub" value="manisharamesh1314-jpg" href={GITHUB} />
            <ContactRow icon={<MapPin className="h-4 w-4" />} label="Location" value="Tamil Nadu, India" />
          </div>
          <div className="mt-6 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3 text-sm">
            <Fingerprint className="h-4 w-4 text-[var(--neon-cyan)]" />
            <span className="text-muted-foreground">Currently available for internship opportunities</span>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget as HTMLFormElement);
            const name = fd.get("name");
            const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
            const body = encodeURIComponent(`${fd.get("message")}\n\n— ${name} (${fd.get("email")})`);
            window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
            setSent(true);
          }}
          className="glass-strong rounded-3xl p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Your full name" required />
            <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
          </div>
          <Field label="Subject" name="subject" placeholder="Internship opportunity" />
          <div className="mt-4">
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Tell me about the role or project…"
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none transition focus:border-[var(--neon-purple)] focus:bg-white/[0.07]"
            />
          </div>
          <button
            type="submit"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90 glow-blue"
          >
            <Send className="h-4 w-4" /> {sent ? "Opening your mail app…" : "Send Message"}
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div className="mt-4 sm:mt-0">
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none transition focus:border-[var(--neon-purple)] focus:bg-white/[0.07]"
      />
    </div>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition hover:border-white/25 hover:bg-white/[0.06]">
      <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[var(--neon-blue)]/30 to-[var(--neon-purple)]/30 text-[var(--neon-cyan)]">{icon}</div>
      <div className="min-w-0">
        <p className="text-[0.65rem] uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="truncate text-sm text-foreground">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer" className="block">{inner}</a> : inner;
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="relative z-10 mt-10 border-t border-white/10 px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-display text-base font-semibold">Designed and Developed by <span className="neon-text">R Manisha</span></p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Cybersecurity Engineer · Java Developer · Aspiring Full Stack Developer
          </p>
        </div>
        <div className="flex items-center gap-2">
          <SocialIcon href={GITHUB} label="GitHub"><Github className="h-4 w-4" /></SocialIcon>
          <SocialIcon href={LINKEDIN} label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialIcon>
          <SocialIcon href={`mailto:${EMAIL}`} label="Email"><Mail className="h-4 w-4" /></SocialIcon>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Section primitive ---------- */
function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)]">{eyebrow}</p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            <span className="neon-text">{title}</span>
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
