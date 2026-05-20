"use client";
import { useReveal } from "@/hooks/useReveal";

const categories = [
  { title: "Languages", icon: "💻",
    skills: [
      { name: "Java",       cls: "pill-indigo" },
      { name: "Python",     cls: "pill-amber"  },
      { name: "JavaScript", cls: "pill-orange" },
      { name: "TypeScript", cls: "pill-blue"   },
      { name: "C++",        cls: "pill-purple" },
    ],
  },
  { title: "Frontend", icon: "🎨",
    skills: [
      { name: "React.js",     cls: "pill-blue"   },
      { name: "Next.js",      cls: "pill-indigo"  },
      { name: "React Native", cls: "pill-teal"   },
      { name: "Tailwind CSS", cls: "pill-teal"   },
      { name: "HTML / CSS",   cls: "pill-orange" },
    ],
  },
  { title: "Backend", icon: "⚙️",
    skills: [
      { name: "Node.js",    cls: "pill-green"  },
      { name: "Express.js", cls: "pill-green"  },
      { name: "REST APIs",  cls: "pill-indigo" },
    ],
  },
  { title: "Databases", icon: "🗄️",
    skills: [
      { name: "MongoDB",    cls: "pill-green"  },
      { name: "MySQL",      cls: "pill-blue"   },
      { name: "DynamoDB",   cls: "pill-orange" },
      { name: "Firebase",   cls: "pill-amber"  },
    ],
  },
  { title: "Cloud & Tools", icon: "☁️",
    skills: [
      { name: "AWS S3",   cls: "pill-orange" },
      { name: "Firebase", cls: "pill-amber"  },
      { name: "Git",      cls: "pill-pink"   },
      { name: "GitHub",   cls: "pill-indigo" },
      { name: "Postman",  cls: "pill-orange" },
      { name: "Vercel",   cls: "pill-indigo" },
      { name: "VAPI",     cls: "pill-teal"   },
    ],
  },
  { title: "CS Foundations", icon: "🧠",
    skills: [
      { name: "DSA",            cls: "pill-indigo" },
      { name: "OOP",            cls: "pill-purple" },
      { name: "System Design",  cls: "pill-blue"   },
      { name: "Problem Solving",cls: "pill-teal"   },
    ],
  },
];

const proficiency = [
  { label: "React.js / Next.js",     pct: 88 },
  { label: "Python",                  pct: 85 },
  { label: "Node.js / Express",       pct: 82 },
  { label: "JavaScript / TypeScript", pct: 87 },
  { label: "MongoDB / MySQL",         pct: 80 },
  { label: "DSA & Problem Solving",   pct: 85 },
];

export default function SkillsSection() {
  const ref = useReveal();
  return (
    <section id="skills" className="bg-cream" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="section-heading-row reveal">
          <div>
            <span className="section-number">02.</span>
            <h2 className="heading-section">Skills & Technologies ⚡</h2>
          </div>
          <div className="heading-line" />
        </div>

        {/* Category grid — sticker/badge feel */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px", marginBottom: "40px" }}>
          {categories.map((cat, ci) => (
            <div
              key={cat.title}
              className={`card reveal delay-${(ci + 1) * 100}`}
              style={{ padding: "24px 26px" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <span style={{ fontSize: "20px" }}>{cat.icon}</span>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "16px", color: "var(--text)" }}>
                  {cat.title}
                </h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {cat.skills.map((s) => (
                  <span key={s.name} className={`pill ${s.cls}`}>{s.name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency bars */}
        <div className="card reveal delay-200" style={{ padding: "36px 40px" }}>
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "18px",
              color: "var(--text)",
              marginBottom: "28px",
            }}
          >
            📊 Core Proficiency
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 48px" }}>
            {proficiency.map((p) => (
              <div key={p.label}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--text)" }}>{p.label}</span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      color: "var(--indigo)",
                      fontWeight: 500,
                    }}
                  >
                    {p.pct}%
                  </span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: `${p.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
