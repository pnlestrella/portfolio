import type { Metadata } from "next";
import { Anton, Space_Grotesk, Caveat } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Patrick Estrella · Full-Stack Developer",
  description:
    "4th-year BSIT student and full-stack developer building web and mobile applications with Node.js, React, and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${grotesk.variable} ${caveat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
