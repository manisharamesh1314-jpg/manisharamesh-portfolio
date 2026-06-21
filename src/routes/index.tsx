import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowRight,
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manisha R — Cybersecurity Engineer & Java Developer" },
      {
        name: "description",
        content:
          "Portfolio of Manisha R — Cybersecurity Engineering student, Java developer, and aspiring full stack engineer building secure, AI-driven software.",
      },
      { name: "keywords", content: "Manisha R, Cybersecurity, Java Developer, Full Stack, AI Security, Portfolio" },
      { property: "og:title", content: "Manisha R — Cybersecurity Engineer & Java Developer" },
      { property: "og:description", content: "Secure, scalable, intelligent software. Available for internships." },
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
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`mx-auto flex max-w-6xl items-center justify-between px-5 ${scrolled ? "glass-strong rounded-2xl" : ""}`} style={scrolled ? { padding: "0.6rem 1rem" } : undefined}>
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] text-background">M</span>
          <span className="neon-text">Manisha R</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground">
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
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            <span className="block text-foreground">MANISHA</span>
            <span className="block neon-text">RAMESH</span>
          </h1>
          <p className="mt-6 max-w-xl font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Cybersecurity Engineer · Java Developer · Aspiring Full Stack Developer
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Building secure, scalable, and intelligent software solutions through modern development practices,
            cybersecurity principles, and AI-driven technologies.
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
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-white/30 hover:bg-white/5"
            >
              <Download className="h-4 w-4" /> Download Resume
            </button>
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
  const floats = [
    { label: "Java", icon: <FileCode2 className="h-4 w-4" />, pos: "top-2 -left-4", delay: "0s" },
    { label: "HTML", icon: <Code2 className="h-4 w-4" />, pos: "top-20 -right-6", delay: "-1s" },
    { label: "CSS", icon: <Sparkles className="h-4 w-4" />, pos: "top-1/2 -left-10", delay: "-2s" },
    { label: "JS", icon: <Code2 className="h-4 w-4" />, pos: "bottom-24 -right-8", delay: "-3s" },
    { label: "GitHub", icon: <Github className="h-4 w-4" />, pos: "bottom-4 -left-6", delay: "-4s" },
    { label: "Security", icon: <Shield className="h-4 w-4" />, pos: "-top-4 right-10", delay: "-5s" },
    { label: "AI", icon: <BrainCircuit className="h-4 w-4" />, pos: "bottom-2 right-1/3", delay: "-2.5s" },
    { label: "Cloud", icon: <Cloud className="h-4 w-4" />, pos: "top-1/3 -right-10", delay: "-1.5s" },
  ];
  const stats = [
    { k: "CGPA", v: "8.59" },
    { k: "Focus", v: "Secure Dev" },
    { k: "Domain", v: "AI & Cyber" },
    { k: "Status", v: "Open to Intern" },
  ];
  return (
    <div className="relative mx-auto w-full max-w-md animate-fade-up" style={{ animationDelay: "0.15s" }}>
      <div className="relative glass-strong rounded-3xl p-6">
        {/* Animated glowing border ring */}
        <div className="relative mx-auto h-56 w-56">
          <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,var(--neon-blue),var(--neon-purple),var(--neon-cyan),var(--neon-blue))] animate-spin-slow blur-[2px] opacity-90" />
          <div className="absolute inset-[6px] rounded-full bg-background" />
          <div className="absolute inset-[10px] overflow-hidden rounded-full bg-gradient-to-br from-[oklch(0.2_0.08_270)] to-[oklch(0.15_0.06_305)] grid place-items-center animate-pulse-ring">
            <div className="flex flex-col items-center">
              <span className="font-display text-6xl font-bold neon-text">MR</span>
              <span className="mt-1 text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">Manisha R</span>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <h3 className="font-display text-xl font-semibold">Manisha R</h3>
          <p className="mt-1 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" /> Tamil Nadu, India
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

        {/* Floating icons */}
        {floats.map((f) => (
          <div
            key={f.label}
            className={`absolute ${f.pos} animate-float`}
            style={{ animationDelay: f.delay }}
          >
            <div className="flex items-center gap-1.5 rounded-full glass px-2.5 py-1.5 text-[0.7rem] font-medium text-foreground/90">
              <span className="text-[var(--neon-cyan)]">{f.icon}</span>
              {f.label}
            </div>
          </div>
        ))}
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
      body: "Strong foundation in software engineering principles, web technologies, and modern security concepts.",
    },
    {
      icon: <Code2 className="h-5 w-5" />,
      title: "Java & Web Developer",
      body: "Passionate about clean, scalable code — from Java backends to responsive front-ends.",
    },
    {
      icon: <BrainCircuit className="h-5 w-5" />,
      title: "AI-Powered Security",
      body: "Exploring AI-driven security solutions: facial recognition, anomaly detection, predictive alerts.",
    },
  ];
  return (
    <Section id="about" eyebrow="01 — Profile" title="About Me">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div className="glass-strong rounded-3xl p-7">
          <p className="text-lg leading-relaxed text-foreground/90">
            I'm a <span className="neon-text font-semibold">Cybersecurity Engineering</span> student with a CGPA of{" "}
            <span className="font-display font-semibold text-foreground">8.59</span> and a strong passion for software development,
            cybersecurity, AI-powered security systems, and modern web technologies.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            I enjoy building secure, scalable, and user-friendly applications that solve real-world problems —
            blending strong development fundamentals with security-first thinking.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Secure Development", "AI in Security", "Java", "Web Tech", "Zero Trust"].map((t) => (
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
    { title: "Programming", icon: <Code2 className="h-4 w-4" />, items: ["Java", "JavaScript", "HTML", "CSS"] },
    { title: "Development", icon: <FileCode2 className="h-4 w-4" />, items: ["Web Development", "Responsive Design", "SDLC"] },
    { title: "Cybersecurity", icon: <Shield className="h-4 w-4" />, items: ["Zero Trust", "Authentication", "Encryption", "Access Control"] },
    { title: "AI Concepts", icon: <BrainCircuit className="h-4 w-4" />, items: ["Facial Recognition", "Anomaly Detection", "Predictive Alerts"] },
    { title: "Tools", icon: <Github className="h-4 w-4" />, items: ["Git", "GitHub", "VS Code"] },
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
    "Developed AI-enabled security solutions",
    "Worked on facial recognition systems",
    "Implemented anomaly detection concepts",
    "Applied Zero Trust security principles",
    "Used encryption-based security measures",
    "Designed role-based access control systems",
    "Enhanced secure authentication workflows",
  ];
  return (
    <Section id="experience" eyebrow="03 — Journey" title="Experience">
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--neon-blue)] via-[var(--neon-purple)] to-transparent md:left-1/2" />
        <div className="relative pl-12 md:pl-0">
          <div className="absolute left-2.5 top-3 h-3 w-3 rounded-full bg-[var(--neon-purple)] glow-purple md:left-[calc(50%-6px)]" />
          <div className="glass-strong rounded-2xl p-6 md:ml-[55%]">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--neon-cyan)]">
              <Briefcase className="h-3.5 w-3.5" /> Internship
            </div>
            <h3 className="mt-2 font-display text-xl font-semibold">Software Development Intern</h3>
            <p className="mt-1 text-sm text-muted-foreground">AI-enabled security · Java & Web</p>
            <ul className="mt-4 space-y-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-foreground/85">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--neon-cyan)]" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
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
          tag="Flagship · AI Security"
          title="Gatebell.in"
          subtitle="Smart Security for Residential Complexes"
          description="AI-enabled security platform featuring facial recognition, anomaly detection, predictive alerts, visitor management, role-based access control, multi-factor authentication, encryption, and security monitoring."
          features={[
            "Facial Recognition",
            "Visitor Access Management",
            "Predictive Alerts",
            "Anomaly Detection",
            "MFA",
            "Encryption",
            "Role-Based Access",
            "Security Monitoring",
          ]}
          accent="from-[var(--neon-blue)] to-[var(--neon-purple)]"
          icon={<Shield className="h-6 w-6" />}
        />
        <ProjectCard
          tag="Web · Security Tool"
          title="Password Strength Evaluator"
          subtitle="Analyze complexity & guide stronger passwords"
          description="A web application that analyzes password complexity and provides security feedback to help users create stronger, safer passwords."
          features={["HTML", "CSS", "JavaScript"]}
          accent="from-[var(--neon-cyan)] to-[var(--neon-blue)]"
          icon={<KeyRound className="h-6 w-6" />}
        />
      </div>
    </Section>
  );
}

