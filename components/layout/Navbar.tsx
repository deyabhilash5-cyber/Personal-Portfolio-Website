"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#aspirations', label: 'Aspirations' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed inset-x-0 top-0 z-40 bg-ink text-white border-b border-ink-soft/40">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="text-white font-display text-lg">Abhilash Dey</div>
        <div className="hidden md:flex gap-6 items-center font-body text-sm tracking-wide uppercase">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-white/80 hover:text-white py-2">{l.label}</a>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-ink/95">
          <div className="flex flex-col px-6 pb-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 border-b border-ink-soft/20">{l.label}</a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
