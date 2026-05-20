"use client";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

export default function AboutSection() {
  const ref = useReveal();
  return (
    <section id="about" className="bg-alt" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="section-heading-row reveal">
          <div>
            <span className="section-number">01.</span>
            <h2 className="heading-section">About Me 👋</h2>
          </div>
          <div className="heading-line" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "64px", alignItems: "start" }}>
          {/* TEXT */}
          <div className="reveal delay-100">
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "var(--text-muted)", marginBottom: "20px" }}>
              Hey! I&apos;m Akshar — a{" "}
              <strong style={{ color: "var(--text)" }}>Computer Engineering student</strong>{" "}
              at A.D. Patel Institute of Technology, CVM University. I&apos;m passionate
              about building products that combine clean UI with solid engineering.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "var(--text-muted)", marginBottom: "20px" }}>
              My focus is the intersection of{" "}
              <strong style={{ color: "var(--indigo)" }}>full-stack development</strong> and{" "}
              <strong style={{ color: "var(--teal)" }}>AI integration</strong> — from
              React / Next.js interfaces to Node.js / Express APIs, MongoDB / MySQL
              databases, and cloud deployments on AWS and Firebase.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "var(--text-muted)", marginBottom: "32px" }}>
              Outside of code I love photography 📷, drones 🚁, and exploring the
              latest AI tooling. I&apos;m always grinding DSA problems and open-source.
            </p>

            {/* Facts grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "32px" }}>
              {[
                { icon: "📍", label: "Location",   value: "India" },
                { icon: "🎓", label: "Degree",      value: "B.Tech CSE" },
                { icon: "📅", label: "Graduation",  value: "May 2027" },
                { icon: "🌐", label: "Languages",   value: "English · Gujarati · Hindi" },
              ].map((f) => (
                <div
                  key={f.label}
                  style={{
                    background: "var(--cream)",
                    border: "1px solid var(--border)",
                    borderRadius: "14px",
                    padding: "14px 16px",
                  }}
                >
                  <p style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "4px" }}>
                    {f.icon} {f.label}
                  </p>
                  <p style={{ fontSize: "14px", color: "var(--text)", fontWeight: 700 }}>{f.value}</p>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a href="#contact" className="btn-primary">Hire Me 🚀</a>
              <a href="/resume.pdf" download className="btn-ghost">Download CV 📄</a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="reveal-scale delay-200">
            <div style={{ position: "relative" }}>
              {/* Decorative shadow frame */}
              <div
                style={{
                  position: "absolute",
                  top: "12px", left: "12px",
                  right: "-12px", bottom: "-12px",
                  background: "var(--indigo-light)",
                  borderRadius: "20px",
                  border: "1.5px solid rgba(107,78,255,.2)",
                }}
              />
              <div style={{ position: "relative" }}>
                <Image
                  src="/avatar.jpg"
                  alt="Akshar Thakkar"
                  width={360}
                  height={420}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "20px",
                    border: "2px solid var(--border)",
                    display: "block",
                    objectFit: "cover",
                  }}
                />
                {/* Overlay name */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0, left: 0, right: 0,
                    background: "linear-gradient(to top, rgba(107,78,255,.8) 0%, transparent 100%)",
                    borderRadius: "0 0 20px 20px",
                    padding: "28px 20px 18px",
                  }}
                >
                  <p style={{ color: "white", fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "18px" }}>
                    Akshar Thakkar
                  </p>
                  <p style={{ color: "rgba(255,255,255,.8)", fontFamily: "var(--font-mono)", fontSize: "11px", marginTop: "2px" }}>
                    Full Stack Developer
                  </p>
                </div>
              </div>

              {/* Sticker decorations */}
              <div
                style={{
                  position: "absolute", top: "-12px", right: "-12px",
                  background: "var(--amber-light)",
                  border: "1.5px solid var(--border-warm)",
                  borderRadius: "50%",
                  width: "44px", height: "44px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "22px",
                  boxShadow: "var(--shadow-md)",
                  animation: "float2 5s ease-in-out infinite",
                }}
              >
                📷
              </div>
              <div
                style={{
                  position: "absolute", bottom: "-12px", left: "-12px",
                  background: "var(--teal-light)",
                  border: "1.5px solid rgba(29,158,117,.25)",
                  borderRadius: "50%",
                  width: "40px", height: "40px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "20px",
                  boxShadow: "var(--shadow-md)",
                  animation: "float3 4s ease-in-out 0.5s infinite",
                }}
              >
                💡
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
