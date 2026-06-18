import './globals.css'
import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Sans, JetBrains_Mono } from 'next/font/google'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const display = DM_Serif_Display({ subsets: ['latin'], weight: '400', variable: '--font-display' })
const body = DM_Sans({ subsets: ['latin'], weight: ['400','700'], variable: '--font-body' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: "Abhilash Dey — Healthcare Product & Strategy",
  description: "Personal portfolio of Abhilash Dey — MBA candidate at XIMB, former Application Specialist at bioMerieux India, scientist transitioning into healthcare product management.",
  openGraph: {
    title: "Abhilash Dey",
    description: "Scientist. Strategist. Storyteller.",
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body text-body-text antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
