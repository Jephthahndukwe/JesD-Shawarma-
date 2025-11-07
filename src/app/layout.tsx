import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Nunito_Sans,
  Gloria_Hallelujah,
} from "next/font/google";
import "./globals.css";

// Keep Geist fonts if you're still using them elsewhere
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Add your custom fonts
const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const hallelujah = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hallelujah",
});

export const metadata: Metadata = {
  title: "JES Shawarma",
  description: "Ginger your hunger with real shawarma vibes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${nunito.variable} 
          ${hallelujah.variable} 
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
