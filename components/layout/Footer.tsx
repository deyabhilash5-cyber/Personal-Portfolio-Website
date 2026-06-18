import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-ink text-white mt-12 border-t-4 border-amber">
      <div className="container mx-auto px-6 py-8 text-center">
        <div className="font-display text-lg">Abhilash Dey</div>
        <div className="text-muted mt-1">MBA Candidate, XIMB · Bhubaneswar, India</div>
        <div className="mt-4 flex justify-center gap-4">
          <a href="#" className="text-amber">LinkedIn</a>
          <a href="mailto:abhilash@example.com" className="text-white/90">Email</a>
        </div>
        <div className="mt-4 text-sm text-white/70">© 2025 Abhilash Dey. Built with intention.</div>
      </div>
    </footer>
  )
}
