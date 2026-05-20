"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiPython,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiMysql,
  SiGit,
  SiGithub,
  SiExpress,
  SiJavascript,
  SiVercel,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";

const TECHS = [
  { Icon: SiReact,        color: "#61DAFB", bg: "#ede8ff", border: "#c8c0f5", size: 64 },
  { Icon: SiNextdotjs,    color: "#ffffff", bg: "#1a1a2e", border: "#444",    size: 56 },
  { Icon: SiPython,       color: "#3776AB", bg: "#faeeda", border: "#f5d89a", size: 60 },
  { Icon: SiTypescript,   color: "#3178C6", bg: "#e6f1fb", border: "#85b7eb", size: 58 },
  { Icon: SiNodedotjs,    color: "#339933", bg: "#eaf3de", border: "#c0dd97", size: 62 },
  { Icon: SiMongodb,      color: "#47A248", bg: "#eaf3de", border: "#97c459", size: 56 },
  { Icon: SiFirebase,     color: "#FFCA28", bg: "#faeeda", border: "#ef9f27", size: 58 },
  { Icon: FaAws,          color: "#FF9900", bg: "#faeeda", border: "#fac775", size: 54 },
  { Icon: SiTailwindcss,  color: "#38BDF8", bg: "#e1f5ee", border: "#5dcaa5", size: 62 },
  { Icon: SiGit,          color: "#F05032", bg: "#faece7", border: "#f09b7b", size: 54 },
  { Icon: SiMysql,        color: "#4479A1", bg: "#e6f1fb", border: "#b5d4f4", size: 52 },
  { Icon: FaJava,         color: "#5382A1", bg: "#faece7", border: "#f5c4b3", size: 58 },
  { Icon: SiGithub,       color: "#ffffff", bg: "#2c2c2a", border: "#5f5e5a", size: 56 },
  { Icon: SiExpress,      color: "#000000", bg: "#f1efe8", border: "#b4b2a9", size: 52 },
  { Icon: SiVercel,       color: "#ffffff", bg: "#1a1a2e", border: "#5f5e5a", size: 52 },
  { Icon: SiJavascript,   color: "#F7DF1E", bg: "#faeeda", border: "#fac775", size: 58 },
];

interface LogoInstance {
  id: number;
  Icon: React.ComponentType<any>;
  color: string;
  bg: string;
  border: string;
  size: number;
  x: number;
  y: number;
  tx: number;
  ty: number;
  tx2: number;
  ty2: number;
  dur: number;
  delay: number;
  sc: number;
}

export default function FloatingTechLogos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [instances, setInstances] = useState<LogoInstance[]>([]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    // Run after a small layout settlement delay
    const timer = setTimeout(() => {
      const W = containerRef.current?.offsetWidth || window.innerWidth;
      const H = containerRef.current?.offsetHeight || document.documentElement.scrollHeight || 3500;

      // Scale logo density with page height (e.g. approx 8 logos per 600px of page height)
      const count = Math.min(80, Math.max(16, Math.floor((H / 600) * 8)));
      
      const repeated: typeof TECHS = [];
      while (repeated.length < count) {
        repeated.push(...TECHS);
      }
      const finalTechs = repeated.slice(0, count);

      const rand = (a: number, b: number) => Math.random() * (b - a) + a;
      const sign = () => (Math.random() > 0.5 ? 1 : -1);

      const generated = finalTechs.map((tech, idx) => {
        const size = tech.size;
        const x = rand(size, W - size);
        const y = rand(size, H - size);
        const tx = rand(50, 160) * sign();
        const ty = rand(40, 130) * sign();
        const tx2 = rand(20, 80) * sign();
        const ty2 = rand(20, 80) * sign();
        const dur = rand(14, 26);
        const delay = rand(0, 20);
        const sc = rand(0.85, 1.2);

        return {
          id: idx,
          ...tech,
          x,
          y,
          tx,
          ty,
          tx2,
          ty2,
          dur,
          delay,
          sc,
        };
      });

      setInstances(generated);
    }, 150);

    return () => clearTimeout(timer);
  }, [isMobile]);

  return (
    <>
      <style>{`
        @keyframes techFloat {
          0% {
            opacity: 0;
            transform: translate(0, 0) rotate(0deg) scale(0.8);
          }
          10% {
            opacity: 0.7;
          }
          50% {
            opacity: 0.9;
            transform: translate(var(--tx), var(--ty)) rotate(180deg) scale(var(--sc));
          }
          90% {
            opacity: 0.7;
          }
          100% {
            opacity: 0;
            transform: translate(var(--tx2), var(--ty2)) rotate(360deg) scale(0.8);
          }
        }
      `}</style>
      <div
        ref={containerRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        {!isMobile &&
          instances.map((inst) => {
            const { Icon, color, bg, border, size, x, y, tx, ty, tx2, ty2, dur, delay, sc } = inst;
            return (
              <div
                key={inst.id}
                style={{
                  position: "absolute",
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${x - size / 2}px`,
                  top: `${y - size / 2}px`,
                  background: bg,
                  border: `1.5px solid ${border}`,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  pointerEvents: "none",
                  opacity: 0,
                  animation: `techFloat ${dur}s -${delay}s linear infinite`,
                  zIndex: 1,
                  ["--tx" as any]: `${tx}px`,
                  ["--ty" as any]: `${ty}px`,
                  ["--tx2" as any]: `${tx2}px`,
                  ["--ty2" as any]: `${ty2}px`,
                  ["--sc" as any]: sc,
                }}
              >
                <Icon size={size * 0.5} style={{ color }} />
              </div>
            );
          })}
      </div>
    </>
  );
}
