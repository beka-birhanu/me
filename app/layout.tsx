import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firamono = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Beka B. Birhanu | Portfolio",
  description:
    "A showcase of my projects, skills, and experience in web development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${firamono.variable} antialiased`}>{children}</body>
    </html>
  );
}
