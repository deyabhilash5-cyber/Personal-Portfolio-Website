"use client"
import React from 'react'
import SectionHeader from '../ui/SectionHeader'
import { motion } from 'framer-motion'

export default function Aspirations({ aspirations }: any) {
  return (
    <div>
      <SectionHeader eyebrow="WHERE I'M HEADED" title="The Next Chapter" />

      <blockquote className="font-display italic text-xl text-ink max-w-3xl">{aspirations.summary}</blockquote>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {aspirations.roles.map((r: any, idx: number) => (
          <motion.article key={idx} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} className="bg-ink text-white rounded-2xl p-6">
            <h3 className="font-display text-2xl">{r.title}</h3>
            <div className="mt-4">
              <div className="font-mono text-xs text-amber uppercase">WHY THIS ROLE</div>
              <p className="text-white/90 mt-2">{r.why}</p>
            </div>
            <div className="mt-4">
              <div className="font-mono text-xs text-amber uppercase">WHY I AM A FIT</div>
              <p className="text-white/90 mt-2">{r.fit}</p>
            </div>
            <div className="h-1 bg-amber rounded mt-6" />
          </motion.article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="font-display italic text-2xl text-ink">— {aspirations.closingStatement} —</p>
        <a href="#" className="mt-4 inline-block bg-amber text-white rounded-xl px-5 py-2">Connect on LinkedIn</a>
      </div>
    </div>
  )
}
