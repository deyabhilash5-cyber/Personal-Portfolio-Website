"use client"
import React from 'react'
import SectionHeader from '../ui/SectionHeader'
import TimelineEntry from '../ui/TimelineEntry'

export default function Experience({ experience }: any) {
  return (
    <div className="relative">
      <SectionHeader eyebrow="WORK EXPERIENCE" title="The Field Years" />
      <div className="relative pl-6">
        <div className="absolute left-0 top-0 w-0.5 bg-amber h-full origin-top" />
        <div className="mt-6">
          {experience.map((e: any, idx: number) => (
            <TimelineEntry
              key={idx}
              index={idx}
              company={e.company}
              role={e.role}
              period={e.period}
              location={e.location}
              about={e.about}
              roleDescription={e.roleDescription}
              responsibilities={e.responsibilities}
              tags={e.tags}
              awards={e.awards}
              image={e.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
