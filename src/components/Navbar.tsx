"use client";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#about",      label: "About"      },
  { href: "#skills",     label: "Skills"     },
  { href: "#projects",   label: "Projects"   },
  { href: "#experience", label: "Experience" },
  { href: "#contact",    label: "Contact"    },
];

export default function Navbar() {
  const [active,   setActive]   = useState("about");
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [dark,     setDark]     = useState(false);

  /* ── Init theme from localStorage on mount ── */
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      setDark(true);
    }
  }, []);

  /* ── Toggle handler ── */
  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  };


  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = NAV_LINKS.map((l) => l.href.slice(1));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const boxBtn: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid var(--border)",
    borderRadius: "8px",
    background: "var(--cream-card)",
    cursor: "pointer",
    transition: "background .18s, border-color .18s",
    flexShrink: 0,
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 9999,
        width: "100%",
        background: dark ? "rgba(22, 19, 31, 0.95)" : "rgba(255, 248, 238, 0.95)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid #ecdfc8",
        boxShadow: scrolled ? "0 2px 12px rgba(92,63,224,.08)" : "none",
        transition: "box-shadow .3s, background-color 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "12px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        {/* ── DESKTOP: NAV LINKS left + buttons right ── */}
        {!isMobile && (
          <>
            {/* LEFT: Nav links */}
            <nav style={{ display: "flex", alignItems: "center", gap: "28px" }}>
              {NAV_LINKS.map((l) => {
                const isActive = active === l.href.slice(1);
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: "14px",
                      fontWeight: 700,
                      color: isActive ? "var(--indigo)" : "var(--text)",
                      textDecoration: "none",
                      paddingBottom: "3px",
                      borderBottom: isActive
                        ? "2px solid var(--indigo)"
                        : "2px solid transparent",
                      transition: "color .2s, border-color .2s",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = "var(--indigo)";
                      el.style.borderBottom = "2px solid var(--indigo)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      if (!isActive) {
                        el.style.color = "var(--text)";
                        el.style.borderBottom = "2px solid transparent";
                      }
                    }}
                  >
                    {l.label}
                  </a>
                );
              })}
            </nav>

            {/* RIGHT: Resume + Moon/Sun Toggle + ⋯ */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {/* Resume */}
              <a
                href="/resume.pdf"
                download
                style={{
                  ...boxBtn,
                  display: "inline-flex",
                  gap: "6px",
                  padding: "6px 16px",
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "var(--text)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--indigo-light)";
                  el.style.borderColor = "var(--indigo)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--cream-card)";
                  el.style.borderColor = "var(--border)";
                }}
              >
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  style={{ flexShrink: 0 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
                  />
                </svg>
                Resume
              </a>

              {/* Theme Toggle Button */}
              <button
                aria-label="Toggle theme"
                onClick={toggleTheme}
                style={{ ...boxBtn, width: "36px", height: "36px", padding: 0 }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--indigo-light)";
                  el.style.borderColor = "var(--indigo)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--cream-card)";
                  el.style.borderColor = "var(--border)";
                }}
              >
                {dark ? (
                  /* Sun Icon */
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="var(--amber)"
                    strokeWidth={2.2}
                  >
                    <circle cx="12" cy="12" r="4" fill="var(--amber)" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
                    />
                  </svg>
                ) : (
                  /* Moon Icon */
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="var(--indigo-dark)"
                    strokeWidth={2.2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
                    />
                  </svg>
                )}
              </button>

              {/* More ⋯ */}
              <button
                aria-label="More options"
                style={{
                  ...boxBtn,
                  width: "36px",
                  height: "36px",
                  padding: 0,
                  fontSize: "16px",
                  color: "var(--text)",
                  letterSpacing: "1px",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--indigo-light)";
                  el.style.borderColor = "var(--indigo)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--cream-card)";
                  el.style.borderColor = "var(--border)";
                }}
              >
                ···
              </button>
            </div>
          </>
        )}

        {/* ── MOBILE: hamburger only ── */}
        {isMobile && (
          <>
            <span
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 900,
                fontSize: "20px",
                color: "var(--indigo)",
                letterSpacing: "-0.03em",
              }}
            >
              Menu
            </span>

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {/* Theme Toggle Button for Mobile */}
              <button
                aria-label="Toggle theme"
                onClick={toggleTheme}
                style={{ ...boxBtn, width: "36px", height: "36px", padding: 0 }}
              >
                {dark ? (
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="var(--amber)"
                    strokeWidth={2.2}
                  >
                    <circle cx="12" cy="12" r="4" fill="var(--amber)" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
                    />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="var(--indigo-dark)"
                    strokeWidth={2.2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
                    />
                  </svg>
                )}
              </button>

              <button
                onClick={() => setOpen(!open)}
                aria-label="Menu"
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  padding: "6px",
                }}
              >
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    style={{
                      display: "block",
                      height: "2px",
                      borderRadius: "2px",
                      background: "var(--indigo)",
                      width: i === 1 ? (open ? "24px" : "16px") : "24px",
                      transition: "all .3s",
                      transform:
                        open && i === 0
                          ? "rotate(45deg) translateY(7px)"
                          : open && i === 2
                          ? "rotate(-45deg) translateY(-7px)"
                          : open && i === 1
                          ? "scaleX(0)"
                          : "none",
                    }}
                  />
                ))}
              </button>
            </div>
          </>
        )}
      </div>

      {/* ── MOBILE DROPDOWN ── */}
      {isMobile && open && (
        <div
          style={{
            padding: "16px 40px 20px",
            borderTop: "1px solid var(--border)",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            background: "var(--cream)",
            transition: "background-color 0.3s",
          }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "15px",
                fontWeight: 700,
                color: active === l.href.slice(1) ? "var(--indigo)" : "var(--text)",
                textDecoration: "none",
              }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "'Nunito', sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              color: "var(--text)",
              textDecoration: "none",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "8px 18px",
              background: "var(--cream-card)",
              width: "fit-content",
            }}
          >
            <svg
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
              />
            </svg>
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
