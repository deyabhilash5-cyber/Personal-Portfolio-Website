import React from 'react'

type Props = { label: string; variant?: 'amber' | 'ink' }

export default function Tag({ label, variant = 'amber' }: Props) {
  const base = 'rounded-full text-xs px-3 py-1 font-mono'
  const classes = variant === 'amber' ? `${base} bg-amber-pale text-amber` : `${base} bg-ink text-white`
  return <span className={classes}>{label}</span>
}
