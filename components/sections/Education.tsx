"use client"
import React from 'react'
import SectionHeader from '../ui/SectionHeader'
import TimelineEntry from '../ui/TimelineEntry'
import { motion } from 'framer-motion'

export default function Education({ education }: any) {
  return (
    <div className="relative">
      <SectionHeader eyebrow="EDUCATION" title="The Foundations" />

      <div className="relative pl-6">
        <motion.div className="absolute left-0 top-0 w-0.5 bg-amber h-full origin-top" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} transition={{ duration: 1.2, ease: 'easeOut' }} viewport={{ once: true }} />

        <div className="mt-6">
          {education.map((e: any, idx: number) => (
            <TimelineEntry key={idx} index={idx} institution={e.institution} degree={e.degree} period={e.period} location={e.location} about={e.about} focus={e.focus} image={e.image} />
          ))}
        </div>
      </div>
    </div>
  )
}
