/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        steel: { 50: '#F6F8FA', 500: '#1E4A73', 700: '#14304F', 900: '#0B1D33' },
        signal: { 50: '#FFF3EB', 500: '#F05A0E', 600: '#C74A0C' },
        alarm: { 600: '#DC2626' },
        verified: { 600: '#15803D' },
        ink: { 400: '#94A3B8', 600: '#475569', 900: '#0F172A' },
        line: { 200: '#E2E8F0' },
        paper: { 50: '#F6F8FA' },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        cta: '0 4px 14px rgba(240,90,14,0.35)',
        'cta-hover': '0 6px 20px rgba(240,90,14,0.45)',
      },
    },
  },
  plugins: [],
}
