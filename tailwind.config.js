/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: { dash: '1360px' },
      colors: {
        pm: {
          bg: '#04050d',
          deep: '#080a1a',
          panel: '#0c0f24',
          line: 'rgba(139, 112, 255, 0.18)',
          violet: '#8b5cf6',
          indigo: '#6366f1',
          cyan: '#22d3ee',
          text: '#e9ebfa',
          muted: '#8c90b4',
          good: '#34d399',
          warn: '#fbbf24',
          bad: '#fb7185',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(139, 92, 246, 0.55)',
        card: '0 10px 40px -12px rgba(0, 0, 0, 0.7)',
      },
      keyframes: {
        flow: { to: { strokeDashoffset: '-48' } },
        pulseDot: { '0%,100%': { opacity: '0.35', transform: 'scale(1)' }, '50%': { opacity: '1', transform: 'scale(1.5)' } },
        rise: { from: { opacity: '0', transform: 'translateY(8px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        shimmer: { '100%': { transform: 'translateX(100%)' } },
      },
      animation: {
        flow: 'flow 2.4s linear infinite',
        pulseDot: 'pulseDot 2.4s ease-in-out infinite',
        rise: 'rise 0.35s ease-out both',
      },
    },
  },
  plugins: [],
}
