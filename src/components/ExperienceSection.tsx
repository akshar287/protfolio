"use client";
import { useReveal } from "@/hooks/useReveal";

export default function ExperienceSection() {
  const ref = useReveal();
  return (
    <section id="experience" className="bg-cream" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="section-heading-row reveal">
          <div>
            <span className="section-number">04.</span>
            <h2 className="heading-section">Experience & Education 🎓</h2>
          </div>
          <div className="heading-line" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }}>
          {/* ── WORK ── */}
          <div className="reveal delay-100">
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
              <span
                style={{
                  width: "34px", height: "34px",
                  background: "var(--indigo-light)",
                  borderRadius: "10px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "18px",
                  border: "1px solid rgba(107,78,255,.15)",
                }}
              >
                💼
              </span>
              <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "18px", color: "var(--text)" }}>
                Work Experience
              </h3>
            </div>

            <div className="timeline">
              <div style={{ position: "relative", paddingBottom: "8px" }}>
                <div className="timeline-dot" />
                <div className="card" style={{ padding: "22px 24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px", marginBottom: "12px" }}>
                    <div>
                      <h4 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "17px", color: "var(--indigo-dark)", marginBottom: "3px" }}>
                        E-Commerce Intern
                      </h4>
                      <p style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--amber)", fontWeight: 500 }}>
                        Nilmay System — BottleBrain
                      </p>
                    </div>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)", background: "var(--cream)", padding: "4px 12px", borderRadius: "999px", border: "1px solid var(--border)", whiteSpace: "nowrap" }}>
                      May – Jun 2026
                    </span>
                  </div>

                  <ul style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                    {[
                      "Monitored product & sales data for BottleBrain e-commerce to generate actionable insights",
                      "Built automation scripts using Matomo analytics tool to streamline reporting",
                      "Collaborated on e-commerce optimization and product management in production",
                      "Hands-on experience with live analytics pipelines and data monitoring",
                    ].map((pt) => (
                      <li key={pt} style={{ display: "flex", gap: "10px", fontSize: "13px", color: "var(--text-muted)", lineHeight: "1.65" }}>
                        <span style={{ color: "var(--amber)", fontWeight: 800, flexShrink: 0, marginTop: "2px" }}>▸</span>
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginTop: "14px" }}>
                    {["Data Analysis", "Automation", "Matomo", "E-Commerce"].map((t) => (
                      <span key={t} className="pill pill-amber">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── EDUCATION + CERTS ── */}
          <div className="reveal delay-200">
            {/* Education */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
              <span
                style={{
                  width: "34px", height: "34px",
                  background: "var(--teal-light)",
                  borderRadius: "10px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "18px",
                  border: "1px solid rgba(29,158,117,.2)",
                }}
              >
                🎓
              </span>
              <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "18px", color: "var(--text)" }}>
                Education
              </h3>
            </div>

            <div className="timeline" style={{ marginBottom: "36px" }}>
              <div style={{ position: "relative", paddingBottom: "8px" }}>
                <div className="timeline-dot" />
                <div className="card" style={{ padding: "22px 24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px", marginBottom: "10px" }}>
                    <div>
                      <h4 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "16px", color: "var(--indigo-dark)", marginBottom: "3px" }}>
                        B.Tech — Computer Engineering
                      </h4>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--teal)", fontWeight: 700 }}>
                        A.D. Patel Institute of Technology
                      </p>
                      <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>C.V.M University</p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)", background: "var(--cream)", padding: "4px 10px", borderRadius: "999px", border: "1px solid var(--border)", display: "block", marginBottom: "6px" }}>
                        2023 – 2027
                      </span>
                      <div>
                        <span style={{ fontFamily: "var(--font-heading)", fontWeight: 900, fontSize: "24px", color: "var(--amber)" }}>8.68</span>
                        <span style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: 500 }}> / 10 CGPA</span>
                      </div>
                    </div>
                  </div>
                  <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: "1.7" }}>
                    Core focus on Data Structures & Algorithms, OOP, REST API design, DBMS, and cloud deployment.
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
              <span
                style={{
                  width: "34px", height: "34px",
                  background: "var(--amber-light)",
                  borderRadius: "10px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "18px",
                  border: "1px solid var(--border-warm)",
                }}
              >
                🏆
              </span>
              <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "18px", color: "var(--text)" }}>
                Certifications
              </h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { icon: "🌐", title: "Full-Stack Web Development Internship Certificate", org: "InternForte", bg: "var(--cream-card)" },
                { icon: "☁️", title: "Training and Certification Badge", org: "Amazon Web Services (AWS)", bg: "var(--cream-card)" },
              ].map((c) => (
                <div
                  key={c.title}
                  className="card"
                  style={{ padding: "14px 18px", display: "flex", alignItems: "center", gap: "14px", background: c.bg }}
                >
                  <div
                    style={{
                      width: "42px", height: "42px",
                      background: "var(--indigo-light)",
                      border: "1px solid rgba(107,78,255,.15)",
                      borderRadius: "12px",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "20px", flexShrink: 0,
                    }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--text)", lineHeight: "1.4" }}>{c.title}</p>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--amber)", marginTop: "3px" }}>{c.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
