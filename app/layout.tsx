import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CommandPalette from "@/components/CommandPalette";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mehul Kumawat — Software Engineer AI/ML",
  description:
    "Staff Software Engineer specializing in AI/ML, Computer Vision, Sensor Fusion, and GenAI. Based in Wolfsburg, Germany.",
  keywords: [
    "Mehul Kumawat",
    "AI ML Engineer",
    "Computer Vision",
    "Sensor Fusion",
    "GenAI",
    "Software Engineer",
    "Wolfsburg",
    "Germany",
  ],
  authors: [{ name: "Mehul Kumawat" }],
  openGraph: {
    title: "Mehul Kumawat — Software Engineer AI/ML",
    description:
      "Staff Software Engineer specializing in AI/ML, Computer Vision, Sensor Fusion, and GenAI.",
    type: "website",
    images: [
      {
        url: "https://mehul4mak.github.io/assets/img/mehul_circle.png",
        width: 400,
        height: 400,
        alt: "Mehul Kumawat",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-bg text-slate-100 antialiased noise">
        <ScrollProgress />
        <Navbar />
        <CommandPalette />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
