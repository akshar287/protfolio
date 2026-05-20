"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const ROLES = [
  "Full Stack Developer",
  "AI-Systems Builder",
  "Problem Solver",
  "Computer Engineer",
];

const SKILL_PILLS = [
  {
    icon: "⚛️",
    label: "React / Next.js",
    bg: "#ede8ff",
    color: "#3C3489",
    border: "#c8c0f5",
  },
  {
    icon: "🐍",
    label: "Python / Node.js",
    bg: "#faeeda",
    color: "#633806",
    border: "#f5d89a",
  },
  {
    icon: "🔥",
    label: "Firebase / AWS",
    bg: "#d6f4e8",
    color: "#085041",
    border: "#9fe1cb",
  },
];

const STATS = [
  { value: "8.68", suffix: " /10", emoji: "🎓", label: "CGPA"           },
  { value: "2+",   suffix: "",     emoji: "🚀", label: "Projects Built"  },
  { value: "6+",   suffix: "",     emoji: "⚡", label: "Technologies"    },
];

export default function HeroSection() {
  const [roleIdx,  setRoleIdx]  = useState(0);
  const [typed,    setTyped]    = useState("");
  const [deleting, setDeleting] = useState(false);

  /* ── Typing animation ── */
  useEffect(() => {
    const current = ROLES[roleIdx];
    let t: NodeJS.Timeout;
    if (!deleting && typed.length < current.length) {
      t = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 65);
    } else if (!deleting && typed.length === current.length) {
      t = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && typed.length > 0) {
      t = setTimeout(() => setTyped(typed.slice(0, -1)), 35);
    } else {
      setDeleting(false);
      setRoleIdx((p) => (p + 1) % ROLES.length);
    }
    return () => clearTimeout(t);
  }, [typed, deleting, roleIdx]);

  return (
    <>
      {/* ════════════ HERO ════════════ */}
      <section
        id="home"
        style={{
          background: "transparent",
          padding: "64px 40px",
          position: "relative",
          overflow: "hidden",
          transition: "background-color 0.3s ease",
        }}
      >
        
        {/* Radial gradient overlay so logos fade behind the text */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "radial-gradient(ellipse 60% 60% at 30% 50%, var(--cream) 40%, transparent 100%)",
            pointerEvents: "none",
            zIndex: 2,
            transition: "background-color 0.3s ease",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            minHeight: "480px",
            alignItems: "center",
            maxWidth: "1120px",
            margin: "0 auto",
            position: "relative",
            zIndex: 10,
          }}
          className="hero-two-col"
        >
          {/* ── LEFT COLUMN ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

            {/* 1. Availability badge */}
            <div style={{ display: "flex" }}>
              <span
                className="font-nunito flex items-center gap-2 text-xs font-bold"
                style={{
                  background: "#d6f4e8",
                  color: "#0a6644",
                  borderRadius: "999px",
                  padding: "6px 16px",
                }}
              >
                <span
                  className="animate-pulse rounded-full"
                  style={{ width: "8px", height: "8px", background: "#1D9E75", flexShrink: 0, display: "inline-block" }}
                />
                Available for Opportunities
              </span>
            </div>

            {/* 2. Hi label */}
            <p
              className="font-nunito"
              style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", color: "var(--text-muted)", textTransform: "uppercase", margin: 0 }}
            >
              👋 Hi, I&apos;m
            </p>

            {/* 3. Name — two lines */}
            <div style={{ lineHeight: 1, margin: 0 }}>
              <h1
                className="font-nunito"
                style={{
                  fontSize: "clamp(52px, 7vw, 80px)",
                  fontWeight: 900,
                  color: "var(--indigo)",
                  letterSpacing: "-3px",
                  lineHeight: 1,
                  display: "block",
                  margin: 0,
                }}
              >
                Akshar
              </h1>
              <h1
                className="font-nunito"
                style={{
                  fontSize: "clamp(52px, 7vw, 80px)",
                  fontWeight: 900,
                  color: "var(--indigo)",
                  letterSpacing: "-3px",
                  lineHeight: 1.05,
                  display: "block",
                  margin: 0,
                }}
              >
                Thakkar<span style={{ color: "var(--amber)" }}>.</span>
              </h1>
            </div>

            {/* 4. Typed subtitle */}
            <p
              className="font-nunito"
              style={{ fontSize: "20px", fontWeight: 700, color: "var(--text)", margin: 0, minHeight: "30px" }}
            >
              I build as a{" "}
              <span style={{ color: "var(--indigo)" }}>
                {typed}
                {/* blinking cursor */}
                <span
                  style={{
                    display: "inline-block",
                    width: "2px",
                    height: "1.1em",
                    background: "var(--indigo)",
                    marginLeft: "2px",
                    verticalAlign: "middle",
                    borderRadius: "1px",
                    animation: "blink 1s step-end infinite",
                  }}
                />
              </span>
            </p>

            {/* 5. Description */}
            <p
              style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: "1.75", margin: 0, maxWidth: "480px" }}
            >
              Computer Engineering student at{" "}
              <strong style={{ color: "var(--text)", fontWeight: 700 }}>ADIT, CVM University</strong>{" "}
              with a CGPA of{" "}
              <strong style={{ color: "var(--amber)", fontWeight: 800 }}>8.68 / 10</strong>
              . Passionate about building full-stack and AI-integrated products that
              ship to production and make an impact.
            </p>

            {/* 6. CTA buttons */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="#projects"
                className="font-nunito text-sm font-bold"
                style={{
                  background: "var(--indigo)",
                  color: "white",
                  borderRadius: "999px",
                  padding: "12px 24px",
                  textDecoration: "none",
                  transition: "all .2s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  boxShadow: "0 4px 14px rgba(92,63,224,.35)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--indigo-dark)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--indigo)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                View My Work 🚀
              </a>
              <a
                href="#contact"
                className="font-nunito text-sm font-bold"
                style={{
                  background: "transparent",
                  color: "var(--indigo)",
                  borderRadius: "999px",
                  padding: "11px 24px",
                  textDecoration: "none",
                  border: "1.5px solid var(--indigo)",
                  transition: "all .2s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--indigo-light)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                Let&apos;s Talk 💬
              </a>
            </div>

            {/* 7. Social icons row */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
              {/* GitHub */}
              <a
                href="https://github.com/akshar287"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{
                  width: "36px", height: "36px",
                  background: "var(--indigo-light)",
                  borderRadius: "999px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--indigo)",
                  textDecoration: "none",
                  transition: "background .2s",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(157, 135, 255, 0.25)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--indigo-light)"; }}
              >
                <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/akshar-thakkar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: "36px", height: "36px",
                  background: "var(--indigo-light)",
                  borderRadius: "999px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--indigo)",
                  textDecoration: "none",
                  transition: "background .2s",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(157, 135, 255, 0.25)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--indigo-light)"; }}
              >
                <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:aksharthakkar7749@gmail.com"
                aria-label="Email"
                style={{
                  width: "36px", height: "36px",
                  background: "var(--indigo-light)",
                  borderRadius: "999px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--indigo)",
                  textDecoration: "none",
                  transition: "background .2s",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(157, 135, 255, 0.25)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--indigo-light)"; }}
              >
                <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>

              {/* Divider + email text */}
              <span style={{ width: "1px", height: "18px", background: "var(--border)", margin: "0 4px", flexShrink: 0 }} />
              <span style={{ fontSize: "11px", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                aksharthakkar7749@gmail.com
              </span>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "20px",
            }}
          >
            {/* Avatar card */}
            <div style={{ position: "relative" }}>
              {/* Offset shadow frame */}
              <div
                style={{
                  position: "absolute",
                  top: "10px", left: "10px",
                  width: "220px", height: "220px",
                  borderRadius: "24px",
                  background: "var(--indigo-light)",
                  zIndex: 0,
                  transition: "background-color 0.3s",
                }}
              />
              <div
                style={{
                  position: "relative",
                  width: "220px",
                  height: "220px",
                  borderRadius: "24px",
                  background: "linear-gradient(135deg, var(--indigo-light) 60%, var(--cream-dark) 100%)",
                  border: "2px solid var(--indigo-light)",
                  overflow: "hidden",
                  zIndex: 1,
                  boxShadow: "0 12px 40px rgba(92,63,224,.18)",
                  transition: "background 0.3s, border-color 0.3s",
                }}
              >
                <Image
                  src="/avatar.jpg"
                  alt="Akshar Thakkar"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  priority
                />
              </div>
            </div>

            {/* Skill pill badges */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "10px" }}>
              {SKILL_PILLS.map((pill) => (
                <span
                  key={pill.label}
                  className="font-nunito"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: pill.bg,
                    color: pill.color,
                    border: `1px solid ${pill.border}`,
                    borderRadius: "999px",
                    padding: "6px 16px",
                    fontSize: "12px",
                    fontWeight: 700,
                    boxShadow: "0 2px 8px rgba(0,0,0,.06)",
                    animation: `float${SKILL_PILLS.indexOf(pill) + 1} ${3.5 + SKILL_PILLS.indexOf(pill) * 0.5}s ease-in-out infinite`,
                    whiteSpace: "nowrap",
                  }}
                >
                  <span style={{ fontSize: "14px" }}>{pill.icon}</span>
                  {pill.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ STATS BAR ════════════ */}
      <div
        style={{
          background: "var(--cream)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          maxWidth: "100%",
          transition: "background-color 0.3s, border-color 0.3s",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            maxWidth: "1120px",
            margin: "0 auto",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: "20px 24px",
                background: "var(--cream)",
                borderRight: i < STATS.length - 1 ? "1px solid var(--border)" : "none",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                transition: "background-color 0.3s, border-color 0.3s",
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                <span
                  className="font-nunito"
                  style={{ fontSize: "30px", fontWeight: 900, color: "var(--indigo)", lineHeight: 1, letterSpacing: "-0.02em" }}
                >
                  {s.value}
                </span>
                {s.suffix && (
                  <span style={{ fontSize: "14px", color: "var(--text-muted)", fontWeight: 500 }}>{s.suffix}</span>
                )}
              </div>
              <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-muted)" }}>
                {s.emoji} {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Cursor blink keyframe */}
      <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @media (max-width: 800px) {
          .hero-two-col {
            grid-template-columns: 1fr !important;
          }
          .hero-two-col > div:last-child {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
