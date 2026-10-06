import type { Metadata } from "next";
import { Space_Grotesk, Work_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HRM Group | Building a Better Tomorrow",
  description:
    "HRM Group — infrastructure, construction, real estate, trading, agriculture, logistics and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${workSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}