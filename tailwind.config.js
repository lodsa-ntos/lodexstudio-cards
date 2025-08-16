/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px", // Mobile small
      sm: "640px", // Mobile medium
      md: "768px", // Tablets
      lg: "1024px", // Laptops
      xl: "1280px", // Desktops 
      '2xl': "1536px", // Ultra-wide 4k
    },
    extend: {
      maxWidth: {
        'content': '1440px', // Custom max-width for content
      },
      height: {
        'screen-svh': '100svh',
      },
      keyframes: {
        move: {
          "50%": { transform: "translateY(-1rem)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.8)" },
          "50%": { transform: "scale(1.8)" },
          "100%": { transform: "scale(0.8)" },
        },
        walk: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        movingY: "move 3s linear infinite",
        rotating: "rotate 15s linear infinite",
        scalingUp: "scaleUp 3s linear infinite",
        walkingX: "walk 2s linear infinite",
      },
      fontFamily: {
        Satoshi: ["Satoshi", "sans-serif"],
        Jost: ["Jost", "sans-serif"],
        Lobster: ["Lobster", "sans-serif"],
        DancingScript: ['Dancing Script', 'cursive'],
      },
      colors: {
        'rosa-sujo': '#BCA3C6 ', // Backgrounds suaves, caixas de texto
        'rosa-escuro': '#C45CA0', // Acentos delicados
        'roxo-claro': '#D1AEE8', // Fundos suaves, caixas de texto
        'branco': '#FFFFFF', // Background principal
        'Preto-acinzentado': '#333333', // Tipografia de contraste (headers)
        'verde-petroleo': '#2F9B92', // Botões, destaques primários
        'verde-pastel': '#f6f6f6', // Hover de links e detalhes
      },
    },
  },
  plugins: [],
}