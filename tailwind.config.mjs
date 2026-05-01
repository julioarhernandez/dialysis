/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#0e4d7a',
        'brand-deep': '#072d4a',
        aqua: '#3fbac0',
        accent: '#1466a0',
        ink: '#0a1a2c',
        muted: '#4a5a68',
        hair: '#cdd9e2',
        tint: '#e6eff5',
      },
      fontFamily: {
        sans: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        display: ['"Newsreader"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
