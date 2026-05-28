/* @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFE500',
        accent: '#FF6B9D',
        secondary: '#00C2FF',
        accent2: '#A8FF00',
        bg: '#FAFAFA',
        surface: '#FFFFFF',
        border: '#000000',
        text: '#111111',
        muted: '#666666',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'neo': '4px 4px 0px #000',
        'neo-hover': '6px 6px 0px #000',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
};