function ProjectCard({
  tag, title, subtitle, description, features, accent, icon,
}: {
  tag: string; title: string; subtitle: string; description: string; features: string[]; accent: string; icon: React.ReactNode;
}) {
  return (
    <article className="group relative overflow-hidden rounded-3xl glass-strong p-7 transition hover:-translate-y-1">
      <div className={`pointer-events-none absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gradient-to-br ${accent} opacity-20 blur-3xl transition group-hover:opacity-40`} />
      <div className="flex items-start justify-between gap-4">
        <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${accent} text-background`}>
          {icon}
        </div>
        <span className="chip">{tag}</span>
      </div>
      <h3 className="mt-5 font-display text-2xl font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-[var(--neon-cyan)]">{subtitle}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {features.map((f) => (
          <span key={f} className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-foreground/90">
            {f}
          </span>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-2 text-sm text-foreground/70">
        <ExternalLink className="h-4 w-4" />
        <span className="font-mono">Case study available on request</span>
      </div>
    </article>
  );
}

/* ---------- Achievements ---------- */
function Achievements() {
  const items = [
    { icon: <Trophy className="h-5 w-5" />, title: "First Prize", body: "Technical Paper Presentation" },
    { icon: <Award className="h-5 w-5" />, title: "National Hackathon", body: "National Level Participant" },
    { icon: <BrainCircuit className="h-5 w-5" />, title: "Generative AI", body: "Technical Paper Presenter" },
    { icon: <Sparkles className="h-5 w-5" />, title: "Technical Symposium", body: "Participant" },
    { icon: <Eye className="h-5 w-5" />, title: "Google Workshop", body: "Data Science Workshop Participant" },
  ];
  return (
    <Section id="achievements" eyebrow="05 — Recognition" title="Achievements">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="group relative overflow-hidden rounded-2xl glass p-5 transition hover:-translate-y-1">
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[var(--neon-purple)]/20 blur-2xl opacity-0 transition group-hover:opacity-100" />
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] text-background">
              {it.icon}
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold">{it.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{it.body}</p>
          </div>
        ))}
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
          <p className="font-display text-base font-semibold">Designed and Developed by <span className="neon-text">Manisha R</span></p>
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
