/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Deep, calming Slate-Blue (Communicates trust, stability, and reverence)
        primary: {
          50: '#f4f6f8',
          100: '#e4e9f0',
          200: '#c8d4e1',
          300: '#9db4ca',
          400: '#6d8eab',
          500: '#4d7092',
          600: '#3b5876',
          700: '#304760',
          800: '#283b4f',
          900: '#243343',
          950: '#18222d',
        },
        // Warm Gold/Sand (Communicates light, hospitality, and warmth)
        secondary: {
          50: '#fcfcfc',
          100: '#f7f5ef',
          200: '#ece5d4',
          300: '#dfd2b2',
          400: '#ceba8a',
          500: '#bca167',
          600: '#a3844f',
          700: '#83653f',
          800: '#6d5337',
          900: '#58442f',
          950: '#312519',
        },
        // Soft Sage Green (Communicates peace, growth, and community)
        accent: {
          50: '#f5f7f5',
          100: '#e6ebe5',
          200: '#cbd5c9',
          300: '#a8b8a5',
          400: '#82997d',
          500: '#647d5f',
          600: '#4e634a',
          700: '#40503d',
          800: '#354133',
          900: '#2c362b',
          950: '#171e16',
        },
      },
      fontFamily: {
        // Lora provides a traditional, elegant feel perfect for headings and scripture
        serif: ['"Lora"', '"Merriweather"', 'Georgia', 'serif'],
        // Inter provides excellent, modern readability for body copy and dense information
        sans: ['"Inter"', '"Open Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    // Highly recommended for styling markdown-generated content like sermons or blog posts
    require('@tailwindcss/typography'),
  ],
};