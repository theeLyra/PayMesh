/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--pm-${name}) / <alpha-value>)`

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Every colour is a CSS variable so the light and dark themes swap without touching components.
        pm: {
          bg: token('bg'),
          deep: token('deep'),
          panel: token('panel'),
          line: token('line'),
          violet: token('accent'),
          indigo: token('accent-strong'),
          cyan: token('teal'),
          text: token('text'),
          muted: token('muted'),
          good: token('good'),
          warn: token('warn'),
          bad: token('bad'),
        },
      },
      fontFamily: {
        display: ['"DM Sans"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}
