import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XanderCorp — AI Agents That Close Deals While You Sleep",
  description: "Custom AI agents for B2B businesses. Automate lead generation, cold outreach, and follow-ups. 50+ qualified leads weekly. 3-7 day delivery. Starting at $150.",
  keywords: "AI agents, B2B automation, lead generation, cold outreach, sales automation, AI sales",
  openGraph: {
    title: "XanderCorp — AI Agents That Close Deals While You Sleep",
    description: "Custom AI agents for B2B businesses. Automate lead generation, cold outreach, and follow-ups.",
    type: "website",
  },
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