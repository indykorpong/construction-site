import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Noto: ['Noto Sans Thai', 'sans-serif'],
      },
      colors: {
        background: 'rgba(50,173,230,0.2)',
        foreground: 'var(--foreground)',
        primary: '#32ADE6',
        bluegray: '#CFD8DC',
        darkblue: '#116FAC',
      },
    },
  },
  plugins: [],
} satisfies Config
