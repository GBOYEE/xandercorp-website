import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XanderCorp — AI Agent Systems & Automation",
  description: "Build autonomous AI agents that generate leads, automate outreach, and scale your business 24/7. Starting at $150.",
  keywords: "AI agents, automation, lead generation, cold outreach, sales automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}