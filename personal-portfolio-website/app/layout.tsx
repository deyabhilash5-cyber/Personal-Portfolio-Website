import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhilash Dey — Healthcare Product & Strategy",
  description:
    "Personal portfolio of Abhilash Dey — MBA candidate at XIMB, former Application Specialist at bioMerieux India, scientist transitioning into healthcare product management.",
  openGraph: {
    title: "Abhilash Dey",
    description: "Scientist. Strategist. Storyteller.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-canvas">{children}</body>
    </html>
  );
}
