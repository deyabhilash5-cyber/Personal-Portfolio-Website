"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero({ profile }: any) {
  const [count1, setCount1] = useState(0)
  useEffect(() => {
    let start = 0
    const end = 3
    const duration = 1500
    const stepTime = Math.abs(Math.floor(duration / end))
    const timer = setInterval(() => {
      start += 1
      setCount1(start)
      if (start === end) clearInterval(timer)
    }, stepTime)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="grid md:grid-cols-12 gap-8 items-center">
      <div className="md:col-span-7">
        <div className="font-mono text-xs text-amber uppercase tracking-widest">PORTFOLIO — ABHILASH DEY</div>
        <h1 className="font-display text-5xl text-ink mt-4">{profile.name}</h1>
        <div className="font-display italic text-2xl text-ink-soft mt-2">{profile.tagline}</div>
        <p className="mt-4 max-w-md text-body-text">{profile.subTagline}</p>

        <div className="mt-6 flex gap-4">
          <a href="#experience" className="bg-amber text-white rounded-xl px-4 py-2 inline-block">View My Work</a>
          <a href="mailto:abhilash@example.com" className="border border-ink text-ink rounded-xl px-4 py-2 inline-block">Get In Touch</a>
        </div>

        <div className="mt-6 flex gap-3 font-mono text-sm">
          <div className="bg-amber-pale px-3 py-2 rounded-xl">
            <div className="text-amber font-semibold text-lg">{count1}</div>
            <div className="text-muted text-xs">Years</div>
          </div>
          <div className="bg-amber-pale px-3 py-2 rounded-xl">
            <div className="text-amber font-semibold text-lg">3</div>
            <div className="text-muted text-xs">States Covered</div>
          </div>
          <div className="bg-amber-pale px-3 py-2 rounded-xl">
            <div className="text-amber font-semibold text-lg">MBA</div>
            <div className="text-muted text-xs">XIMB, Bhubaneswar</div>
          </div>
        </div>

        <div className="mt-8 bg-canvas rounded-2xl p-6 border border-amber-pale shadow-sm">
          <div className="font-mono text-xs text-amber uppercase">ROOTS &amp; BACKGROUND</div>
          <h3 className="font-display text-xl mt-2">A Family Forged by Movement</h3>
          <p className="mt-2 text-sm text-body-text">{profile.family.summary}</p>
          <div className="mt-4 grid md:grid-cols-3 gap-3">
            {profile.family.members.map((m: any, idx: number) => (
              <div key={idx} className="bg-white rounded-lg p-3">
                <div className="font-mono text-amber text-xs">{m.relation}</div>
                <div className="text-sm text-muted mt-1">{m.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="md:col-span-5 flex justify-center">
        <motion.div initial={{ scale: 0.98 }} whileInView={{ scale: 1 }} className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-ink to-ink-soft flex items-center justify-center" viewport={{ once: true }}>
          <div className="text-6xl text-amber font-display">AD</div>
        </motion.div>
      </div>
    </div>
  )
}
