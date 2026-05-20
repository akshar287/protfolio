"use client";
import { useReveal } from "@/hooks/useReveal";

const projects = [
  {
    id: "careerly",
    icon: "🎯",
    iconBg: "var(--indigo-light)",
    title: "Careerly",
    subtitle: "AI-Powered Placement Prep Platform",
    date: "Feb 2026",
    pillClass: "pill-indigo",
    desc: "An all-in-one placement prep platform for engineering students — aptitude modules, in-browser coding assessments, and AI-driven mock interviews with real-time voice interaction via VAPI.",
    highlights: [
      "AI mock interviews with real-time voice via VAPI",
      "Monaco Editor for in-browser coding challenges",
      "Firebase auth, Firestore real-time DB, analytics dashboard",
      "Adaptive learning paths based on performance scoring",
    ],
    tech: ["Next.js", "TypeScript", "Firebase", "VAPI", "Monaco Editor"],
    github: "https://github.com/akshar287",
    live: null,
  },
  {
    id: "vilaura",
    icon: "🛍️",
    iconBg: "var(--amber-light)",
    title: "Vilaura Shop",
    subtitle: "Full-Stack E-Commerce Platform",
    date: "Jun 2025",
    pillClass: "pill-amber",
    desc: "A luxury soap brand e-commerce app with 3-Tier Architecture (React + Node + MySQL), JWT authentication, dynamic product theming, and a smooth shopping experience.",
    highlights: [
      "Clean 3-Tier Architecture: React, Node.js, MySQL",
      "JWT-based secure authentication & session management",
      "Dynamic category-based product theming engine",
      "Optimised SQL queries and cart management flow",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "JWT"],
    github: "https://github.com/akshar287",
    live: null,
  },
];

export default function ProjectsSection() {
  const ref = useReveal();
  return (
    <section id="projects" className="bg-alt" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="section-heading-row reveal">
          <div>
            <span className="section-number">03.</span>
            <h2 className="heading-section">Projects 🚀</h2>
          </div>
          <div className="heading-line" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }} className="projects-grid">
          {projects.map((p, i) => (
            <div key={p.id} className={`card-project reveal delay-${(i + 1) * 150}`} style={{ display: "flex", flexDirection: "column" }}>
              {/* Header */}
              <div style={{ padding: "26px 28px 0" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                  {/* Icon */}
                  <div
                    style={{
                      width: "50px", height: "50px",
                      background: p.iconBg,
                      borderRadius: "14px",
                      border: "1px solid var(--border)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "24px",
                    }}
                  >
                    {p.icon}
                  </div>

                  {/* Links + date */}
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)", padding: "3px 10px", background: "var(--cream)", borderRadius: "999px", border: "1px solid var(--border)" }}>
                      {p.date}
                    </span>
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub">
                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="Live">
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "22px", color: "var(--indigo-dark)", marginBottom: "4px", letterSpacing: "-0.01em" }}>
                  {p.title}
                </h3>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--amber)", marginBottom: "14px", fontWeight: 500 }}>
                  {p.subtitle}
                </p>
                <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "18px" }}>
                  {p.desc}
                </p>
              </div>

              {/* Body */}
              <div style={{ padding: "0 28px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                <ul style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
                  {p.highlights.map((h) => (
                    <li key={h} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "13px", color: "var(--text-muted)", lineHeight: "1.6" }}>
                      <span style={{ color: "var(--amber)", fontWeight: 800, flexShrink: 0, marginTop: "1px" }}>✦</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginTop: "auto" }}>
                  {p.tech.map((t) => (
                    <span key={t} className={`pill ${p.pillClass}`}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <a href="https://github.com/akshar287" target="_blank" rel="noopener noreferrer" className="btn-ghost reveal delay-300">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
