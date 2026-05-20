"use client";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

export default function ContactSection() {
  const [form,   setForm]   = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const ref = useReveal();

  const handle = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1600));
    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="bg-alt" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="section-heading-row reveal">
          <div>
            <span className="section-number">05.</span>
            <h2 className="heading-section">Get In Touch ✉️</h2>
          </div>
          <div className="heading-line" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: "48px" }}>
          {/* ── LEFT: info ── */}
          <div className="reveal delay-100">
            <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: "1.85", marginBottom: "28px" }}>
              I&apos;m currently open to{" "}
              <strong style={{ color: "var(--indigo)" }}>internship opportunities</strong>,{" "}
              freelance projects, and collaborations. I respond within{" "}
              <strong style={{ color: "var(--text)" }}>24 hours</strong>!
            </p>

            <div className="badge-available mb-7">
              <span className="dot" />
              Open to Opportunities
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { icon: "📧", label: "Email",    val: "aksharthakkar7749@gmail.com", href: "mailto:aksharthakkar7749@gmail.com" },
                { icon: "📱", label: "Phone",    val: "+91 9664912009",              href: "tel:+919664912009" },
                { icon: "💼", label: "LinkedIn", val: "akshar-thakkar",              href: "https://linkedin.com/in/akshar-thakkar" },
                { icon: "🐙", label: "GitHub",   val: "akshar287",                  href: "https://github.com/akshar287" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="card"
                  style={{
                    padding: "13px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    textDecoration: "none",
                    transition: "all .25s ease",
                    background: "var(--cream-card)",
                  }}
                >
                  <span style={{ fontSize: "22px" }}>{c.icon}</span>
                  <div style={{ flex: 1 }}>
                    <p className="label-mono" style={{ marginBottom: "2px" }}>{c.label}</p>
                    <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--indigo)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {c.val}
                    </p>
                  </div>
                  <span style={{ color: "var(--indigo)", fontWeight: 700 }}>→</span>
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT: form ── */}
          <div className="reveal delay-200">
            <div className="card" style={{ padding: "36px 40px", background: "var(--cream-card)" }}>
              <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "20px", color: "var(--text)", marginBottom: "24px" }}>
                Send Me a Message 💬
              </h3>
              <form onSubmit={handle} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                  <div>
                    <label>Your Name</label>
                    <input type="text" className="form-input" placeholder="John Doe" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                  </div>
                  <div>
                    <label>Email Address</label>
                    <input type="email" className="form-input" placeholder="john@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                  </div>
                </div>
                <div>
                  <label>Subject</label>
                  <input type="text" className="form-input" placeholder="Internship opportunity / Collaboration..." value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required />
                </div>
                <div>
                  <label>Message</label>
                  <textarea className="form-input" placeholder="Tell me about your project or opportunity..." rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                </div>
                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className="btn-primary"
                  style={{ justifyContent: "center", fontSize: "15px", padding: "15px", borderRadius: "14px", border: "none", opacity: status !== "idle" ? 0.85 : 1 }}
                >
                  {status === "idle"    && "Send Message 🚀"}
                  {status === "sending" && "Sending..."}
                  {status === "sent"    && "✅ Message Sent!"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
