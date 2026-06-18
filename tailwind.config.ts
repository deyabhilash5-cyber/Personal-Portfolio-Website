import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas:       '#F7F5F0',
        ink:          '#1A1A2E',
        'ink-soft':   '#2E3A59',
        amber:        '#C97D2B',
        'amber-pale': '#F4DFB8',
        'body-text':  '#3D3D3D',
        muted:        '#8A8F9E',
      },
      fontFamily: {
        display: ['DM Serif Display', 'serif'],
        body:    ['DM Sans', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'card':      '0 2px 12px rgba(0,0,0,0.06)',
        'card-hover':'0 6px 24px rgba(0,0,0,0.10)',
      }
    }
  },
  plugins: [],
}
export default config
