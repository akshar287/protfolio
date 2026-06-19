import type { Metadata } from "next";
import "./globals.css";
import MatomoAnalytics from "@/components/MatomoAnalytics";

export const metadata: Metadata = {
  title: "Akshar Thakkar — Full Stack Developer",
  description:
    "Portfolio of Akshar Thakkar, Computer Engineering student at ADIT, CVM University (CGPA 8.68). Building full-stack and AI-integrated apps with React, Next.js, Python, and Node.js.",
  keywords: ["Akshar Thakkar", "Full Stack Developer", "React", "Next.js", "Python", "Portfolio"],
  authors: [{ name: "Akshar Thakkar" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <MatomoAnalytics />
      </body>
    </html>
  );
}
