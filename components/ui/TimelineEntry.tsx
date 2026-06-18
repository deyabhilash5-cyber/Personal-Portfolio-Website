"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Tag from './Tag'

type TimelineProps = {
  institution?: string
  company?: string
  degree?: string
  role?: string
  period: string
  location?: string
  about?: string
  roleDescription?: string
  focus?: string
  responsibilities?: string[]
  tags?: string[]
  awards?: { label: string; subtitle?: string; note?: string }[]
  image?: string
  index?: number
}

export default function TimelineEntry(props: TimelineProps) {
  const i = props.index ?? 0
  return (
    <motion.article
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: i * 0.12 }}
      className="relative mb-10 pl-8"
    >
      <div className="absolute left-0 top-4 -ml-2 w-4 h-4 rounded-full bg-amber" />
      <div className="ml-6 bg-white rounded-2xl shadow-card p-6 border border-amber-pale">
        <div className="flex items-center gap-4">
          {props.image ? (
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-amber-pale flex items-center justify-center">
              <Image src={props.image} alt={props.institution ?? props.company ?? 'logo'} width={64} height={64} className="object-contain" />
            </div>
          ) : (
            <div className="w-16 h-16 rounded-xl bg-amber-pale flex items-center justify-center text-amber font-display">AD</div>
          )}
          <div>
            <h3 className="font-display text-xl text-ink">{props.institution ?? props.company}</h3>
            <div className="font-mono text-sm text-muted">{props.location}</div>
          </div>
        </div>

        <div className="mt-4 flex flex-col md:flex-row md:items-center md:gap-4">
          <div>
            {props.degree && <div className="text-ink-soft font-medium">{props.degree}</div>}
            {props.role && <div className="text-amber font-medium">{props.role}</div>}
          </div>
          <div className="mt-3 md:mt-0 flex items-center gap-3">
            <div className="inline-block rounded-full bg-amber-pale text-amber text-sm px-3 py-1">{props.period}</div>
            {props.awards && props.awards.length > 0 && (
              <div className="inline-block text-sm px-3 py-1 bg-amber text-white rounded-full font-mono">{props.awards[0].label}</div>
            )}
          </div>
        </div>

        <p className="mt-4 text-sm text-body-text">{props.about ?? props.roleDescription}</p>

        {props.responsibilities && (
          <ul className="mt-3 space-y-2">
            {props.responsibilities.map((r, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="font-mono text-amber">→</span>
                <span className="text-sm text-body-text">{r}</span>
              </li>
            ))}
          </ul>
        )}

        {props.tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {props.tags.map((t, idx) => (
              <Tag key={idx} label={t} variant="amber" />
            ))}
          </div>
        )}

        {props.awards && (
          <AwardList awards={props.awards} />
        )}
      </div>
    </motion.article>
  )
}

function AwardList({ awards }: { awards: { label: string; subtitle?: string; note?: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <div className="mt-4">
      <div className="font-mono text-xs text-amber uppercase">Awards</div>
      <div className="mt-2 flex flex-wrap gap-2 items-start">
        {awards.map((a, idx) => (
          <div key={idx}>
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="inline-block text-sm px-3 py-1 bg-amber text-white rounded-full font-mono"
              aria-expanded={openIndex === idx}
            >
              {a.label}
            </button>
            {openIndex === idx && a.note && (
              <div className="mt-2 text-sm text-body-text bg-amber-pale rounded p-3 max-w-md">{a.note}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
