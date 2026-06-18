"use client"
import React from 'react'
import SectionHeader from '../ui/SectionHeader'
import { Book, Dumbbell, Coffee, Film, Utensils } from 'lucide-react'
import { motion } from 'framer-motion'

const IconMap: any = { book: Book, football: Dumbbell, coffee: Coffee, food: Utensils, film: Film }

export default function AboutMe({ profile }: any) {
  return (
    <div>
      <SectionHeader eyebrow="ABOUT ME" title="The Person Behind the CV" />
      <p className="max-w-3xl text-lg text-body-text">{profile.about.intro}</p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {profile.about.hobbies.map((h: any, idx: number) => {
          const Icon = IconMap[h.icon] || Book
          return (
            <motion.article key={idx} whileHover={{ scale: 1.02 }} className="bg-white rounded-2xl p-4 border-l-4 border-amber-pale hover:border-amber shadow-card">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded bg-amber-pale text-amber"><Icon size={20} /></div>
                <h4 className="font-display text-xl text-ink">{h.name}</h4>
              </div>
              <p className="mt-3 text-sm text-body-text">{h.description}</p>
            </motion.article>
          )
        })}
      </div>
    </div>
  )
}
