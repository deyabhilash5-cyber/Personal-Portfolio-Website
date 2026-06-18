import React from 'react'

type Props = { eyebrow: string; title: string; align?: 'left' | 'center' }

export default function SectionHeader({ eyebrow, title, align = 'left' }: Props) {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left'
  return (
    <header className={`mb-8 flex flex-col ${alignClass}`}>
      <div className="font-mono text-xs text-amber uppercase tracking-widest">{eyebrow}</div>
      <h2 className="font-display text-4xl text-ink mt-2 relative inline-block">
        {title}
        <span className="block mt-2 h-1 w-12 bg-amber" />
      </h2>
    </header>
  )
}
